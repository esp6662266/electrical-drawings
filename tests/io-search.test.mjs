import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,stat} from 'node:fs/promises';
import vm from 'node:vm';
import {buildSearchIndex} from '../scripts/build-io-search-index.mjs';
import {fileURLToPath} from 'node:url';

const ctx={window:{}};
vm.runInNewContext(await readFile(new URL('../all-in-one/assets/io-search-model.js',import.meta.url),'utf8'),ctx);
const M=ctx.window.EDIOSearchModel;
const rows=[
  {equipment:'A',kind:'io',title:'14KA10',text:'비상 구동 회로',source:'도면 14',url:'/a.pdf#page=14'},
  {equipment:'A',kind:'source',title:'배선',text:'8.9 → 14KA6\n8.10 → 14KA8\n13.6\n14KA10',url:'/a.pdf#page=8'},
  {equipment:'B',kind:'source',title:'다른 번호',text:'18.9 8.90 8.100 113.6 114KA10 14KA100'},
  {equipment:'B',kind:'io',title:'%I0.0',text:'센서 입력'}
];
test('identifiers ignore case, fullwidth and spacing without changing device numbers',()=>{
  assert.equal(M.search(rows,'１４ｋａ１０').length,2);
  assert.equal(M.search(rows,'14 ka10')[0].title,'14KA10');
  assert.equal(M.search(rows,'15KA10').length,0);
});
test('wire identifiers keep decimal suffix and do not match longer identifiers',()=>{
  for(const q of ['8.9','8.10','13.6','8 . 10']){
    const result=M.search(rows,q);assert.equal(result.length,1,q);assert.equal(result[0].equipment,'A');
  }
  assert.equal(M.search(rows,'8.1').length,0);
});
test('multiple numbers use OR, equipment/type filters remain independent and results rank functions first',()=>{
  assert.equal(M.search(rows,'8.9 8.10 13.6').length,1);
  assert.equal(M.search(rows,'8.9, 13.6').length,1);
  assert.equal(M.search(rows,'14KA10',{equipment:'B'}).length,0);
  assert.equal(M.search(rows,'14KA10',{kind:'source'}).length,1);
  assert.equal(M.search(rows,'14KA10')[0].kind,'io');
  assert.equal(M.search(rows,'I 0.0')[0].equipment,'B');
});
test('empty input, punctuation and HTML are safe literal searches',()=>{
  for(const q of ['',' ','[.*','<img onerror=alert(1)>'])assert.equal(M.search(rows,q).length,0);
  assert.equal(M.escape('<script>'), '&lt;script&gt;');
  assert.ok(M.snippet(rows[1].text,'13.6').includes('13.6'));
  assert.equal(M.highlight('straße ﬁeld 8.\n10 보호 기능','8.10'),'straße field <mark>8.\n10</mark> 보호 기능');
});
test('runtime structured index preserves local rows and identifies source-backed functions',()=>{
  const project={equipment:[{id:'LOCAL',name:'로컬 설비',io:[{address:'X010',name:'전진',description:'리프트 전진 요청',source:'도면 2',url:'/local.pdf#page=2'}],hmi:[],signals:[],alarms:[]}]};
  const original=JSON.stringify(project),rs=M.fromProject(project);
  assert.equal(M.search(rs,'x010')[0].title,'X010 · 전진');
  assert.equal(rs[0].equipment,'LOCAL');assert.equal(rs[0].url,'/local.pdf#page=2');
  assert.equal(JSON.stringify(project),original);
});
test('published source index keeps evidence links, photo uncertainty and private-source exclusions',async()=>{
  const index=await buildSearchIndex(fileURLToPath(new URL('../',import.meta.url)));
  assert.equal(index.coverage.length,15);
  assert.ok(index.records.length>10000);
  assert.equal(M.search(index.records,'15KA10').length,0);
  assert.ok(M.search(index.records,'14KA10').some(r=>r.kind==='photo'&&r.text.includes('EMERGENCY DRIVE CIRCUIT08')));
  for(const q of ['8.9','8.10','13.6'])assert.ok(M.search(index.records,q).some(r=>r.kind==='photo'&&r.evidence.includes('미확정')));
  const policy=JSON.parse(await readFile(new URL('../publication-policy.json',import.meta.url),'utf8'));
  const paths=new Set();
  for(const r of index.records){
    assert.ok(!policy.withheld_sources.includes(r.source_id));
    assert.ok(!policy.denied_paths.includes(r.url.split('#')[0].slice(1)));
    if(r.kind==='source')assert.ok(r.source_id&&r.sha256);
    for(const link of [r.url,r.reader].filter(Boolean)){
      const path=link.split(/[?#]/)[0];if(paths.has(path))continue;paths.add(path);
      await stat(new URL('..'+path,import.meta.url));
    }
  }
});
