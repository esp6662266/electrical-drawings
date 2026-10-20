import {readFile,writeFile} from 'node:fs/promises';
import vm from 'node:vm';
const root=new URL('../',import.meta.url),doc='/documents/totalizer-02/';
const manifest=JSON.parse(await readFile(new URL('documents/totalizer-02/source-manifest.json',root),'utf8'));
const pdf=page=>doc+'source/totalizer-plc-20220721.pdf#page='+page;
const user=anchor=>doc+'user-manual-reader.html#'+(anchor||'text');
const commissioning=anchor=>doc+'commissioning-reader.html#'+(anchor||'text');
const src=(p,sheet='')=>'220721 적산기 PLC.pdf · PDF '+p+'쪽'+(sheet?' / '+sheet:'');
const D='PDF 전기도면',U='2006 세진메탈 설명서',T='PDF 단자표(차이 보존)';
const e={id:'TOTALIZER-02',name:'2번 적산기',group:'주조·INGOT 자동 적재',location:'사용자 지정 2번 설비 · 현장 명판/현재 구성 미확인',priority:true,
source_version:'PLC 원본 미제공 · P주소 전기도면과 X주소 설명서 별도 보존',
description:'5kg INGOT를 받아 이송·집기·회전·적층·계량하는 자동 적산기 자료입니다. 원본 3개(PDF 20쪽, HWP 2개)를 보존했습니다. PDF의 광명금속 2004 표제, 세진메탈 2006 설명서, 시운전 문서에 섞인 두인 2015 자료를 구분했습니다. 현재 설치품·프로그램과의 일치는 확인 전입니다.',
documentation_status:'도면·설명서 기반 정리 완료(불일치 포함). PDF 20쪽과 HWP 본문·그림 12개를 검토했습니다. HWP는 텍스트·그림 열람본이며 원본 페이지 배치를 재현한 것은 아닙니다. 실제 PLC 프로젝트·CPU·래더·현장 시험·수리 이력은 미확보/미수행입니다.',
source_count:3,source_pages:20,source_pages_note:'PDF 20쪽만 집계. HWP 원본 페이지 수는 미확정.',native_plc_available:false,field_verified:false,manual_url:doc+'manual.html',
subsystems:[
{id:'DRAWING-2004',name:'P주소 전기도면·반면도',description:'광명금속(주) / 2004-10-15 표제와 ALF AUTO STACKING MACHINE 도면입니다. 입력·출력·릴레이·계량·단자표를 포함합니다.',boundary:'파일명 220721을 도면 설계일이나 최신 개정일로 단정하지 않습니다. 현재 2번 설비 적용 범위 미확정.'},
{id:'MANUAL-2006',name:'세진메탈 사용 설명서',description:'2006년 2월 표제. 4P/7P 집게·이재기·X-LIFT·계량대·조작 화면과 X주소의 동작 설명이 있습니다.',boundary:'P주소와 X주소의 일대일 대응은 확인되지 않았습니다. 본문 300/600/1TON과 조작 설명 500/1000kg도 구분합니다.'},
{id:'REFERENCE-2015',name:'시운전 문서·타 업체 참고',description:'앞부분은 세진메탈 2006 연속주조기 5kg, 뒷부분은 두인 2015 자동적산기 500/1000kg입니다.',boundary:'타 업체 시운전 순서·압력·수량·인버터 설정을 현재 2번 적산기의 승인 운전값으로 채택하지 않습니다.'}],
manual:{},manual_sources:{},io:[],hmi:[],networks:[],calls:[],signals:[],drawings:[],alarms:[],repair:[],checks:[],reviews:[],tests:[]};
e.manual.overview=`1. 대상과 문서 범위
사용자가 지정한 ‘2번 적산기’로 등록했습니다. 여기서 적산기는 수치 적산계가 아니라 주조기에서 나온 INGOT를 자동으로 쌓는 AUTO STACKING MACHINE입니다. 원본 PDF 1개 20쪽과 한글 문서 2개를 원형 보존했습니다. PDF 전체, HWP 본문과 추출 그림 12개를 검토했습니다. HWP 열람본은 검색 가능한 텍스트·그림 추출본이며 원본 페이지나 표 배치의 재현은 아닙니다.

2. 구성과 흐름
자료상 1차 콘베어·INGUIDE·1/2차 스토퍼 → 4P/7P CATCH → 이재기(대차) → X-LIFT → 3차 콘베어 → 계량대·CAS 계량 인터페이스로 구성됩니다. 수동/자동·원위치·단수·적재량·반재/만재 조작 및 상태 표시가 있습니다. 이 흐름은 문서 설명의 요약이며 현장 시퀀스 시험 결과가 아닙니다.

3. 서로 다른 자료 시점
PDF 1쪽 표제는 광명금속(주), 2004년 10월 15일, ASM-04입니다. 파일명 ‘220721’은 문서 내용의 개정 확인 근거가 아닙니다. 사용 설명서는 (주)세진메탈, 2006년 2월 표제입니다. 시운전 요령은 세진메탈 연속주조기(2006)와 두인 자동적산기(2015)가 한 파일에 섞여 있습니다. 어느 자료가 현재 설비에 적용되는지 현장 확인 전입니다.

4. 용량·정격의 경계
사용 설명서 개요에는 300kg·600kg·1TON, 조작·자동 운전 설명에는 500kg·1000kg이 나타납니다. 두 표기를 보존하며 현장 정격으로 하나를 선택하지 않았습니다. 본문 전원 표기는 3상 380V 60Hz, 제어 AC220V, PLC 제어 AC110V, 입력 DC24V, 출력 AC220V입니다. 이는 설명서 표기이고 현재 명판·전원 측정값이 아닙니다. 공압 단위가 혼재된 원문 수치는 현행 설정값으로 변환하지 않았습니다. PDF의 DC24V 출력 릴레이 회로와 AC220V 부하 회로도 구분합니다. 통합 공정 배치도는 아직 제공되지 않았습니다.`;
e.manual.io=`1. 주소 체계 분리
I/O 표는 ‘PDF 전기도면’의 P주소, ‘2006 세진메탈 설명서’의 X주소, 불일치가 있는 PDF 단자표를 나눴습니다. 같은 기능명이 있어도 두 주소를 자동 변환하거나 현재 PLC 할당으로 확정하지 않았습니다. 빈 칸·판독 불명 수기는 임의 기능으로 채우지 않았습니다. NO/NC·정상극성·실제 입력 상태는 미확정입니다.

2. PDF 입력
PDF 4쪽 ASM-09는 P000~P01F의 비상정지·모드·기동/정지·단수·4P/7P 조작입니다. 5쪽 ASM-10은 P020~P03F의 회전·이재기·리프트·계량 조작, 모터과부하·인버터이상 및 계량/제품 센서입니다. 6쪽 ASM-11은 P040~P05F의 INGUIDE BE01~BE11, 이재기 PR01~04, X-LIFT PH01/02·LS02·PR05/06, CATCH RS01~10을 표시합니다.

3. PDF 출력
7쪽 ASM-12는 P060~P07F의 경보 RY01~03, 유압펌프·집게·리프트·스토퍼·계량대 릴레이입니다. 8쪽 ASM-13은 P080~P09F의 콘베어·회전·이재기·CAS 영점/프린트 및 운전 램프입니다. P080의 기능은 수기로 삭제되어 확정하지 않았고 P082 인쇄 원문은 ‘3차콘베어 감속’입니다. 9쪽 ASM-14는 P100~P11F 표시등, 10쪽 ASM-15는 P120~P127 적재 디스플레이 배선입니다. 디스플레이의 통신 규격·수치 코딩·현재 HMI 내부 태그는 미확보입니다.

4. 단자표 불일치
19쪽 대차 A4는 이재기 원위치/감속/이송/감속을 P048/P049/P04A/P04B로 기재하지만 6쪽은 P04B/P04C/P04D/P04E입니다. 19쪽 A3의 SOL01/02는 풀림/잡음, 11쪽 회로의 SOL01/02는 잡음/풀림입니다. 4P/7P 센서 주소는 표 간 비교할 수 있으나 SOL의 기능·배선은 이 차이를 먼저 해소해야 합니다. 수기본 13~16쪽도 정리본과 별도 보존했습니다.

5. 설명서 주소와 오기 후보
설명서에는 EPB01 X000, SEL06 X00B, 계수 센서 X047/X048/X103~108, CATCH X058~X081 등 별도 주소 체계가 있습니다. 같은 센서의 X080/X050, X084/X048 같은 표기 차이는 확인 대장에 남겼습니다. X 주소의 각 숫자를 P주소로 바꾸지 않았습니다. 조작 화면의 버튼은 이미지·문서 근거이며 현재 패널 태그·메모리 맵은 아닙니다.`;
e.manual.control=`1. 문서 기반 공정 단계
사용 설명서는 1차 콘베어에서 INGOT를 모으고, 7P CATCH가 하강·잡음·상승한 뒤 이재기 이송과 7P 회전, 하강·풀림·상승, X-LIFT 적층 높이 조절, 이재기 복귀, 적층 완료 후 3차 콘베어와 계량대로 배출하는 흐름을 서술합니다. 1000kg 설명에서는 4P와 7P를 함께 쓰는 구간이 있고 500kg 설명에는 7P 중심 구간이 있습니다. 실제 프로그램 조건·분기·타이머는 미확보입니다.

2. 원위치와 허가 조건
설명서 원위치 화면에는 7P 풀림/상승/원위치, 4P 풀림/상승, 이재기 원위치, X-LIFT 하강/원위치, 계량대 하강 항목이 보입니다. 제품 감지·카운터·앞 단계 위치 검출과 다음 단계 허가의 관계가 설명됩니다. 여기서는 이 관계만 정리했고 실제 센서 ON/OFF 극성·고장시 동작·허가 로직은 판정하지 않았습니다.

3. 모드·운전 화면
수동·원위치·이상·자동 화면, 500/1000kg, 단수·적재량, 반재/만재, 자동 RUN/STOP와 일시정지가 문서에 있습니다. 원문에 있는 시운전 모드의 제품 유무 가정, 단수 수정, 직접 리프트 조작, 비상정지 해제 후 재개 설명은 현장 작업 지시로 채택하지 않았습니다. 이 문서는 해당 조작의 현재 안전 조건이나 재기동 허가를 확인한 자료가 아닙니다.

4. PLC 분석 범위
파일명에 PLC가 있지만 실제 제공 PDF는 반면도·I/O·릴레이/부하·CAS 접점·단자표입니다. 11/12쪽의 사다리 모양 접점 회로는 전기 결선도이며 복원된 PLC 래더가 아닙니다. CPU 모델·원본 프로젝트·내부 릴레이·D레지스터·스캔 로직·타이머·네트워크·호출 블록은 미확보입니다. 래더와 호출 표는 빈 상태로 유지합니다. 신호 구조 탭은 확인된 외부 배선·문서상의 관계만 표시합니다.`;
e.manual.circuits=`1. 입력 신호 경로
PDF 4~6쪽은 P24V/N24V 공통과 조작 접점·BE/PR/PH/LS/RS 센서에서 P주소 입력으로 이어지는 도면입니다. P000 비상정지 입력이 있다는 사실만으로 동력 차단·안전등급·이중 안전회로가 검증되지는 않습니다. 단자표의 색상·기호는 해당 원본 참조이며 현재 케이블 색상이나 단자 번호를 새로 지정하지 않았습니다.

2. PLC 출력과 중계 릴레이
PDF 7/8쪽에서 P060~P089 일부 출력은 RY01~RY42 코일과 연결됩니다. 예: P069→RY10, P06A→RY11, P088→RY41, P089→RY42입니다. PDF 11쪽은 RL220/TL220에서 RY 접점을 거쳐 MG01/02와 SOL01~20 부하로 이어지는 별도 AC220V 결선입니다. 따라서 PLC 출력, 중계 릴레이 코일, 릴레이 접점, 실제 부하를 각각 구분합니다. SOL01/02 기능 상충은 현재 배선 확정 전입니다.

3. 작동기·구동부
11쪽에 4P/7P 잡음·풀림·상하·회전, X-LIFT 고속/저속 상하, 유압릴리프, INGOT UP, 1/2차 스토퍼, 계량대 상하의 SOL 부하가 표시됩니다. 20쪽 A6/A7에는 1/2차 콘베어측 센서와 해당 SOL이 있습니다. 이 자료 묶음에는 전체 주동력 회로·차단기/인버터 정격 및 현재 설정을 확정할 근거가 부족합니다.

4. 표시·계량·경보
8/9쪽 P098~P11D 일부는 운전·상태 램프, 10쪽 P120~P127은 적재 디스플레이 배선입니다. 12쪽 CASCOM은 RY41/42를 통해 CAS 영점/프린트 접점으로 이어지고 BZCOM은 RY01~03을 통해 BZ1~3 경보음으로 이어집니다. 이는 외부 접점 연결이며 계량 로드셀 배선·CAS 모델·교정값·통신 주소·각 부저의 프로그램 발생 조건은 확인 전입니다.`;
e.manual.alarms=`1. 자료에 있는 이상 표시
PDF P030 모터과부하, P031 인버터이상 입력과 P107/P108 램프를 구분했습니다. 설명서 이상 화면에는 1차 콘베어 인버터, 2차 콘베어 인버터, X-LIFT, 이재기, 유압 모터 관련 다섯 항목이 보입니다. 각 항목의 현재 고장 코드·대상 기기·트립 원인·래치·복구 로직은 미확보입니다.

2. 경보와 경보 정지
P014는 경보정지 조작 입력, P060~62→RY01~03→BZ1~3은 도면상의 경보 출력 경로입니다. 경보정지는 원인 제거 또는 보호기 리셋과 구분합니다. 세 경보음의 원인별 대응과 타이머는 PLC 원본이 있어야 확인할 수 있습니다.

3. 정지·재기동의 해석
설명서의 비상정지·일시정지 해제 후 동작 재개, ERROR RESET 또는 전원 재투입 문구는 과거 문서의 설명으로만 남깁니다. 현재 설비의 안전 회로·재기동·잔류 에너지·집게/리프트 유지 상태는 검증하지 않았습니다. 자동 복구나 반복 리셋을 점검 결과로 기록하지 않습니다.

4. 기록 기준
현장 고장이 발생하면 최초 시각·화면·기기 알람 코드·정지한 단계·센서 실물·실제 관찰과 조치를 각각 기록해야 합니다. 이번 작성에서는 실제 알람 발생·해제·운전 성공 또는 수리 완료 이력을 생성하지 않았습니다.`;
e.manual.repair=`1. 공통 식별
현재 설비 명판·반번호·프로그램 버전과 도면 적용 범위를 먼저 대조할 수 있도록 확인 대장을 만들었습니다. 아래 항목은 문서로 추린 점검 후보이며 실제 고장 원인이나 현장 조치 결과가 아닙니다. 현장 작업은 현행 작업 절차와 에너지 차단·잔류 에너지 확인 기준을 적용해야 합니다.

2. 전체 동작 또는 자동 진입 불가
수동/자동·정상/시운전·비상정지의 실제 상태, 보호기 표시, 원위치 조건과 어느 단계에서 정지했는지를 구분합니다. PDF P주소와 설명서 X주소는 해당 자료 안에서만 추적합니다. 시운전 모드 전환·센서 우회·강제 출력으로 원인을 판정하지 않습니다.

3. 집게·이재기·리프트 정지
4P/7P 센서, 이재기 위치/감속, X-LIFT 제품 감지/상하/회전과 선행 단계 검출을 별개 후보로 정리합니다. 릴레이 출력과 AC220V SOL 부하는 다른 회로입니다. 특히 A4 주소와 SOL01/02 기능 상충을 해소하기 전에는 한 표만으로 현장 배선을 단정하지 않습니다.

4. INGOT 계수·적층·취출 불량
INGUIDE BE01~11과 설명서 PH 계수 센서, 스토퍼, 4P/7P 집기 구성, X-LIFT와 3차 콘베어·계량대 위치를 구간별로 나눕니다. 문서에 나오는 단수·개수·500/1000kg 모드가 현재 설정인지 별도 확인해야 합니다. 계량은 CAS 접점 기능과 실제 중량 교정/로드셀 문제를 구분합니다.

5. 정기 관리·기록
설명서에는 광전 센서 오염, 볼트 풀림, 공압·유압, 리미트/센서 배선, 릴레이·퓨즈 등의 점검 항목이 있습니다. 이를 점검 후보로 옮겼으며 실제 점검 주기 승인이나 결과는 현장 기록으로 남겨야 합니다. 수리 기록 양식은 비워 두었습니다.`;
e.manual.completion=`작성한 것
- 사용자 지정 원본 3파일의 bytes/SHA-256 보존 대조
- PDF 20쪽 렌더링·시각 검토와 개별 페이지 원본 연결
- HWP 2문서 본문 추출·검토, 사용 설명서 그림 12개 열람본
- 설비 구성·7개 매뉴얼 항목·P주소/X주소/단자표 분리·조작 화면·외부 신호·알람·증상별 점검
- 자료 시점·업체·용량·주소·SOL 표기의 불일치 확인 대장

추가 확인할 것
- 현재 2번 적산기 명판·적재 정격·전원·공압/유압·실제 구성과 적용 도면
- 현재 PLC CPU와 원본 프로젝트·실제 I/O·래더·타이머·인버터/HMI 백업
- P주소 전기도면과 X주소 설명서의 버전 관계
- 대차 A4 주소(P048~04B vs P04B~04E)와 SOL01/02 기능 상충
- 설명서 X080/X050 및 X084/X048 등 오기 후보
- 비상정지·일시정지·재기동·집게와 리프트 유지·보호 회로의 현재 검증 근거
- 계량기 모델·로드셀·교정·디스플레이 코드와 현장 고장/복구 기록

완료 판정
도면·설명서 기반 문서화 완료(불일치 포함)입니다. HWP 원본 페이지 배치·페이지 수는 재현/확정하지 않았습니다. PLC 프로그램 분석, 실제 운전/시운전, 통전 측정, 안전 기능 시험과 수리는 수행하지 않았습니다.`;
const refs=(...pages)=>pages.map(p=>({label:src(p),url:pdf(p)}));
e.manual_sources={overview:[...refs(1),{label:'사용 설명서 · 본문 추출본',url:user()},{label:'시운전 요령 · 혼합 자료 주의',url:commissioning()}],io:[...refs(4,5,6,7,8,9,10,19),{label:'설명서 · X주소 본문',url:user()}],control:[{label:'설명서 · 동작·원위치·자동 설명',url:user()},...refs(11,12)],circuits:refs(6,7,8,10,11,12,19,20),alarms:[...refs(5,9,12),{label:'이상 화면 그림',url:user('fig-bin0005')},{label:'ERROR 설명 그림',url:user('fig-bin000b')}],repair:[{label:'사용 설명서 · 보수 점검',url:user()},...refs(6,11,19)],completion:[...refs(1,6,19),{label:'세진메탈 설명서·원본 연결',url:user()},{label:'시운전 자료·타 업체 구분',url:commissioning('reference-other-customer')}]};
function input(address,name,page,description=''){e.io.push({system:D,direction:'입력 참조',address,name,type:'P주소 · 도면 표기',description:description||'자료상 입력. 현재 할당·정상극성·실물 상태는 미확정.',source:src(page)});}
function series(start,names,page){names.forEach((name,i)=>{if(name)input('P'+(start+i).toString(16).toUpperCase().padStart(3,'0'),name,page);});}
series(0x000,['비상정지','수동','자동','원위치요구','자동운전','자동정지','유압펌프운전','유압펌프정지','500KG','1000KG','단수설정','단수표시','설정 +','설정 -','정상','시운전','INGUIDE UP','1차스토퍼','2차스토퍼','RESET / 단자표 카운트 RESET','경보정지','3차콘베어 역회전(인쇄 원문·수기 변경 있음)','3차콘베어운전','3차콘베어정지','4P 풀림','4P 잡음','4P 상승','4P 하강','7P 풀림','7P 잡음','7P 상승','7P 하강'],4);
series(0x020,['7P 회전','7P 원위치','이재기 이송','이재기 원위치','X-LIFT 상승','X-LIFT 하강','X-LIFT 회전',null,'계량기 상승','계량기 하강','반재','만재','강제취출','반재시작'],5);
input('P030','모터과부하',5);input('P031','인버터이상',5);
series(0x038,['계량대 상승 · LS03','계량대 하강 · LS04','제품감지 X-LIFT 상승 · BE12','3차콘베어 정지 · BE14','3차콘베어 감속 · BE15'],5);
for(let i=0;i<11;i++)input('P'+(0x040+i).toString(16).toUpperCase().padStart(3,'0'),'INGUIDE '+String(i+1).padStart(2,'0')+' · BE'+String(i+1).padStart(2,'0'),6);
series(0x04B,['이재기 원위치 · PR01','이재기 원위치 감속 · PR02','이재기 이송 · PR03','이재기 이송 감속 · PR04'],6);
series(0x050,['X-LIFT 제품감지 하강 · PH01','X-LIFT 상승정지 · PH02',null,'X-LIFT 하강 · LS02','X-LIFT 회전 · PR05','X-LIFT 회전 감속 · PR06','4P 풀림 · RS01','4P 잡음 · RS02','4P 상승 · RS03','4P 하강 · RS04','7P 풀림 · RS05','7P 잡음 · RS06','7P 상승 · RS07','7P 하강 · RS08','7P 회전 · RS09','7P 원위치 · RS10'],6);
function output(address,name,page,relay='',description=''){e.io.push({system:D,direction:'출력 참조',address,name,type:'P주소 · '+(relay||'표시/배선'),description:[relay?'중계 '+relay:'',description||'자료상 출력. 현재 PLC·부하·정상 상태는 미확정.'].filter(Boolean).join(' / '),source:src(page)});}
['BZ1','BZ2','BZ3'].forEach((n,i)=>output('P06'+i,n,7,'RY0'+(i+1),'12쪽 RY01~03→BZ1~3. 경보 발생 조건은 미확보.'));
const out7=['유압펌프','4P 잡음','4P 풀림','4P 상승','4P 하강','7P 잡음','7P 풀림','7P 상승','7P 하강','7P 회전','7P 원위치','X-LIFT 상승 고속','X-LIFT 하강 고속','X-LIFT 상승 저속','X-LIFT 하강 저속','유압릴리프','INGOT UP','1차스토퍼','2차스토퍼','계량대 상승','계량대 하강'];
out7.forEach((n,i)=>output('P'+(0x068+i).toString(16).toUpperCase().padStart(3,'0'),n,7,'RY'+String(i+9).padStart(2,'0')));
['기능 삭제/수기 변경 · 미확정','3차콘베어 운전','3차콘베어 감속','X-LIFT 회전','X-LIFT 회전 감속','이재기 원위치','이재기 이송','이재기 감속 운전','CAS 영점','CAS 프린트'].forEach((n,i)=>output('P08'+i,n,8,'RY'+(33+i),i<5?'인쇄 원문과 수기 화살표를 함께 보존. 현재 대응 미확정.':''));
for(const [a,n]of [['P098','자동운전 램프'],['P099','유압펌프운전 램프'],['P09A','원위치요구 램프'],['P09C','3차콘베어운전 램프']])output(a,n,8);
const lamps=['비상정지','수동','자동','500KG','1000KG','강제취출','원위치요구','모터과부하','인버터이상','INGOT UP','이재기 원위치','4P 풀림','4P 상승','7P 풀림','7P 상승','7P 원위치','X-LIFT 하강','X-LIFT 원위치','계량기 하강','1차스토퍼','이재기 이송','4P 잡음','4P 하강','7P 잡음','7P 하강','7P 회전','X-LIFT 상승','X-LIFT 회전','계량기 상승','2차스토퍼'];
lamps.forEach((n,i)=>output('P'+(0x100+i).toString(16).toUpperCase(),n+' 램프',9));
for(let i=0;i<8;i++)output('P12'+i,'적재 디스플레이 '+(i<4?'1':'2')+' 배선',10,'','외부 디스플레이 배선. 데이터 형식·통신·중량 실측값으로 해석하지 않음.');
const xrefs=[['X000','EPB01 비상정지'],['X00B','SEL06 정상/시운전'],['X047','PH1-1 계수'],['X048','PH2-1 계수'],['X049','PH03 제품 감지'],['X04A','PH04 제품 감지'],['X04B','PH05 계량 콘베어 정지'],['X04D','PB12 강제취출'],['X054','PX01 이재기 이송'],['X057','PX04 이재기 원위치'],['X058','RPX02 4P 잡음'],['X059','RPX03 4P 풀림'],['X05A','RPX04 4P 상승'],['X05B','RPX05 4P 하강'],['X05C','RPX06 7P 잡음'],['X05D','RPX07 7P 풀림'],['X05E','RPX08 7P 상승'],['X05F','RPX09 7P 하강'],['X080','RPX10 7P 회전(다른 곳 X050 표기)'],['X081','RPX11 7P 원위치'],['X083','LS04 X-LIFT 하강'],['X084','PX05 X-LIFT 원위치(다른 곳 X048 표기)'],['X088','LS09 계량대 상승'],['X089','LS10 계량대 하강'],['X08A','LS11 콘베어 역회전'],['X08B','LS12 콘베어 정회전']];
for(let i=0;i<6;i++)xrefs.push(['X'+(0x103+i).toString(16).toUpperCase(),'PH2-'+(i+2)+' 계수']);
for(const [address,name]of xrefs)e.io.push({system:U,direction:'설명서 입력 참조',address,name,type:'X주소 · 본문 표기',description:'P주소와 자동 대응하지 않음. 원문 오기·현재 프로그램 대조 필요.',source:'세진메탈-적산기 사용 설명서.hwp · 본문 추출본'});
for(const [address,name]of [['P048','A4 이재기 원위치'],['P049','A4 이재기 원위치 감속'],['P04A','A4 이재기 이송'],['P04B','A4 이재기 이송 감속'],['SOL01','A3 4P 풀림'],['SOL02','A3 4P 잡음']])e.io.push({system:T,direction:'단자표 참조',address,name,type:'불일치 · 19쪽 원문',description:address.startsWith('P')?'6쪽의 P04B/P04C/P04D/P04E와 다름. 어느 쪽이 현재 배선인지 미확정.':'11쪽 SOL01 잡음/SOL02 풀림과 반대. 현장 결선 확정 전.',source:src(19,'A3/A4')});
const hmi=[['수동 조작','유압펌프·콘베어·집게·이재기·리프트·스토퍼','manual','bin0003'],['원위치','7P/4P 풀림·상승, 이재기·X-LIFT·계량대 위치','home','bin0004'],['이상','1/2차 콘베어 인버터·X-LIFT·이재기·유압모터','alarm','bin0005'],['수동 설명','유압펌프와 리프트 조작의 문서상 관계','manual detail','bin0006'],['자동','500/1000kg·단수·적재량·카운터','auto','bin0007'],['원위치 설명','정상/시운전 구분과 각 위치 설명','home detail','bin0008'],['순차 동작','앞 단계 위치 검출과 후속 단계 허가 설명','sequence','bin0009'],['반재·패턴','500kg·1000kg 단수/회전 패턴의 과거 예시','pattern','bin000a'],['ERROR','고장 화면 설명·현재 복구 승인 아님','error','bin000b'],['메뉴','수동·원위치·이상·자동 메뉴','menu','bin000c'],['일시정지','현재 위치 정지와 재개에 대한 과거 설명','pause','bin000d'],['실제 조작반 사진','단수·적재량·자동·각 장치 버튼 사진','photo','bin0001']];
e.hmi=hmi.map(([name,description,screen,fig])=>({system:U,name,address:'내부 HMI 태그 미확보',screen,description:description+' / 현재 화면·운전 설정은 미확인.',source:'사용 설명서 삽입 그림 '+fig.toUpperCase(),url:user('fig-'+fig)}));
const pages=[
['조작반 반면도 · ASM-04','반면도','광명금속(주) / 2004-10-15','패널·선택/기동·표시 구성'],['조작반 조작부 · 수기본','반면도·수기','작성/수기 시점 미상','인쇄 버튼과 수기 변경을 구분'],['조작반 표시등 · 수기본','반면도·수기','작성/수기 시점 미상','표시등 수기 주소·원문 대조'],['입력 P000~P01F · ASM-09','입력','개정 미확인','비상정지·모드·기동/정지·집게 조작'],['입력 P020~P03F · ASM-10','입력','개정 미확인','이재기·리프트·계량·보호·센서'],['입력 P040~P05F · ASM-11','입력','개정 미확인','INGUIDE·이재기·X-LIFT·4P/7P 센서'],['출력 P060~P07F · ASM-12','출력·릴레이','개정 미확인','경보·유압·집게·리프트·스토퍼·계량대'],['출력 P080~P09F · ASM-13','출력·릴레이·표시','개정 미확인','콘베어·회전·이재기·CAS·운전 램프'],['출력 P100~P11F · ASM-14','표示 램프','개정 미확인','状態 램프 배선'],['출력 P120~P12F · ASM-15','디스플레이','개정 미확인','P120~127 적재 디스플레이 배선'],['AC220V 부하 · ASM-16','릴레이·SOL','개정 미확인','RL220/TL220 → RY접점 → MG/SOL'],['CAS·BZ 접점 · ASM-17','계량·경보','개정 미확인','RY41/42→CAS영점/프린트, RY01~03→BZ1~3'],['단자대02 · 수기본','단자·수기','수기 시점 미상','로컬 B1/B2 표시·디스플레이'],['단자대01 · 수기본','단자·수기','수기 시점 미상','로컬 A1/A2 조작 입력'],['단자대04 · 수기본','단자·수기','수기 시점 미상','1차 A6 / 2차 A7'],['단자대03 · 수기본','단자·수기','수기 시점 미상','대차 A3/A4 / 3차 A5'],['로컬 A1/A2 단자표','단자표','개정 미확인','입력·카운트RESET·계량/리프트 조작'],['로컬 B1/B2 단자표','단자표','개정 미확인','램프·적재 디스플레이·BZ'],['대차 A3/A4·3차 A5 단자표','단자표·상충','개정 미확인','A4 주소와 SOL01/02 기능 차이 미해소'],['1차 A6·2차 A7 단자표','단자표','개정 미확인','INGUIDE·X-LIFT·SOL·계량대']];
e.drawings=pages.map(([name,kind,version,path],i)=>({name,kind:kind.replace('示','시'),system:D,version,path:path.replace('状態','상태'),page:i+1,source:src(i+1),url:pdf(i+1),preview:doc+'previews/plc-'+String(i+1).padStart(2,'0')+'.webp',source_id:'totalizer-plc-20220721'}));
const signals=[['입력 센서·조작','P000~P05F','조작 접점·BE/PR/PH/LS/RS','도면상의 PLC 입력',src(4)+'; '+src(5)+'; '+src(6)],['중계 릴레이','P060~P089 일부 → RY01~RY42','도면상의 PLC 출력','중계 릴레이 코일',src(7)+'; '+src(8)],['4P SOL 상충','P069/06A → RY10/11 → SOL01/02','출력→중계접점','4P 집게 부하 / 기능상충',src(7)+'; '+src(11)+' vs '+src(19)],['계량 접점','P088/P089 → RY41/42 → CAS','PLC 출력·중계접점','CAS 영점/프린트 접점',src(8)+'; '+src(12)],['경보 접점','P060~62 → RY01~03 → BZ1~3','PLC 출력·중계접점','BZCOM 경보음',src(7)+'; '+src(12)],['상태 표시','P098~P11D 일부','도면상의 PLC 출력','패널 램프',src(8)+'; '+src(9)],['적재 디스플레이','P120~P127','도면상의 PLC 출력','디스플레이 1/2 외부 배선',src(10)+'; '+src(18)]];
e.signals=signals.map(([name,address,writer,reader,source])=>({system:D,name,address,writer,reader,source}));
e.alarms=[
{system:D,name:'모터과부하',address:'입력 P030 / 램프 P107',trigger:'도면상 보호 입력·표시. 실제 트립 코드·발생은 미확인.',reset:'대상 보호기·원인·현행 복구 기준 확인 전',source:src(5)+'; '+src(9)},
{system:D,name:'인버터이상',address:'입력 P031 / 램프 P108',trigger:'도면상 이상 입력·표시. 인버터별 코드·로직 미확보.',reset:'기기 코드·원인 대조 필요. 반복 리셋 지시 아님.',source:src(5)+'; '+src(9)},
{system:D,name:'경보음 1/2/3',address:'P060~P062 / RY01~03 / BZ1~3',trigger:'프로그램별 발생 조건·시간 미확보',reset:'P014 경보정지와 실제 보호 원인 해소를 구분',source:src(7)+'; '+src(12)},
{system:U,name:'이상 화면 5항목',address:'HMI 태그 미확보',trigger:'1/2차 콘베어 인버터·X-LIFT·이재기·유압모터 문서 화면',reset:'과거 ERROR 설명과 현재 현장 승인·안전조건을 구분',source:'사용 설명서 그림 BIN0005/BIN000B'}];
const repairs=[
['전체 무동작','명판/반번호 → 전원·모드·비상정지·보호 표시의 관찰 구간 구분','PDF 4/5쪽; 설명서 보수점검','현재 전원·제어 회로 전체·안전 차단/재기동 미확정'],
['자동 운전으로 진행 안 됨','어느 단계에서 정지했는지와 원위치·제품 감지·카운트 관계 대조','설명서 원위치/자동/순차 동작','프로그램 허가 조건·현재 설정 미확정'],
['4P/7P 집게가 열리거나 닫히지 않음','RS센서·X주소 설명·RY출력·SOL부하·실물 대응을 별개 대조','PDF 6/7/11/19쪽; 설명서','SOL01/02 기능 상충·실제 공압/기계 상태 미확정'],
['집게 상하 또는 회전 정지','상하·회전·원위치 센서와 선행 단계 관계를 문서 안에서 추적','PDF 6/7/11쪽; 설명서','주소 버전·위치/극성·실제 동작 미확정'],
['이재기 위치/감속이 맞지 않음','6쪽 PR01~04와 19쪽 A4 네 주소의 차이부터 기록','PDF 6쪽 ASM-11 vs 19쪽 A4','현재 P048~04B인지 P04B~04E인지 미확정'],
['X-LIFT 상승/하강/회전 정지','제품 감지 PH·LS/PR, 고속/저속 SOL, 유압릴리프 경로 분리','PDF 6/7/11/20쪽','현행 유압설정·하중유지·센서 극성·인터록 미확정'],
['INGOT 계수 또는 정렬 불량','BE01~11과 설명서 PH 계수 센서를 구분하고 스토퍼/인가이드 구간 식별','PDF 6/20쪽; 설명서 계수/INGUIDE','P주소와 X주소 관계·현재 단수/패턴 미확정'],
['적층 완료 후 취출 안 됨','X-LIFT→3차 콘베어→계량대의 제품/위치 검출 구간 분리','PDF 5/8/19쪽; 설명서','수기 변경·강제취출 허가·현재 순서 미확정'],
['계량 또는 프린트 불량','CAS 영점/프린트 접점과 계량대 상하 위치·실중량 표시를 구분','PDF 8/12쪽; 설명서','CAS 모델·로드셀·교정·기록·통신 미확보'],
['부저 또는 이상 램프 반복','최초 발생 시각·기기 코드·정지 단계·경보 출력의 근거 수집','PDF 5/7/9/12쪽; 설명서 이상 화면','경보정지를 원인 제거로 판단하지 않음'],
['표시량·단수·적재 패턴 불일치','P120~127 외부 디스플레이와 HWP 화면의 단수/적재량을 분리 대조','PDF 10/18쪽; 설명서 자동/반재 그림','현재 HMI태그·코드·단수설정·정격 미확보'],
['정기 점검 항목 정리','센서 오염·볼트·공압/유압·리미트 배선·릴레이/퓨즈의 점검 후보 기록','사용 설명서 보수점검','실제 점검 주기 승인·점검 결과는 별도 기록']];
e.repair=repairs.map(([symptom,check,source,unresolved])=>({system:'문서 기반 점검 후보',symptom,check,source,unresolved}));
const gaps=[
['현재 설비와 자료 적용','미확정','PDF 광명금속 2004 / HWP 세진메탈 2006 / 두인 2015 혼재','명판·반번호·적용 도면·최신 개정 확인'],
['용량·적재 패턴','표기 차이 보존','개요 300/600/1TON, 조작 500/1000kg, 문서별 단수·개수 차이','현재 정격·승인 패턴·HMI 설정 기록'],
['P주소와 X주소','별도 체계','PDF P000~ / 설명서 X000~; CPU·프로젝트 미제공','현재 PLC 프로젝트·할당표로 관계 확인'],
['A4 이재기 주소 상충','미확정','19쪽 P048/P049/P04A/P04B vs 6쪽 P04B/P04C/P04D/P04E','실물 단자·센서·프로그램 대조'],
['SOL01/02 기능 상충','미확정','19쪽 SOL01 풀림/02 잡음 vs 11쪽 SOL01 잡음/02 풀림','실제 밸브·중계 릴레이·결선 확인'],
['설명서 주소 오기 후보','원문 차이 보존','7P회전 X080/X050, X-LIFT원위치 X084/X048 등','동일 센서 실물·현재 프로그램 확인'],
['수기 변경·미기입','확정하지 않음','P015·P080~084 수기 수정, P03E/F 판독불명·공란','수정 일자·수정자·최신도면/현장 대조'],
['집게 표시등 기능 상충','원문별 보존','3쪽 수기주소 P115/P117 위치의 인쇄는 열림, 9쪽/18쪽은 잡음','램프 실제 명칭·출력 주소·현재 패널 대조'],
['타 업체 시운전 자료','참고 자료','시운전 HWP 후반 두인 2015 · 압력/수량/설정 설명','현재 2번 설비 적용 승인 근거 확인'],
['PLC·HMI·인버터 원본','미확보','전기 I/O/결선도와 과거 조작 화면만 있음','CPU·프로젝트·래더·타이머/파라미터·버전 백업'],
['전원·공압·유압 정격','현재값 미확정','설명서 전원·혼재된 압력 단위, 전체 동력도 부족','명판·현행 정격/회로·승인 설정 대조'],
['계량·표시 인터페이스','일부 접점만 확보','CAS 영점/프린트, P120~127 디스플레이 배선','CAS 모델·로드셀/교정·코드/통신 확인'],
['안전·정지·재기동','미검증','비상정지/일시정지/재개에 관한 과거 문서 설명','현재 안전 회로·잔류 에너지·재기동 검증 기록'],
['HWP 페이지 배치','미재현','본문·그림 추출본. OLE/매크로 실행 안 함. 페이지 수 미확정','원형 페이지 대조가 필요하면 정식 HWP PDF 내보내기 제공'],
['현장 고장·수리·운전','미수행','파일 검토와 문서화만 수행','실제 관찰·측정·조치·복구 근거 별도 기록']];
e.checks=gaps.map(([title,status,evidence,next])=>({title,status,evidence,next}));
e.reviews=gaps.slice(0,13).map(([title,status,source,next])=>({title,status,source,observation:'자료의 차이를 보존하고 현재 현장값으로 확정하지 않음',next}));
e.tests=[{title:'원본 3파일 보존',status:'문서검증 완료',evidence:'UNC 원본과 복사본 bytes/SHA-256 일치',source:'source-manifest.json'}, {title:'PDF 전페이지 시각 검토',status:'문서검토 완료',evidence:'20쪽 렌더링·검토. 미리보기만 읽는 방향으로 회전.',source:src('1~20')},{title:'HWP 본문·그림 검토',status:'문서검토 완료',evidence:'2문서 본문, 사용설명서 그림 12개. 텍스트/그림 추출본이며 원본 페이지 재현은 아님.',source:'HWP 원본 2개·추출 열람본'},{title:'실제 PLC·현장시험',status:'미수행',evidence:'CPU·프로젝트·실배선·운전·안전시험 근거 없음',source:'원본 3파일 범위'}];
const userParagraphs=(await readFile(new URL('documents/totalizer-02/extracted/totalizer-user-manual.txt',root),'utf8')).split('\n\n').filter(Boolean);
for(const row of e.io){const match=row.source.match(/PDF (\d+)쪽/);if(match){row.url=pdf(Number(match[1]));continue;}const n=userParagraphs.findIndex(p=>p.includes(row.address));row.url=user(n>=0?'p-'+(n+1):'text');if(n>=0)row.source+=' · 추출 문단 '+(n+1)+'(해당 주소 첫 등장)';}
const context={window:{}};vm.runInNewContext(await readFile(new URL('data/project.js',root),'utf8'),context);
const project=context.window.ED_PROJECT,old=project.equipment.find(x=>x.id===e.id);project.version='1.2.0';
if(old)project.equipment=project.equipment.map(x=>x.id===e.id?e:x);else project.equipment.push(e);
const resources=manifest.sources.map(s=>({name:'2번 적산기 · '+s.name,kind:s.pages?'I/O·전기 원본':'HWP 원본',version:s.pages?'원본 보존 / PDF 20쪽':'원본 보존 / 페이지 수 미확정',url:s.file})).concat([{name:'2번 적산기 · 전체 매뉴얼',kind:'작성 매뉴얼',version:'v1.2.0 · 로컬 검토본',url:e.manual_url},{name:'2번 적산기 · 사용 설명서 텍스트·그림 열람본',kind:'HWP 추출본',version:'원본 페이지 재현 아님',url:user()},{name:'2번 적산기 · 시운전 요령 텍스트 열람본',kind:'HWP 추출본·혼합 자료',version:'타 업체 참고 구분',url:commissioning()}]);
for(const resource of resources)if(!project.resources.some(r=>r.url===resource.url))project.resources.push(resource);
await writeFile(new URL('data/project.js',root),'// Shared source-linked documentation. Personal browser records are not included.\nwindow.ED_PROJECT = '+JSON.stringify(project,null,2)+';\n');
await writeFile(new URL('documents/totalizer-02/equipment.json',root),JSON.stringify(e,null,2)+'\n');
console.log(JSON.stringify({equipment:e.id,originals:3,pdf_pages:20,hwp_files:2,reference_rows:e.io.length,hmi_figures:e.hmi.length,repair_cases:e.repair.length,gaps:e.checks.length,plc_networks:0}));
