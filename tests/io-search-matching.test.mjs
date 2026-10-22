import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import vm from 'node:vm';

async function model(){
  const ctx={window:{}};
  vm.runInNewContext(await readFile(new URL('../all-in-one/assets/io-search-model.js',import.meta.url),'utf8'),ctx);
  return ctx.window.EDIOSearchModel;
}
const M=await model();
const row=(id,text,extra={})=>({id,equipment:'A',kind:'source',title:'원본 본문',text,source:'자료.pdf',...extra});

test('spaced relay and PLC notation stays one identifier in query and source',()=>{
  const rows=[row('relay','14KA10'),row('spaced','14 KA 10'),row('plc','% I 0 . 0'),row('longer','114KA10 14KA100 I0.00')];
  for(const query of ['14 KA 10','14KA 10','１４ ＫＡ １０']){
    assert.deepEqual(Array.from(M.terms(query)),['14KA10']);
    assert.deepEqual(Array.from(M.search(rows,query),r=>r.id),['relay','spaced']);
  }
  for(const query of ['I 0.0','% I 0.0','%I 0 . 0']){
    assert.deepEqual(Array.from(M.search(rows,query),r=>r.id),['plc']);
    assert.equal(M.highlight('% I 0 . 0',query),'<mark>% I 0 . 0</mark>');
  }
  assert.equal(M.search(rows,'15KA10').length,0);
});

test('identifier requests ignore ordinary request words while preserving functional qualifiers',()=>{
  const rows=[row('a','14KA10 비상'),row('b','8.9'),row('c','8.10'),row('d','13.6'),row('e','비상 기능')];
  assert.deepEqual(Array.from(M.search(rows,'14KA10은 무슨 기능인지 알려줘'),r=>r.id),['a']);
  assert.deepEqual(new Set(Array.from(M.search(rows,'단자대 번호 8.9·8.10·13.6 등이 무엇인지'),r=>r.id)),new Set(['b','c','d']));
  assert.deepEqual(Array.from(M.search(rows,'14KA10 비상'),r=>r.id),['a']);
  assert.equal(M.search(rows,'14KA10 센서').length,0);
  assert.deepEqual(Array.from(M.terms('비상 기능')),['비상','기능']);
});

test('decimal and compound identifier boundaries stay exact in matching and highlighting',()=>{
  const rows=[row('exact','8.10 8.9 13.6'),row('longer','18.10 8.100 8.10.1 8.10/1 8.10-1 113.6 8.90')];
  for(const query of ['8.10','8.9','13.6'])assert.deepEqual(Array.from(M.search(rows,query),r=>r.id),['exact']);
  assert.equal(M.highlight(rows[1].text,'8.10 8.9 13.6'),rows[1].text);
  assert.equal(M.highlight('ABC14KA10','ABC 14KA10'),'<mark>ABC</mark>14KA10');
  assert.equal(M.highlight('<img>14KA10 & 15KA10','14KA10'),'&lt;img&gt;<mark>14KA10</mark> &amp; 15KA10');
});

test('excerpt edges never make a partial identifier look like the requested number',()=>{
  const text='A'.repeat(90)+'18.10 '+'B'.repeat(76)+' 8.10';
  const excerpt=M.snippet(text,'8.10',150);
  assert.ok(excerpt.includes('18.10'));
  assert.equal((M.highlight(excerpt,'8.10').match(/<mark>/g)||[]).length,1);
  const ending='8.9 '+'A'.repeat(96)+' 8.100';
  const clipped=M.snippet(ending,'8.9',105);
  assert.ok(!M.highlight(clipped,'8.10').includes('<mark>'));
});

test('explicit drawings rank before manual section references without claiming connections',()=>{
  const rows=[
    row('section','목차\n8.10 보호 기능 그룹................................305',{source:'G100 사용설명서.pdf'}),
    row('manual','8.10 보호 기능 그룹(PAR→Pr)',{source:'G100 Manual.pdf'}),
    row('unknown','8.10 표기 확인'),
    row('drawing','8.10',{source:'장치 전기도면.pdf'}),
    row('german','Betriebsanleitung - Drehstrommotoren\n8.10 Kennwerte der funktionalen Sicherheit',{source:'13.3_Drehstrommotor.pdf'}),
    row('contents','Contents\n8.10 Protection features....................305',{source:'unknown.pdf'}),
    row('metadata','본문에 다른 값만 있음',{source:'8.10 Manual.pdf',title:'8.10 Manual.pdf · PDF 1쪽'}),
    row('photo','',{kind:'photo',title:'8.10 · 사진 표기'}),
    row('function','',{kind:'io',title:'8.10 · 등록 기능'})
  ];
  const results=M.search(rows,'8.10');
  assert.deepEqual(Array.from(results.slice(0,4),r=>r.id),['function','photo','drawing','unknown']);
  assert.equal(results.at(-1).id,'metadata');
  for(const id of ['manual','section','german','contents'])assert.equal(results.find(r=>r.id===id).match_context,'section');
  assert.equal(results.find(r=>r.id==='drawing').source_type,'drawing');
  assert.equal(results.find(r=>r.id==='unknown').source_type,'other');
  assert.equal(results.find(r=>r.id==='section').match_context,'section');
  assert.equal(results.find(r=>r.id==='metadata').match_context,'metadata');
  assert.equal(rows[0].match_context,undefined);
  assert.equal(M.search(rows,'8.10',{kind:'photo'})[0].id,'photo');
  assert.equal(M.search(rows,'8.10',{equipment:'B'}).length,0);
});

test('repeat searches reuse normalized source strings and refresh when a record changes',async()=>{
  const fresh=await model();let reads=0;
  const rows=[row('cached',{toString(){reads++;return '14KA10';}})];
  assert.equal(fresh.search(rows,'14KA10').length,1);
  const firstReads=reads;
  assert.equal(fresh.search(rows,'14KA10').length,1);
  assert.equal(reads,firstReads);
  rows[0].text='15KA10';
  assert.equal(fresh.search(rows,'14KA10').length,0);
  assert.equal(fresh.search(rows,'15KA10').length,1);
});
