import {readFile,writeFile,copyFile} from 'node:fs/promises';
import vm from 'node:vm';
const root=new URL('../',import.meta.url),folder=new URL('documents/totalizer-02/',root),ctx={window:{}};
vm.runInNewContext(await readFile(new URL('data/project.js',root),'utf8'),ctx);
const e=ctx.window.ED_PROJECT.equipment.find(e=>e.id==='TOTALIZER-02');
const manifest=JSON.parse(await readFile(new URL('source-manifest.json',folder),'utf8'));
const previews=JSON.parse(await readFile(new URL('preview-manifest.json',folder),'utf8'));
const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const relative=u=>u.replace('/documents/totalizer-02/','');
const sections=[['overview','설비·자료 기준'],['io','입출력·주소·단자'],['control','제어 구조·동작 설명'],['circuits','전기 전달 경로'],['alarms','알람·정지·복구 기준'],['repair','증상별 점검'],['completion','완료 기준·추가 확인']];
const table=(columns,rows)=>'<div class="scroll"><table><thead><tr>'+columns.map(([k,l])=>'<th>'+esc(l)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+columns.map(([k])=>'<td>'+esc(r[k])+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
const shell=(title,body)=>'<!doctype html><html lang="ko" translate="no"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+' · 2번 적산기</title><link rel="stylesheet" href="manual.css"></head><body><header><small>전기도면 · TOTALIZER-02 · v1.2.0 · 2026-10-20</small><h1>'+esc(title)+'</h1><a href="/all-in-one/#view=summary&equipment=TOTALIZER-02">2번 적산기 작업실</a> · <a href="manual.html">작성 매뉴얼</a></header><main>'+body+'</main><footer>원본·문서 설명·현장 확인을 구분합니다. PLC·설정 변경·운전·시운전을 실행하지 않았습니다.</footer></body></html>';
await copyFile(new URL('documents/salt-feeder-01/manual.css',root),new URL('manual.css',folder));
await writeFile(new URL('manual.css',folder),(await readFile(new URL('manual.css',folder),'utf8'))+'\nfigure{margin:24px 0;padding:16px;background:#fff;border:1px solid #cbd5e1;border-radius:10px}figure img{display:block;max-width:100%;height:auto;margin:auto}figcaption{margin-top:12px;font-weight:600}.paragraph{white-space:pre-wrap;overflow-wrap:anywhere;border-bottom:1px solid #e2e8f0;padding:8px 0}.paragraph small{display:block;color:#64748b}.reader-nav{display:flex;gap:12px;flex-wrap:wrap}.scroll{max-height:720px}.notice{white-space:pre-line}code{overflow-wrap:anywhere} @media print{.scroll{max-height:none;overflow:visible}figure{break-inside:avoid}}\n');
let html='<p class="notice">로컬 검토본입니다. 원본 3개·PDF 20쪽·HWP 2개. 현재 설비·PLC 프로그램·현장 검증은 미확정입니다.</p><p>'+esc(e.description)+'</p><p>'+esc(e.documentation_status)+'</p><nav>'+sections.map(([k,l])=>'<a href="#'+k+'">'+l+'</a>').join('')+'</nav>';
let md='# 2번 적산기\n\nTOTALIZER-02 · v1.2.0 · 2026-10-20 · 로컬 검토본\n\n'+e.description+'\n\n'+e.documentation_status+'\n\n';
for(const [k,l]of sections){const links=e.manual_sources[k].map(s=>'<a href="'+esc(relative(s.url))+'">'+esc(s.label)+'</a>').join(' · ');html+='<section id="'+k+'"><h2>'+l+'</h2><div class="body">'+esc(e.manual[k])+'</div><p class="refs">'+links+'</p></section>';md+='## '+l+'\n\n'+e.manual[k]+'\n\n근거: '+e.manual_sources[k].map(s=>'['+s.label+']('+relative(s.url)+')').join(' / ')+'\n\n';}
for(const [key,title,cols]of [
['io','입출력·주소·단자 참조',[['system','자료 계통'],['direction','구분'],['address','주소/단자'],['name','기능'],['description','확인 경계'],['source','근거']]],
['hmi','조작 화면·설명 그림',[['name','화면/그림'],['description','설명'],['source','근거']]],
['alarms','알람·정지',[['name','항목'],['address','주소'],['trigger','근거'],['reset','복구 경계'],['source','출처']]],
['repair','증상별 점검',[['symptom','증상'],['check','점검 후보'],['source','근거'],['unresolved','미확정']]],
['checks','확인 대장',[['title','항목'],['status','상태'],['evidence','차이/근거'],['next','후속 확인']]]]){
html+='<section><h2>'+title+' · '+e[key].length+'행</h2>'+table(cols,e[key])+'</section>';
md+='## '+title+'\n\n| '+cols.map(c=>c[1]).join(' | ')+' |\n|'+cols.map(()=>'---').join('|')+'|\n'+e[key].map(r=>'| '+cols.map(([k])=>String(r[k]??'').replaceAll('|','/')).join(' | ')+' |').join('\n')+'\n\n';}
html+='<section><h2>원본 목록·보존 해시</h2><p>PDF 20쪽만 페이지 수로 집계합니다. HWP 페이지 수·레이아웃은 미확정입니다.</p><ul>'+manifest.sources.map(s=>'<li><a href="'+esc(relative(s.file))+'">'+esc(s.name)+'</a> · '+(s.pages?s.pages+'쪽':'HWP 원형 보존')+' · '+s.bytes+'bytes<br><code>SHA-256 '+s.sha256+'</code></li>').join('')+'</ul><p><a href="user-manual-reader.html">사용 설명서 본문·그림 열람</a> · <a href="commissioning-reader.html">시운전 요령 본문 열람</a> · <a href="source-manifest.json">출처 매니페스트</a></p></section>';
md+='## 원본 보존\n\n'+manifest.sources.map(s=>'- ['+s.name+']('+relative(s.file)+') / '+(s.pages?s.pages+'쪽':'HWP 페이지 수 미확정')+' / '+s.bytes+'bytes / SHA-256 '+s.sha256).join('\n')+'\n';
await writeFile(new URL('manual.html',folder),shell('2번 적산기 · 도면·설명서 기반 매뉴얼',html));await writeFile(new URL('manual.md',folder),md);
for(const [slug,filename,title,isUser]of [['totalizer-user-manual','user-manual-reader.html','세진메탈 적산기 사용 설명서 · 추출 열람본',true],['casting-totalizer-commissioning','commissioning-reader.html','주조기·적산기 시운전 요령 · 추출 열람본',false]]){
const paras=(await readFile(new URL('extracted/'+slug+'.txt',folder),'utf8')).split('\n\n').filter(Boolean);
let body='<p class="notice">HWP 본문과 삽입 그림을 읽기 위한 추출 열람본입니다. 원본 페이지·표 배치를 재현한 문서가 아니며, 아래 번호는 추출 문단 번호입니다. 그림은 원본 삽입 데이터 식별자로 표시했습니다. OLE 개체와 문서 매크로는 실행하지 않았습니다. 원본의 운전·시운전·설정·복구 문구는 과거 문서 내용이며 현재 설비의 작업 지시나 승인 설정이 아닙니다.</p>';
body+=isUser?'<p class="notice">2006년 2월 (주)세진메탈 표제. P주소 도면과 X주소 본문을 자동 대응하지 않습니다. 용량·주소 오기 후보는 작성 매뉴얼의 확인 대장을 참조하세요.</p>':'<p class="notice">앞부분: 세진메탈 2006 연속주조기 5kg. 뒷부분: 두인 2015 자동적산기 500/1000kg. 서로 다른 업체·설비의 자료입니다. 타 업체 압력·개수·운전/시운전 조건을 2번 적산기 현장값으로 적용하지 않습니다.</p>';
body+='<p><a href="source/'+slug+'.hwp" download>HWP 원본 다운로드</a> · <a href="extracted/'+slug+'.txt">추출 텍스트</a></p><nav class="reader-nav"><a href="#text">본문</a>'+(isUser?'<a href="#figures">삽입 그림 12개</a>':'<a href="#reference-other-customer">두인 2015 표제 구간</a>')+'</nav><section id="text"><h2>추출 본문</h2>';
let other=false;body+=paras.map((p,i)=>{let marker='';if(!isUser&&!other&&p.includes('두')&&p.includes('貴中')){other=true;marker='<aside id="reference-other-customer" class="notice">다음 표제부터는 타 업체(두인) 자료입니다. 앞의 자동적산기 표제와 함께 참고 범위를 구분합니다.</aside>';}
return marker+'<div class="paragraph" id="p-'+(i+1)+'"><small>추출 문단 '+(i+1)+'</small>'+esc(p)+'</div>';}).join('');body+='</section>';
if(isUser){body+='<section id="figures"><h2>삽입 그림 · 12개</h2><p>원본 BinData에서 추출·렌더링했습니다. 문서 안의 페이지 순서를 대신하는 번호가 아닙니다.</p>'+e.hmi.slice().sort((a,b)=>a.url.localeCompare(b.url)).map(h=>{const id=h.url.split('#fig-')[1],file='previews/manual-'+id+'.webp',dimensions=previews.images.find(p=>p.file===file);if(!dimensions)throw new Error('Missing preview dimensions: '+file);return '<figure id="fig-'+id+'"><a href="'+file+'"><img loading="lazy" width="'+dimensions.width+'" height="'+dimensions.height+'" src="'+file+'" alt="'+esc(h.name)+'"></a><figcaption>'+esc(h.source)+' · '+esc(h.name)+'</figcaption><p>'+esc(h.description)+'</p></figure>';}).join('')+'</section>';}
await writeFile(new URL(filename,folder),shell(title,body));}
console.log('TOTALIZER-02 manual HTML/Markdown and two HWP extraction readers generated');
