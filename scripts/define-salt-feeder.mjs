import {readFile,writeFile} from 'node:fs/promises';
import vm from 'node:vm';
const root=new URL('../',import.meta.url),doc='/documents/salt-feeder-01/';
const manifest=JSON.parse(await readFile(new URL('documents/salt-feeder-01/source-manifest.json',root),'utf8'));
const A='아성 스프링피더',W='원창 계량·진공이송',C='부품 참고';
const ref=(id,page=1)=>doc+'source/'+id+'.pdf#page='+page;
const source=(id,page=1)=>manifest.sources.find(s=>s.id===id).name+' · PDF '+page+'쪽';
const e={id:'SALT-01',name:'1번 솔트 투입기',group:'솔트 투입·이송',location:'사용자 지정 1번 설비 · 현장 명판/현재 배치 미확인',priority:true,source_version:'PLC 원본 프로젝트 미제공 · 원창 도면에 DR-40S 표기',
description:'9개 원본 PDF, 총12페이지를 근거로 정리했습니다. 아성 스프링피더(2017년 도면)와 원창 계량·진공이송(2012년 기계도면 등)을 서로 다른 자료 계통으로 보존합니다. 한 도면의 모터·I/O·정격을 다른 계통에 배정하지 않습니다.',
documentation_status:'도면 기반 매뉴얼 작성 완료(미확정 항목 포함). 원본9파일·12페이지 보존. 실제 PLC 프로젝트·래더·현재 CPU·현장 배선·운전·복구 검증은 미수행입니다.',
source_count:9,source_pages:12,native_plc_available:false,field_verified:false,manual_url:doc+'manual.html',
subsystems:[
{id:'ASUNG',name:A,description:'2.8m³ 표기 호퍼, SPRING FEEDER #1/#2, 레벨 접점·R1/R2·T1/T2·인버터 접점으로 구성된 도면 계통입니다.',boundary:'전기도면-1/2에서 PLC는 식별되지 않습니다. 실제1번 설비 내 구성품 대응은 현장 확인 전입니다.'},
{id:'WONCHANG',name:W,description:'인렛 호퍼·스크루·진공이송·LIW 계량 공급부·조작반과 관련된 도면 계통입니다. 전기도면에 DR-40S, WMC-175EFK, SCR 제어기 표기가 있습니다.',boundary:'도면상 기기 표시만 확인했습니다. PLC 프로그램과 현재 설치/배선, 아성 계통과의 실제 연결은 미확정입니다.'},
{id:'REFERENCE',name:'감속기·모터 참고도',description:'삼양 V135 외형도와 Siemens 모터 외형도를 별도 참고 자료로 보존합니다.',boundary:'카탈로그 규격을 실제 장착품 또는 호환 부품으로 확정하지 않습니다.'}],
manual:{
overview:`1. 설비 식별과 자료 범위\n사용자가 제공한 폴더를 ‘1번 솔트 투입기’ 자료로 등록했습니다. 이번 식별은 사용자 지정 기준이며, 현재 명판·실물 대조를 수행한 것은 아닙니다. 원본9개, PDF 총12페이지를 각각 보존했습니다.\n\n2. 아성 스프링피더 계통\n기계도면에는 SPRING FEEDER #1/#2와 호퍼가 나타납니다. 외형도 작성일은2017-01-21, 호퍼도는2017-01-10, 전기도면01/02는2017-08-08로 표시됩니다. 호퍼 본문에는 ‘HOPPER 2.8m³ - 1SET / STS304 2.0T’, 표제에는 ‘SILO 3M³’가 함께 있어 두 표기를 보존합니다. 정격 저장량/허용 적재량은 별도 확인 전입니다.\n\n3. 원창 계량·진공이송 계통\n기계도면에는 인렛 호퍼, 스크루, Vacuum Conveying System, LIW Feeding System, WCA-610 Feeder, 플랫폼스케일과 조작반이 나타납니다. 기계도면의 작성일은2012-03-21입니다. 전기도면4페이지는 조작반 외형, POWER DIAGRAM NO1, A-WEIGHT CONTROL, INTERPOSITION으로 구성됩니다.\n\n4. 자료를 합치는 기준\n아성의 M1/M2와 원창의 VACUUM/SCREW/FEEDER 모터를 동일 대상으로 묶지 않았습니다. FEEDING #1/#2는 도면 내부 명칭으로, 사용자의 ‘1번 솔트 투입기’라는 관리번호와 다른 층위입니다.\n\n5. 부품 자료\n삼양 V135와 Siemens 외형도는 참고 규격입니다. 장착 명판·축·플랜지·감속비 확인 없이 교체품이나 호환품으로 확정하지 않습니다. 수기메모가 있는 원창 기계도면은 별도 원본으로 남겼으며 그 메모를 현재 운전 설정값으로 채택하지 않았습니다.`,
io:`1. 구분 원칙\nI/O·HMI 탭은 PLC 주소 목록과 동일하지 않습니다. 이번 자료의 전기 접점·원창 계량제어기 단자·신호 선번을 ‘계통’과 ‘근거 구분’으로 나누었습니다. 실제 PLC 주소가 확인된 항목은0건입니다.\n\n2. 아성 전기도면02의 접점·코일\nS1 E-STOP, LV1/LV2, R1/R2, T1/T2, M, TH1, INV1, BZ 표기를 원문 기준으로 정리했습니다. 이 기호는 릴레이·접점·코일 명칭이며 PLC 메모리 주소가 아닙니다. LV1/LV2의 현재 정상극성·센서 모델·동작 높이와 T1/T2 설정시간은 제공자료로 확정하지 않습니다.\n\n3. 원창 계량제어기 단자\n세진메탈 전기도면 PDF3쪽은 WMC-175EFK의 CPU I/O 24Pin, D/A1, A/D1, A/D2를 표시합니다. Start/Stop 접점, RUN·제어이상·Refill·운전중·Low Low·High High·유량이상 표시와 외부 연결 선번을 구분했습니다. 단자10의 P011 등은 도면 선번으로 취급하며 DR-40S 주소로 변환하지 않았습니다.\n\n4. 아날로그·계량 경로\nD/A1 CH1 Feeder CONTROL은 도면상4~20mA이며 KBSI 인터페이스와 SCR 제어 회로로 이어집니다. A/D1은 로드셀 브리지의 Sig/SE/EX·실드 배선, A/D2는 세진메탈 패널의 S.SET1+/S.SET2- 입력입니다. 실제 영점·스팬·부호·배선·단선 검증은 미수행입니다.\n\n5. 조작부\n원창 반면도에는 MAN/AUTO, AUTO START/STOP, S-FEEDER, HOPPER LOW, AIR KNOCKER, BUZZER RESET, REFILL, VACUUM, PUMP, WCA FEEDER 조작부가 나타납니다. 이는 패널 부품표이며 HMI 태그나 내부 PLC 주소는 확보하지 못했습니다.`,
control:`1. 아성 계통의 정적 회로 해석\n전기도면01에서3상440V 60Hz가 MCC1 ABN33(20A)를 거쳐 FEEDING1 전자접촉기/열동보호 분기, FEEDING2 인버터 분기, TR-01 제어변압기 분기로 나뉩니다. 전기도면02의 RL/TL 제어회로에는 S1, FEEDING1/2 조작 접점, LV1/LV2, R1/R2, T1/T2, M과 BZ가 표시됩니다.\n\nR2 접점은 별도 박스의 M01-GND1 ‘FEEDING2 INVERTER START’에 연결됩니다. 이는 인버터 접점 기동 경로이며 PLC 출력이 아닙니다. M·R2 관련 코일/표시 회로의 공통 하부 경로에는 TH1 접점이 있습니다. 정확한 접점 상태·재기동 조건은 원본 확대 대조와 실물 확인 전입니다.\n\nS1은 RL 제어 레일에 나타납니다. 이 도면만으로 동력측 완전 차단, 이중 안전회로, 안전등급 또는 현재 안전기능 적합성을 확인했다고 표시하지 않습니다. T1/T2의 설정시간과 현장 운전 순서를 임의로 작성하지 않았습니다.\n\n2. 원창 계통의 제어 구성\nPOWER DIAGRAM NO1은 VACUUM MOTOR7.5HP×4P, SCREW MOTOR1HP×4P 인버터, 440/220V 2kVA 변압기, 별도 계량/진공패널 전원 분기, AC220V/DC24V1.2A 전원공급기와 DR-40S 표시를 포함합니다. 같은 NFB-1 표기가 여러 분기에 반복되므로 태그만으로 회로를 합치지 않습니다.\n\n계량제어기 WMC-175EFK의 신호는 KBSI 인터페이스 및 KBIC-240D SCR 제어기와 피더 스크루/교반 모터 쪽으로 연결됩니다. 이 DC/SCR 경로를3상 스크루 인버터 분기와 동일 회로로 합치지 않습니다.\n\n3. 외부 인터페이스\nINTERPOSITION은 원창 패널과 세진메탈측의 접점/4~20mA 연결을 제시합니다. OUT의 RY4C-C100/D100 ‘AUTO READE’ 표기와 IN의 D100/D101, SET+/SET-는 원문대로 남깁니다. 세진메탈측 단자번호 칸은 비어 있으며 D100 등을 PLC 데이터레지스터로 확정하지 않습니다.\n\n4. PLC 정리의 한계\nDR-40S 도면 표시는 확보했으나 프로그램·CPU 정보·I/O 할당·내부 주소·래더·타이머 설정을 받지 못했습니다. 호출 구조와 래더 탭을 가상의 프로그램으로 채우지 않았습니다.`,
circuits:`A1. 아성 FEEDING1 동력\n3상440V → MCC1 ABN33(20A) → MC-12 표기 전자접촉기 → THR1 MT-32 → M1 FEEDING1(440V/2HP)입니다. 기호/정격은 전기도면01 기준이며 보호설정·현재 장착 정격은 확인 전입니다.\n\nA2. 아성 FEEDING2 동력·기동\n동일 전원에서 인버터로 분기되어 M2 FEEDING2(440V/2HP)로 갑니다. 전기도면02에서 R2 접점이 M01-GND1 인버터 기동 회로에 그려져 있습니다. 인버터 모델·현재 파라미터는 미확정입니다.\n\nA3. 아성 제어전원\nTR-01 440/220V100VA → CB2P2A → RL/TL 제어전원입니다. 접지 PE와 제어전원의 중성/공통선을 혼동하지 않습니다. 전기도면02의 TH1/INV1과 부저 경로는 별도 확인 항목으로 관리합니다.\n\nW1. 원창 VACUUM 동력\n3상440V → 해당 NFB 분기 → MC-1 GMC-40 → EOCR(3A-30A 표기) → VACUUM MOTOR7.5HP×4P입니다. 접점 제어 상세/현재 EOCR 설정은 미확보입니다.\n\nW2. 원창 SCREW 동력\n3상440V → 별도5A 표기 분기 → SV008IG5A-4U 표기 인버터 → SCREW MOTOR1HP×4P입니다. RY42 접점과 속도설정 가변저항1k의 연결이 표시되며 현재 설정값은 확정하지 않습니다.\n\nW3. 계량·보조전원\n440/220V2kVA 변압기 → CP-1/CP-2의 계량패널·진공패널 전원과 CP-3의 RL/TL, 노이즈필터, DC24V 전원공급기로 나뉩니다. 도면에서 기기 전원과 신호전원을 구분하되 실배선은 미확정입니다.\n\nW4. 피더 SCR·로드셀\n계량제어기 아날로그 출력 → KBSI → KBIC-240D → FEEDER SCREW MOTOR, 별도 KBIC-240D → FEEDER AGITATION MOTOR가 표시됩니다. A/D1 로드셀 Sig/SE/EX·SH, A/D2 S.SET 입력은 원본 단자표 기준으로 정리합니다.\n\n세진메탈 전기도면의 부품표(MUT-2200EFK)와 회로도(WMC-175EFK), 아성 FEEDER2 기계도1HP와 전기도2HP가 서로 다릅니다. 어느 하나를 현재 장착품으로 선택하지 않았습니다.`,
alarms:`1. 아성 보호·부저\n전기도면02에는 TH1 및 INV1 접점과 BZ/부저 선택 접점이 나타납니다. TH1 트립 계통, 인버터 이상 계통을 분리하여 확인할 항목으로 작성했습니다. THR1(전기도01)과 TH1(전기도02)의 실제 대응, 정상 접점 상태와 부저 리셋 방식은 현장 대조 전입니다.\n\n2. 레벨 및 공급 상태\nLV1/LV2와 관련 표시/릴레이는 상·하레벨 동작 경로의 도면 근거입니다. 센서 반전, 우회, 시간값 변경을 복구 방법으로 제시하지 않습니다. 투입이 안 된다는 증상만으로 레벨센서 불량을 확정하지 않습니다.\n\n3. 원창 계량제어기 표시\n제어이상·Refill·운전중·Low Low·High High·유량이상 표시가 CPU 단자표에 있습니다. 각 표시의 설정치, 래치, 타이머, PLC 수신주소는 미확보입니다. 패널의 BUZZER RESET 버튼 존재와 실제 보호해제/재시작 허용은 서로 다릅니다.\n\n4. 복구 기록 기준\n첫 증상·첫 표시·발생시각, 확인한 원본/실물 위치, 원인 후보와 배제 근거, 실제 수행 조치, 조치 후 관찰, 미확정 사항을 수리 기록에 남깁니다. 본 문서 작성으로 고장 복구·안전기능 검증·운전 확인을 완료했다고 표시하지 않습니다.`,
repair:`1. 점검 전 자료와 계통 식별\n대상 조작반·모터·호퍼가 아성인지 원창인지 명판·도면번호로 먼저 대조합니다. 계통을 구분하지 못하면 다른 도면의 태그나 설정값을 가져오지 않습니다. 현장 점검은 현장 절차에 따라 전원 차단·잔류 에너지 해소를 확인한 후 수행하고, 운전 중 측정·강제출력·안전회로 우회는 이 문서의 작업 범위에 포함하지 않습니다.\n\n2. 공급모터가 기동하지 않을 때\n아성은 MCC1, 제어변압기/CB, S1, TH1, FEEDING 접점, 레벨·R1/R2/T1/T2, M 및 인버터 접점 경로의 도면 위치를 순서대로 대조합니다. 원창은 VACUUM/SCREW/피더 SCR을 별개 모터계통으로 구분합니다. 공통 원인이라고 가정하지 않습니다.\n\n3. 회전하지만 솔트가 이송되지 않을 때\n호퍼 잔량·배출구 막힘·이물·스프링/스크루 파손·기계적 결합을 현장 확인 항목으로 남깁니다. 원창은 진공이송부 배관·인렛호퍼·스크루·계량부를 별개 구간으로 나누어 증상을 기록합니다. 이는 점검 후보이며 실제 결함 판정이 아닙니다.\n\n4. 계량·공급량이 불안정할 때\n원창 로드셀 A/D1 Sig/SE/EX·실드와 계량부 기계간섭, D/A1 출력·KBSI·SCR 경로, 외부 S.SET 입력을 각자 확인 대상으로 분리합니다. 프로그램·파라미터·명판이 없는 상태에서 영점/스팬·인버터 파라미터를 추정하여 변경하지 않습니다.\n\n5. 교체 전 확인\n실제 모터 정격, 축·키·플랜지, 감속비, 브레이크 유무, 회전방향, 장착 치수를 대조합니다. 삼양0.75kW 도면, Siemens2HP 외형도와 각 장비도면 정격을 서로 대체 근거로 사용하지 않습니다.\n\n6. 기록\n진단·수리 탭의 증상별 근거표와 수리 기록 양식으로 실제 관찰/조치를 남깁니다. 문서에는 이번에 실시하지 않은 측정값·조치·복구 이력을 생성하지 않았습니다.`,
completion:`작성 완료한 것\n- 원본9개 파일의 바이트·SHA-256 대조와 PDF12페이지 시각 검토\n- 아성/원창/부품참고 계통 분리\n- 설비·기계 구성, 전기 전달 경로, 접점/단자 참조, 패널 조작부, 보호·알람 근거 정리\n- 원본 PDF·페이지 미리보기·설명 연결\n- 정격/모델명/자료시점 차이와 미확정 항목을 확인 대장에 기록\n\n추가 확인이 필요한 것\n- 1번 솔트 투입기의 현재 명판·실물·아성/원창 계통의 실제 연결 범위\n- FEEDER2 1HP/2HP 표기 차이와 실제 장착 모터·감속기\n- MUT-2200EFK/WMC-175EFK 표기 차이, 현재 계량제어기·DR-40S 유무\n- 현재 PLC 프로그램·CPU·I/O 할당·래더·타이머/파라미터 백업\n- S1/TH1/INV1/레벨 접점의 실제 정상극성·배선 및 보호기능\n- 원창 인터페이스의 세진메탈측 빈 단자번호·정확한 신호 방향/스케일\n- 현장 측정·운전·안전기능·고장복구 결과\n\n판정\n도면 기반 문서화는 완료(미확정 포함)입니다. PLC 프로그램 분석·현장 검증·실제 복구 완료는 아닙니다. 실제 시험 결과와 수리 이력은0건입니다.`},
manual_sources:{},io:[],hmi:[],networks:[],calls:[],signals:[],drawings:[],alarms:[],repair:[],checks:[],reviews:[],tests:[]};
const refs={overview:[['mechanical-outline',1],['mechanical-hopper',1],['sejin-mechanical',1],['rolling-salt-feeder',1],['samyang-reducer',1],['siemens-motor',1]],io:[['electrical-2',1],['sejin-electrical',1],['sejin-electrical',3],['sejin-electrical',4]],control:[['electrical-1',1],['electrical-2',1],['sejin-electrical',2],['sejin-electrical',3],['sejin-electrical',4]],circuits:[['electrical-1',1],['electrical-2',1],['sejin-electrical',2],['sejin-electrical',3]],alarms:[['electrical-2',1],['sejin-electrical',1],['sejin-electrical',3]],repair:[['electrical-1',1],['electrical-2',1],['sejin-electrical',2],['sejin-electrical',3],['samyang-reducer',1],['siemens-motor',1]],completion:[['mechanical-outline',1],['sejin-electrical',1],['sejin-electrical',3],['sejin-electrical',4]]};
for(const [key,rows]of Object.entries(refs))e.manual_sources[key]=rows.map(([id,page])=>({label:source(id,page),url:ref(id,page)}));
function io(system,direction,address,name,type,description,id,page=1){e.io.push({system,direction,address,name,type,description,source:source(id,page)});}
for(const r of [
['접점','S1','E-STOP','제어접점','RL 레일의 비상정지 접점 표시. 현재 안전기능/정상극성 검증 전'],
['접점','LV1 / LV2','레벨 접점','레벨회로 참조','R1 관련 병렬 경로. 상/하한 실물·설치높이·극성 미확정'],
['릴레이','R1','레벨 관련 릴레이','릴레이 코일','FEEDING1·레벨 접점과 T1/T2 공급 경로 참조'],
['타이머','T1 / T2','레벨·이송지연 관련','타이머 기호','코일과 접점 존재 확인; 설정시간/현장 순서 미확정'],
['출력경로','M','FEEDING1 제어코일','코일 참조','동일 도면의 조작·타이머·TH1 관련 경로'],
['출력경로','R2 / M01-GND1','FEEDING2 인버터 기동','무전압 접점 경로','R2 접점으로 인버터 시작 연결. PLC 주소 아님'],
['보호접점','TH1 / INV1','열동·인버터 관련 보호','보호회로 참조','부저 경로의 접점 표기; 정상상태/기기대응 미확정'],
['표시','BZ / L0 / L1 / L2','부저·표시등','도면 부하 기호','실제 알람코드·PLC 출력주소 미확보']
])io(A,...r,'electrical-2');
const wmcio=[
['입력','CPU 24Pin #5 / M-C05','계량 Start','계량제어기 접점 입력','외부 접점 연결. 도면 교차참조를 PLC 메모리로 변환하지 않음'],
['입력','CPU 24Pin #6 / M-C06','계량 Stop','계량제어기 접점 입력','외부 접점 연결. 정상극성·실제 정지 동작 미확정'],
['출력표기','CPU 24Pin #9','RUN 출력','계량제어기 단자표','기능명만 표시; 이 시트의 외부 연결/현재 수신주소 미확정'],
['출력','CPU 24Pin #10 / P011','제어이상 출력','도면 단자·선번','P011은도면 선번. DR-40S 내부주소 미확보'],
['출력','CPU 24Pin #11 / P012','Refill Output','도면 단자·선번','재충전 관련 표시; 조건·지연·인터록 미확보'],
['출력','CPU 24Pin #13 / P013','운전중 출력','도면 단자·선번','현재 운전값을 의미하지 않음'],
['출력','CPU 24Pin #16 / P014','Low Low Level','도면 단자·선번','설정값·정상극성·PLC 수신주소 미확보'],
['출력','CPU 24Pin #17 / P015','High High Level','도면 단자·선번','설정값·정상극성·PLC 수신주소 미확보'],
['출력','CPU 24Pin #18 / P016','유량 이상 표시','도면 단자·선번','판정 로직·지연·복구방법 미확보'],
['아날로그 출력','D/A1 CH1','Feeder CONTROL','도면4~20mA','KBSI/SCR 경로. 실제 출력·환산값 검증 전'],
['계량 입력','A/D1','로드셀 Sig/SE/EX·SH','로드셀 브리지 단자','실드·센스·여자·신호 배선도 기준. 현재 극성/색상 미확정'],
['아날로그 입력','A/D2 #1/#2 / S.SET1+ / S.SET2-','외부 속도 변환값','도면 외부 입력','세진메탈 패널에서 들어오는 입력. 현재 스케일 미확정']
];for(const r of wmcio)io(W,...r,'sejin-electrical',3);
io(W,'패널 인터페이스','RY4C → C100 / D100','OUT / AUTO READE','접점·단자 참조','원문 표기 보존. 세진메탈측 실제 단자번호 미기입','sejin-electrical',4);
io(W,'패널 인터페이스','D100 / D101','IN / AUTO READE','접점·단자 참조','D100은이 자료에서 PLC 데이터레지스터로 확인된 것이 아님','sejin-electrical',4);
io(W,'패널 인터페이스','SET+ / SET-','IN / SPEED 변환값','4~20mA 입력 표기','아날로그 기준과 단자 대응은 현장/원본 추가 대조 대상','sejin-electrical',4);
const hmi=['NAME PLATE: LIW FEEDING SYSTEM','LIW CONTROL: MUT-2200EFK','계량 MAN/AUTO','POWER LAMP','AUTO START','AUTO STOP','S-FEEDER VOLUM SET: 5K','S-FEEDER START','S-FEEDER STOP','HOPPER LOW LAMP','AIR KNOCKER START','BUZZER RESET','REFILL LAMP','VACUUM START','PUMP START','WCA-FEEDER VOLUM SET: 5K','WCA FEEDER START','WCA FEEDER STOP','경광등'];
hmi.forEach((name,i)=>e.hmi.push({system:W,name,address:'반면도 NO.'+(i+1)+' (PLC/HMI 주소 아님)',screen:'LIW FEEDING SYSTEM 조작반',description:i===1?'반면도 MUT-2200EFK와 회로도 WMC-175EFK의 표기 차이 확인 필요':'패널 부품/조작부 표기만 확인; 현재 결선·동작 미확정',source:source('sejin-electrical',1)}));
const pageInfo={
'mechanical-outline':[['SPRING FEEDER #1/#2 외형·배치',A,'기계 배치','2017-01-21','모터·경사·이송관 계획도. FEEDER2 기계도1HP와 전기도2HP 차이 보존']],
'mechanical-hopper':[['호퍼 조립·치수',A,'기계 조립','2017-01-10','HOPPER2.8m³ / 표제 SILO3M³ · STS3042.0T. 허용 적재량·실물 미확정']],
'sejin-mechanical':[['원창 진공이송·LIW 배치',W,'기계 배치','2012-03-21','인렛호퍼·스크루·진공배관·LIW/WCA·플랫폼스케일 구성. 실제배치 미확정']],
'sejin-electrical':[['원창 조작반 외형·부품표',W,'전기·조작반','작성일란 미기입','조작부19항목 / MUT-2200EFK 표기'],['원창 POWER DIAGRAM NO1',W,'전기·동력','작성일란 미기입','VACUUM/SCREW·변압기·전원분기·DR-40S 표시'],['원창 A-WEIGHT CONTROL',W,'전기·계량','작성일란 미기입','WMC-175EFK 단자·로드셀·KBSI·KBIC-240D·피더 모터'],['원창 INTERPOSITION',W,'전기·인터페이스','작성일란 미기입','원창↔세진메탈 접점/4~20mA 연결표. 상대 단자번호 미기입']],
'rolling-salt-feeder':[['원창 압연 솔트 투입기 수기 참고도',W,'기계·수기','원도2012-03-21 / 메모일 미상','별도 배치/수기자료. 수기 운전수치·서명·연락처를 현재 설정이나 확인완료로 채택하지 않음']],
'electrical-1':[['아성 전기도면01 · 동력·제어전원',A,'전기·동력','2017-08-08','MCC1→M1/인버터M2/제어변압기 분기']],
'electrical-2':[['아성 전기도면02 · 제어회로',A,'전기·제어','2017-08-08','S1·레벨·R1/R2·T1/T2·M·TH1·INV1·부저']],
'samyang-reducer':[['삼양 MAX GEARED MOTOR V135 외형',C,'부품 외형','2000-10-20','V135-007-A /0.75kW·4P·3상·감속비1/5~1/30 표기. 실장품 미확정']],
'siemens-motor':[['Siemens 모터 외형 참고',C,'부품 외형','03.07.2013 표기','1LA9096-4KA91-Z /2HP×4P 표기. 실장품·호환성 미확정']]};
for(const s of manifest.sources)pageInfo[s.id].forEach(([name,system,kind,version,path],i)=>e.drawings.push({name,system,kind,version,path,page:i+1,source:source(s.id,i+1),url:ref(s.id,i+1),preview:doc+'previews/'+s.id+'-'+String(i+1).padStart(2,'0')+'.webp',source_id:s.id}));
const signalRows=[
[A,'FEEDING1 동력','MCC1 → MC-12 → THR1 → M1','전기도면01','전기도면01','열동보호·모터 분기 참조'],
[A,'FEEDING2 동력','MCC1 → 인버터 → M2','전기도면01','전기도면01','PLC 제어단자가 아닌 동력 경로'],
[A,'FEEDING2 기동','R2 접점 → M01/GND1','전기도면02','인버터 START 입력 표기','실제 인버터 모델·파라미터 미확정'],
[A,'제어전원','TR-01 → CB → RL/TL','전기도면01','전기도면02','AC220V 제어레일 도면 참조'],
[W,'SCREW 기동','RY42 접점 → 인버터 P1/CM','세진메탈 전기도면PDF2','인버터','PLC 출력 주소 미확정'],
[W,'피더 제어','D/A1 CH1 → KBSI → KBIC-240D','WMC 계량제어기','피더 SCR 제어기','4~20mA 경로'],
[W,'로드셀','Sig± / SE± / EX± / SH','로드셀 브리지','A/D1','선번·실드와실제배선 미확정'],
[W,'외부 속도 지령','SET+/SET- → S.SET → A/D2','세진메탈측 패널','원창 계량제어기','4~20mA 및상대단자 미기입']];
e.signals=signalRows.map(([system,name,address,writer,reader,description])=>({system,name,address,writer,reader,source:description}));
e.alarms=[
{system:A,name:'열동보호 관련',address:'THR1 / TH1 표기',trigger:'주회로 열동보호기와 제어회로 접점이 표시됨',reset:'원인/실물 대응·현장 절차 확인 전. 재설정 지시 아님',source:source('electrical-1')+'; '+source('electrical-2')},
{system:A,name:'인버터 이상 관련 부저',address:'INV1 / BZ',trigger:'전기도면02의 부저 관련 접점 표기',reset:'인버터 모델·알람코드·접점 상태 미확정',source:source('electrical-2')},
{system:W,name:'제어이상',address:'CPU #10 / P011',trigger:'계량제어기 단자표의 제어이상 출력',reset:'상세 조건·현재 CPU·복구 조건 미확보',source:source('sejin-electrical',3)},
{system:W,name:'재충전·레벨 표시',address:'P012 / P014 / P015',trigger:'Refill·Low Low·High High 출력 표기',reset:'실제 레벨/설정/래치/정상극성 미확정',source:source('sejin-electrical',3)},
{system:W,name:'유량 이상 표시',address:'CPU #18 / P016',trigger:'단자표의 유량 이상 표시',reset:'판정 설정·지연·원인/복구 미확보',source:source('sejin-electrical',3)},
{system:W,name:'VACUUM 모터 보호',address:'EOCR 3A-30A 표기',trigger:'동력 분기에 보호기 표시; 실제 트립 원인 없음',reset:'현재 설정값·보조접점·복구 확인 전',source:source('sejin-electrical',2)}];
const repairRows=[
[A,'전체 공급부가 반응하지 않음','대상반 식별 → MCC1/제어전원 분기 → TR-01/CB/RL·TL → S1·TH1·조작접점의 도면 위치 대조','electrical-1',1,'실제 통전·단자 측정·안전기능은 미수행'],
[A,'FEEDING1만 기동 안 됨','M1의 MC-12/THR1 경로와 제어M, FEEDING1·레벨·R1/T1/T2 관계를 각각 대조','electrical-2',1,'레벨센서 불량·타이머 값으로 단정하지 않음'],
[A,'FEEDING2만 기동 안 됨','M2 동력 인버터 분기, R2 접점·M01/GND1 연결을 분리 대조','electrical-2',1,'인버터 모델/이상코드·실배선 미확정'],
[A,'레벨에 따라 이송이 불안정','LV1/LV2 실물 대응·부착높이·기계막힘과 T1/T2 설정 근거 수집','electrical-2',1,'정상극성·시간·운전순서 미확정; 우회/설정변경 지시 없음'],
[A,'부저가 울리거나 정지가 반복','TH1과 INV1 경로를 나누고 최초 표시·시각·대상모터 기록','electrical-2',1,'실제 고장/복구 조치 기록 없음'],
[W,'진공 이송이 안 됨','VACUUM모터/MC-1/EOCR 동력 분기와 배관·인렛호퍼·필터 관찰 구간 분리','sejin-electrical',2,'진공도·전류·막힘·누설 실제 결과 없음'],
[W,'SCREW만 기동 안 됨','인버터 분기·RY42 접점·속도설정 회로와기계결합 대조','sejin-electrical',2,'1HP 모터 현재 명판·파라미터 미확보'],
[W,'계량 표시·공급량이 흔들림','A/D1 로드셀/실드·기계간섭, D/A1→KBSI→SCR, 외부S.SET을 각자 구분','sejin-electrical',3,'실제영점/스팬/배선/전류 미확정'],
[W,'피더 스크루·교반이 동작 안 됨','KBIC-240D 두 분기, RY43/RY40 등 접점·DC모터 배선의 원본 위치 대조','sejin-electrical',3,'SCREW MOTOR 인버터와다른 계통; 프로그램 근거 미확보'],
[W,'상위/외부 연동이 안 됨','INTERPOSITION OUT/IN, C100/D100/D101 및 SET+/SET-를단자대단자로 식별','sejin-electrical',4,'세진메탈측 단자번호 공란·신호방향 실물미확정'],
[C,'모터·감속기 교체 검토','장착명판/축·키·플랜지/감속비/전압/용량/브레이크를실물과대조','samyang-reducer',1,'카탈로그만으로 호환·적합 판정하지 않음']
];e.repair=repairRows.map(([system,symptom,check,id,page,unresolved])=>({system,symptom,check,source:source(id,page),unresolved}));
const gaps=[
['두 업체 계통의 실제 구성 범위','사용자 1번설비 지정은 확인; 아성/원창 실물 연결 미확정','9개자료의 기기·시점이 다름','현장 명판·반번호·모터/호퍼별 대응표'],
['FEEDER2 모터 정격 차이','미확정','아성 외형도1HP·1/10·440V vs 전기도01 FEEDING2 440V/2HP','현재 모터/감속기 명판과최신도면 대조'],
['계량제어기 모델명 차이','미확정','원창 반면도 MUT-2200EFK vs A-WEIGHT회로 WMC-175EFK','현재 조작반 기기/모델/버전사진'],
['PLC 원본·현재 CPU','미확보','POWER DIAGRAM의DR-40S 블록표기만 확보','실제프로젝트·현재CPU정보·I/O할당·프로그램백업'],
['외부 인터페이스 단자','미기입','INTERPOSITION의세진메탈측단자NO 칸 공란','원창/세진측실단자·선번·연동방향'],
['레벨·타이머·보호 접점','현재상태 미확정','LV1/LV2·T1/T2·S1·TH1·INV1 정적표기','센서모델/높이/극성·타이머설정·실배선확인'],
['호퍼 용량 표기','두표기 보존','본문 HOPPER2.8m³, 표제SILO3m³','명판·최종제작도·정격적재량근거'],
['참고 카탈로그 실장 대응','미확정','삼양V135 0.75kW / Siemens2HP 외형도','각모터·감속기 명판·장착치수·감속비'],
['수기 운전수치','현재설정으로 채택하지 않음','압연 솔트 투입기(원창) 수기메모·날짜미상','현행 승인설정·운전기준·기록 대조'],
['현장 운전·안전·복구','미수행','이번작업은파일검토/문서화','실제점검시 관찰·조치·재발방지/복구증거별도기록']];
e.checks=gaps.map(([title,status,evidence,next])=>({title,status,evidence,next}));
e.reviews=gaps.slice(0,9).map(([title,status,source, next])=>({title,status,source,observation:'한 자료의 값을다른계통이나현장확인값으로 대체하지 않음',next}));
e.tests=[{title:'원본파일 보존',status:'문서검증 완료',evidence:'9개 원본의복사후 SHA-256/bytes 일치',source:'source-manifest.json'},{title:'PDF 전페이지 시각검토',status:'문서검토 완료',evidence:'9개PDF 총12페이지.스캔·텍스트추출 오류는원본영상 대조',source:'원본PDF와페이지미리보기'},{title:'실제 PLC 프로그램·현장시험',status:'미수행',evidence:'프로젝트·현재CPU·실배선·운전시험 근거 없음',source:'사용자제공파일은PDF9개'}];
const context={window:{}};vm.runInNewContext(await readFile(new URL('data/project.js',root),'utf8'),context);
const project=context.window.ED_PROJECT;project.version='1.1.0';project.equipment=project.equipment.filter(x=>x.id!==e.id).concat(e);
project.layout ||= {name:'1번 솔트 투입기 · 아성 스프링피더 계획도(실제 배치 미확정)',url:ref('mechanical-outline'),preview:doc+'previews/mechanical-outline-01.webp'};
for(const s of manifest.sources){const resource={name:s.name,kind:s.id.includes('electrical')?'전기 원본':'기계·부품 원본',version:'원본보존 / '+s.pages+'페이지',url:s.file};if(!project.resources.some(r=>r.url===resource.url))project.resources.push(resource);}
await writeFile(new URL('data/project.js',root),'// Shared source-linked documentation. Personal browser records are not included.\nwindow.ED_PROJECT = '+JSON.stringify(project,null,2)+';\n');
await writeFile(new URL('documents/salt-feeder-01/equipment.json',root),JSON.stringify(e,null,2)+'\n');
console.log(JSON.stringify({equipment:e.id,source_count:manifest.sources.length,pages:e.drawings.length,reference_rows:e.io.length,panel_items:e.hmi.length,repair_cases:e.repair.length,review_gaps:e.reviews.length,plc_networks:e.networks.length}));
