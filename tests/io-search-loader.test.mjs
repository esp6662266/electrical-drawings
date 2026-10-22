import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {gzipSync} from 'node:zlib';
import vm from 'node:vm';
import {buildSearchIndex,packSearchIndex} from '../scripts/build-io-search-index.mjs';

const script=await readFile(new URL('../all-in-one/assets/io-search-loader.js',import.meta.url),'utf8');
const clone=value=>JSON.parse(JSON.stringify(value));
const photo={id:'photo-8.10',equipment:'PHOTO-UNASSIGNED',kind:'photo',title:'8.10',text:'사진 배선 식별 표기 · 기능 미확정',url:'/photo.jpg'};
const source={equipment:'A',equipment_name:'설비 A',kind:'source',source:'회로도',source_id:'source-A',sha256:'abc123',evidence:'원본 본문 · 연결·기능 미확정'};
const fixture={schema_version:1,version:'test',coverage:[{equipment:'A',sources:1,text_pages:3}],records:[
  photo,
  {...source,id:'A:source-A:0',title:'회로도 · PDF 8쪽',text:'8.10 → 14KA10',url:'/drawing.pdf#page=8',reader:'/library.html?source=source-A&page=8',page:8},
  {...source,id:'A:source-A:3',title:'회로도 · PDF 13쪽',text:'13.6 → 비상 구동 회로',url:'/drawing.pdf#page=13',reader:'/library.html?source=source-A&page=13',page:13},
  {...source,source_id:'source-B',id:'A:source-B:12',title:'회로도 · 시트1 · 원본 행 10',text:'X010 | 밸브 전진',url:'/library.html?source=source-B#sheet-0-row-10',reader:'/library.html?source=source-B#sheet-0-row-10',page:''}
]};
const response=(value,status=200)=>({ok:status===200,status,json:async()=>clone(value)});
function loader(fetch,extras={}){
  const context={window:{},fetch,AbortController,setTimeout,clearTimeout,console,...extras};
  vm.runInNewContext(script,context);return context.window.EDIOSearchLoader;
}
function deferred(){let resolve,reject;const promise=new Promise((a,b)=>{resolve=a;reject=b;});return {promise,resolve,reject};}
const tick=()=>new Promise(resolve=>setImmediate(resolve));

test('source tuples preserve PDF links, sparse IDs, sheet links and photo uncertainty',()=>{
  const L=loader();
  assert.deepEqual(clone(L.decode(packSearchIndex(fixture))),fixture);
  assert.deepEqual(clone(L.decode(fixture)),fixture);
  assert.deepEqual(clone(L.decode(packSearchIndex(fixture,{includePhotos:false}))).records,fixture.records.filter(record=>record.kind!=='photo'));
  for(const value of [{schema_version:3,records:[]},{...packSearchIndex(fixture),records:[[999,'',1,'text']]},{...packSearchIndex(fixture),records:[[0]]}])assert.throws(()=>L.decode(value),/검색 자료/);
});

test('published compact payload decodes every source field and materially reduces JSON size',async()=>{
  const index=await buildSearchIndex(fileURLToPath(new URL('../',import.meta.url)));
  const packed=packSearchIndex(index,{includePhotos:false}),decoded=loader().decode(packed);
  assert.deepEqual(clone(decoded),{...index,records:index.records.filter(record=>record.kind!=='photo')});
  const plain=JSON.stringify(index),compact=JSON.stringify(packed);
  assert.ok(Buffer.byteLength(compact)<Buffer.byteLength(plain)*0.7,'shared metadata should remove at least 30% of raw JSON bytes');
  assert.ok(gzipSync(compact).length<gzipSync(plain).length,'metadata compaction should help even with transport compression');
});

test('photo-only loading avoids the body and shares its cached request',async()=>{
  const urls=[],L=loader(async url=>{urls.push(url);return response({records:[photo]});});
  const [first,second]=await Promise.all([L.loadNotes(),L.loadNotes()]);
  assert.equal(first,second);assert.equal(first.records[0].title,'8.10');
  await L.loadNotes();assert.deepEqual(urls,['../data/io-reference-notes.json']);
});

test('photo notes render before a slow body, concurrent callers share requests and v1 photos are not duplicated',async()=>{
  const body=deferred(),urls=[],events=[],otherEvents=[];
  const L=loader(async url=>{urls.push(url);return url.includes('reference-notes')?response({records:[photo]}):body.promise;});
  const first=L.load({onProgress:event=>events.push(event)}),second=L.load({onProgress:event=>otherEvents.push(event)});
  await tick();
  assert.deepEqual(events.map(event=>event.phase),['notes']);
  assert.equal(events[0].records[0].id,photo.id);assert.equal(urls.length,2);
  body.resolve(response(fixture));
  const [a,b]=await Promise.all([first,second]);
  assert.equal(a,b);assert.deepEqual(clone(a),fixture);
  assert.deepEqual(events.map(event=>event.phase),['notes','index']);
  assert.deepEqual(otherEvents.map(event=>event.phase),['notes','index']);
  await L.load();assert.equal(urls.length,2);
});

test('body failure keeps photo results and retry fetches only the failed resource',async()=>{
  let bodies=0,photos=0;const events=[];
  const L=loader(async url=>{
    if(url.includes('reference-notes')){photos++;return response({records:[photo]});}
    bodies++;return bodies===1?response(null,503):response(packSearchIndex(fixture,{includePhotos:false}));
  });
  await assert.rejects(L.load({onProgress:event=>events.push(event.phase)}),/HTTP 503/);
  assert.deepEqual(events,['notes']);
  const value=await L.load({onProgress:event=>events.push(event.phase)});
  assert.equal(value.records.length,fixture.records.length);assert.equal(photos,1);assert.equal(bodies,2);
  assert.deepEqual(events,['notes','notes','index']);
});

test('a missing photo file exposes the successful body and retry downloads only notes',async()=>{
  let bodies=0,photos=0;const events=[];
  const L=loader(async url=>{
    if(url.includes('reference-notes'))return ++photos===1?response(null,404):response({records:[photo]});
    bodies++;return response(packSearchIndex(fixture,{includePhotos:false}));
  });
  const partial=await L.load({onProgress:event=>events.push(event)});
  assert.equal(partial.notesError,true);
  assert.deepEqual(clone(partial.records),fixture.records.filter(record=>record.kind!=='photo'));
  assert.deepEqual(clone(partial.coverage),fixture.coverage);
  assert.equal(events[0].phase,'index');assert.equal(events[0].notesError,true);
  const complete=await L.load();
  assert.equal(complete.notesError,undefined);
  assert.equal(complete.records.length,fixture.records.length);
  assert.notEqual(partial,complete);
  assert.equal(photos,2);assert.equal(bodies,1);
  assert.equal(await L.load(),complete);
  assert.equal(photos,2);assert.equal(bodies,1);
});

test('timeouts abort a stalled request, report a retryable error and release the pending cache',async()=>{
  const timers=[];let calls=0;
  const L=loader(async (_url,{signal})=>{
    calls++;
    if(calls>1)return response({records:[photo]});
    return new Promise((_resolve,reject)=>signal.addEventListener('abort',()=>reject(new Error('aborted')),{once:true}));
  },{setTimeout:(fn,ms)=>{timers.push({fn,ms});return timers.length;},clearTimeout:()=>{}});
  const pending=L.loadNotes();assert.equal(timers[0].ms,30000);timers[0].fn();
  await assert.rejects(pending,/응답 시간이 초과/);
  assert.equal((await L.loadNotes()).records.length,1);assert.equal(calls,2);
});
