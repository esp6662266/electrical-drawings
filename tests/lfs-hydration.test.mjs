import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {resolve,sep} from 'node:path';
import {createServer} from 'node:http';
import {createHash} from 'node:crypto';
import {findPointers,downloadObject} from '../scripts/hydrate-lfs.mjs';
async function temporary(t){const root=await fs.mkdtemp(resolve(tmpdir(),'electrical-lfs-'));t.after(async()=>{assert.ok(root.startsWith(resolve(tmpdir())+sep+'electrical-lfs-'));await fs.rm(root,{recursive:true,force:true});});return root;}
test('hydration selects only tracked public asset pointers and rejects private or escaping paths',async t=>{
  const root=await temporary(t),path='documents/source-store/source.pdf',oid='a'.repeat(64),pointer=`version https://git-lfs.github.com/spec/v1\noid sha256:${oid}\nsize 123\n`;
  await fs.mkdir(resolve(root,'documents/source-store'),{recursive:true});await fs.writeFile(resolve(root,path),pointer);
  const jobs=await findPointers(root,[path]);assert.equal(jobs.length,1);assert.equal(jobs[0].oid,oid);assert.equal(jobs[0].size,123);
  await assert.rejects(findPointers(root,[path],new Set([path])),/Private asset/);
  await assert.rejects(findPointers(root,['../outside.pdf']),/Invalid tracked path/);
  await fs.writeFile(resolve(root,path),'actual original binary');assert.equal((await findPointers(root,[path])).length,0);
});
test('a wrong download hash cannot replace an existing file and verified bytes can',async t=>{
  const root=await temporary(t),destination=resolve(root,'asset.bin'),body=Buffer.from('verified source bytes'),oid=createHash('sha256').update(body).digest('hex');
  await fs.writeFile(destination,'keep the original');
  const server=createServer((req,res)=>res.end(body));await new Promise(r=>server.listen(0,'127.0.0.1',r));t.after(()=>new Promise(r=>server.close(r)));
  const url='http://127.0.0.1:'+server.address().port;
  await assert.rejects(downloadObject({url,size:body.length,oid:'0'.repeat(64)},destination),/integrity mismatch/);
  assert.equal(await fs.readFile(destination,'utf8'),'keep the original');
  await assert.rejects(fs.stat(destination+'.lfs-partial'),{code:'ENOENT'});
  await downloadObject({url,size:body.length,oid},destination);assert.deepEqual(await fs.readFile(destination),body);
});
