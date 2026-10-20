import test from 'node:test';import assert from 'node:assert/strict';import {readFile,stat} from 'node:fs/promises';import {createHash} from 'node:crypto';import vm from 'node:vm';
const root=new URL('../',import.meta.url),ctx={window:{}};vm.runInNewContext(await readFile(new URL('data/project.js',root),'utf8'),ctx);const project=ctx.window.ED_PROJECT;
const catalog=JSON.parse(await readFile(new URL('documents/batch-catalog.json',root),'utf8'));
test('equipment 3 through 15 have source-linked seven-section manuals and preserve original 1 and 2 definitions',async()=>{
assert.equal(project.equipment.length,15);assert.equal(new Set(project.equipment.map(e=>e.id)).size,15);
for(const [id,folder]of [['SALT-01','salt-feeder-01'],['TOTALIZER-02','totalizer-02']])assert.deepEqual(JSON.parse(JSON.stringify(project.equipment.find(e=>e.id===id))),JSON.parse(await readFile(new URL('documents/'+folder+'/equipment.json',root),'utf8')));
assert.equal(catalog.equipment.length,13);
for(const m of catalog.equipment){const e=project.equipment.find(e=>e.id===m.equipment_id);assert.ok(e,e?.id);for(const k of ['overview','io','control','circuits','alarms','repair','completion']){assert.ok(e.manual[k].length>100,e.id+' '+k);assert.ok(e.manual_sources[k].length>0);}for(const url of [e.manual_url,e.library_url.split('?')[0],e.source_manifest])assert.ok((await stat(new URL(url.slice(1),root))).size>0);assert.equal(e.field_verified,false);assert.equal(e.networks.length,0);assert.equal(e.calls.length,0);assert.ok(e.checks.length>=5);assert.ok(e.tests.some(t=>t.status==='미수행'));}
});
test('all 861 source paths reconcile to 759 originals, 102 archive members and 730 preserved hashes',async()=>{
assert.equal(catalog.original_file_count,759);assert.equal(catalog.archive_member_count,102);assert.equal(catalog.reference_path_count,861);assert.equal(catalog.unique_hash_count,730);let refs=0;const checked=new Set();
for(const m of catalog.equipment){assert.equal(m.source_count,m.sources.filter(s=>!s.container_sha256).length);assert.equal(m.archive_member_count,m.sources.filter(s=>s.container_sha256).length);for(const s of m.sources){refs++;assert.ok(!['.db','.log'].includes(s.extension));if(checked.has(s.file))continue;const b=await readFile(new URL(s.file.slice(1),root));if(s.publication_withheld){assert.equal(createHash('sha256').update(b).digest('hex'),s.public_sha256);assert.match(s.original_file,/^\/documents\/source-store\//);try{const original=await readFile(new URL(s.original_file.slice(1),root));assert.equal(original.length,s.bytes);assert.equal(createHash('sha256').update(original).digest('hex'),s.sha256);}catch(error){if(error.code!=='ENOENT')throw error;}}else{assert.equal(b.length,s.bytes,s.relative_path);assert.equal(createHash('sha256').update(b).digest('hex'),s.sha256,s.relative_path);}checked.add(s.file);}}
assert.equal(refs,861);
});
test('native files and material model/capacity differences remain explicit rather than recovered ladder',()=>{
const e=n=>project.equipment.find(e=>e.id===catalog.equipment.find(m=>m.number===n).equipment_id);
assert.equal(e(4).native_plc_available,true);assert.equal(e(5).native_plc_available,true);assert.equal(e(13).native_plc_available,false);
assert.ok(e(4).checks.some(c=>c.evidence.includes('25TON')));assert.ok(e(5).checks.some(c=>c.evidence.includes('40TON')));assert.ok(e(6).checks.some(c=>c.evidence.includes('30TON')));assert.ok(e(9).checks.some(c=>c.evidence.includes('4톤')));assert.ok(e(15).checks.some(c=>(c.title+' '+c.evidence).includes('A117')));
assert.ok(e(10).io.some(r=>r.address==='X010'));assert.ok(e(13).io.some(r=>r.address==='I/15'));assert.ok(e(13).io.some(r=>r.address==='O/11'));
});
test('all curated references and page previews resolve to actual equipment sources',async()=>{
for(const m of catalog.equipment){const e=project.equipment.find(e=>e.id===m.equipment_id),ids=new Set(m.sources.map(s=>s.id));for(const d of e.drawings){assert.ok(ids.has(d.source_id));const s=m.sources.find(s=>s.id===d.source_id);assert.ok(d.page>=1&&d.page<=s.page_count);assert.ok((await stat(new URL(d.preview.slice(1),root))).size>0);assert.equal(d.url,s.file+'#page='+d.page);}for(const r of [...e.io,...e.hmi,...e.repair]){assert.ok(r.source);assert.ok(r.url);const file=r.url.split(/[?#]/)[0];assert.ok((await stat(new URL(file.slice(1),root))).size>0);}}
});
