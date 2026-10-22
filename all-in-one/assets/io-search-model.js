((root)=>{
  'use strict';
  const display=value=>String(value??'').normalize('NFKC').replace(/[‐‑‒–—−]/g,'-').replace(/[\u{F0000}-\u{10FFFD}\x00-\x08\x0B\x0C\x0E-\x1F]/gu,'');
  const normalize=value=>display(value).toUpperCase();
  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const regexEscape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  const identifier=value=>/^[%+\-=]?[A-Z0-9]+(?:[.:/_-][A-Z0-9]+)*$/.test(value)&&/\d/.test(value);
  const intentWords=new Set(['기능','기능은','기능이','기능인지','기능이야','무슨','뭐','뭐야','뭔지','무엇','무엇인지','알려줘','알려주세요','찾아줘','검색','단자','단자대','번호','선번','배선','주소','태그','등','등이','및','그리고','뜻','어떤','어디','역할']);
  const cache=new WeakMap();
  function terms(query){
    const q=normalize(query).trim().replace(/\s*([.:/])\s*/g,'$1')
      .replace(/\b(\d+)[ \t]*(K[A-Z]+)[ \t]*(\d+)\b/g,'$1$2$3')
      .replace(/%[ \t]+(?=[IQMX])/g,'%').replace(/\b([IQMX])[ \t]+(\d)/g,'$1$2');
    if(q.length<2)return [];
    let values=q.split(/[,;\n·|]+|\s+/).filter(Boolean).map(value=>value.replace(/^([%+\-=]?[A-Z0-9]+(?:[.:/_-][A-Z0-9]+)*)(?:은|는|이|가|의|을|를|란|이란|과|와)$/u,'$1'));
    // Only remove request words beside an identifier; a functional text query keeps all its words.
    if(values.some(identifier))values=values.filter(value=>!intentWords.has(value));
    return [...new Set(values)].slice(0,12);
  }
  function matcher(term,flags='i'){
    const id=identifier(term),value=term.replace(/^%/,'');
    let pattern='';
    for(let i=0;i<value.length;i++){
      const c=value[i],previous=value[i-1];
      if(id&&previous&&(/[A-Z]/.test(previous)&&/\d/.test(c)||/\d/.test(previous)&&/[A-Z]/.test(c)))pattern+='[ \\t]*';
      pattern+=/[.:/]/.test(c)?'\\s*'+regexEscape(c)+'\\s*':regexEscape(c);
    }
    if(id){
      if(/^[IQMX]\d/.test(value))pattern='(?:%[ \\t]*)?'+pattern;
      // Numeric wire markers are identifiers: 8.9 must never match 18.9 or 8.90.
      pattern='(?<![A-Z0-9_.])(?<![A-Z0-9][/-])'+pattern+'(?![A-Z0-9_.]|[-/][A-Z0-9])';
    }
    return new RegExp(pattern,flags);
  }
  function prepared(record){
    const old=cache.get(record);
    if(old&&old.rawTitle===record.title&&old.rawText===record.text&&old.rawSource===record.source&&old.rawKind===record.kind)return old;
    const title=normalize(record.title),body=normalize(record.text),source=normalize(record.source),name=source+'\n'+title;
    // Classify explicit document names only. This never establishes a signal's function or connection.
    const source_type=/전기\s*도면|회로도|배선도|결선도|\b(?:WIRING|CIRCUIT)[ _-]*(?:DIAGRAM|DRAWING)|\bSCHEMATIC\b|\bELECTRICAL[ _-]*(?:DRAWING|DIAGRAM)/.test(name)?'drawing':/설명서|매뉴얼|카탈로그|MANUAL|CATALOG|HANDBOOK|BETRIEBSANLEITUNG/.test(name)?'manual':'other';
    const value={rawTitle:record.title,rawText:record.text,rawSource:record.source,rawKind:record.kind,title,body,text:[title,body,source].join('\n'),source_type};
    cache.set(record,value);return value;
  }
  function sourceContext(prepared,matchers,ts){
    const bodyMatchers=matchers.filter(m=>m.test(prepared.body));
    if(!bodyMatchers.length)return 'metadata';
    if(!ts.every(t=>/^\d+(?:\.\d+)+$/.test(t)))return 'text';
    // A manual's numbered heading is a section reference, not a terminal/wire match.
    const lines=prepared.body.split(/\r?\n/),matchingLines=lines.filter(line=>bodyMatchers.some(m=>m.test(line)));
    const manualContext=prepared.source_type==='manual'||/BETRIEBSANLEITUNG|OPERATING INSTRUCTIONS|^\s*(?:목차|CONTENTS|INHALTSVERZEICHNIS)\s*$/im.test(prepared.body);
    return matchingLines.length&&matchingLines.every(line=>/^\s*\d+(?:\.\d+)+[ \t]+[A-Z가-힣ÄÖÜ]/i.test(line)&&(manualContext||/\.{3,}|…{2,}/.test(line)))?'section':'text';
  }
  function search(records,query,{equipment='',kind=''}={}){
    const ts=terms(query);if(!ts.length)return [];
    const ms=ts.map(t=>matcher(t)),identifiers=ts.every(identifier),results=[];
    for(const r of records){
      if(equipment&&r.equipment!==equipment||kind&&r.kind!==kind)continue;
      const p=prepared(r),hits=ms.filter(m=>m.test(p.text));
      if(!(identifiers?hits.length:hits.length===ms.length))continue;
      const titleHits=ms.filter(m=>m.test(p.title)).length;
      if(r.kind==='source'){
        const match_context=sourceContext(p,ms,ts),base=p.source_type==='drawing'?300:p.source_type==='manual'?100:200;
        results.push({...r,source_type:p.source_type,match_context,score:(match_context==='section'?60:match_context==='metadata'?20:base)+hits.length*5+titleHits*5});
      }else results.push({...r,score:(r.kind==='io'?1000:r.kind==='photo'?800:0)+titleHits*40+hits.length*5});
    }
    return results.sort((a,b)=>b.score-a.score||String(a.equipment).localeCompare(String(b.equipment))||String(a.source).localeCompare(String(b.source))||Number(a.page||0)-Number(b.page||0));
  }
  function snippet(text,query,length=360){
    const value=display(text),positions=terms(query).map(t=>value.search(matcher(t))).filter(p=>p>=0);
    let start=Math.max(0,(positions.length?Math.min(...positions):0)-90),end=Math.min(value.length,start+length);
    // Keep both original identifier boundaries when an excerpt cuts through a longer tag/number.
    const token=c=>!!c&&/[A-Z0-9_./-]/i.test(c);
    while(start>0&&token(value[start-1])&&token(value[start]))start--;
    while(end<value.length&&token(value[end-1])&&token(value[end]))end++;
    return (start?'…':'')+value.slice(start,end)+(end<value.length?'…':'');
  }
  function highlight(text,query){
    const value=display(text),ts=terms(query).sort((a,b)=>b.length-a.length);if(!ts.length)return escape(value);
    // Run against the complete original string so previous matches never create a new identifier boundary.
    const pattern=new RegExp(ts.map(t=>'(?:'+matcher(t).source+')').join('|'),'gi');
    let out='',end=0;
    for(const hit of value.matchAll(pattern)){out+=escape(value.slice(end,hit.index))+'<mark>'+escape(hit[0])+'</mark>';end=hit.index+hit[0].length;}
    return out+escape(value.slice(end));
  }
  function fromProject(project){
    return (project.equipment||[]).flatMap(e=>['io','hmi','signals','alarms'].flatMap(key=>(e[key]||[]).map((r,i)=>({
      id:e.id+':'+key+':'+i,equipment:e.id,equipment_name:e.name,kind:'io',title:[r.address,r.name||r.title].filter(Boolean).join(' · ')||'신호·접점',
      text:Object.entries(r).filter(([k])=>!['url','source','address','name','title'].includes(k)).map(([k,v])=>({direction:'구분',description:'기능·설명',type:'자료형',writer:'쓰기 위치',reader:'읽기 위치',trigger:'발생 조건',reset:'해제 조건',system:'계통'}[k]||k)+': '+v).join('\n'),source:r.source||'설비에 등록한 '+key+' 자료',url:r.url||'',page:'',evidence:'등록된 설명 · 현장 적용 별도 확인'
    }))));
  }
  root.EDIOSearchModel={normalize,escape,terms,search,snippet,highlight,fromProject};
})(window);
