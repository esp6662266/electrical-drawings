(() => {
  'use strict';
  const M=window.EDIOSearchModel,esc=M.escape,L=window.EDIOSearchLoader;
  let cachedIndex=null,cachedNotes=null,lastSearch=null;
  const safeLink=(url,label)=>{const safe=window.EDProjectModel.url(url);return safe?`<a href="${esc(safe)}" target="_blank" rel="noopener noreferrer">${esc(label)} ↗</a>`:'';};
  function attach(container,{project}){
    const params=new URLSearchParams(location.hash.slice(1));
    const saved=params.has('q')||params.has('search-kind')||params.has('search-equipment')?null:lastSearch;
    let query=String(params.get('q')??saved?.query??'').slice(0,160),eq=params.get('search-equipment')??saved?.eq??'',kind=params.get('search-kind')??saved?.kind??'';
    let index=cachedIndex,notes=cachedNotes,sourceState=index?'ready':'idle',photoState=index?.notesError?'failed':notes?'ready':'idle',limit=30,timer=null,disposed=false,composing=false,results=[],allResults=[];
    const local=M.fromProject(project),equipment=project.equipment||[];
    container.innerHTML=`<section class="panel io-search-panel" aria-labelledby="io-search-title"><h2 id="io-search-title">I/O·단자·배선 검색</h2><p>태그·선번·PLC 주소로 기능 설명과 원본 근거를 찾습니다.</p><form class="io-search-form" role="search"><label for="io-query">찾을 태그·번호·기능</label><div class="io-search-bar"><input id="io-query" name="q" type="search" maxlength="160" placeholder="예: 14KA10, 8.10, X010" autocomplete="off" value="${esc(query)}"><button type="submit">검색</button></div><div class="io-search-filters"><label for="io-filter-equipment">설비 범위<select id="io-filter-equipment" aria-label="설비 범위"><option value="">전체 설비 + 현장 사진</option>${equipment.map(e=>`<option value="${esc(e.id)}">${esc(e.name)}</option>`).join('')}<option value="PHOTO-UNASSIGNED">현장 사진 · 설비 미연결</option></select></label><label for="io-filter-kind">자료 구분<select id="io-filter-kind" aria-label="자료 구분"><option value="">전체 자료</option><option value="io">I/O·기능 설명</option><option value="photo">현장 사진 표기</option><option value="source">원본 본문</option></select></label></div><div class="io-search-actions"><button type="button" data-io-reset>검색 초기화</button><button type="button" data-io-copy>검색 링크 복사</button><span class="io-action-message" role="status"></span></div></form><div class="io-examples" aria-label="검색 예시"><span>바로 검색</span>${['14KA10','14KA8','8.9','8.10','13.6','X010'].map(q=>`<button type="button" data-io-query="${q}">${q}</button>`).join('')}</div><p class="io-index-status" role="status"></p></section><div class="io-result-status" role="status" aria-live="polite"></div><div class="io-result-types" aria-label="자료별 검색 결과"></div><div class="io-search-results"></div><div class="io-search-more"></div><details class="panel io-search-help"><summary>검색 범위와 기능 확인 방법</summary><p>등록된 기능 설명을 먼저 표시하고 도면 본문을 이어서 찾습니다. 매뉴얼의 목차·절 번호가 일치한 경우에는 따로 표시합니다.</p><p>같은 번호라도 설비·도면이 다를 수 있습니다. 사진의 선번을 단자대 번호나 PLC 주소로 자동 변환하지 않습니다. 원본 본문 일치는 배선 연결 관계나 현장 적용을 확인했다는 뜻이 아닙니다.</p><p>텍스트가 없는 스캔·사진과 전용 CAD/PLC 파일은 본문 검색에 포함되지 않을 수 있습니다. 여러 번호는 공백·쉼표로 나누어 입력하세요.</p><div class="io-coverage"></div></details>`;
    const $=s=>container.querySelector(s),input=$('#io-query'),eqSelect=$('#io-filter-equipment'),kindSelect=$('#io-filter-kind'),resultSlot=$('.io-search-results');
    eqSelect.value=eq;if(eqSelect.value!==eq)eq='';kindSelect.value=kind;if(kindSelect.value!==kind)kind='';
    const active=()=>!disposed&&container.isConnected;
    const loading=()=>kind==='io'?false:kind==='photo'?photoState==='loading':sourceState==='loading';
    function saveQuery(){
      if(!active())return;lastSearch={query,eq,kind};const p=new URLSearchParams(location.hash.slice(1));
      for(const [key,value]of [['q',query],['search-equipment',eq],['search-kind',kind]]){if(value)p.set(key,value);else p.delete(key);}
      history.replaceState(null,'','#'+p.toString());
    }
    function indexStatus(){
      if(kind==='io')return '등록된 I/O·기능 설명 '+local.length.toLocaleString()+'건에서 검색합니다.';
      if(loading())return kind==='photo'?'현장 사진의 표기를 불러오고 있습니다.':kind==='source'?'도면 본문을 불러오고 있습니다. 검색어와 설비 범위를 바꿀 수 있습니다.':notes?'사진 표기와 등록된 기능 설명을 먼저 표시했습니다. 도면 본문에서 계속 찾고 있습니다.':'검색 자료를 불러오는 중입니다. 등록된 기능 설명은 먼저 표시합니다.';
      if((kind==='photo'?photoState:sourceState)==='failed')return (!kind&&notes?'사진과 등록된 기능 설명은 검색할 수 있습니다. ':'')+'일부 검색 자료를 불러오지 못했습니다. <button type="button" data-io-retry>다시 불러오기</button>';
      if(index)return (!kind&&photoState==='failed'?'사진 표기를 불러오지 못했습니다. <button type="button" data-io-retry>사진 다시 불러오기</button> ':'')+'I/O·기능 설명 '+local.length.toLocaleString()+'건 · 원본 본문 '+index.records.filter(r=>r.kind==='source').length.toLocaleString()+'건 · 사진 표기 '+(notes?.length||0)+'건';
      if(kind==='photo'&&notes)return '현장 사진에서 판독한 표기 '+notes.length+'건에서 검색합니다.';
      return '등록된 기능 설명 '+local.length.toLocaleString()+'건 · 검색어를 입력하면 도면 본문도 찾습니다.';
    }
    function drawStatus(){if(active())$('.io-index-status').innerHTML=indexStatus();}
    function draw({reuse=false}={}){
      if(!active())return;drawStatus();
      resultSlot.setAttribute('aria-busy',String(loading()));
      if(!M.terms(query).length){$('.io-result-status').textContent='태그·번호를 2자 이상 입력하거나 예시를 누르세요.';$('.io-result-types').innerHTML='';resultSlot.innerHTML='';$('.io-search-more').innerHTML='';return;}
      if(!reuse){const sourceRows=[...(notes||[]),...(index?.records.filter(r=>r.kind!=='photo')||[])];allResults=M.search([...local,...sourceRows],query,{equipment:eq});results=kind?allResults.filter(r=>r.kind===kind):allResults;}
      const total=results.length;
      $('.io-result-status').textContent=loading()&&!total?'“'+query+'” · 도면 본문에서 찾는 중입니다.':'“'+query+'” 검색 결과 '+total.toLocaleString()+'건'+(loading()?' · 본문 검색 중':'')+(total>limit?' · '+limit+'건 표시':'');
      const counts={io:0,photo:0,source:0};for(const r of allResults)counts[r.kind]=(counts[r.kind]||0)+1;
      $('.io-result-types').innerHTML=[['','전체',allResults.length],['io','기능 설명',counts.io],['photo','사진 표기',counts.photo],['source','원본 본문',counts.source]].map(([k,label,n])=>`<button type="button" data-io-kind="${k}" aria-pressed="${kind===k}">${label} <b>${n.toLocaleString()}</b></button>`).join('');
      if(!total){
        resultSlot.innerHTML=loading()?'<section class="panel io-search-empty"><h3>검색 자료를 확인하고 있습니다.</h3><p>본문을 읽는 동안에도 검색어와 설비 범위를 바꿀 수 있습니다. 아직 결과 없음으로 확정하지 않았습니다.</p></section>':`<section class="panel io-search-empty"><h3>${(kind==='photo'?photoState:sourceState)==='failed'&&kind!=='io'?'불러온 자료 안에서는 일치하는 표기가 없습니다.':'현재 범위에서 일치하는 표기가 없습니다.'}</h3>${(kind==='photo'?photoState:sourceState)==='failed'&&kind!=='io'?'<p>일부 자료는 검색하지 못했습니다. 다시 불러온 뒤 확인하세요.</p><button type="button" data-io-retry>검색 자료 다시 불러오기</button>':''}<p>${kind||eq?'선택한 설비·자료 범위를 해제하면 다른 자료도 찾을 수 있습니다.':'번호가 원본에 등록·추출되지 않았을 수 있습니다. 도면과 사진의 표기를 확인하세요.'}</p>${kind||eq?'<button type="button" data-io-clear-filters>전체 범위에서 다시 검색</button>':''}${M.normalize(query).replace(/\s/g,'')==='15KA10'?'<p>제공된 사진 상부 라벨은 <strong>14KA10</strong>으로 읽힙니다. 다른 태그로 구분합니다. <button type="button" data-io-query="14KA10">14KA10 검색</button></p>':''}</section>`;
      }else resultSlot.innerHTML=results.slice(0,limit).map((r,i)=>{
        const badge=r.kind==='io'?'기능 설명':r.kind==='photo'?'사진 판독':r.source_type==='drawing'?'도면 본문':r.source_type==='manual'?'매뉴얼 본문':'원본 본문';
        return `<article class="panel io-search-result" tabindex="-1" data-io-result="${i}"><div class="io-result-meta"><span class="badge">${badge}</span><span>${esc(r.equipment_name||r.equipment)}</span>${r.match_context==='section'?'<span class="io-section-match">목차·절 번호 일치</span>':r.match_context==='metadata'?'<span class="io-section-match">파일명·제목 일치</span>':''}</div><h3>${M.highlight(r.title,query)}</h3><p class="io-result-evidence">${esc(r.evidence)}</p><p class="io-result-text">${M.highlight(r.kind==='source'?M.snippet(r.text,query):r.text,query)}</p><p class="io-result-source">근거: ${esc(r.source)}${r.page?' · PDF '+esc(r.page)+'쪽':''}</p><div class="io-result-links">${safeLink(r.url,r.kind==='photo'?'근거 사진 보기':'원본 근거 열기')}${r.reader&&r.reader!==r.url?safeLink(r.reader,'해당 페이지·추출 본문'):''}${r.kind==='io'?`<button type="button" data-view="io" data-equipment="${esc(r.equipment)}">설비 I/O 보기</button>`:''}</div>${r.kind==='source'?`<details data-io-full="${i}"><summary>이 결과의 추출 본문 전체</summary><pre></pre></details>`:''}</article>`;
      }).join('');
      $('.io-search-more').innerHTML=total>limit?'<button type="button" data-io-more>결과 30건 더 보기</button>':'';
      const coverage=(index?.coverage||[]).filter(c=>!eq||c.equipment===eq);
      $('.io-coverage').textContent=coverage.length?'현재 범위의 추출 가능한 본문과 등록 설명을 검색합니다. 텍스트가 없는 PDF 페이지 '+coverage.reduce((n,c)=>n+c.unreadable_pages,0).toLocaleString()+'건은 본문 검색에서 제외됩니다(설비별 중복 참조 포함).':'';
    }
    async function ensureData({retry=false}={}){
      if(!M.terms(query).length||kind==='io')return;
      if(kind==='photo'){
        if(photoState==='ready'||photoState==='loading'||photoState==='failed'&&!retry)return;
        photoState='loading';draw();
        try{const value=await L.loadNotes();notes=cachedNotes=value.records;photoState='ready';if(index?.notesError)index=cachedIndex={...index,notesError:false,records:[...notes,...index.records.filter(r=>r.kind!=='photo')]};}catch{photoState='failed';}
        draw();return;
      }
      if(sourceState==='loading'||sourceState==='ready'&&!retry||sourceState==='failed'&&!retry)return;
      sourceState='loading';draw();
      try{
        index=cachedIndex=await L.load({onProgress:event=>{
          if(event.phase==='notes'){notes=cachedNotes=event.records;photoState='ready';draw();}else drawStatus();
        }});
        notes=cachedNotes=index.records.filter(r=>r.kind==='photo');sourceState='ready';photoState=index.notesError?'failed':'ready';
      }catch{sourceState='failed';}
      draw();
    }
    function run(){clearTimeout(timer);query=input.value.trim();eq=eqSelect.value;kind=kindSelect.value;limit=30;saveQuery();draw();ensureData();}
    $('form').addEventListener('submit',event=>{event.preventDefault();if(!composing&&!event.isComposing)run();});
    input.addEventListener('compositionstart',()=>{composing=true;clearTimeout(timer);});
    input.addEventListener('compositionend',()=>{composing=false;clearTimeout(timer);timer=setTimeout(run,180);});
    input.addEventListener('input',event=>{if(composing||event.isComposing)return;clearTimeout(timer);timer=setTimeout(run,180);});
    eqSelect.addEventListener('change',run);kindSelect.addEventListener('change',run);
    container.addEventListener('toggle',event=>{const d=event.target;if(!d.open||d.dataset.ioFull===undefined)return;const pre=d.querySelector('pre');if(pre&&!pre.dataset.filled){pre.innerHTML=M.highlight(results[Number(d.dataset.ioFull)]?.text||'',query);pre.dataset.filled='true';}},true);
    container.addEventListener('click',async event=>{
      const b=event.target.closest('button');if(!b)return;
      if(b.hasAttribute('data-io-query')){input.value=b.dataset.ioQuery;run();}
      else if(b.hasAttribute('data-io-kind')){kindSelect.value=b.dataset.ioKind;run();}
      else if(b.hasAttribute('data-io-clear-filters')){eqSelect.value='';kindSelect.value='';run();}
      else if(b.hasAttribute('data-io-reset')){input.value='';eqSelect.value='';kindSelect.value='';run();input.focus();}
      else if(b.hasAttribute('data-io-more')){const first=limit;limit+=30;draw({reuse:true});container.querySelector(`[data-io-result="${first}"]`)?.focus();}
      else if(b.hasAttribute('data-io-retry'))ensureData({retry:true});
      else if(b.hasAttribute('data-io-copy')){run();try{await navigator.clipboard.writeText(location.href);if(active())$('.io-action-message').textContent='검색 링크를 복사했습니다.';}catch{if(active())$('.io-action-message').textContent='주소창의 링크를 복사해 주세요.';}}
    });
    saveQuery();draw();ensureData();
    return ()=>{disposed=true;clearTimeout(timer);};
  }
  window.EDIOSearch={attach};
})();
