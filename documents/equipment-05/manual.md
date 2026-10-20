# 5번 30톤로 (합금)

ALLOY30-05 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

5번은 합금 30톤로 폴더입니다. 1/2호기와 2호기 상세 전기 자료가 섞여 있어 호기를 표시했습니다. 2호기 전기도면에는 연소 FAN·도어 모터·배기댐퍼·버너1/2·오일 프리히터·가스/에어 보호·온도조절기와 XGB PLC가 있습니다. 주제 자료와 열교환기·장입대·소방/공용 자료는 분리했습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 63개, 압축 내부 자료 34개, 고유 해시 91개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[30TON 용해로 2호기 전기도면.pdf](/documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf#page=1) / [30TON 용해로 2호기 전기도면1.pdf](/documents/source-store/420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876.pdf#page=1) / [30TON 용해로 2호기 전기도면10.pdf](/documents/source-store/ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2.pdf#page=1) / [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1) / [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1) / [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf#page=1) / [30TON 용해로 2호기 전기도면2.pdf](/documents/source-store/c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2.pdf#page=1) / [30TON 용해로 2호기 전기도면3.pdf](/documents/source-store/36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c.pdf#page=1) / [30TON 용해로 2호기 전기도면4.pdf](/documents/source-store/c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead.pdf#page=1) / [30TON 용해로 2호기 전기도면5.pdf](/documents/source-store/cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c.pdf#page=1)

## I/O·접점·단자

2호기 전기도면11/12쪽 파일의 입력 P000~P01F 및 출력 P020~P03F를 도면의 기능명과 함께 옮겼습니다. 입력은 연소블로워 확인·FAN ON/OFF·도어/블로워/댐퍼 트립·착화·배기댐퍼/도어 리미트·TIC·오일 프리히터·사이렌 정지 등입니다. 출력은 점화 TR·GAS/MAIN/PILOT SOL·에어 SOL·도어 MC·경광등·FAN/댐퍼·상태 LED 등입니다. SPARE는 사용 신호로 채우지 않았습니다. 접점의 현장 정상극성과 PLC 상태는 미확정입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[30TON 용해로 2호기 전기도면.pdf](/documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf#page=1) / [30TON 용해로 2호기 전기도면1.pdf](/documents/source-store/420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876.pdf#page=1) / [30TON 용해로 2호기 전기도면10.pdf](/documents/source-store/ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2.pdf#page=1) / [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1) / [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1) / [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf#page=1) / [30TON 용해로 2호기 전기도면2.pdf](/documents/source-store/c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2.pdf#page=1) / [30TON 용해로 2호기 전기도면3.pdf](/documents/source-store/36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c.pdf#page=1) / [30TON 용해로 2호기 전기도면4.pdf](/documents/source-store/c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead.pdf#page=1) / [30TON 용해로 2호기 전기도면5.pdf](/documents/source-store/cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c.pdf#page=1)

## 제어 구조

제어는 블로워/보호 확인, 도어와 배기댐퍼 위치, 버너1/2 화염·온도 허가, 오일 계통 및 조작반/리모컨의 관계로 나눴습니다. XBC-DR64H 표기가 있는 PLC 외형도와 원본 XGWX를 확보했으나 CPU 실물·프로그램 일치·타이머·래더 분기는 확인하지 않았습니다. 준공자료의 40TON 명칭 파일과 30TON 파일을 같은 프로젝트로 합치지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[30TON 용해로 2호기 전기도면.pdf](/documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf#page=1) / [30TON 용해로 2호기 전기도면1.pdf](/documents/source-store/420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876.pdf#page=1) / [30TON 용해로 2호기 전기도면10.pdf](/documents/source-store/ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2.pdf#page=1) / [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1) / [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1) / [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf#page=1) / [30TON 용해로 2호기 전기도면2.pdf](/documents/source-store/c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2.pdf#page=1) / [30TON 용해로 2호기 전기도면3.pdf](/documents/source-store/36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c.pdf#page=1) / [30TON 용해로 2호기 전기도면4.pdf](/documents/source-store/c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead.pdf#page=1) / [30TON 용해로 2호기 전기도면5.pdf](/documents/source-store/cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c.pdf#page=1)

## 전기 전달 경로

주전원·제어전원·팬/도어/댐퍼 동력과 PLC 입력, 중계 릴레이/솔레노이드 부하를 구분합니다. P020/02C는 버너1/2 점화 TR 릴레이, P021은 MAIN GAS SOL 릴레이, P02A/02B는 도어 열림/닫힘 MC로 도면에 표시됩니다. TIC 분위기/오일/배기 온도와 인버터 접점, 카이저 리모컨 출력 접점도 별도 원본 경로입니다. 도면 연선 색상·공통선·부하전압을 현장 배선 확인값으로 간주하지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[30TON 용해로 2호기 전기도면.pdf](/documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf#page=1) / [30TON 용해로 2호기 전기도면1.pdf](/documents/source-store/420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876.pdf#page=1) / [30TON 용해로 2호기 전기도면10.pdf](/documents/source-store/ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2.pdf#page=1) / [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1) / [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1) / [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf#page=1) / [30TON 용해로 2호기 전기도면2.pdf](/documents/source-store/c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2.pdf#page=1) / [30TON 용해로 2호기 전기도면3.pdf](/documents/source-store/36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c.pdf#page=1) / [30TON 용해로 2호기 전기도면4.pdf](/documents/source-store/c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead.pdf#page=1) / [30TON 용해로 2호기 전기도면5.pdf](/documents/source-store/cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c.pdf#page=1)

## 알람·복구

입력의 도어·연소 블로워·배기댐퍼 트립, 버너 착화 확인·TIC 높은 온도, 출력의 착화불량·GAS/AIR 압력·모터 이상 LED를 분리했습니다. 예비 출력·알람 표시를 실제 발생 고장으로 등록하지 않았습니다. 설명서의 연료·공압·온도·퍼지/재점화 수치는 현장 승인 설정과 대조해야 하며 프로그램 변경은 수행하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[30TON 용해로 2호기 전기도면.pdf](/documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf#page=1) / [30TON 용해로 2호기 전기도면1.pdf](/documents/source-store/420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876.pdf#page=1) / [30TON 용해로 2호기 전기도면10.pdf](/documents/source-store/ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2.pdf#page=1) / [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1) / [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1) / [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf#page=1) / [30TON 용해로 2호기 전기도면2.pdf](/documents/source-store/c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2.pdf#page=1) / [30TON 용해로 2호기 전기도면3.pdf](/documents/source-store/36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c.pdf#page=1) / [30TON 용해로 2호기 전기도면4.pdf](/documents/source-store/c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead.pdf#page=1) / [30TON 용해로 2호기 전기도면5.pdf](/documents/source-store/cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c.pdf#page=1)

## 증상별 점검

1. FAN·도어·댐퍼 무동작
동력/보호·조작 입력·리미트와 MC/릴레이 부하 경로 구분
근거: 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽

2. 버너1/2 착화 또는 유지 불가
화염 확인·온도 허가·GAS/에어·MAIN/PILOT 계통 구분
근거: 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽

3. 메인/OP/리모컨 조작 차이
각 조작 출처와 해당 I/O·접점 출력 대조
근거: 30TON 용해로 2호기 전기도면13.pdf · PDF 1쪽

4. 열교환기·도어 기계 문제
공용/참고도와 현재 1·2호기 적용을 확인
근거: 세진메탈30톤 사용 설명서20260904.pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[30TON 용해로 2호기 전기도면.pdf](/documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf#page=1) / [30TON 용해로 2호기 전기도면1.pdf](/documents/source-store/420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876.pdf#page=1) / [30TON 용해로 2호기 전기도면10.pdf](/documents/source-store/ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2.pdf#page=1) / [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1) / [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1) / [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf#page=1) / [30TON 용해로 2호기 전기도면2.pdf](/documents/source-store/c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2.pdf#page=1) / [30TON 용해로 2호기 전기도면3.pdf](/documents/source-store/36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c.pdf#page=1) / [30TON 용해로 2호기 전기도면4.pdf](/documents/source-store/c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead.pdf#page=1) / [30TON 용해로 2호기 전기도면5.pdf](/documents/source-store/cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 63개와 압축 내부 34개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 56행·조작 참조 2행
- 핵심 PDF 페이지 미리보기 42개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 4개·확인 대장 6개

미확정·추가 확인
- 30TON/40TON 프로그램: 직접 30TON XGWX와 ZIP 내부 40TON 명칭 XGWX / 각 프로젝트의 장비·CPU·최신성 확인
- 2호기/공용/1호기: 호기별 전기 자료 및 합금·압연 공용도 존재 / 실제 호기·도면 개정 적용 확인
- 기준일 차이: 2026-02-04 프로젝트명·2026-05-20 전기도면·9월 설명서 / 현장 반영 프로그램과 도면 비교
- PLC/HMI 원본 및 현재 적용: 용해로30TON 260204.xgwx / S5fa09b031874998f; 용해로40TON 12.17.xgwx / See92de66712918e3 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[30TON 용해로 2호기 전기도면.pdf](/documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf#page=1) / [30TON 용해로 2호기 전기도면1.pdf](/documents/source-store/420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876.pdf#page=1) / [30TON 용해로 2호기 전기도면10.pdf](/documents/source-store/ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2.pdf#page=1) / [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1) / [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1) / [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf#page=1) / [30TON 용해로 2호기 전기도면2.pdf](/documents/source-store/c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2.pdf#page=1) / [30TON 용해로 2호기 전기도면3.pdf](/documents/source-store/36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c.pdf#page=1) / [30TON 용해로 2호기 전기도면4.pdf](/documents/source-store/c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead.pdf#page=1) / [30TON 용해로 2호기 전기도면5.pdf](/documents/source-store/cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| 합금30톤2호기 입력도 | 입력 참조 | P000 | 연소 블로워 ON 확인 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P001 | 연소 FAN ON · OP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P002 | 연소 FAN OFF · OP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P003 | 도어모터 TRIP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P004 | 연소 블로워 TRIP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P005 | 버너1 점화확인 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P006 | 배기댐퍼 열림 PB | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P007 | 배기댐퍼 닫힘 PB | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P008 | 버너2 점화확인 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P009 | 배기댐퍼 모터 TRIP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P00D | 오일온도 콘트롤 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P00E | 오일 프리히터 OFF/ON | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P00F | 사이렌정지 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P012 | 도어열림 ON PBL | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P013 | 도어닫힘 ON PBL | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P014 | 버너1 ON PBL | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P015 | 버너1 OFF PB | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P016 | 버너2 ON PBL | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P017 | 버너2 OFF PB | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P018 | 분위기온도 콘트롤 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P019 | 분위기온도 높음 알람 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P01A | 도어열림정지 LS1 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P01B | 도어닫힘정지 LS2 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P01C | 배기댐퍼 열림정지 LS3 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P01D | 배기댐퍼 닫힘정지 LS4 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 입력도 | 입력 참조 | P01E | 오일온도 높음 알람 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P020 | 버너1 점화TR ON RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P021 | MAIN GAS SOL RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P022 | 버너1 MAIN SOL ON RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P023 | 버너1 PILOT SOL ON RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P024 | 버너1 에어SOL | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P025 | 사이렌 · OP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P026 | 오일 프리히터 ON MC | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P027 | 이상 경광등 | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P028 | 버너1 ON PBL LAMP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P029 | 버너1 점화불량 LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P02A | 도어열림 MC | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P02B | 도어닫힘 MC | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P02C | 버너2 점화TR ON RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P02D | 버너2 MAIN SOL ON RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P02E | 버너2 PILOT SOL ON RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P02F | 버너2 에어SOL | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P030 | 오일 프리히터 ON LAMP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P031 | 연소 FAN ON RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P032 | 연소 FAN OFF RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P033 | MAIN GAS 압력낮음 LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P034 | 버너2 ON PBL LAMP | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P035 | 배기댐퍼 열림 RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P036 | 배기댐퍼 닫힘 RELAY | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P037 | 버너2 점화불량 LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P038 | 도어모터 이상 LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P039 | 배기댐퍼 모터이상 LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P03A | MAIN GAS 압력높음 LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P03B | 연소AIR 압력낮음 LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P03C | 압력정상 LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 합금30톤2호기 출력도 | 출력 참조 | P03F | 버너1 포스트에어 ON LED | 원본 표기; 현재 할당·실물 미확정 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| 메인·OP·리모컨 | 버너·도어·배기댐퍼 및 ON/OFF 조작 출처 구분 | 30TON 용해로 2호기 전기도면.pdf · PDF 1쪽 | /documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf#page=1 |
| 사용 설명서 | 준공 운전/점검 설명의 과거 근거 | 세진메탈30톤 사용 설명서20260904.pdf · PDF 1쪽 | /documents/source-store/064024961da0e16fd0f4265e551a13b77029b6a40111ef8dcf2658966d34d7ae.pdf#page=1 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| FAN·도어·댐퍼 무동작 | 동력/보호·조작 입력·리미트와 MC/릴레이 부하 경로 구분 | 30TON 용해로 2호기 전기도면11.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf#page=1 |
| 버너1/2 착화 또는 유지 불가 | 화염 확인·온도 허가·GAS/에어·MAIN/PILOT 계통 구분 | 30TON 용해로 2호기 전기도면12.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf#page=1 |
| 메인/OP/리모컨 조작 차이 | 각 조작 출처와 해당 I/O·접점 출력 대조 | 30TON 용해로 2호기 전기도면13.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf#page=1 |
| 열교환기·도어 기계 문제 | 공용/참고도와 현재 1·2호기 적용을 확인 | 세진메탈30톤 사용 설명서20260904.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/064024961da0e16fd0f4265e551a13b77029b6a40111ef8dcf2658966d34d7ae.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 30TON/40TON 프로그램 | 미확정·원문 차이 보존 | 직접 30TON XGWX와 ZIP 내부 40TON 명칭 XGWX | 각 프로젝트의 장비·CPU·최신성 확인 |
| 2호기/공용/1호기 | 미확정·원문 차이 보존 | 호기별 전기 자료 및 합금·압연 공용도 존재 | 실제 호기·도면 개정 적용 확인 |
| 기준일 차이 | 미확정·원문 차이 보존 | 2026-02-04 프로젝트명·2026-05-20 전기도면·9월 설명서 | 현장 반영 프로그램과 도면 비교 |
| PLC/HMI 원본 및 현재 적용 | 원본 파일 확보·해석/현재 적용 미확정 | 용해로30TON 260204.xgwx / S5fa09b031874998f; 용해로40TON 12.17.xgwx / See92de66712918e3 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [30TON 용해로 2호기 전기도면.pdf](/documents/source-store/5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면.pdf / 213195bytes / SHA-256 5a19e665830c7202a04b43534df1fa238111858c008932c6be4be585d11782ac
- [30TON 용해로 2호기 전기도면1.pdf](/documents/source-store/420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면1.pdf / 243008bytes / SHA-256 420b89ff5aaef94f7af33c50076693a7247d062a4558b7432e9628c4861be876
- [30TON 용해로 2호기 전기도면10.pdf](/documents/source-store/ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면10.pdf / 316732bytes / SHA-256 ecf06b8e21d800a51f6e0ff49eea31ff2de570273d6da85f337cf4e9b1ed37e2
- [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면11.pdf / 217177bytes / SHA-256 a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb
- [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면12.pdf / 202990bytes / SHA-256 81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4
- [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면13.pdf / 178083bytes / SHA-256 2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e
- [30TON 용해로 2호기 전기도면2.pdf](/documents/source-store/c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면2.pdf / 183529bytes / SHA-256 c8cb3a4abc6313a71e6d057b546a4525f59a96a9d831b1a561aab280150cbee2
- [30TON 용해로 2호기 전기도면3.pdf](/documents/source-store/36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면3.pdf / 517159bytes / SHA-256 36e8f7e0b65dea123d1ff30fce164c05df0f594fc21ff1a2a2cbbb6a1dd0c04c
- [30TON 용해로 2호기 전기도면4.pdf](/documents/source-store/c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면4.pdf / 193848bytes / SHA-256 c1a253499541c36619318c455b5e10a09b8344a6b25216d38df494ed0b0b8ead
- [30TON 용해로 2호기 전기도면5.pdf](/documents/source-store/cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면5.pdf / 163045bytes / SHA-256 cd8686b4f618f744ba6e1883dd3c44be06fd3efc21fdc6a51691d452e4c6ce7c
- [30TON 용해로 2호기 전기도면6.pdf](/documents/source-store/0e327468680c7f955ff97748c94c7f6a67f9503d4114d87242ced751cb307ac2.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면6.pdf / 238730bytes / SHA-256 0e327468680c7f955ff97748c94c7f6a67f9503d4114d87242ced751cb307ac2
- [30TON 용해로 2호기 전기도면7.pdf](/documents/source-store/f0ac01fe5dff9b7adc31cdbae19d40027622e453c900afa75abe59e2f9b499ca.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면7.pdf / 179992bytes / SHA-256 f0ac01fe5dff9b7adc31cdbae19d40027622e453c900afa75abe59e2f9b499ca
- [30TON 용해로 2호기 전기도면8.pdf](/documents/source-store/d6e66c88bf8fcb42bfbfa0a6c179dea254f700e9dd93b858d6c6f9d5dd9e2163.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면8.pdf / 169852bytes / SHA-256 d6e66c88bf8fcb42bfbfa0a6c179dea254f700e9dd93b858d6c6f9d5dd9e2163
- [30TON 용해로 2호기 전기도면9.pdf](/documents/source-store/8f4f40adb088a1f7b5625c3064bfe0a82e44845288cb2975725f4d5bc749f3e0.pdf) / 30톤 2호 전기도면/30TON 용해로 2호기 전기도면9.pdf / 140998bytes / SHA-256 8f4f40adb088a1f7b5625c3064bfe0a82e44845288cb2975725f4d5bc749f3e0
- [1. 30톤 용해로_열교환기(RECUPERATOR).pdf](/documents/source-store/205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93.pdf) / 30톤로 열교환기(ALF)/1. 30톤 용해로_열교환기(RECUPERATOR).pdf / 527953bytes / SHA-256 205c98ed2031945fe4c3787230df805cb8bb086ef7399b7b2a061d2aba186d93
- [2. 30톤 용해로_열교환기 Assey.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf) / 30톤로 열교환기(ALF)/2. 30톤 용해로_열교환기 Assey.pdf / 1179033bytes / SHA-256 144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd
- [30톤 용해로 열교환기 조립도.bak](/documents/source-store/1fcbbae4a8f09cd2c27295fd0855fee7e497dfe41db4700a2384b55f91970536.bak) / 30톤로 열교환기(ALF)/30톤 용해로 열교환기 조립도.bak / 1461142bytes / SHA-256 1fcbbae4a8f09cd2c27295fd0855fee7e497dfe41db4700a2384b55f91970536
- [30톤 용해로 열교환기 조립도.dwg](/documents/source-store/7e4f81f1941142482f5334ce8ed0e6a1dc94b7be0b5fcc3c1785ee295b343aa4.dwg) / 30톤로 열교환기(ALF)/30톤 용해로 열교환기 조립도.dwg / 755980bytes / SHA-256 7e4f81f1941142482f5334ce8ed0e6a1dc94b7be0b5fcc3c1785ee295b343aa4
- [열교환기(RECUPERATOR).dwg](/documents/source-store/8cd92c62853479d6c530add3b8e8ef5a43970ce56548768042124cccfbc52b29.dwg) / 30톤로 열교환기(ALF)/열교환기(RECUPERATOR).dwg / 706799bytes / SHA-256 8cd92c62853479d6c530add3b8e8ef5a43970ce56548768042124cccfbc52b29
- [(주)세진메탈-30톤 용해로-열교환기0603.pdf](/documents/source-store/144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd.pdf) / 기계·내화물·송풍기 도면/(주)세진메탈-30톤 용해로-열교환기0603.pdf / 1179033bytes / SHA-256 144aba866284f75d52e87463760ab953aad03017de3cdb5333f0e206c1aa05bd
- [(주)세진메탈-60톤-30톤-40톤유지로-트래베1.5톤.pdf](/documents/source-store/cf73bc2f22e1e87c0478b5172016f31c20fdbbd412ea429f66c6b2541a23bd2f.pdf) / 기계·내화물·송풍기 도면/(주)세진메탈-60톤-30톤-40톤유지로-트래베1.5톤.pdf / 2212543bytes / SHA-256 cf73bc2f22e1e87c0478b5172016f31c20fdbbd412ea429f66c6b2541a23bd2f
- [1. 30톤 용해로-Model.pdf](/documents/source-store/2caf2ad63cd17875e42e54344a3c77151e1430a4129932de2b6bfa8b92a1f0c7.pdf) / 기계·내화물·송풍기 도면/1. 30톤 용해로-Model.pdf / 630523bytes / SHA-256 2caf2ad63cd17875e42e54344a3c77151e1430a4129932de2b6bfa8b92a1f0c7
- [1. 30톤 용해로.dwg](/documents/source-store/210370875db3b90ac73fb57ecda62558feb06a2380dd63e0c1d4bbdd86e4940a.dwg) / 기계·내화물·송풍기 도면/1. 30톤 용해로.dwg / 3826467bytes / SHA-256 210370875db3b90ac73fb57ecda62558feb06a2380dd63e0c1d4bbdd86e4940a
- [30톤-문 Model (1).pdf](/documents/source-store/b9189266129f9d04ee919a07dfe91e6d4e27c0381e9f73616c46dffe61b60425.pdf) / 기계·내화물·송풍기 도면/30톤-문 Model (1).pdf / 100978bytes / SHA-256 b9189266129f9d04ee919a07dfe91e6d4e27c0381e9f73616c46dffe61b60425
- [30톤로 내화물 도면.tif](/documents/source-store/e188d8e87277f2cd9930f5d52ef158a5a5873f65db709de04ac928450f7bc388.tif) / 기계·내화물·송풍기 도면/30톤로 내화물 도면.tif / 178336bytes / SHA-256 e188d8e87277f2cd9930f5d52ef158a5a5873f65db709de04ac928450f7bc388
- [ALF-30TON.dwg](/documents/source-store/5f3210ad75124a2ef36ecd3bbf61c8f573e2d6da72f0ff31fee13d2486671768.dwg) / 기계·내화물·송풍기 도면/ALF-30TON.dwg / 1752350bytes / SHA-256 5f3210ad75124a2ef36ecd3bbf61c8f573e2d6da72f0ff31fee13d2486671768
- [SPRAY GUN LAY-OUT(압연30톤.합금(1,2호기)).dwg](/documents/source-store/e8b2d846b98ae15732d1222cba1888b80204d64c46bf6dc6a292921ac33d0a00.dwg) / 기계·내화물·송풍기 도면/SPRAY GUN LAY-OUT(압연30톤.합금(1,2호기)).dwg / 91232bytes / SHA-256 e8b2d846b98ae15732d1222cba1888b80204d64c46bf6dc6a292921ac33d0a00
- [세진 30톤 PDF (합금,압연 공용).pdf](/documents/source-store/fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048.pdf) / 기계·내화물·송풍기 도면/세진 30톤 PDF (합금,압연 공용).pdf / 1852693bytes / SHA-256 fc45de725e430ba0ceb96e16d88b375b4bb067c1310ef3901914690e6f5cc048
- [세진30톤로 송풍기 도면.pdf](/documents/source-store/1750e04d9c14bace9a73c5d8d7274c06d867e841f688cbf85c967c3d990de438.pdf) / 기계·내화물·송풍기 도면/세진30톤로 송풍기 도면.pdf / 60225bytes / SHA-256 1750e04d9c14bace9a73c5d8d7274c06d867e841f688cbf85c967c3d990de438
- [세진메탈_30톤 용해로_연소용  BLOWER 90M550mmAq25HP0612.pdf](/documents/source-store/5ed8c88feb23e6bc5eef0e16fdfbb09fc867bfe767536faa2a4a8b925c8740c2.pdf) / 기계·내화물·송풍기 도면/세진메탈_30톤 용해로_연소용  BLOWER 90M550mmAq25HP0612.pdf / 484547bytes / SHA-256 5ed8c88feb23e6bc5eef0e16fdfbb09fc867bfe767536faa2a4a8b925c8740c2
- [합금30톤로(1호기).dwg](/documents/source-store/f203a7bce97d625fd597a6d26e16d1bc61f6e4d21495fa74f85e2ce4e7a24ad9.dwg) / 배관·버너 도면/1. 1차 도면/합금30톤로(1호기).dwg / 508586bytes / SHA-256 f203a7bce97d625fd597a6d26e16d1bc61f6e4d21495fa74f85e2ce4e7a24ad9
- [합금30톤로(2호기).dwg](/documents/source-store/77f9dbdf6fe402df1ae38afff96dbd9dfb507d249ceeb28a556c95b8246f1dd7.dwg) / 배관·버너 도면/1. 1차 도면/합금30톤로(2호기).dwg / 508585bytes / SHA-256 77f9dbdf6fe402df1ae38afff96dbd9dfb507d249ceeb28a556c95b8246f1dd7
- [합금30톤로(1호기).dwg](/documents/source-store/ef105e9de32d6249d3d7ff2567a61585ab5d4c9a54c2884cb76e8541794c92ff.dwg) / 배관·버너 도면/2. 2차 도면/합금30톤로(1호기).dwg / 508734bytes / SHA-256 ef105e9de32d6249d3d7ff2567a61585ab5d4c9a54c2884cb76e8541794c92ff
- [합금30톤로(2호기).dwg](/documents/source-store/b55e3f09a23a3ea6e3ce24f81896add43df15efcd18486349bec296ffa129f00.dwg) / 배관·버너 도면/2. 2차 도면/합금30톤로(2호기).dwg / 508743bytes / SHA-256 b55e3f09a23a3ea6e3ce24f81896add43df15efcd18486349bec296ffa129f00
- [3. 30톤 합금로1호.dwg](/documents/source-store/2ea791a08f14212eb4aab338ef7cfbdc6c009ae05cedb74eaf9f141d65b38385.dwg) / 배관·버너 도면/LNG 배관/3. 30톤 합금로1호.dwg / 434693bytes / SHA-256 2ea791a08f14212eb4aab338ef7cfbdc6c009ae05cedb74eaf9f141d65b38385
- [4. 30톤 합금로2호.dwg](/documents/source-store/687020cad51a29ff965b75b6e15b0273188a026ca7de21c8d7dfa365a44e48a2.dwg) / 배관·버너 도면/LNG 배관/4. 30톤 합금로2호.dwg / 433253bytes / SHA-256 687020cad51a29ff965b75b6e15b0273188a026ca7de21c8d7dfa365a44e48a2
- [6. 합금30톤로(1호기).dwg](/documents/source-store/8eacf65433336cee5de6ae5ab93cdb0221187a4bd96056e7917494bc46f6e6fd.dwg) / 배관·버너 도면/정제유 변경배관/6. 합금30톤로(1호기).dwg / 508759bytes / SHA-256 8eacf65433336cee5de6ae5ab93cdb0221187a4bd96056e7917494bc46f6e6fd
- [7. 합금30톤로(2호기).dwg](/documents/source-store/f0bffb9a37b67682751d65f1e7fae0d07267cc08f40e9e98f02aea62db5216d7.dwg) / 배관·버너 도면/정제유 변경배관/7. 합금30톤로(2호기).dwg / 508743bytes / SHA-256 f0bffb9a37b67682751d65f1e7fae0d07267cc08f40e9e98f02aea62db5216d7
- [ALF-30TON.dwg](/documents/source-store/8c1f3d89e7d45d2cda0ec656aa256fc097d8f15630ce89ef57e372cf92df47bb.dwg) / 생산부공용 추가도면/버너 및 설비도면/ALF-30TON.dwg / 1208576bytes / SHA-256 8c1f3d89e7d45d2cda0ec656aa256fc097d8f15630ce89ef57e372cf92df47bb
- [IBB-2000(합금1호기).dwg](/documents/source-store/6a44c3d26b9cfc4452d1ca409760521b48e01274a2b0e5b1cb2a66bc6bec09ef.dwg) / 생산부공용 추가도면/버너 및 설비도면/IBB-2000(합금1호기).dwg / 316960bytes / SHA-256 6a44c3d26b9cfc4452d1ca409760521b48e01274a2b0e5b1cb2a66bc6bec09ef
- [IBB-2000(합금2호기).dwg](/documents/source-store/7bc1fd996e4217d3d390318027f89eafdc8eeb37d35bf48d53f703e2311d1d2d.dwg) / 생산부공용 추가도면/버너 및 설비도면/IBB-2000(합금2호기).dwg / 316960bytes / SHA-256 7bc1fd996e4217d3d390318027f89eafdc8eeb37d35bf48d53f703e2311d1d2d
- [세진메탈_30톤 용해로-열교환기0422.pdf](/documents/source-store/89ac212ec952f9a27bf2fc44cbfd2894fc5adc620dd9a8c487f31bb384e6ebe0.pdf) / 생산부공용 추가도면/버너 및 설비도면/세진메탈_30톤 용해로-열교환기0422.pdf / 212462bytes / SHA-256 89ac212ec952f9a27bf2fc44cbfd2894fc5adc620dd9a8c487f31bb384e6ebe0
- [합금30톤로(1호기).dwg](/documents/source-store/3f4e26ef08af03106420fcea0ac738dde1b19cfd039a5eda61a251647bf58e82.dwg) / 생산부공용 추가도면/버너 및 설비도면/합금30톤로(1호기).dwg / 377952bytes / SHA-256 3f4e26ef08af03106420fcea0ac738dde1b19cfd039a5eda61a251647bf58e82
- [합금30톤로(1호기).pdf](/documents/source-store/132757037ccc11edd4c01948ea4e4bd81d0548a8ca3f1ebe190368f3ee9baa4e.pdf) / 생산부공용 추가도면/버너 및 설비도면/합금30톤로(1호기).pdf / 269163bytes / SHA-256 132757037ccc11edd4c01948ea4e4bd81d0548a8ca3f1ebe190368f3ee9baa4e
- [합금30톤로(2호기).dwg](/documents/source-store/e0d9fc1f4ecd50ab5715adf0c141e7ae9135ec1459eae0e1a6acdf8f35150bb2.dwg) / 생산부공용 추가도면/버너 및 설비도면/합금30톤로(2호기).dwg / 377952bytes / SHA-256 e0d9fc1f4ecd50ab5715adf0c141e7ae9135ec1459eae0e1a6acdf8f35150bb2
- [합금30톤로(2호기).pdf](/documents/source-store/f92d6bdc19291b506b88d8a431508be99c001200ea5c68c4fb05af9334273d1d.pdf) / 생산부공용 추가도면/버너 및 설비도면/합금30톤로(2호기).pdf / 269300bytes / SHA-256 f92d6bdc19291b506b88d8a431508be99c001200ea5c68c4fb05af9334273d1d
- [1.30 TON #1.pdf](/documents/source-store/93a88b462492dcea8a3ce03fdada550e9689b83ce4d758632b5868fe844991dd.pdf) / 생산부공용 추가도면/소방 관련 참고자료(적용확인필요)/1.30 TON #1.pdf / 56824bytes / SHA-256 93a88b462492dcea8a3ce03fdada550e9689b83ce4d758632b5868fe844991dd
- [3.30 TON #2 외 1실.pdf](/documents/source-store/1823078dcb9bc1576bb4d012be22c73c8de9fa279f3ac4dde5986027fb51613a.pdf) / 생산부공용 추가도면/소방 관련 참고자료(적용확인필요)/3.30 TON #2 외 1실.pdf / 57220bytes / SHA-256 1823078dcb9bc1576bb4d012be22c73c8de9fa279f3ac4dde5986027fb51613a
- [4.30 TON #3.pdf](/documents/source-store/6e4400a4c5b882bfe7b602fe9043ab2fb759b351dd7b44465207f14ed3a1ea06.pdf) / 생산부공용 추가도면/소방 관련 참고자료(적용확인필요)/4.30 TON #3.pdf / 56825bytes / SHA-256 6e4400a4c5b882bfe7b602fe9043ab2fb759b351dd7b44465207f14ed3a1ea06
- [CO2설비 30톤.pdf](/documents/source-store/51448634590a78728d53ea1923cd7ea0c2ac0a78e8a0d8969ea075a318c4211a.pdf) / 생산부공용 추가도면/소방 관련 참고자료(적용확인필요)/CO2설비 30톤.pdf / 91381bytes / SHA-256 51448634590a78728d53ea1923cd7ea0c2ac0a78e8a0d8969ea075a318c4211a
- [(주)세진메탈-30톤 용해로-열교환기.pdf](/documents/source-store/50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b.pdf) / 열교환기/(주)세진메탈-30톤 용해로-열교환기.pdf / 1295486bytes / SHA-256 50d728ef0028519c485ccb72aa65d956559fdd4a21298369954b87756a3bf57b
- [세진메탈 1공장 30톤 용해로 열교환기 사용 설명서.hwp](/documents/source-store/cb335d8681bf2cde4828d7fdc303f70a1e1ce6dda2f8721e6478415f26615fd7.hwp) / 열교환기/세진메탈 1공장 30톤 용해로 열교환기 사용 설명서.hwp / 30586368bytes / SHA-256 cb335d8681bf2cde4828d7fdc303f70a1e1ce6dda2f8721e6478415f26615fd7
- [(주)세진메탈-30톤 2호기 버너 교체 작업견적 20260515.pdf](/documents/source-store/f00bc7e1e25838c22dabd996042ea92cfa13e4f48862ffc037d3383186927e4f.pdf) / 용해로 30TON 자료/(주)세진메탈-30톤 2호기 버너 교체 작업견적 20260515.pdf / 135644bytes / SHA-256 f00bc7e1e25838c22dabd996042ea92cfa13e4f48862ffc037d3383186927e4f
- [30TON 용해로 2호기 전기도면.dwg](/documents/source-store/1baa42b5f30119138afe7ec2b1c9f3fdfa45703e880d8e6b7adfcda27cff998e.dwg) / 용해로 30TON 자료/30TON 용해로 2호기 전기도면.dwg / 3582790bytes / SHA-256 1baa42b5f30119138afe7ec2b1c9f3fdfa45703e880d8e6b7adfcda27cff998e
- [30TON 용해로 2호기 전기도면11.pdf](/documents/source-store/a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb.pdf) / 용해로 30TON 자료/30TON 용해로 2호기 전기도면11.pdf / 217177bytes / SHA-256 a23707f8fd3ae1e340b688acb5685011548247e399579c84f9a1e1defede9dbb
- [30TON 용해로 2호기 전기도면12.pdf](/documents/source-store/81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4.pdf) / 용해로 30TON 자료/30TON 용해로 2호기 전기도면12.pdf / 202990bytes / SHA-256 81a8338767b90248c6110805cc96ce194dba5d0550b2bbb8e672e58c59b453d4
- [30TON 용해로 2호기 전기도면13.pdf](/documents/source-store/2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e.pdf) / 용해로 30TON 자료/30TON 용해로 2호기 전기도면13.pdf / 178083bytes / SHA-256 2b2e185690976c7ae7069a48ab925f9114d949e8d5671c7c9b86a069b6a2060e
- [용해로30TON 260204.xgwx](/documents/source-store/5fa09b031874998fcf8ce57c36a354c4d7c9ec2c3fcc356702141e208763a117.xgwx) / 용해로 30TON 자료/PLC/용해로30TON 260204.xgwx / 13788bytes / SHA-256 5fa09b031874998fcf8ce57c36a354c4d7c9ec2c3fcc356702141e208763a117
- [도면.zip](/documents/source-store/fa7cb9f60840fc964cb3c06bc0b79d89672340af4137b97d029a848f853bcbca.zip) / 용해로 30TON 자료/도면.zip / 1359783bytes / SHA-256 fa7cb9f60840fc964cb3c06bc0b79d89672340af4137b97d029a848f853bcbca
- [30TON 용해로 전기도면.dwg](/documents/source-store/789d7addfca2bd9afbfbfa7109c5a052cb60273c1ccc571b502cb70c0d8354b0.dwg) / 용해로 30TON 자료/전기도면/30TON 용해로 전기도면.dwg / 3481511bytes / SHA-256 789d7addfca2bd9afbfbfa7109c5a052cb60273c1ccc571b502cb70c0d8354b0
- [용해로 30TON 자료.zip](/documents/source-store/47b5cf9cc0edf9e07b96b780ffec1ef47450f12223f0bdc1218185730e771f69.zip) / 원본 압축자료/용해로 30TON 자료.zip / 2736395bytes / SHA-256 47b5cf9cc0edf9e07b96b780ffec1ef47450f12223f0bdc1218185730e771f69
- [30톤 장입대.pdf](/documents/source-store/d27c826336520e209887c5c337c124ebf66646b3107170cea5529372cd20f400.pdf) / 장입대 도면/30톤 장입대.pdf / 60114bytes / SHA-256 d27c826336520e209887c5c337c124ebf66646b3107170cea5529372cd20f400
- [세진메탈 30톤 2호기메뉴얼.zip](/documents/source-store/388da190c253793bdeef52c7118bf29803104d5f31c8738b5fb1e837a718b207.zip) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip / 98501141bytes / SHA-256 388da190c253793bdeef52c7118bf29803104d5f31c8738b5fb1e837a718b207
- [1.pdf](/documents/source-store/bf90cda6a308f8d132ef09be994fc363fa2c47ce9a5eb9a3a7d78d3ca4caa49c.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/1.pdf / 159008bytes / SHA-256 bf90cda6a308f8d132ef09be994fc363fa2c47ce9a5eb9a3a7d78d3ca4caa49c
- [10.pdf](/documents/source-store/7cfda486f0b5b7652ae15ad1e4f5cb43b7c0d340f4b0f71a12a0ce4c897b8a35.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/10.pdf / 67810bytes / SHA-256 7cfda486f0b5b7652ae15ad1e4f5cb43b7c0d340f4b0f71a12a0ce4c897b8a35
- [11.pdf](/documents/source-store/b2e364f4742a2f9e38d07345fd5e664d450341f63102fd91ffd8d72619c6c246.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/11.pdf / 127175bytes / SHA-256 b2e364f4742a2f9e38d07345fd5e664d450341f63102fd91ffd8d72619c6c246
- [12.pdf](/documents/source-store/9c5388c6559455005521815ec1da3862af02b7ae4fa258853dd3ad5956be5681.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/12.pdf / 72417bytes / SHA-256 9c5388c6559455005521815ec1da3862af02b7ae4fa258853dd3ad5956be5681
- [13.pdf](/documents/source-store/fed497e229d137eccb05dcea2baabe745cba60bee9365db9c516b952b7503269.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/13.pdf / 66163bytes / SHA-256 fed497e229d137eccb05dcea2baabe745cba60bee9365db9c516b952b7503269
- [14.pdf](/documents/source-store/c6b4040a8ba25e0dae48f0545cc20c2d379c4126d348c15d53eefb42310d1202.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/14.pdf / 70559bytes / SHA-256 c6b4040a8ba25e0dae48f0545cc20c2d379c4126d348c15d53eefb42310d1202
- [2.pdf](/documents/source-store/4bab99193a6e526860f59b5054f381a10f7f24d4a39a1fd6ab5d96680d0bb670.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/2.pdf / 163949bytes / SHA-256 4bab99193a6e526860f59b5054f381a10f7f24d4a39a1fd6ab5d96680d0bb670
- [3.pdf](/documents/source-store/962bf7e89e04f698355d62db196940012182d7c575e55ee545b38fa774be97f9.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/3.pdf / 86601bytes / SHA-256 962bf7e89e04f698355d62db196940012182d7c575e55ee545b38fa774be97f9
- [4.pdf](/documents/source-store/b25fc82dcad3b1389deb05c2dd7b7da116beed053b582340bc9654f830ec9538.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/4.pdf / 364017bytes / SHA-256 b25fc82dcad3b1389deb05c2dd7b7da116beed053b582340bc9654f830ec9538
- [5.pdf](/documents/source-store/e439561740e4670c1c2c97cd8e6d980da816df414786308fc7ea37a073906057.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/5.pdf / 72543bytes / SHA-256 e439561740e4670c1c2c97cd8e6d980da816df414786308fc7ea37a073906057
- [6.pdf](/documents/source-store/caa6e5fd0b8f7079bf64ef76a052a6dce4f9fa6a92d45f5e80129ee1e786c2ed.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/6.pdf / 51533bytes / SHA-256 caa6e5fd0b8f7079bf64ef76a052a6dce4f9fa6a92d45f5e80129ee1e786c2ed
- [7.pdf](/documents/source-store/6e5fa2c9f9cbb73fdc67217bc789bdf9a6f625cdba3fc46474bd2d60fe4ae3df.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/7.pdf / 51532bytes / SHA-256 6e5fa2c9f9cbb73fdc67217bc789bdf9a6f625cdba3fc46474bd2d60fe4ae3df
- [8.pdf](/documents/source-store/21f73a9b3e7ab3eac1bdef76b80c2bda200985e81aae45d1e6f669ec80d22957.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/8.pdf / 48115bytes / SHA-256 21f73a9b3e7ab3eac1bdef76b80c2bda200985e81aae45d1e6f669ec80d22957
- [9.pdf](/documents/source-store/ba4f62c217f33ff27b06a9e3afe437a4141f73a38039c626571e330ccf8e6c6d.pdf) / 용해로 30TON 자료/도면.zip!/새 폴더 (2)/9.pdf / 62301bytes / SHA-256 ba4f62c217f33ff27b06a9e3afe437a4141f73a38039c626571e330ccf8e6c6d
- [용해로30TON 260204.xgwx](/documents/source-store/5fa09b031874998fcf8ce57c36a354c4d7c9ec2c3fcc356702141e208763a117.xgwx) / 원본 압축자료/용해로 30TON 자료.zip!/PLC/용해로30TON 260204.xgwx / 13788bytes / SHA-256 5fa09b031874998fcf8ce57c36a354c4d7c9ec2c3fcc356702141e208763a117
- [30TON 용해로 전기도면.dwg](/documents/source-store/789d7addfca2bd9afbfbfa7109c5a052cb60273c1ccc571b502cb70c0d8354b0.dwg) / 원본 압축자료/용해로 30TON 자료.zip!/전기도면/30TON 용해로 전기도면.dwg / 3481511bytes / SHA-256 789d7addfca2bd9afbfbfa7109c5a052cb60273c1ccc571b502cb70c0d8354b0
- [1988180643_NM5RFqxG_WYFS06TD_WYFS10TD_WYFS15TD_WYFS20TD-260819.pdf](/documents/source-store/ac372b22042f1822002a0b8d509a3d37f9a421506e362656b08ad945f52da100.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/1988180643_NM5RFqxG_WYFS06TD_WYFS10TD_WYFS15TD_WYFS20TD-260819.pdf / 1169471bytes / SHA-256 ac372b22042f1822002a0b8d509a3d37f9a421506e362656b08ad945f52da100
- [30TON 용해로 2호기 전기도면202609_합치기.pdf](/documents/source-store/2472dd7cc4d37232a184747182fc4383fba16128a37a763a1e2f774e4621fdba.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/30TON 용해로 2호기 전기도면202609_합치기.pdf / 2444740bytes / SHA-256 2472dd7cc4d37232a184747182fc4383fba16128a37a763a1e2f774e4621fdba
- [A2-5-3. [분전반] 산업용 차단기.pdf](/documents/source-store/bd0e323e16c9b09fbe0968c7c1a6af0e6a5a8e039a2a31528685707cc600ba9d.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/A2-5-3. [분전반] 산업용 차단기.pdf / 6442084bytes / SHA-256 bd0e323e16c9b09fbe0968c7c1a6af0e6a5a8e039a2a31528685707cc600ba9d
- [AT8SDN_KO_TCD220053AB_INST_W.pdf](/documents/source-store/972d2f28b6681c20c2a92ab76c5f647b7b8d0343fc56f2ddb42ad59fa501d5c0.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/AT8SDN_KO_TCD220053AB_INST_W.pdf / 375878bytes / SHA-256 972d2f28b6681c20c2a92ab76c5f647b7b8d0343fc56f2ddb42ad59fa501d5c0
- [AT8SDN_KO_TCD220053AB_MANUAL_W.pdf](/documents/source-store/9201f948b611b7e39507d906279353ec205801ed03339b31fc730a66f3be4923.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/AT8SDN_KO_TCD220053AB_MANUAL_W.pdf / 635153bytes / SHA-256 9201f948b611b7e39507d906279353ec205801ed03339b31fc730a66f3be4923
- [C7027 BC1000.pdf](/documents/source-store/feeabb4be1d3a8e35eedf587365b54b51aca37ad72c4611bed92aab100a115c7.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/C7027 BC1000.pdf / 1159685bytes / SHA-256 feeabb4be1d3a8e35eedf587365b54b51aca37ad72c4611bed92aab100a115c7
- [DMPi MANUAL_KR_EN.pdf](/documents/source-store/f23c951a0433178326a1100442fd996e0deeeeb6149ad583216000ed716eade4.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/DMPi MANUAL_KR_EN.pdf / 2423435bytes / SHA-256 f23c951a0433178326a1100442fd996e0deeeeb6149ad583216000ed716eade4
- [G100 Series_Catalog_KR_202506.pdf](/documents/source-store/6e5d21d1898515b92d497c4c01320fb79fe46669b2c66159bc56da214ef96df1.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/G100 Series_Catalog_KR_202506.pdf / 8229379bytes / SHA-256 6e5d21d1898515b92d497c4c01320fb79fe46669b2c66159bc56da214ef96df1
- [G100(C)_사용설명서_KR_V4.03_250731.pdf](/documents/source-store/63c26429050b7ffba7bd3cc202cf923d24750d8be43375db258cbf923fa14c06.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/G100(C)_사용설명서_KR_V4.03_250731.pdf / 16976350bytes / SHA-256 63c26429050b7ffba7bd3cc202cf923d24750d8be43375db258cbf923fa14c06
- [M7284.pdf](/documents/source-store/9e243fb234901e1c14513e59ad1c50d5d27505c35fd8818aae76c10185db3f9d.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/M7284.pdf / 684399bytes / SHA-256 9e243fb234901e1c14513e59ad1c50d5d27505c35fd8818aae76c10185db3f9d
- [SPB-A_KO_TCD230001AG_20260730_INST_W.pdf](/documents/source-store/604d751f9126c0fbe24d0b01cc1914bdb472ed91acb5eac0160489bd7615a812.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/SPB-A_KO_TCD230001AG_20260730_INST_W.pdf / 381369bytes / SHA-256 604d751f9126c0fbe24d0b01cc1914bdb472ed91acb5eac0160489bd7615a812
- [SPB-A_KO_TCD230001AG_20260730_MANUAL_W.pdf](/documents/source-store/3e3d86307b25bf6f424d34c7a7f40b7691f357511f6f36915933438511325197.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/SPB-A_KO_TCD230001AG_20260730_MANUAL_W.pdf / 506026bytes / SHA-256 3e3d86307b25bf6f424d34c7a7f40b7691f357511f6f36915933438511325197
- [ST590,580,570,540.pdf](/documents/source-store/6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/ST590,580,570,540.pdf / 3620580bytes / SHA-256 6c30c7f013e590f379e6fbdb600fe49ce8ca286b2de44ee90a96adfd46428a5d
- [[Metasol_MCCB]_KO_C01031-34-202501.pdf](/documents/source-store/9191efd235985d289640df1b8f6173de436600c8bfe01d5e2415d0d9b402e05a.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/[Metasol_MCCB]_KO_C01031-34-202501.pdf / 46453915bytes / SHA-256 9191efd235985d289640df1b8f6173de436600c8bfe01d5e2415d0d9b402e05a
- [[Metasol_MS]_KO_C04001-36-202605.pdf](/documents/source-store/bfb579380f329d42947fc5b2f711303df978af30904d334c087e9cb2ea95deb2.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/[Metasol_MS]_KO_C04001-36-202605.pdf / 32807097bytes / SHA-256 bfb579380f329d42947fc5b2f711303df978af30904d334c087e9cb2ea95deb2
- [세진30톤 버너LAY-0UT.pdf](/documents/source-store/54a6eb016fa582f1567f6fb149330925fc3757ff768257effd83ed44fba4f3f6.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/세진30톤 버너LAY-0UT.pdf / 76359bytes / SHA-256 54a6eb016fa582f1567f6fb149330925fc3757ff768257effd83ed44fba4f3f6
- [세진메탈30톤 사용 설명서20260904.pdf](/documents/source-store/064024961da0e16fd0f4265e551a13b77029b6a40111ef8dcf2658966d34d7ae.pdf) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/세진메탈30톤 사용 설명서20260904.pdf / 177151bytes / SHA-256 064024961da0e16fd0f4265e551a13b77029b6a40111ef8dcf2658966d34d7ae
- [용해로40TON 12.17.xgwx](/documents/source-store/ee92de66712918e393db6e2d016ac12932a2e70f9919784917e8d38166989956.xgwx) / 준공 매뉴얼/세진메탈 30톤 2호기메뉴얼.zip!/용해로40TON 12.17.xgwx / 13528bytes / SHA-256 ee92de66712918e393db6e2d016ac12932a2e70f9919784917e8d38166989956
