((root)=>{
  'use strict';
  const display=value=>String(value??'').normalize('NFKC').replace(/[‐‑‒–—−]/g,'-').replace(/[\u{F0000}-\u{10FFFD}\x00-\x08\x0B\x0C\x0E-\x1F]/gu,'');
  const normalize=value=>display(value).toUpperCase();
  const escape=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const regexEscape=value=>value.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  function terms(query){
    const q=normalize(query).trim().replace(/\s*([.:/])\s*/g,'$1').replace(/\b(\d+)\s+(K[A-Z]+)\s*(\d+)\b/g,'$1$2$3').replace(/\b([IQMX])\s+(\d)/g,'$1$2');
    if(q.length<2)return [];
    return q.split(/[,;\n]+|\s+/).filter(Boolean).slice(0,12);
  }
  function matcher(term){
    // Numeric wire markers are identifiers: 8.9 must never match 18.9 or 8.90.
    const identifier=/^[%+\-=]?[A-Z0-9]+(?:[.:/_-][A-Z0-9]+)*$/.test(term)&&/\d/.test(term);
    const pattern=[...term.replace(/^%/,'')].map(c=>/[.:/]/.test(c)?'\\s*'+regexEscape(c)+'\\s*':regexEscape(c)).join('');
    return new RegExp(identifier?'(?<![A-Z0-9_.])'+pattern+'(?![A-Z0-9_.])':pattern,'i');
  }
  function search(records,query,{equipment='',kind=''}={}){
    const ts=terms(query);if(!ts.length)return [];
    const ms=ts.map(matcher),identifiers=ts.every(t=>/\d/.test(t)&&/^[%+\-=]?[A-Z0-9.:/_-]+$/.test(t));
    return records.filter(r=>(!equipment||r.equipment===equipment)&&(!kind||r.kind===kind)).map(r=>{
      const title=normalize(r.title),text=normalize([r.title,r.text,r.source].join('\n'));
      const hits=ms.filter(m=>m.test(text));
      if(!(identifiers?hits.length: hits.length===ms.length))return null;
      return {...r,score:(r.kind==='io'?100:r.kind==='photo'?80:0)+ms.filter(m=>m.test(title)).length*40+hits.length*5};
    }).filter(Boolean).sort((a,b)=>b.score-a.score||String(a.equipment).localeCompare(String(b.equipment))||String(a.source).localeCompare(String(b.source))||Number(a.page||0)-Number(b.page||0));
  }
  function snippet(text,query,length=360){
    const value=display(text),positions=terms(query).map(t=>value.search(matcher(t))).filter(p=>p>=0),start=Math.max(0,(positions.length?Math.min(...positions):0)-90);
    return (start?'…':'')+value.slice(start,start+length)+(start+length<value.length?'…':'');
  }
  function highlight(text,query){
    let rest=display(text),out='';const ms=terms(query).map(matcher);let guard=0;
    while(rest&&guard++<100){const matches=ms.map(m=>m.exec(rest)).filter(Boolean).sort((a,b)=>a.index-b.index);if(!matches.length)break;const hit=matches[0];out+=escape(rest.slice(0,hit.index))+'<mark>'+escape(rest.slice(hit.index,hit.index+hit[0].length))+'</mark>';rest=rest.slice(hit.index+hit[0].length);}
    return out+escape(rest);
  }
  function fromProject(project){
    return (project.equipment||[]).flatMap(e=>['io','hmi','signals','alarms'].flatMap(key=>(e[key]||[]).map((r,i)=>({
      id:e.id+':'+key+':'+i,equipment:e.id,equipment_name:e.name,kind:'io',title:[r.address,r.name||r.title].filter(Boolean).join(' · ')||'신호·접점',
      text:Object.entries(r).filter(([k])=>!['url','source','address','name','title'].includes(k)).map(([k,v])=>({direction:'구분',description:'기능·설명',type:'자료형',writer:'쓰기 위치',reader:'읽기 위치',trigger:'발생 조건',reset:'해제 조건',system:'계통'}[k]||k)+': '+v).join('\n'),source:r.source||'설비에 등록한 '+key+' 자료',url:r.url||'',page:'',evidence:'등록된 설명 · 현장 적용 별도 확인'
    }))));
  }
  root.EDIOSearchModel={normalize,escape,terms,search,snippet,highlight,fromProject};
})(window);
