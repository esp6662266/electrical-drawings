((root)=>{
  'use strict';
  const APPLICATION='Electrical Drawings',MAX_BYTES=64*1024*1024;
  const clone=value=>JSON.parse(JSON.stringify(value));
  const object=value=>value!==null&&typeof value==='object'&&!Array.isArray(value);
  const listKeys=['io','hmi','networks','calls','signals','drawings','alarms','repair','checks','reviews','tests'];
  const sectionKeys=['overview','io','control','circuits','alarms','repair','completion'];
  function inspect(value,depth=0,budget={n:0}){
    if(depth>30)throw new Error('자료의 중첩이 너무 깊습니다.');
    if(value&&typeof value==='object')for(const [key,item] of Object.entries(value)){
      if(['__proto__','constructor','prototype'].includes(key)||++budget.n>1000000)throw new Error('지원하지 않는 자료 구조입니다.');
      inspect(item,depth+1,budget);
    }
  }
  function url(value){
    if(typeof value!=='string'||!value.trim())return '';
    try{const u=new URL(value,'https://project.example/');return ['https:','http:'].includes(u.protocol)?u.href.replace('https://project.example/',''):'';}catch{return '';}
  }
  function equipment(value){
    if(!object(value)||typeof value.id!=='string'||!(/^[A-Za-z0-9][A-Za-z0-9_-]{0,79}$/).test(value.id)||typeof value.name!=='string'||!value.name.trim())throw new Error('설비 ID(영문·숫자·밑줄·하이픈)와 설비명을 확인하세요.');
    const e={...clone(value),id:value.id.trim(),name:value.name.trim(),group:value.group||'',location:value.location||'',description:value.description||'',priority:value.priority!==false};
    for(const k of ['group','location','description','source_version'])if(e[k]!=null&&typeof e[k]!=='string')throw new Error('설비 문자열 항목을 확인하세요.');
    e.manual=object(value.manual)?clone(value.manual):{};
    for(const key of sectionKeys)if(e.manual[key]!=null&&typeof e.manual[key]!=='string')throw new Error('매뉴얼 내용은 문자열이어야 합니다.');
    for(const key of listKeys){if(value[key]!=null&&(!Array.isArray(value[key])||value[key].some(r=>!object(r))))throw new Error(key+' 목록의 형식을 확인하세요.');e[key]=clone(value[key]||[]);}
    for(const key of ['io','hmi','networks','calls','signals','drawings','alarms','repair','checks','reviews','tests'])for(const row of e[key])for(const [field,v] of Object.entries(row))if(v!==null&&!['string','number','boolean'].includes(typeof v))throw new Error(key+'의 '+field+' 항목은 문자·숫자·참/거짓 값이어야 합니다.');
    return e;
  }
  function project(value){
    inspect(value);
    if(!object(value)||value.schema_version!==1||value.application!==APPLICATION||!Array.isArray(value.equipment)||value.equipment.length>10000)throw new Error('전기도면 프로젝트 형식1 파일을 선택하세요.');
    const p={...clone(value),equipment:value.equipment.map(equipment)};
    if(new Set(p.equipment.map(e=>e.id)).size!==p.equipment.length)throw new Error('중복 설비 ID가 있습니다.');
    if(value.resources!=null&&(!Array.isArray(value.resources)||value.resources.some(r=>!object(r)||typeof r.name!=='string'||typeof r.url!=='string'||!url(r.url))))throw new Error('자료 이름과 http(s) 또는 상대 파일 경로를 확인하세요.');
    p.resources=clone(value.resources||[]);
    if(value.layout!=null&&(!object(value.layout)||typeof value.layout.url!=='string'||!url(value.layout.url)))throw new Error('배치도 파일 경로를 확인하세요.');
    return p;
  }
  function parse(raw){if(typeof raw!=='string'||new TextEncoder().encode(raw).length>MAX_BYTES)throw new Error('프로젝트 파일은64MB 이하여야 합니다.');return project(JSON.parse(raw));}
  function merge(current,incoming){
    const result=clone(current),ids=new Set(current.equipment.map(e=>e.id));
    const conflicts=incoming.equipment.filter(e=>ids.has(e.id)&&JSON.stringify(e)!==JSON.stringify(current.equipment.find(c=>c.id===e.id))).map(e=>e.id);
    if(conflicts.length)throw new Error('다른 내용의 같은 설비 ID가 있습니다: '+conflicts.join(', ')+'. 기존 자료는 유지했습니다.');
    result.equipment.push(...incoming.equipment.filter(e=>!ids.has(e.id)));
    const urls=new Set(result.resources.map(r=>r.url));result.resources.push(...incoming.resources.filter(r=>!urls.has(r.url)));
    if(result.layout&&incoming.layout&&JSON.stringify(result.layout)!==JSON.stringify(incoming.layout))throw new Error('다른 배치도가 있어 기존 자료를 유지했습니다.');
    result.layout ||= incoming.layout;return project(result);
  }
  function backup(p,notes){const parsed=project(p);root.EDNoteStore.decodeNotes(JSON.stringify(notes),new Set(parsed.equipment.map(e=>e.id)));return {...parsed,backup_scope:'project',exported:new Date().toISOString(),notes:clone(notes)};}
  const api={APPLICATION,MAX_BYTES,listKeys,sectionKeys,equipment,project,parse,merge,url,backup};
  root.EDProjectModel=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window!=='undefined'?window:globalThis);
