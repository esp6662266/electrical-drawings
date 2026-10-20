# 13번 프라이머리

PRIMARY-13 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

13번 프라이머리는 SSI PR770S 관련 파쇄기·HPU·축/감속기·소프트스타터·LOCAL/RADIO·상하류 연동 자료입니다. 8쪽 전기도면과 Smart Start, 여러 축 교체 슬라이드·과거 작업 자료를 구분했습니다. PR4400/PR6600 부품 도면은 다른 모델 참고로 유지했습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 38개, 압축 내부 자료 0개, 고유 해시 38개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[023824_R0.pdf](/documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1) / [PR770 Smart Start Manual.pdf](/documents/source-store/d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb.pdf#page=1) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx](/documents/equipment-13/library.html?source=Sc208fe9af428e958) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx](/documents/equipment-13/library.html?source=S721be0871fb2928e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx](/documents/equipment-13/library.html?source=S0254bfa205e6a40e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx](/documents/equipment-13/library.html?source=Sc52acaeb991b8413) / [전처리 프라이머리 전원 OFF시 확인사항 출력.pptx](/documents/equipment-13/library.html?source=S44b06169e5113a08) / [파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp](/documents/equipment-13/library.html?source=S06db3e89b5cfcff8)

## I/O·접점·단자

023824_R0 6쪽의 1764-28BXB BASE UNIT 입력 I/0~I/15와 출력 O/0~O/11 표기 중 기능이 기재된 것을 도면 참조로 옮겼습니다. CONTROL POWER·HPU START/STOP·SYSTEM START/STOP/RESET·축A/B JOG·LOCAL/RADIO·소프트스타트 상태·하류 허가, HPU/SYSTEM 표시·MOTOR1 START·경보·시간계·상류 허가 등이 있습니다. I/와 O/를 다른 제조사 주소로 변환하지 않고 SPARE는 제외했습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[023824_R0.pdf](/documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1) / [PR770 Smart Start Manual.pdf](/documents/source-store/d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb.pdf#page=1) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx](/documents/equipment-13/library.html?source=Sc208fe9af428e958) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx](/documents/equipment-13/library.html?source=S721be0871fb2928e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx](/documents/equipment-13/library.html?source=S0254bfa205e6a40e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx](/documents/equipment-13/library.html?source=Sc52acaeb991b8413) / [전처리 프라이머리 전원 OFF시 확인사항 출력.pptx](/documents/equipment-13/library.html?source=S44b06169e5113a08) / [파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp](/documents/equipment-13/library.html?source=S06db3e89b5cfcff8)

## 제어 구조

제어 관계는 HPU 기동/상태, 시스템 시작/정지·고장/리셋, 축A/B 조그·LOCAL/RADIO 선택, 소프트스타터 및 상하류 허가로 나눴습니다. 도면의 전기 I/O 결선은 확보했으나 PLC 원본·내부 로직·역전/막힘·지연·라디오 안전 연동은 미확보입니다. 전원OFF 후 오류 참고 PPT의 보호설정 변경/접근정보를 일반 복구 지침으로 전재하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[023824_R0.pdf](/documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1) / [PR770 Smart Start Manual.pdf](/documents/source-store/d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb.pdf#page=1) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx](/documents/equipment-13/library.html?source=Sc208fe9af428e958) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx](/documents/equipment-13/library.html?source=S721be0871fb2928e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx](/documents/equipment-13/library.html?source=S0254bfa205e6a40e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx](/documents/equipment-13/library.html?source=Sc52acaeb991b8413) / [전처리 프라이머리 전원 OFF시 확인사항 출력.pptx](/documents/equipment-13/library.html?source=S44b06169e5113a08) / [파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp](/documents/equipment-13/library.html?source=S06db3e89b5cfcff8)

## 전기 전달 경로

8쪽 도면의 동력/제어·PLC 베이스/확장 입출력·소프트스타터·모터/HPU·단자/계기 경로를 구분합니다. 6쪽은 I/12 소프트스타트 NO FAULT, I/13 IN BYPASS, I/14 MCR ON, I/15 하류 운전허가와 O/11 상류 허가의 외부 연결을 표시합니다. 단자/점퍼 표기는 원문 보존 범위이며 우회나 실제 배선 변경 지시가 아닙니다. 현재 베이스/CPU·보호 설정·실제 접점 상태는 확인 전입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[023824_R0.pdf](/documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1) / [PR770 Smart Start Manual.pdf](/documents/source-store/d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb.pdf#page=1) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx](/documents/equipment-13/library.html?source=Sc208fe9af428e958) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx](/documents/equipment-13/library.html?source=S721be0871fb2928e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx](/documents/equipment-13/library.html?source=S0254bfa205e6a40e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx](/documents/equipment-13/library.html?source=Sc52acaeb991b8413) / [전처리 프라이머리 전원 OFF시 확인사항 출력.pptx](/documents/equipment-13/library.html?source=S44b06169e5113a08) / [파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp](/documents/equipment-13/library.html?source=S06db3e89b5cfcff8)

## 알람·복구

SYSTEM FAULT, MOTOR1 SOFT START FAULT, CONVEYOR MOTION SWITCH FAULT 등은 서로 다른 문서의 표시로 구분합니다. 보호/동작감지·윤활 관련 조건을 비활성화하거나 임의 재설정하는 절차를 새로 만들지 않았습니다. 축 분해 HWP의 가열/인양/충격 설명은 제조사 회신 참고이며 현장 조치·공구·하중·해체 순서의 승인으로 간주하지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[023824_R0.pdf](/documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1) / [PR770 Smart Start Manual.pdf](/documents/source-store/d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb.pdf#page=1) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx](/documents/equipment-13/library.html?source=Sc208fe9af428e958) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx](/documents/equipment-13/library.html?source=S721be0871fb2928e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx](/documents/equipment-13/library.html?source=S0254bfa205e6a40e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx](/documents/equipment-13/library.html?source=Sc52acaeb991b8413) / [전처리 프라이머리 전원 OFF시 확인사항 출력.pptx](/documents/equipment-13/library.html?source=S44b06169e5113a08) / [파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp](/documents/equipment-13/library.html?source=S06db3e89b5cfcff8)

## 증상별 점검

1. HPU/시스템 기동 불가
CONTROL POWER·START/STOP·소프트스타터·MCR/하류허가의 도면 위치 대조
근거: 023824_R0.pdf · PDF 1쪽

2. 축/감속기 또는 기계 정비 검토
PR770S 모델·개정·실제 조립과 여러 축 교체판 차이 비교
근거: SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx · 원본 추출 열람본

3. 전원OFF 후 표시 고장
최초 표시·동작감지·소프트스타터 상태와 현재 승인 보호설정 기록
근거: 전처리 프라이머리 전원 OFF시 확인사항 출력.pptx · 원본 추출 열람본

4. 라디오/조그/상하류 연동 문제
LOCAL/RADIO·축A/B·상류/하류 연결을 분리
근거: 023824_R0.pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[023824_R0.pdf](/documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1) / [PR770 Smart Start Manual.pdf](/documents/source-store/d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb.pdf#page=1) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx](/documents/equipment-13/library.html?source=Sc208fe9af428e958) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx](/documents/equipment-13/library.html?source=S721be0871fb2928e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx](/documents/equipment-13/library.html?source=S0254bfa205e6a40e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx](/documents/equipment-13/library.html?source=Sc52acaeb991b8413) / [전처리 프라이머리 전원 OFF시 확인사항 출력.pptx](/documents/equipment-13/library.html?source=S44b06169e5113a08) / [파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp](/documents/equipment-13/library.html?source=S06db3e89b5cfcff8)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 38개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 22행·조작 참조 2행
- 핵심 PDF 페이지 미리보기 31개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 4개·확인 대장 6개

미확정·추가 확인
- 현재 PLC/베이스: 도면 1764-28BXB·2011과 현물/프로그램 미대조 / CPU·프로젝트·I/O·소프트스타터 설정 백업
- PR770S와 다른 모델: PR4400/6600 도면·사진 혼재 / 장착품·부품번호·호환 승인 대조
- 민감한 정비 참고: 접근정보·보호설정 변경 내용 포함 원문 존재 / 공개 전 별도 검토; 일반 운전·복구 지침과 분리
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[023824_R0.pdf](/documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1) / [PR770 Smart Start Manual.pdf](/documents/source-store/d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb.pdf#page=1) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx](/documents/equipment-13/library.html?source=Sc208fe9af428e958) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx](/documents/equipment-13/library.html?source=S721be0871fb2928e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx](/documents/equipment-13/library.html?source=S0254bfa205e6a40e) / [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx](/documents/equipment-13/library.html?source=Sc52acaeb991b8413) / [전처리 프라이머리 전원 OFF시 확인사항 출력.pptx](/documents/equipment-13/library.html?source=S44b06169e5113a08) / [파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp](/documents/equipment-13/library.html?source=S06db3e89b5cfcff8)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/0 | CONTROL POWER ON | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/1 | HPU START PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/2 | HPU STOP PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/3 | SYSTEM START PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/4 | SYSTEM STOP PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/5 | SYSTEM RESET PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/6 | SHAFT A JOG FORWARD PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/7 | SHAFT A JOG REVERSE PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/8 | SHAFT B JOG FORWARD PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/9 | SHAFT B JOG REVERSE PB | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/10 | LOCAL/RADIO SELECT | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/12 | M1 SOFTSTART NO FAULT | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/13 | M1 SOFTSTART IN BYPASS | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/14 | MCR ON | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 입력 참조 | I/15 | OK TO RUN FROM DOWNSTREAM | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 출력 참조 | O/0 | HPU RUN LIGHT | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 출력 참조 | O/1 | SYSTEM RUN LIGHT | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 출력 참조 | O/2 | SYSTEM FAULT LIGHT | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 출력 참조 | O/3 | MOTOR1 SOFTSTART RUN | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 출력 참조 | O/5 | START-UP WARNING HORN | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 출력 참조 | O/6 | REDUCER HOUR METER | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |
| PR770S 1764-28BXB BASE UNIT | 출력 참조 | O/11 | OK TO LOAD TO UPSTREAM | 원본 표기; 현재 할당·실물 미확정 | 023824_R0.pdf · PDF 6쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=6 |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| PR770S 조작반 | HPU·SYSTEM·조그·RESET·LOCAL/RADIO | 023824_R0.pdf · PDF 2쪽 | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=2 |
| 기존 오류 참고 | 과거 표시만 정리; 보호설정/접근정보 전재 제외 | 전처리 프라이머리 전원 OFF시 확인사항 출력.pptx · 원본 추출 열람본 | /documents/equipment-13/library.html?source=S44b06169e5113a08 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| HPU/시스템 기동 불가 | CONTROL POWER·START/STOP·소프트스타터·MCR/하류허가의 도면 위치 대조 | 023824_R0.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1 |
| 축/감속기 또는 기계 정비 검토 | PR770S 모델·개정·실제 조립과 여러 축 교체판 차이 비교 | SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-13/library.html?source=Sc52acaeb991b8413 |
| 전원OFF 후 표시 고장 | 최초 표시·동작감지·소프트스타터 상태와 현재 승인 보호설정 기록 | 전처리 프라이머리 전원 OFF시 확인사항 출력.pptx · 원본 추출 열람본 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/equipment-13/library.html?source=S44b06169e5113a08 |
| 라디오/조그/상하류 연동 문제 | LOCAL/RADIO·축A/B·상류/하류 연결을 분리 | 023824_R0.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 현재 PLC/베이스 | 미확정·원문 차이 보존 | 도면 1764-28BXB·2011과 현물/프로그램 미대조 | CPU·프로젝트·I/O·소프트스타터 설정 백업 |
| PR770S와 다른 모델 | 미확정·원문 차이 보존 | PR4400/6600 도면·사진 혼재 | 장착품·부품번호·호환 승인 대조 |
| 민감한 정비 참고 | 미확정·원문 차이 보존 | 접근정보·보호설정 변경 내용 포함 원문 존재 | 공개 전 별도 검토; 일반 운전·복구 지침과 분리 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [023824_R0.pdf](/documents/source-store/cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8.pdf) / primary shredder drawing(설치설명서,전기도면)/023824_R0.pdf / 480973bytes / SHA-256 cf48d577b80032f92fd21943a61760729e18a933c8176daa34957c9844f80cb8
- [PR770 Smart Start Manual.pdf](/documents/source-store/d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb.pdf) / primary shredder drawing(설치설명서,전기도면)/PR770 Smart Start Manual.pdf / 741362bytes / SHA-256 d5384f446700cf602f4a9ad1d6acc1f954a7f479aa4c37df2ef52184894bb7fb
- [specs.pdf](/documents/source-store/535ed62761419905ba7d49ef95387c7a8559d069c81ce5cedab357b56c135a5a.pdf) / primary shredder drawing(설치설명서,전기도면)/specs.pdf / 12337bytes / SHA-256 535ed62761419905ba7d49ef95387c7a8559d069c81ce5cedab357b56c135a5a
- [집진기댐퍼 조작반 외함_260301.pdf](/documents/source-store/cf2b0c133416bbcc5ffb60ba84a0b05768dfc0a493bdd3bafce948efd26e37ff.pdf) / 상부 자동 댐퍼 도면/집진기댐퍼 조작반 외함_260301.pdf / 511710bytes / SHA-256 cf2b0c133416bbcc5ffb60ba84a0b05768dfc0a493bdd3bafce948efd26e37ff
- [852073-Cutter Weldmt.pdf](/documents/source-store/fcae09601bbd2484d857ba53686913418440cd4cba19528c0c5ada723a5f3180.pdf) / 생산부공용 추가도면/PR4400 및 PR6600 참고도면(적용확인필요)/852073-Cutter Weldmt.pdf / 473240bytes / SHA-256 fcae09601bbd2484d857ba53686913418440cd4cba19528c0c5ada723a5f3180
- [852403-PR6600 Features Exploded View.pdf](/documents/source-store/12aa8875f0335fbd36306f07b1dbaa1c58dda964c9500d926d06c3593e5bcebe.pdf) / 생산부공용 추가도면/PR4400 및 PR6600 참고도면(적용확인필요)/852403-PR6600 Features Exploded View.pdf / 618480bytes / SHA-256 12aa8875f0335fbd36306f07b1dbaa1c58dda964c9500d926d06c3593e5bcebe
- [852480-PR4400 Assy..pdf](/documents/source-store/1d20c6efe001e85735749e30d77bc05ff0ce28b243fe8139f745fb53e778d125.pdf) / 생산부공용 추가도면/PR4400 및 PR6600 참고도면(적용확인필요)/852480-PR4400 Assy..pdf / 960877bytes / SHA-256 1d20c6efe001e85735749e30d77bc05ff0ce28b243fe8139f745fb53e778d125
- [852490-Shaft Weldmt.pdf](/documents/source-store/25cc0092f6b921ed49b83125eaead1bbd32a48e52a0abfc892e2d209ceaa90e2.pdf) / 생산부공용 추가도면/PR4400 및 PR6600 참고도면(적용확인필요)/852490-Shaft Weldmt.pdf / 819973bytes / SHA-256 25cc0092f6b921ed49b83125eaead1bbd32a48e52a0abfc892e2d209ceaa90e2
- [PR4400 Photos.pdf](/documents/source-store/8a680a0da5a709a6dd8fe9d786935101ba0308eabc9acb8eea1b7d25dac87b1d.pdf) / 생산부공용 추가도면/PR4400 및 PR6600 참고도면(적용확인필요)/PR4400 Photos.pdf / 544382bytes / SHA-256 8a680a0da5a709a6dd8fe9d786935101ba0308eabc9acb8eea1b7d25dac87b1d
- [PR6600 Photos.pdf](/documents/source-store/833356f45aaabedd5447a2228ac9a84d0e43df02af1d07be04ee7e45e591849e.pdf) / 생산부공용 추가도면/PR4400 및 PR6600 참고도면(적용확인필요)/PR6600 Photos.pdf / 310074bytes / SHA-256 833356f45aaabedd5447a2228ac9a84d0e43df02af1d07be04ee7e45e591849e
- [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx](/documents/source-store/c208fe9af428e958aca3efe831072699b58d0239793dd7372ac420a981729e02.pptx) / 생산부공용 추가도면/PR770S 축 교체 매뉴얼/SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-1.pptx / 26562468bytes / SHA-256 c208fe9af428e958aca3efe831072699b58d0239793dd7372ac420a981729e02
- [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx](/documents/source-store/721be0871fb2928ecf70436e4d95d963144d6763e65513613babf660516de596.pptx) / 생산부공용 추가도면/PR770S 축 교체 매뉴얼/SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-2.pptx / 26558597bytes / SHA-256 721be0871fb2928ecf70436e4d95d963144d6763e65513613babf660516de596
- [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx](/documents/source-store/0254bfa205e6a40e92646f770acaabffe89d328b27a348d765e1915bdcb2f872.pptx) / 생산부공용 추가도면/PR770S 축 교체 매뉴얼/SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼-3.pptx / 37030254bytes / SHA-256 0254bfa205e6a40e92646f770acaabffe89d328b27a348d765e1915bdcb2f872
- [SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx](/documents/source-store/c52acaeb991b8413d701b4eabf608cd1e3365e423fdf9b5436fd8053abac9201.pptx) / 생산부공용 추가도면/PR770S 축 교체 매뉴얼/SSI 파쇄기(PR770S) 축(Shaft) 교체 메뉴얼.pptx / 26996687bytes / SHA-256 c52acaeb991b8413d701b4eabf608cd1e3365e423fdf9b5436fd8053abac9201
- [991274.Definitions and Abbreviation.pdf](/documents/source-store/bab014e2f52243a7b8fcf3c559309dffff834bdc490c401479e08062964358f0.pdf) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/991274.Definitions and Abbreviation.pdf / 80790bytes / SHA-256 bab014e2f52243a7b8fcf3c559309dffff834bdc490c401479e08062964358f0
- [991275.Theory of Operation.pdf](/documents/source-store/77a6c9fead18297ff26ae87f078926ddc0f60135ec431e5ef57d117f245a9663.pdf) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/991275.Theory of Operation.pdf / 15550bytes / SHA-256 77a6c9fead18297ff26ae87f078926ddc0f60135ec431e5ef57d117f245a9663
- [991831.Cutter & Anvil Rebuilding.pdf](/documents/source-store/ce407bb78df98d6f9b86fbeac07c4c3af526506003cd5d9aeeeb0c456cc7f3a3.pdf) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/991831.Cutter & Anvil Rebuilding.pdf / 52369bytes / SHA-256 ce407bb78df98d6f9b86fbeac07c4c3af526506003cd5d9aeeeb0c456cc7f3a3
- [991832.Cutter Tip Replacement.pdf](/documents/source-store/738f2df7492f15ebfddf2540be3c084382c074df9817b4fa8883000b93087796.pdf) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/991832.Cutter Tip Replacement.pdf / 31426bytes / SHA-256 738f2df7492f15ebfddf2540be3c084382c074df9817b4fa8883000b93087796
- [Hetronic - Ergo radio operators manual.pdf](/documents/source-store/523e5f1303db8747f05c2f35dbbc979c9dbead0b2dfd3e83c2207e270a3cc879.pdf) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/Hetronic - Ergo radio operators manual.pdf / 2504940bytes / SHA-256 523e5f1303db8747f05c2f35dbbc979c9dbead0b2dfd3e83c2207e270a3cc879
- [SCAN1306.JPG](/documents/source-store/45884904a7629d0595683eceafb5d647d2e6ef8853037704b035fe493fa3c305.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1306.JPG / 573989bytes / SHA-256 45884904a7629d0595683eceafb5d647d2e6ef8853037704b035fe493fa3c305
- [SCAN1307.JPG](/documents/source-store/e5c981b3fa40d65a55688f575830de1d6f9722a2786b5e5d5f1a2df595e7c8fe.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1307.JPG / 891399bytes / SHA-256 e5c981b3fa40d65a55688f575830de1d6f9722a2786b5e5d5f1a2df595e7c8fe
- [SCAN1308.JPG](/documents/source-store/9165fe2b78e4404b47b0b94193517b275e629c40cf20c41f7e96393f2c220be6.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1308.JPG / 1117645bytes / SHA-256 9165fe2b78e4404b47b0b94193517b275e629c40cf20c41f7e96393f2c220be6
- [SCAN1309.JPG](/documents/source-store/83cdadae78a7a8abab3433cc7419d5cf2cb55cb881d56162a3aa439df54063aa.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1309.JPG / 1081237bytes / SHA-256 83cdadae78a7a8abab3433cc7419d5cf2cb55cb881d56162a3aa439df54063aa
- [SCAN1311.JPG](/documents/source-store/515e6808f5f607683b75f5958f7549089612ca87bb6ffa433973f199624355a9.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1311.JPG / 1080075bytes / SHA-256 515e6808f5f607683b75f5958f7549089612ca87bb6ffa433973f199624355a9
- [SCAN1312.JPG](/documents/source-store/b2db3881d2ab3772c1641af3e388a8c50d0f72ab43a074c55ddfb6631e23fca0.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1312.JPG / 984258bytes / SHA-256 b2db3881d2ab3772c1641af3e388a8c50d0f72ab43a074c55ddfb6631e23fca0
- [SCAN1313.JPG](/documents/source-store/eb7ecff4e82dec243d8e54dc93f90202716a1b0a7140ac5f78a9b553d63cb76f.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1313.JPG / 998251bytes / SHA-256 eb7ecff4e82dec243d8e54dc93f90202716a1b0a7140ac5f78a9b553d63cb76f
- [SCAN1314.JPG](/documents/source-store/c5a3ad8008b6398588e20affcd5b6ea57f28f8634fb5aca73094ca356bb570fc.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1314.JPG / 1186500bytes / SHA-256 c5a3ad8008b6398588e20affcd5b6ea57f28f8634fb5aca73094ca356bb570fc
- [SCAN1315.JPG](/documents/source-store/2bdf119ea5066308adea258f4d83f5e6d060f892c5235762459574c9d5b4ba82.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1315.JPG / 855494bytes / SHA-256 2bdf119ea5066308adea258f4d83f5e6d060f892c5235762459574c9d5b4ba82
- [SCAN1316.JPG](/documents/source-store/feb26d72e386f9cd7d132614358452d8739f445906a01d96543ec80a06aedbe3.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1316.JPG / 776977bytes / SHA-256 feb26d72e386f9cd7d132614358452d8739f445906a01d96543ec80a06aedbe3
- [SCAN1317.JPG](/documents/source-store/8e1dbede4a8be497c3eff5c794462bef4d48ef998cf1d8d7491f6e91a5aa52f0.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1317.JPG / 894786bytes / SHA-256 8e1dbede4a8be497c3eff5c794462bef4d48ef998cf1d8d7491f6e91a5aa52f0
- [SCAN1318.JPG](/documents/source-store/95d4319d466cb5208c5afbb97c3a7eddd87a2d468ef889d1c812cc5017fd7122.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1318.JPG / 709645bytes / SHA-256 95d4319d466cb5208c5afbb97c3a7eddd87a2d468ef889d1c812cc5017fd7122
- [SCAN1319.JPG](/documents/source-store/74b2699289d3c61c7bce8ad171a2644d214bee8ead983860a186c35879943d45.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1319.JPG / 662939bytes / SHA-256 74b2699289d3c61c7bce8ad171a2644d214bee8ead983860a186c35879943d45
- [SCAN1320.JPG](/documents/source-store/8270af22eb1b3c35a79a6cefe77af6d9b14390753667790d617e8a297e3ea89f.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1320.JPG / 998346bytes / SHA-256 8270af22eb1b3c35a79a6cefe77af6d9b14390753667790d617e8a297e3ea89f
- [SCAN1322.JPG](/documents/source-store/8c3087887a2b3840f9a752348a84690966ca89c6dca9828db0bac4748f072d9c.jpg) / 생산부공용 추가도면/PRI-MAX 운전 및 정비 참고자료/SCAN1322.JPG / 1044330bytes / SHA-256 8c3087887a2b3840f9a752348a84690966ca89c6dca9828db0bac4748f072d9c
- [전처리 프라이머리 슈레더 철거작업 26.01.05~07.pptx](/documents/source-store/2dff39616d937f6d272fd4886b0a974924d5335e04ac8b4fac4dcb267d4eef48.pptx) / 정비 참고자료/전처리 프라이머리 슈레더 철거작업 26.01.05~07.pptx / 8449534bytes / SHA-256 2dff39616d937f6d272fd4886b0a974924d5335e04ac8b4fac4dcb267d4eef48
- [전처리 프라이머리 전원 OFF시 확인사항 출력.pptx](/documents/publication-notices/S44b06169e5113a08.html) / 정비 참고자료/전처리 프라이머리 전원 OFF시 확인사항 출력.pptx / 2367131bytes / SHA-256 44b06169e5113a08d013a94dc16820bd64d303098cf3b7a3c0ed6b305cd5a792
- [파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp](/documents/source-store/06db3e89b5cfcff8579834512d6bcad57d65b0efd08a6c19b41d553448a6eac9.hwp) / 정비 참고자료/파쇄기(PR770S) 감속기로부터 축분리에 대하여.hwp / 74240bytes / SHA-256 06db3e89b5cfcff8579834512d6bcad57d65b0efd08a6c19b41d553448a6eac9
- [프라이머리 슈레드 리스트 목록.xlsx](/documents/source-store/77d8586a69bbc7d5f8f21bf542eb3cca5e0e6652bc15452056f3dde22d41114d.xlsx) / 정비 참고자료/프라이머리 슈레드 리스트 목록.xlsx / 1899293bytes / SHA-256 77d8586a69bbc7d5f8f21bf542eb3cca5e0e6652bc15452056f3dde22d41114d
