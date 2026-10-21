import fs from 'node:fs/promises';
import {createReadStream,createWriteStream} from 'node:fs';
import {createHash} from 'node:crypto';
import {execFileSync} from 'node:child_process';
import {resolve,dirname,relative,sep} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {Readable,Transform} from 'node:stream';
import {pipeline} from 'node:stream/promises';

const endpoint='https://github.com/esp6662266/electrical-drawings.git/info/lfs/objects/batch';
const prefixes=['documents/source-store/','documents/source-figures/','documents/source-previews/','documents/salt-feeder-01/source/','documents/totalizer-02/source/'];
export async function findPointers(root,paths,denied=new Set()){
  const jobs=[];
  for(const path of paths){
    const absolute=resolve(root,path),canonical=relative(root,absolute).split(sep).join('/');
    if(canonical.startsWith('../')||canonical!==path)throw new Error('Invalid tracked path: '+path);
    if(denied.has(path))throw new Error('Private asset must not be tracked: '+path);
    if(!prefixes.some(prefix=>path.startsWith(prefix)))continue;
    const stat=await fs.lstat(absolute);if(!stat.isFile())throw new Error('Asset must be a regular file: '+path);if(stat.size>1024)continue;
    const text=await fs.readFile(absolute,'utf8');
    if(!text.startsWith('version https://git-lfs.github.com/spec/v1'))continue;
    const match=/^version https:\/\/git-lfs.github.com\/spec\/v1\r?\noid sha256:([a-f0-9]{64})\r?\nsize (\d+)\r?\n?$/.exec(text);
    if(!match)throw new Error('Malformed LFS pointer: '+path);
    const size=Number(match[2]);if(!Number.isSafeInteger(size)||size<0||size>2*1024**3)throw new Error('Invalid LFS size: '+path);
    jobs.push({path,absolute,oid:match[1],size,pointer:text});
  }
  return jobs.sort((a,b)=>b.size-a.size);
}
export async function downloadObject(object,destination){
  const partial=destination+'.lfs-partial';
  try{
    const response=await fetch(object.url,{headers:object.headers||{},signal:AbortSignal.timeout(300000)});
    if(!response.ok||!response.body)throw new Error('LFS download HTTP '+response.status);
    let size=0;const hash=createHash('sha256');
    const check=new Transform({transform(chunk,encoding,callback){size+=chunk.length;if(size>object.size)return callback(new Error('LFS size exceeded'));hash.update(chunk);callback(null,chunk);}});
    await fs.mkdir(dirname(destination),{recursive:true});
    await pipeline(Readable.fromWeb(response.body),check,createWriteStream(partial,{flags:'wx'}));
    if(size!==object.size||hash.digest('hex')!==object.oid)throw new Error('LFS integrity mismatch');
    await fs.rename(partial,destination);
  }catch(error){await fs.rm(partial,{force:true});throw error;}
}
export async function getActions(objects){
  const response=await fetch(endpoint,{method:'POST',headers:{Accept:'application/vnd.git-lfs+json','Content-Type':'application/vnd.git-lfs+json'},body:JSON.stringify({operation:'download',transfers:['basic'],objects:objects.map(({oid,size})=>({oid,size}))}),signal:AbortSignal.timeout(60000)});
  if(!response.ok)throw new Error('GitHub LFS batch HTTP '+response.status);
  const result=await response.json(),actions=new Map();
  for(const object of result.objects||[]){
    if(object.error)throw new Error('GitHub LFS object unavailable: '+object.oid+' '+object.error.code);
    const action=object.actions?.download,url=new URL(action?.href||'about:blank');
    if(url.protocol!=='https:'||!(url.hostname==='github.com'||url.hostname.endsWith('.githubusercontent.com')))throw new Error('Unexpected LFS storage host');
    actions.set(object.oid,{url:url.href,headers:action.header||{}});
  }
  for(const object of objects)if(!actions.has(object.oid))throw new Error('Missing LFS download action: '+object.oid);
  return actions;
}
export async function hydrate(root){
  const policy=JSON.parse(await fs.readFile(resolve(root,'publication-policy.json'),'utf8'));
  const paths=execFileSync('git',['ls-files','-z'],{cwd:root,encoding:'utf8',maxBuffer:8*1024**2}).split('\0').filter(Boolean);
  const pointers=await findPointers(root,paths,new Set(policy.denied_paths));
  if(!pointers.length){console.log('LFS assets already present; no downloads required.');return;}
  const grouped=new Map();for(const job of pointers){if(!grouped.has(job.oid))grouped.set(job.oid,{...job,targets:[]});grouped.get(job.oid).targets.push(job);}
  const jobs=[...grouped.values()],total=jobs.reduce((n,j)=>n+j.size,0);
  console.log('Hydrating '+jobs.length+' verified LFS objects ('+(total/1024**3).toFixed(2)+' GiB), 24 concurrent transfers.');
  // Resolve batches independently of downloads, avoiding a slow final file blocking a batch.
  const chunks=[];for(let i=0;i<jobs.length;i+=100)chunks.push(jobs.slice(i,i+100));
  const actions=new Map();let chunkIndex=0;
  await Promise.all(Array.from({length:4},async()=>{while(chunkIndex<chunks.length){const chunk=chunks[chunkIndex++],result=await getActions(chunk);for(const entry of result)actions.set(...entry);}}));
  const cacheRoot=resolve(root,'.netlify-lfs-cache');await fs.mkdir(cacheRoot,{recursive:true});
  let next=0,done=0,bytes=0;
  await Promise.all(Array.from({length:24},async()=>{while(next<jobs.length){
    const job=jobs[next++],cache=resolve(cacheRoot,job.oid);
    if(dirname(cache)!==cacheRoot)throw new Error('Invalid cache path');
    let cached=false;
    try{const stat=await fs.stat(cache);if(stat.size===job.size){const hash=createHash('sha256');for await(const chunk of createReadStream(cache))hash.update(chunk);cached=hash.digest('hex')===job.oid;}}catch(error){if(error.code!=='ENOENT')throw error;}
    if(!cached){let last;for(let attempt=0;attempt<3;attempt++){try{await downloadObject({...job,...actions.get(job.oid)},cache);last=null;break;}catch(error){last=error;console.log('Retry '+(attempt+1)+' for '+job.path+': '+error.message);if(attempt<2)await new Promise(r=>setTimeout(r,1000*2**attempt));}}if(last)throw last;}
    for(const target of job.targets){if(await fs.readFile(target.absolute,'utf8')!==target.pointer)throw new Error('Pointer changed while downloading: '+target.path);const staged=target.absolute+'.lfs-partial';await fs.copyFile(cache,staged);await fs.rename(staged,target.absolute);}
    done++;bytes+=job.size;if(done%100===0||done===jobs.length)console.log('LFS verified '+done+'/'+jobs.length+' objects; '+(bytes/1024**2).toFixed(1)+' MiB.');
  }}));
  console.log('All LFS assets hydrated and SHA-256 verified.');
}
if(process.argv[1]&&pathToFileURL(resolve(process.argv[1])).href===import.meta.url)await hydrate(resolve(dirname(fileURLToPath(import.meta.url)),'..'));
