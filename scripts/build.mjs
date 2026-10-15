import {cp,mkdir,readFile,readdir,stat,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),dist=resolve(root,'dist');
await mkdir(dist,{recursive:true});
// Only the reviewed blank workspace is published. The upstream snapshot is excluded.
for(const name of ['index.html','favicon.svg','all-in-one','data','templates'])await cp(resolve(root,name),resolve(dist,name),{recursive:true});
const headers='/*\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n  X-Frame-Options: SAMEORIGIN\n  Content-Security-Policy: default-src \'self\'; script-src \'self\'; style-src \'self\'; img-src \'self\' data: blob: https:; connect-src \'self\'; object-src \'none\'; frame-ancestors \'self\'; base-uri \'self\'; form-action \'self\'\n';
await writeFile(resolve(dist,'_headers'),headers);
async function walk(dir,prefix=''){const files=[];for(const name of await readdir(dir)){const abs=resolve(dir,name),path=prefix+name;if((await stat(abs)).isDirectory())files.push(...await walk(abs,path+'/'));else if(path!=='build-manifest.json'){const bytes=await readFile(abs);files.push({path,bytes:bytes.length,sha256:createHash('sha256').update(bytes).digest('hex')});}}return files;}
const manifest={application:'Electrical Drawings',version:'1.0.0',source:'GME UI shell adapted as an empty independent workspace',files:await walk(dist)};
await writeFile(resolve(dist,'build-manifest.json'),JSON.stringify(manifest,null,2)+'\n');
console.log('전기도면: '+manifest.files.length+'개 공개 파일 준비 완료');
