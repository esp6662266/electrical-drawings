import {cp,mkdir,readFile,readdir,stat,writeFile,rm} from 'node:fs/promises';
import {resolve,dirname,relative,sep} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {buildSearchIndex} from './build-io-search-index.mjs';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),dist=resolve(root,'dist');
const policy=JSON.parse(await readFile(resolve(root,'publication-policy.json'),'utf8'));
const denied=new Set(policy.denied_paths);
// Rebuild only the generated directory: stale private assets must not survive.
if(dirname(dist)!==root||relative(root,dist)!=='dist')throw new Error('Unsafe build output path');
await rm(dist,{recursive:true,force:true});
await mkdir(dist,{recursive:true});
// Only reviewed workspace files and their referenced documents are copied.
for(const name of ['index.html','favicon.svg','all-in-one','data','templates','documents'])await cp(resolve(root,name),resolve(dist,name),{recursive:true,filter:source=>!denied.has(relative(root,source).split(sep).join('/'))});
await writeFile(resolve(dist,'data/io-search-index.json'),JSON.stringify(await buildSearchIndex(root))+'\n');
const headers='/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n  Content-Security-Policy: default-src \'self\'; script-src \'self\'; style-src \'self\'; img-src \'self\' data: blob: https:; connect-src \'self\'; object-src \'none\'; frame-ancestors \'self\'; base-uri \'self\'; form-action \'self\'\n';
await writeFile(resolve(dist,'_headers'),headers);
async function walk(dir,prefix=''){const files=[];for(const name of (await readdir(dir)).sort()){const abs=resolve(dir,name),path=prefix+name;if((await stat(abs)).isDirectory())files.push(...await walk(abs,path+'/'));else if(path!=='build-manifest.json'){let bytes=await readFile(abs);const original=/^documents\/(?:source-(?:store|figures|previews)\/|(?:salt-feeder-01|totalizer-02)\/source\/)/.test(path);if(!original&&/\.(?:html|css|js|json|md|svg)$/.test(path)){const normalized=Buffer.from(bytes.toString('utf8').replace(/\r\n/g,'\n'));if(!normalized.equals(bytes)){await writeFile(abs,normalized);bytes=normalized;}}files.push({path,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});}}return files;}
const version=JSON.parse(await readFile(resolve(root,'VERSION.json'),'utf8')).version;
const files=await walk(dist);
if(files.some(f=>denied.has(f.path)))throw new Error('Private asset in build');
const manifest={application:'Electrical Drawings',version,commit:process.env.COMMIT_REF||null,source:'GME-based independent equipment documentation workspace',withheld_originals:policy.withheld_sources.length,files};
await writeFile(resolve(dist,'build-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('전기도면: '+manifest.files.length+'개 정적 파일 빌드 완료(배포 미수행)');
