# 10번 GBF

GBF-10 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

10번 GBF는 랜스(축/임펠러) 상하·회전, 질소 가스·FLUX 공급·청소와 관련된 용탕 처리 자료입니다. 신명 전기도면과 부창 BC-2000S 설명서·RDM 소개 자료를 구분했습니다. 동력·회전/상하·가스/FLUX·압력/이상·조작과 타이머를 각각 정리했습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 8개, 압축 내부 자료 0개, 고유 해시 8개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[GBF전기도면.pdf](/documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1) / [R.D.M  설명.pptx](/documents/equipment-10/library.html?source=S27a3062e495d05b5) / [부창엔지니어링 RDM매뉴얼.pdf](/documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1) / [세진메탈(기계도면).pdf](/documents/source-store/06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0.pdf#page=1) / [탈가스기 메뉴얼.pdf](/documents/source-store/b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa.pdf#page=1)

## I/O·접점·단자

GBF전기도면 5쪽의 P000~P00F는 모드·AUTO START·비상·랜스/배플/FLUX/GAS/CLEANING·리미트·압력/인버터 이상 참조입니다. 같은 도면 우측은 X010/X011/X012/X013/X016으로 인쇄되어 있어 P010 등으로 교정하지 않았습니다. 6쪽 P040~P04E 일부는 전/후처리·FLUX·가스·청소·회전/상하·부저 출력입니다. 빈 항목은 확정 기능으로 채우지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[GBF전기도면.pdf](/documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1) / [R.D.M  설명.pptx](/documents/equipment-10/library.html?source=S27a3062e495d05b5) / [부창엔지니어링 RDM매뉴얼.pdf](/documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1) / [세진메탈(기계도면).pdf](/documents/source-store/06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0.pdf#page=1) / [탈가스기 메뉴얼.pdf](/documents/source-store/b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa.pdf#page=1)

## 제어 구조

RDM 설명은 FLUX 사용 유/무에 따라 같은 전면 타이머의 의미가 바뀌는 점을 서술합니다. 설명서 내 고속/저속 명칭과 동작 설명에는 일관성 확인이 필요한 문구가 있어 예시 시간을 실제 순서로 재계산하지 않았습니다. 도면의 외부 타이머 접점과 PLC 내부 타이머를 구분하며 원본 프로그램·CPU·실행 로직은 미확보입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[GBF전기도면.pdf](/documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1) / [R.D.M  설명.pptx](/documents/equipment-10/library.html?source=S27a3062e495d05b5) / [부창엔지니어링 RDM매뉴얼.pdf](/documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1) / [세진메탈(기계도면).pdf](/documents/source-store/06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0.pdf#page=1) / [탈가스기 메뉴얼.pdf](/documents/source-store/b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa.pdf#page=1)

## 전기 전달 경로

전기도면은 상하/회전 구동, 인버터와 RPM/엔코더, 가스/FLUX/청소 부하, Q-X10 입력·QY10 출력 접속을 보여줍니다. P044→CR1 FLUX MOTOR, P045→CR2 가스, P046→CR3 청소 SOL, P048~04A→MC1~3 회전/하강/상승, P04E→CR0 인버터 RUN 등의 원문 관계를 정리했습니다. 현재 카드·CPU 모델·코일 전압·실배선은 확인 전입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[GBF전기도면.pdf](/documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1) / [R.D.M  설명.pptx](/documents/equipment-10/library.html?source=S27a3062e495d05b5) / [부창엔지니어링 RDM매뉴얼.pdf](/documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1) / [세진메탈(기계도면).pdf](/documents/source-store/06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0.pdf#page=1) / [탈가스기 메뉴얼.pdf](/documents/source-store/b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa.pdf#page=1)

## 알람·복구

공급압력 이상·역압력 이상·인버터 이상, 랜스 상하 정지 및 BUZZER STOP를 구분했습니다. 부창 설명서의 압력 수치·예열/세척·속도·타이머 예시는 문서의 당시 설명이며 현재 작업 설정으로 적용하지 않았습니다. 고온 용탕 작업이나 랜스/임펠러 조작을 실행하지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[GBF전기도면.pdf](/documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1) / [R.D.M  설명.pptx](/documents/equipment-10/library.html?source=S27a3062e495d05b5) / [부창엔지니어링 RDM매뉴얼.pdf](/documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1) / [세진메탈(기계도면).pdf](/documents/source-store/06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0.pdf#page=1) / [탈가스기 메뉴얼.pdf](/documents/source-store/b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa.pdf#page=1)

## 증상별 점검

1. 랜스 상하/회전 불가
조작·위치 리미트·MC/인버터/RPM 경로를 각각 대조
근거: GBF전기도면.pdf · PDF 1쪽

2. 가스/FLUX 공급 불량
압력/역압·가스·FLUX·청소 부하와 사용 유/무를 구분
근거: 부창엔지니어링 RDM매뉴얼.pdf · PDF 1쪽

3. 타이머/처리시간 해석 차이
문서판·모드·고속/저속 문구를 원문별 비교
근거: 부창엔지니어링 RDM매뉴얼.pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[GBF전기도면.pdf](/documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1) / [R.D.M  설명.pptx](/documents/equipment-10/library.html?source=S27a3062e495d05b5) / [부창엔지니어링 RDM매뉴얼.pdf](/documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1) / [세진메탈(기계도면).pdf](/documents/source-store/06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0.pdf#page=1) / [탈가스기 메뉴얼.pdf](/documents/source-store/b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 8개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 35행·조작 참조 2행
- 핵심 PDF 페이지 미리보기 20개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 3개·확인 대장 6개

미확정·추가 확인
- 제조사·모델 대응: 신명 전기 vs 부창 BC-2000S 설명서 / 실물·반번호·납품/개조 범위 확인
- P/X 주소 혼재: 입력도 좌측 P000~00F, 우측 X010~ / 실제 주소 할당·카드·프로그램 대조
- 타이머 의미/오기: FLUX 유/무 및 고속/저속 설명 차이 / 현행 모드·승인 처리조건과 프로그램 확인
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[GBF전기도면.pdf](/documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1) / [R.D.M  설명.pptx](/documents/equipment-10/library.html?source=S27a3062e495d05b5) / [부창엔지니어링 RDM매뉴얼.pdf](/documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1) / [세진메탈(기계도면).pdf](/documents/source-store/06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0.pdf#page=1) / [탈가스기 메뉴얼.pdf](/documents/source-store/b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| 신명 GBF 입력도 | 입력 참조 | P000 | 수동-자동 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P001 | AUTO START | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P002 | 비상정지 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P003 | 랜스상승 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P004 | 랜스하강 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P005 | 랜스회전저속 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P006 | 랜스회전고속 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P007 | 배플상하 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P008 | FLUX공급 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P009 | GAS | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P00A | CLEANING | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P00B | 랜스상승정지 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P00C | 랜스하강정지 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P00D | 공급압력이상 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P00E | 역압력이상 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 입력도 | 입력 참조 | P00F | 인버터이상 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 동일 도면 우측 X표기 · P로 교정하지 않음 | 입력 참조 | X010 | 랜스고속회전시간 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 동일 도면 우측 X표기 · P로 교정하지 않음 | 입력 참조 | X011 | FLUX 공급시간 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 동일 도면 우측 X표기 · P로 교정하지 않음 | 입력 참조 | X012 | 랜스저속회전시간 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 동일 도면 우측 X표기 · P로 교정하지 않음 | 입력 참조 | X013 | BUZZER STOP | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 동일 도면 우측 X표기 · P로 교정하지 않음 | 입력 참조 | X016 | FLUX 유-무 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 5쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=5 |
| 신명 GBF 출력도 | 출력 참조 | P040 | 전처리시간 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P041 | FLUX 공급시간 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P042 | 후처리시간 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P044 | FLUX MOTOR | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P045 | 가스투입 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P046 | 청소 SOL | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P047 | INVERTER SPEED | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P048 | 랜스회전 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P049 | 랜스하강 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P04A | 랜스상승 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P04B | BUZZER | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P04C | 자동운전 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P04D | 청소모터 | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |
| 신명 GBF 출력도 | 출력 참조 | P04E | INVERTER RUN | 원본 표기; 현재 할당·실물 미확정 | GBF전기도면.pdf · PDF 6쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=6 |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| 전면 조작반 | 모드·시작·비상·랜스·FLUX·GAS·CLEANING·부저 | GBF전기도면.pdf · PDF 1쪽 | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1 |
| RDM 설명 화면 | 타이머·속도/처리 및 압력·이상 표시 | 부창엔지니어링 RDM매뉴얼.pdf · PDF 2쪽 | /documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=2 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 랜스 상하/회전 불가 | 조작·위치 리미트·MC/인버터/RPM 경로를 각각 대조 | GBF전기도면.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf#page=1 |
| 가스/FLUX 공급 불량 | 압력/역압·가스·FLUX·청소 부하와 사용 유/무를 구분 | 부창엔지니어링 RDM매뉴얼.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1 |
| 타이머/처리시간 해석 차이 | 문서판·모드·고속/저속 문구를 원문별 비교 | 부창엔지니어링 RDM매뉴얼.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 제조사·모델 대응 | 미확정·원문 차이 보존 | 신명 전기 vs 부창 BC-2000S 설명서 | 실물·반번호·납품/개조 범위 확인 |
| P/X 주소 혼재 | 미확정·원문 차이 보존 | 입력도 좌측 P000~00F, 우측 X010~ | 실제 주소 할당·카드·프로그램 대조 |
| 타이머 의미/오기 | 미확정·원문 차이 보존 | FLUX 유/무 및 고속/저속 설명 차이 | 현행 모드·승인 처리조건과 프로그램 확인 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [GBF전기도면.pdf](/documents/source-store/5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d.pdf) / GBF/GBF전기도면.pdf / 238502bytes / SHA-256 5af6d290e03373cdd524f19efd2194e2e826ce472304b4e38dd9b68c36166b7d
- [R.D.M  설명.pptx](/documents/source-store/27a3062e495d05b5e37e4fb3003be76cad37626683b373e445dcb61ccbd0f0fb.pptx) / GBF/R.D.M  설명.pptx / 7189322bytes / SHA-256 27a3062e495d05b5e37e4fb3003be76cad37626683b373e445dcb61ccbd0f0fb
- [부창엔지니어링 RDM매뉴얼.pdf](/documents/source-store/9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c.pdf) / GBF/부창엔지니어링 RDM매뉴얼.pdf / 470980bytes / SHA-256 9a1538f8df2992067f3b4f29c7897935ccd75deeaab2fa97b18cb92022c5764c
- [세진메탈(기계도면).pdf](/documents/source-store/06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0.pdf) / GBF/세진메탈(기계도면).pdf / 386978bytes / SHA-256 06c61b5fa1a298371b1d7da997edc091e5891fdd534ae8a1b83a5262fd7215a0
- [세진메탈견적서(부창).pdf](/documents/source-store/070119060af7257d52343b0cc81acc48a56eac5450f06bca32fb72cfa5da9d4d.pdf) / GBF/세진메탈견적서(부창).pdf / 387695bytes / SHA-256 070119060af7257d52343b0cc81acc48a56eac5450f06bca32fb72cfa5da9d4d
- [세진메탈 GBF.pdf](/documents/source-store/04134ac4d441d47944237901d5d477a73bcb442364f587da6342307d3650df3e.pdf) / 생산부공용 추가도면/GBF 기계도면/세진메탈 GBF.pdf / 375389bytes / SHA-256 04134ac4d441d47944237901d5d477a73bcb442364f587da6342307d3650df3e
- [탈가스기 도면.tif](/documents/source-store/7c0af33fec2e67b8f587af944cf977b6c2448d0659386600afcd784d89e14feb.tif) / 생산부공용 추가도면/탈가스기 참고자료(GBF 적용확인필요)/탈가스기 도면.tif / 80472bytes / SHA-256 7c0af33fec2e67b8f587af944cf977b6c2448d0659386600afcd784d89e14feb
- [탈가스기 메뉴얼.pdf](/documents/source-store/b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa.pdf) / 생산부공용 추가도면/탈가스기 참고자료(GBF 적용확인필요)/탈가스기 메뉴얼.pdf / 1102251bytes / SHA-256 b20231d665f897c6c239b0f8b0f1b9ed77465e35921735f2af6303339c1f75aa
