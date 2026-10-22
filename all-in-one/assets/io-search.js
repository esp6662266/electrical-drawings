(() => {
  'use strict';
  const M=window.EDIOSearchModel,esc=M.escape;
  let index=null,pending=null;
  async function loadIndex(){
    if(index)return index;
    if(!pending)pending=fetch('../data/io-search-index.json').then(r=>{if(!r.ok)throw new Error('HTTP '+r.status);return r.json();}).then(value=>{if(value.schema_version!==1||!Array.isArray(value.records))throw new Error('검색 자료 형식 오류');index=value;return value;}).finally(()=>{pending=null;});
    return pending;
  }
  const safeLink=(url,label)=>{const safe=window.EDProjectModel.url(url);return safe?'<a href="'+esc(safe)+'" target="_blank" rel="noopener noreferrer">'+esc(label)+' ↗</a>':'';};
  function attach(container,{project}){
    const params=new URLSearchParams(location.hash.slice(1));
    let query=params.get('q')||'',eq=params.get('search-equipment')||'',kind=params.get('search-kind')||'',limit=30,timer=null,failed=false,loading=!index,results=[];
    const local=M.fromProject(project),equipment=project.equipment||[];
    const options=equipment.map(e=>'<option value="'+esc(e.id)+'">'+esc(e.name)+'</option>').join('');
    container.innerHTML=`<section class="panel io-search-panel" aria-labelledby="io-search-title"><span class="eyebrow">기기 태그 → 기능 → 원본 근거</span><h2 id="io-search-title">I/O·단자·배선 검색</h2><p>기기 태그, 배선·단자 번호 또는 PLC 주소를 입력하세요. 모든 설비의 등록 설명과 검색 가능한 원본 본문을 함께 찾습니다.</p><form class="io-search-form" role="search"><label for="io-query">찾을 태그·번호·기능</label><div class="io-search-bar"><input id="io-query" name="q" type="search" maxlength="160" placeholder="예: 14KA10, 8.9, 8.10, 13.6, X010" autocomplete="off" value="${esc(query)}"><button type="submit">검색</button></div><div class="io-search-filters"><label for="io-filter-equipment">설비 범위<select id="io-filter-equipment" aria-label="설비 범위"><option value="">전체 설비 + 현장 사진</option>${options}<option value="PHOTO-UNASSIGNED">현장 사진 · 설비 미연결</option></select></label><label for="io-filter-kind">자료 구분<select id="io-filter-kind" aria-label="자료 구분"><option value="">전체 자료</option><option value="io">I/O·기능 설명</option><option value="source">원본 본문</option><option value="photo">현장 사진 표기</option></select></label></div></form><div class="io-examples" aria-label="검색 예시"><span>바로 검색</span>${['14KA10','15KA10','14KA8','8.9','8.10','13.6','X010'].map(q=>'<button type="button" data-io-query="'+q+'">'+q+'</button>').join('')}</div><p class="io-index-status" role="status"></p></section><div class="io-result-status" role="status" aria-live="polite"></div><div class="io-search-results"></div><div class="io-search-more"></div><section class="panel io-search-help"><h2>번호와 기능을 확인하는 방법</h2><p><strong>같은 번호라도 설비·도면이 다를 수 있습니다.</strong> 결과의 설비와 원본 페이지를 함께 확인하세요. 사진의 선번을 단자대 번호나 PLC 주소로 자동 변환하지 않습니다.</p><p>기능 설명이 등록된 결과는 설명을 먼저 보여줍니다. 원본 본문 결과는 해당 번호가 나온 문맥이며, 배선의 연결 관계를 자동 판독한 결과는 아닙니다. 텍스트가 없는 스캔·사진과 전용 CAD/PLC 파일은 본문 검색에 포함되지 않을 수 있습니다.</p></section>`;
    const $=selector=>container.querySelector(selector),input=$('#io-query'),eqSelect=$('#io-filter-equipment'),kindSelect=$('#io-filter-kind');
    eqSelect.value=eq;if(eqSelect.value!==eq)eq='';kindSelect.value=kind;if(kindSelect.value!==kind)kind='';
    function saveQuery(){if(!container.isConnected)return;const p=new URLSearchParams(location.hash.slice(1));for(const [key,value] of [['q',query],['search-equipment',eq],['search-kind',kind]]){if(value)p.set(key,value);else p.delete(key);}history.replaceState(null,'','#'+p.toString());}
    function draw(){
      if(!container.isConnected)return;
      $('.io-index-status').innerHTML=loading?'도면 본문을 불러오는 중입니다. 등록된 I/O 설명은 먼저 검색할 수 있습니다.':failed?'도면 본문을 불러오지 못했습니다. 등록된 I/O 설명만 표시합니다. <button type="button" data-io-retry>본문 다시 불러오기</button>':'등록된 I/O 설명 '+local.length.toLocaleString()+'건 · 원본 본문 '+(index?.records.filter(r=>r.kind==='source').length||0).toLocaleString()+'건 · 현장 사진 표기 '+(index?.records.filter(r=>r.kind==='photo').length||0)+'건';
      if(!M.terms(query).length){$('.io-result-status').textContent='태그·번호를 2자 이상 입력하거나 위 예시를 누르세요.';$('.io-search-results').innerHTML='';$('.io-search-more').innerHTML='';return;}
      results=M.search([...local,...(index?.records||[])],query,{equipment:eq,kind});
      const shown=results.slice(0,limit);
      $('.io-result-status').textContent='“'+query+'” 검색 결과 '+results.length.toLocaleString()+'건'+(loading?' · 본문 추가 검색 중':'')+(results.length>limit?' · '+limit+'건 표시':'');
      if(!results.length){$('.io-search-results').innerHTML='<section class="panel io-search-empty"><h3>일치하는 표기를 찾지 못했습니다.</h3><p>설비·자료 범위를 전체로 바꾸거나 번호를 확인해 주세요. 등록·추출되지 않은 번호의 기능은 추정하지 않습니다.</p>'+(M.normalize(query).replace(/\s/g,'')==='15KA10'?'<p>제공된 사진 상부 라벨은 <strong>14KA10</strong>으로 읽힙니다. 15KA10과 다른 태그입니다. <button type="button" data-io-query="14KA10">14KA10 검색</button></p>':'')+'</section>';}
      else $('.io-search-results').innerHTML=shown.map(r=>`<article class="panel io-search-result"><div class="io-result-meta"><span class="badge">${esc(r.kind==='io'?'기능 설명':r.kind==='photo'?'사진 판독':'원본 본문')}</span><span>${esc(r.equipment_name||r.equipment)}</span></div><h3>${M.highlight(r.title,query)}</h3><p class="io-result-evidence">${esc(r.evidence)}</p><p class="io-result-text">${M.highlight(r.kind==='source'?M.snippet(r.text,query):r.text,query)}</p><p class="io-result-source">근거: ${esc(r.source)}${r.page?' · PDF '+esc(r.page)+'쪽':''}</p><div class="io-result-links">${safeLink(r.url,r.kind==='photo'?'근거 사진 보기':'원본 근거 열기')}${r.reader&&r.reader!==r.url?safeLink(r.reader,'해당 페이지·추출 본문'):''}${r.kind==='io'?'<button type="button" data-view="io" data-equipment="'+esc(r.equipment)+'">설비 I/O 보기</button>':''}</div>${r.kind==='source'?'<details><summary>이 결과의 추출 본문 전체</summary><pre>'+M.highlight(r.text,query)+'</pre></details>':''}</article>`).join('');
      $('.io-search-more').innerHTML=results.length>limit?'<button type="button" data-io-more>결과 30건 더 보기</button>':'';
    }
    function run(){clearTimeout(timer);query=input.value.trim();eq=eqSelect.value;kind=kindSelect.value;limit=30;saveQuery();draw();}
    $('form').addEventListener('submit',event=>{event.preventDefault();run();});
    input.addEventListener('input',event=>{if(event.isComposing)return;clearTimeout(timer);timer=setTimeout(run,180);});
    input.addEventListener('compositionend',()=>{clearTimeout(timer);timer=setTimeout(run,180);});
    eqSelect.addEventListener('change',run);kindSelect.addEventListener('change',run);
    container.addEventListener('click',event=>{const button=event.target.closest('button');if(!button)return;if(button.hasAttribute('data-io-query')){input.value=button.dataset.ioQuery;run();}else if(button.hasAttribute('data-io-more')){limit+=30;draw();}else if(button.hasAttribute('data-io-retry'))load();});
    async function load(){loading=true;failed=false;draw();try{await loadIndex();}catch{failed=true;}loading=false;draw();}
    if(index)draw();else load();
  }
  window.EDIOSearch={attach};
})();
