import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import vm from 'node:vm';
const root=new URL('../',import.meta.url),ctx={window:{}};
vm.runInNewContext(await readFile(new URL('data/project.js',root),'utf8'),ctx);
const p=ctx.window.ED_PROJECT,e=p.equipment.find(e=>e.id==='TOTALIZER-02');
const manifest=JSON.parse(await readFile(new URL('documents/totalizer-02/source-manifest.json',root),'utf8'));
test('three supplied originals and all twenty PDF page references retain verified hashes',async()=>{
assert.equal(manifest.sources.length,3);assert.equal(e.drawings.length,20);
for(const s of manifest.sources){const b=await readFile(new URL(s.file.slice(1),root));assert.equal(b.length,s.bytes);assert.equal(createHash('sha256').update(b).digest('hex'),s.sha256);}
for(const [i,d]of e.drawings.entries()){assert.equal(d.page,i+1);assert.equal(d.source_id,manifest.sources[0].id);assert.equal(d.url,manifest.sources[0].file+'#page='+(i+1));assert.ok((await stat(new URL(d.preview.slice(1),root))).size>1000);}
});
test('P and X source systems and contradictory terminal mappings are not collapsed into a program',()=>{
assert.equal(e.native_plc_available,false);assert.equal(e.field_verified,false);assert.equal(e.networks.length,0);assert.equal(e.calls.length,0);assert.ok(e.tests.some(t=>t.status==='미수행'));
assert.ok(e.io.find(r=>r.system==='PDF 전기도면'&&r.address==='P04B'&&r.name.includes('원위치')));
assert.ok(e.io.find(r=>r.system.includes('단자표')&&r.address==='P048'&&r.name.includes('원위치')));
assert.ok(e.io.find(r=>r.system.includes('설명서')&&r.address==='X058'&&r.name.includes('잡음')));
assert.ok(e.checks.some(c=>c.title.includes('SOL01/02')));assert.ok(e.checks.some(c=>c.title.includes('표시등')));assert.ok(e.manual.overview.includes('두인'));assert.ok(e.io.every(r=>r.source&&r.url));
});
test('both HWP readers keep extraction boundaries, source downloads and twelve linked figures',async()=>{
const user=await readFile(new URL('documents/totalizer-02/user-manual-reader.html',root),'utf8'),commission=await readFile(new URL('documents/totalizer-02/commissioning-reader.html',root),'utf8');
assert.equal((user.match(/<figure id=/g)||[]).length,12);assert.ok(user.includes('원본 페이지·표 배치를 재현한 문서가 아니며'));assert.ok(commission.includes('id="reference-other-customer"'));assert.ok(commission.includes('두인 2015'));assert.ok(user.includes('source/totalizer-user-manual.hwp'));assert.ok(commission.includes('source/casting-totalizer-commissioning.hwp'));
for(const h of e.hmi){assert.ok(user.includes('id="'+h.url.split('#')[1]+'"'));}
});
test('SALT-01 shared equipment definition remains identical to its previous equipment export',async()=>{
const saved=JSON.parse(await readFile(new URL('documents/salt-feeder-01/equipment.json',root),'utf8'));
assert.deepEqual(JSON.parse(JSON.stringify(p.equipment.find(e=>e.id==='SALT-01'))),saved);
});
