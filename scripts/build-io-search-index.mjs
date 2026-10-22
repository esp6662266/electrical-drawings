import {readFile,writeFile} from 'node:fs/promises';
import {resolve,dirname} from 'node:path';
import {fileURLToPath,pathToFileURL} from 'node:url';
import {createHash} from 'node:crypto';
import vm from 'node:vm';

const clean=value=>String(value??'').replace(/[\u{F0000}-\u{10FFFD}\x00-\x08\x0B\x0C\x0E-\x1F]/gu,'').trim();
export async function buildSearchIndex(root){
  const policy=JSON.parse(await readFile(resolve(root,'publication-policy.json'),'utf8'));
  const denied=new Set(policy.denied_paths),withheld=new Set(policy.withheld_sources);
  const ctx={window:{}};vm.runInNewContext(await readFile(resolve(root,'data/project.js'),'utf8'),ctx);
  const equipment=ctx.window.ED_PROJECT.equipment,records=[],coverage=[],seen=new Set();
  for(const e of equipment){
    const sourceManifest=e.source_manifest||(e.library_url?e.library_url.split('?')[0].replace('library.html','source-manifest.json'):e.manual_url?.replace('manual.html','source-manifest.json'));
    if(!sourceManifest)continue;
    const path=sourceManifest.replace(/^\//,''),manifest=JSON.parse(await readFile(resolve(root,path),'utf8'));
    const library='/'+path.replace('source-manifest.json','library.html');
    const report={equipment:e.id,name:e.name,sources:0,text_pages:0,unreadable_pages:0};
    for(const s of manifest.sources){
      if(seen.has(e.id+':'+s.sha256)||s.publication_withheld||withheld.has(s.id)||denied.has(s.file.replace(/^\//,'')))continue;
      seen.add(e.id+':'+s.sha256);report.sources++;
      if(!s.inspection){report.unreadable_pages+=Number(s.pages||0);continue;}
      const info=JSON.parse(await readFile(resolve(root,s.inspection.replace(/^\//,'')),'utf8'));
      const units=[];
      for(const p of info.pages||[]){if(clean(p.text))units.push({page:p.page,text:p.text,title:'PDF '+p.page+'쪽',url:s.file+'#page='+p.page,reader:library+'?source='+s.id+'&page='+p.page});else report.unreadable_pages++;}
      (info.paragraphs||[]).forEach((text,i)=>{if(clean(text))units.push({text,title:'추출 문단 '+(i+1),url:library+'?source='+s.id+'#paragraph-'+(i+1)});});
      for(const [si,sheet] of (info.sheets||[]).entries())sheet.rows.forEach((row,i)=>{const n=sheet.source_rows?.[i]||i+1,text=row.map(clean).filter(Boolean).join(' | ');if(text)units.push({text,title:sheet.name+' · 원본 행 '+n,url:library+'?source='+s.id+'#sheet-'+si+'-row-'+n});});
      // Native binary strings are not interpreted PLC logic and are deliberately excluded.
      const unique=new Set();
      for(const unit of units){
        const text=clean(unit.text),key=createHash('sha256').update(text).digest('hex')+':'+unit.title;
        if(unique.has(key))continue;unique.add(key);report.text_pages++;
        records.push({id:e.id+':'+s.id+':'+records.length,equipment:e.id,equipment_name:e.name,kind:'source',title:s.name+' · '+unit.title,text,source:s.name,source_id:s.id,sha256:s.sha256,url:unit.url,reader:unit.reader||unit.url,page:unit.page||'',evidence:'원본 추출 본문 · 연결·기능 미판독'});
      }
    }
    coverage.push(report);
  }
  // Collapse identical pages repeated under different file names within the same equipment.
  const unique=new Map();
  for(const r of records){const key=r.equipment+':'+createHash('sha256').update(r.text).digest('hex');if(!unique.has(key))unique.set(key,r);}
  const photo=JSON.parse(await readFile(resolve(root,'data/io-reference-notes.json'),'utf8'));
  return {schema_version:1,version:ctx.window.ED_PROJECT.version,coverage,records:[...photo.records,...unique.values()]};
}

// Keep the authoring/search model as normal records. Only the published payload
// uses tuples and shared source metadata; no source text or evidence is removed.
const recordFields=['id','title','text','url','reader','page'];
function commonPrefix(values){
  let prefix=String(values[0]??'');
  for(const value of values.slice(1)){
    const text=String(value??'');let i=0;
    while(i<prefix.length&&i<text.length&&prefix[i]===text[i])i++;
    prefix=prefix.slice(0,i);
  }
  return prefix;
}
export function packSearchIndex(index,{includePhotos=true}={}){
  if(index.schema_version!==1||!Array.isArray(index.records))throw new Error('Unsupported search index');
  const groups=[],byMetadata=new Map();
  for(const record of index.records){
    if(!includePhotos&&record.kind==='photo')continue;
    const meta=Object.fromEntries(Object.entries(record).filter(([key])=>!recordFields.includes(key)));
    const fields=recordFields.filter(key=>Object.hasOwn(record,key)),key=JSON.stringify([meta,fields]);
    if(!byMetadata.has(key)){byMetadata.set(key,groups.length);groups.push({meta,fields,records:[]});}
    groups[byMetadata.get(key)].records.push(record);
  }
  const sources=groups.map(group=>{
    const pdf=group.fields.length===recordFields.length&&group.records.every(record=>
      typeof record.page==='number'&&record.title===record.source+' · PDF '+record.page+'쪽'&&
      record.url.endsWith('#page='+record.page)&&record.reader.endsWith('&page='+record.page));
    const prefixes=['id','title','url','reader'].map(key=>commonPrefix(group.records.map(record=>record[key])));
    if(pdf){prefixes[1]=group.meta.source+' · ';prefixes[2]=group.records[0].url.slice(0,-String(group.records[0].page).length);prefixes[3]=group.records[0].reader.slice(0,-String(group.records[0].page).length);}
    return {meta:group.meta,fields:group.fields,prefixes,...(pdf?{mode:'pdf'}:{})};
  });
  // Preserve global order, including the six independently loadable photo notes.
  const records=[];
  for(const record of index.records){
    if(!includePhotos&&record.kind==='photo')continue;
    const meta=Object.fromEntries(Object.entries(record).filter(([key])=>!recordFields.includes(key)));
    const fields=recordFields.filter(key=>Object.hasOwn(record,key)),source=byMetadata.get(JSON.stringify([meta,fields]));
    const descriptor=sources[source],prefixes=descriptor.prefixes;
    records.push(descriptor.mode==='pdf'?[source,record.id.slice(prefixes[0].length),record.page,record.text]:
      [source,record.id?.slice(prefixes[0].length)??null,record.title?.slice(prefixes[1].length)??null,record.text??null,record.url?.slice(prefixes[2].length)??null,record.reader?.slice(prefixes[3].length)??null,record.page??null]);
  }
  return {schema_version:2,format:'ed-io-source-tuples',version:index.version,coverage:index.coverage,sources,records};
}
if(process.argv[1]&&pathToFileURL(resolve(process.argv[1])).href===import.meta.url){
  const root=resolve(dirname(fileURLToPath(import.meta.url)),'..'),index=await buildSearchIndex(root);
  await writeFile(resolve(root,'data/io-search-index.json'),JSON.stringify(packSearchIndex(index,{includePhotos:false}))+'\n');
  console.log('I/O 검색: '+index.records.length+'개 원본 본문, '+index.coverage.length+'개 설비 색인 생성');
}
