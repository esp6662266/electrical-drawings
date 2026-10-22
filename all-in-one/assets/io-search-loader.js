(() => {
  'use strict';
  let notes=null,notesPending=null,body=null,bodyPending=null,index=null,pending=null;
  const listeners=new Set(),fields=['id','title','text','url','reader','page'];
  function decode(value){
    if(value?.schema_version===1&&Array.isArray(value.records))return value;
    if(value?.schema_version!==2||value.format!=='ed-io-source-tuples'||!Array.isArray(value.sources)||!Array.isArray(value.records)||!Array.isArray(value.coverage))throw new Error('검색 자료 형식 오류');
    const records=value.records.map(row=>{
      if(!Array.isArray(row)||!Number.isInteger(row[0]))throw new Error('검색 자료 행 오류');
      const source=value.sources[row[0]];
      if(!source||!source.meta||!Array.isArray(source.fields)||!Array.isArray(source.prefixes)||source.prefixes.length!==4||!source.prefixes.every(v=>typeof v==='string'))throw new Error('검색 자료 원본 오류');
      if(source.fields.some(key=>!fields.includes(key)))throw new Error('검색 자료 필드 오류');
      const record={...source.meta},p=source.prefixes;
      let values;
      if(source.mode==='pdf'){
        if(row.length!==4||typeof row[1]!=='string'||!Number.isInteger(row[2])||row[2]<1||typeof row[3]!=='string')throw new Error('검색 자료 PDF 행 오류');
        values=[p[0]+row[1],p[1]+'PDF '+row[2]+'쪽',row[3],p[2]+row[2],p[3]+row[2],row[2]];
      }else{
        if(row.length!==7)throw new Error('검색 자료 행 길이 오류');
        values=[p[0]+(row[1]??''),p[1]+(row[2]??''),row[3],p[2]+(row[4]??''),p[3]+(row[5]??''),row[6]];
      }
      fields.forEach((key,i)=>{if(source.fields.includes(key))record[key]=values[i];});
      return record;
    });
    return {schema_version:1,version:value.version,coverage:value.coverage,records};
  }
  function report(listener,event){try{listener(event);}catch(error){console.error('I/O 검색 진행 표시 오류',error);}}
  function emit(event){for(const listener of listeners)report(listener,event);}
  async function request(url,timeoutMs){
    const controller=new AbortController();
    const timer=setTimeout(()=>controller.abort(),timeoutMs);
    try{
      const response=await fetch(url,{signal:controller.signal});
      if(!response.ok)throw new Error('HTTP '+response.status);
      return await response.json();
    }catch(error){
      if(controller.signal.aborted)throw new Error('검색 자료 응답 시간이 초과되었습니다. 다시 불러오세요.');
      throw error;
    }finally{clearTimeout(timer);}
  }
  function loadNotes({timeoutMs=30000}={}){
    if(notes)return Promise.resolve(notes);
    if(!notesPending)notesPending=request('../data/io-reference-notes.json',timeoutMs).then(value=>{
      if(!Array.isArray(value?.records)||value.records.some(record=>record.kind!=='photo'))throw new Error('사진 검색 자료 형식 오류');
      notes={schema_version:1,records:value.records};return notes;
    }).finally(()=>{notesPending=null;});
    return notesPending;
  }
  function loadBody(timeoutMs){
    if(body)return Promise.resolve(body);
    if(!bodyPending)bodyPending=request('../data/io-search-index.json',timeoutMs).then(value=>{body=decode(value);return body;}).finally(()=>{bodyPending=null;});
    return bodyPending;
  }
  function load({onProgress,timeoutMs=30000}={}){
    const listener=typeof onProgress==='function'?onProgress:null;
    if(listener){listeners.add(listener);if(notes)report(listener,{phase:'notes',records:notes.records,coverage:[]});}
    if(index){
      if(listener){report(listener,{phase:'index',records:index.records,coverage:index.coverage});listeners.delete(listener);}
      return Promise.resolve(index);
    }
    if(!pending){
      const hadNotes=!!notes;
      const photo=loadNotes({timeoutMs}).then(value=>{if(!hadNotes)emit({phase:'notes',records:value.records,coverage:[]});return value;});
      // Start the small photo notes and the source body independently. Notes can
      // render while the larger body is still in flight, including on retries.
      pending=Promise.allSettled([photo,loadBody(timeoutMs)]).then(results=>{
        if(results[1].status==='rejected')throw results[1].reason;
        if(results[0].status==='rejected'){
          // A small optional photo resource must not hide a successful source
          // download. Keep only the body cache so the next load retries notes.
          const partial={...results[1].value,notesError:true};
          emit({phase:'index',records:partial.records,coverage:partial.coverage,notesError:true});return partial;
        }
        const [photoResult,bodyResult]=results.map(result=>result.value);
        // v1 payloads already contain photo records; prefer the separate notes.
        index={...bodyResult,records:[...photoResult.records,...bodyResult.records.filter(record=>record.kind!=='photo')]};
        emit({phase:'index',records:index.records,coverage:index.coverage});return index;
      }).finally(()=>{pending=null;});
    }
    return pending.then(value=>{if(listener)listeners.delete(listener);return value;},error=>{if(listener)listeners.delete(listener);throw error;});
  }
  window.EDIOSearchLoader={decode,load,loadNotes};
})();
