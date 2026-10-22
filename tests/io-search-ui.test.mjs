import test from 'node:test';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import {readFile} from 'node:fs/promises';

const model=await readFile(new URL('../all-in-one/assets/io-search-model.js',import.meta.url),'utf8');
const ui=await readFile(new URL('../all-in-one/assets/io-search.js',import.meta.url),'utf8');
const tick=()=>new Promise(resolve=>setImmediate(resolve));
function element(){
  return {value:'',innerHTML:'',textContent:'',dataset:{},attrs:{},listeners:{},isConnected:true,
    setAttribute(k,v){this.attrs[k]=v;},focus(){this.focused=true;},
    addEventListener(k,fn){this.listeners[k]=fn;}};
}
function harness(hash,{index,notes=[],noteRetry=notes,fail=false,deferred=false}={}){
  const nodes=new Map();
  for(const key of ['#io-query','#io-filter-equipment','#io-filter-kind','.io-index-status','.io-result-status','.io-result-types','.io-search-results','.io-search-more','.io-coverage','.io-action-message','form'])nodes.set(key,element());
  const root=element();root.querySelector=s=>nodes.get(s)||null;
  let resolveLoad,rejectLoad,calls=0,noteCalls=0;
  const loading=new Promise((resolve,reject)=>{resolveLoad=resolve;rejectLoad=reject;});
  const ctx={URLSearchParams,setTimeout,clearTimeout,location:{hash,href:'https://example.test/all-in-one/'+hash},history:{replaceState(a,b,url){ctx.location.hash=url;ctx.location.href='https://example.test/all-in-one/'+url;}},navigator:{clipboard:{writeText:async value=>{ctx.copied=value;}}},window:{}};
  ctx.window.EDProjectModel={url:u=>u};
  ctx.window.EDIOSearchLoader={
    async load({onProgress}){calls++;if(notes.length)onProgress({phase:'notes',records:notes});if(deferred)return loading;if(fail)throw new Error('offline');return index||{records:notes,coverage:[]};},
    async loadNotes(){noteCalls++;return {records:noteRetry};}
  };
  vm.runInNewContext(model,ctx);vm.runInNewContext(ui,ctx);
  const project={equipment:[{id:'A',name:'시험 설비',io:[{address:'X010',name:'시험 기능',source:'도면 1'}],hmi:[],signals:[],alarms:[]}]};
  const destroy=ctx.window.EDIOSearch.attach(root,{project});
  return {nodes,root,ctx,destroy,resolveLoad,rejectLoad,calls:()=>calls,noteCalls:()=>noteCalls};
}
test('empty and I/O-only searches do not download the source index',()=>{
  const a=harness('#view=io-search');assert.equal(a.calls(),0);assert.equal(a.noteCalls(),0);a.destroy();
  const b=harness('#view=io-search&q=X010&search-kind=io');assert.equal(b.calls(),0);assert.match(b.nodes.get('.io-search-results').innerHTML,/시험 기능/);b.destroy();
});
test('loading does not announce a completed zero-result search',()=>{
  const h=harness('#view=io-search&q=14KA10',{deferred:true});
  assert.match(h.nodes.get('.io-result-status').textContent,/찾는 중/);
  assert.doesNotMatch(h.nodes.get('.io-search-results').innerHTML,/일치하는 표기가 없습니다/);
  h.destroy();h.resolveLoad({records:[],coverage:[]});
});
test('photo notes render before the full index and survive a source failure',async()=>{
  const notes=[{kind:'photo',title:'14KA10',text:'함체 라벨',equipment:'PHOTO-UNASSIGNED',source:'사진',evidence:'미확정'}];
  const h=harness('#view=io-search&q=14KA10',{notes,fail:true});
  assert.match(h.nodes.get('.io-search-results').innerHTML,/함체 라벨/);await tick();
  assert.match(h.nodes.get('.io-search-results').innerHTML,/함체 라벨/);
  assert.match(h.nodes.get('.io-index-status').innerHTML,/다시 불러오기/);h.destroy();
});
test('photo-only searches request only photo notes',async()=>{
  const h=harness('#view=io-search&q=14KA10&search-kind=photo');await tick();assert.equal(h.calls(),0);assert.equal(h.noteCalls(),1);h.destroy();
});
test('failed source loading cannot be presented as a complete no-match result',async()=>{
  const h=harness('#view=io-search&q=UNKNOWN&search-kind=source',{fail:true});await tick();
  assert.match(h.nodes.get('.io-search-results').innerHTML,/불러온 자료 안/);
  assert.match(h.nodes.get('.io-search-results').innerHTML,/일부 자료는 검색하지 못/);
  h.destroy();
});
test('a detached view cannot be repainted by a late request',async()=>{
  const h=harness('#view=io-search&q=14KA10',{deferred:true});h.destroy();
  const before=h.nodes.get('.io-search-results').innerHTML;
  h.resolveLoad({records:[{kind:'photo',title:'14KA10',text:'late data'}],coverage:[]});await tick();
  assert.equal(h.nodes.get('.io-search-results').innerHTML,before);
});
test('source full text is added only when its disclosure opens',async()=>{
  const long='prefix X010 '+'.'.repeat(900)+' UNIQUE-END';
  const h=harness('#view=io-search&q=X010',{index:{records:[{kind:'source',title:'회로도',text:long,equipment:'A',source:'회로도',url:'/a.pdf'}],coverage:[]}});
  await tick();assert.doesNotMatch(h.nodes.get('.io-search-results').innerHTML,/UNIQUE-END/);
  const pre=element(),details={open:true,dataset:{ioFull:'1'},querySelector:()=>pre};
  h.root.listeners.toggle({target:details});assert.match(pre.innerHTML,/UNIQUE-END/);h.destroy();
});
test('Enter while Korean composition is active does not search partial input',()=>{
  const h=harness('#view=io-search&search-kind=io'),input=h.nodes.get('#io-query');
  input.listeners.compositionstart();input.value='X010';
  h.nodes.get('form').listeners.submit({preventDefault(){}});
  assert.doesNotMatch(h.nodes.get('.io-search-results').innerHTML,/시험 기능/);h.destroy();
});

test('copy uses the visible input even before its debounce timer runs',async()=>{
  const h=harness('#view=io-search&search-kind=io');h.nodes.get('#io-query').value='X010';
  const b={hasAttribute:key=>key==='data-io-copy'};
  await h.root.listeners.click({target:{closest:()=>b}});
  assert.match(h.ctx.copied,/q=X010/);h.destroy();
});
test('shared URL query uses the same maximum length as manual input',()=>{
  const h=harness('#view=io-search&search-kind=io&q='+'A'.repeat(500));
  assert.equal(new URLSearchParams(h.ctx.location.hash.slice(1)).get('q').length,160);h.destroy();
});

test('successful source data remains visible when photo loading fails',async()=>{
  const h=harness('#view=io-search&q=X010',{index:{notesError:true,records:[{kind:'source',equipment:'A',title:'도면',text:'X010 source loaded',source:'회로도'}],coverage:[]}});
  await tick();assert.match(h.nodes.get('.io-search-results').innerHTML,/source loaded/);
  assert.match(h.nodes.get('.io-index-status').innerHTML,/사진 다시 불러오기/);h.destroy();
});
test('matches in document titles alone are labeled as metadata',async()=>{
  const h=harness('#view=io-search&q=TAG14.PDF',{index:{records:[{kind:'source',equipment:'A',title:'TAG14.PDF',text:'원본 본문',source:'TAG14.PDF'}],coverage:[]}});
  await tick();assert.match(h.nodes.get('.io-search-results').innerHTML,/파일명·제목 일치/);h.destroy();
});

test('retrying photos after a partial index updates photo-only results',async()=>{
  const photo={kind:'photo',equipment:'PHOTO-UNASSIGNED',title:'X010',text:'restored photo'};
  const h=harness('#view=io-search&q=X010',{index:{notesError:true,records:[{kind:'source',equipment:'A',title:'도면',text:'X010 source loaded',source:'회로도'}],coverage:[]},noteRetry:[photo]});
  await tick();h.nodes.get('#io-query').value='X010';h.nodes.get('#io-filter-kind').value='photo';h.nodes.get('#io-filter-kind').listeners.change();
  const b={hasAttribute:key=>key==='data-io-retry'};await h.root.listeners.click({target:{closest:()=>b}});await tick();
  assert.match(h.nodes.get('.io-search-results').innerHTML,/restored photo/);h.destroy();
});
