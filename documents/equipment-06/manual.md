# 6번 보온로 (합금)

HOLDING-06 · v1.3.1 · 2026-10-21 · 게시 검토본

원본 보존·핵심 전기/제어/운전 자료 중심 문서화 완료(미확정 포함). 일반/부품 카탈로그 전체 페이지의 상세 판독·현재 적용 검증, 현장 측정·운전·수리·안전 시험은 미수행입니다.

## 설비·자료 기준

6번 보온로 자료는 40톤 밀폐 유지로 설명서/기계도와 30TON/CH 표제 전기도면을 포함합니다. 용탕/분위기 온도 선택·버너1/2·송풍·전문(도어)·로내압 댐퍼·런너 구간을 문서별로 정리했습니다. 제목의 40톤과 전기도면의 30톤 차이는 확인 대장에 남겼습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

원본 범위
폴더 파일 50개, 압축 내부 자료 0개, 고유 해시 49개입니다. 동일 내용의 원래 경로·이름을 보존했고 서로 다른 버전은 유지했습니다. Windows 캐시/로그는 기술 자료 목록에서 제외했습니다. PDF·이미지 미리보기, 추출 본문·표·원본은 자료실에서 확인할 수 있습니다. DOC/HWP/PPT/Excel 열람은 원본 페이지/도형 배치를 재현한 것이 아닙니다.

[세진메탈40톤사용설명서.pdf](/documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1) / [세진-30-E00.pdf](/documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1) / [세진-30-E01.pdf](/documents/source-store/d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e.pdf#page=1) / [세진-30-E02.pdf](/documents/source-store/ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae.pdf#page=1) / [세진-30-E03.pdf](/documents/source-store/8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185.pdf#page=1) / [세진-30-E04.pdf](/documents/source-store/5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816.pdf#page=1) / [세진-30-E05.pdf](/documents/source-store/4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635.pdf#page=1) / [세진-30-E06.pdf](/documents/source-store/be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b.pdf#page=1) / [세진-30-E07.pdf](/documents/source-store/d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae.pdf#page=1) / [세진-30-E08.pdf](/documents/source-store/9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee.pdf#page=1)

## I/O·접점·단자

세진-30-E 도면의 기기·릴레이·단자·온도계·전동기 표기를 전기 참조로 다룹니다. 이를 제공되지 않은 PLC 메모리 주소로 바꾸지 않았습니다. E00 동력 도면에는 COMBUSTION FAN·DOOR MOTOR·FURNACE DAMPER MOTOR와 NFB/MC/EOCR가 나타납니다. NFB-03·MU01·MD01·M3 등이 여러 분기에 반복되어 태그만으로 같은 부하로 병합하지 않습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[세진메탈40톤사용설명서.pdf](/documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1) / [세진-30-E00.pdf](/documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1) / [세진-30-E01.pdf](/documents/source-store/d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e.pdf#page=1) / [세진-30-E02.pdf](/documents/source-store/ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae.pdf#page=1) / [세진-30-E03.pdf](/documents/source-store/8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185.pdf#page=1) / [세진-30-E04.pdf](/documents/source-store/5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816.pdf#page=1) / [세진-30-E05.pdf](/documents/source-store/4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635.pdf#page=1) / [세진-30-E06.pdf](/documents/source-store/be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b.pdf#page=1) / [세진-30-E07.pdf](/documents/source-store/d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae.pdf#page=1) / [세진-30-E08.pdf](/documents/source-store/9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee.pdf#page=1)

## 제어 구조

사용설명서는 MELTING/FURNACE 온도 기준 선택, 버너1/2와 댐퍼의 로내압 조절 관계를 설명합니다. 문서의 Y-Δ·퍼지 시간 등은 현재 타이머 확인값이 아닙니다. 30TON 표제 전기도면의 PLC 전원 표기나 릴레이 회로만으로 전체 프로그램을 복원할 수 없습니다. 리프트 4쪽 전기도면은 독립 계통으로 유지합니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[세진메탈40톤사용설명서.pdf](/documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1) / [세진-30-E00.pdf](/documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1) / [세진-30-E01.pdf](/documents/source-store/d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e.pdf#page=1) / [세진-30-E02.pdf](/documents/source-store/ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae.pdf#page=1) / [세진-30-E03.pdf](/documents/source-store/8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185.pdf#page=1) / [세진-30-E04.pdf](/documents/source-store/5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816.pdf#page=1) / [세진-30-E05.pdf](/documents/source-store/4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635.pdf#page=1) / [세진-30-E06.pdf](/documents/source-store/be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b.pdf#page=1) / [세진-30-E07.pdf](/documents/source-store/d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae.pdf#page=1) / [세진-30-E08.pdf](/documents/source-store/9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee.pdf#page=1)

## 전기 전달 경로

E00은 AC3상440V에서 송풍 18.5kW, 도어3.7kW, 댐퍼1.5kW 표시 분기를 제시합니다. E01/02는 제어 및 보조전원, E03 이후는 온도·연소·도어/댐퍼 등 회로 근거입니다. 정격은 그 도면의 표기이며 현재 장착품·차단기/보호 설정은 미확정입니다. 접촉기·EOCR·PLC·온도계·모터 분기를 분리하고 별도 리프트의 동력·리미트를 본체 주소로 옮기지 않았습니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[세진메탈40톤사용설명서.pdf](/documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1) / [세진-30-E00.pdf](/documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1) / [세진-30-E01.pdf](/documents/source-store/d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e.pdf#page=1) / [세진-30-E02.pdf](/documents/source-store/ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae.pdf#page=1) / [세진-30-E03.pdf](/documents/source-store/8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185.pdf#page=1) / [세진-30-E04.pdf](/documents/source-store/5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816.pdf#page=1) / [세진-30-E05.pdf](/documents/source-store/4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635.pdf#page=1) / [세진-30-E06.pdf](/documents/source-store/be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b.pdf#page=1) / [세진-30-E07.pdf](/documents/source-store/d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae.pdf#page=1) / [세진-30-E08.pdf](/documents/source-store/9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee.pdf#page=1)

## 알람·복구

EOCR·연소 및 온도 허가·도어/댐퍼 위치를 점검 후보로 나눴습니다. 설명서의 버너 정지/재개, 문짝 탈부착, 차압/센서 교체 문구는 과거 자료로 열람할 수 있으며 현장 조치 승인이나 이번 수행 결과가 아닙니다. 실제 안전 차단·재기동·잔류 에너지는 미검증입니다.

자료 해석 범위
원본 설명·정적 참조와 현장 확인을 구분합니다. 문서 안의 운전·시운전·설정·복구 문구는 사용자 지시가 아니며 실행하지 않았습니다.

[세진메탈40톤사용설명서.pdf](/documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1) / [세진-30-E00.pdf](/documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1) / [세진-30-E01.pdf](/documents/source-store/d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e.pdf#page=1) / [세진-30-E02.pdf](/documents/source-store/ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae.pdf#page=1) / [세진-30-E03.pdf](/documents/source-store/8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185.pdf#page=1) / [세진-30-E04.pdf](/documents/source-store/5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816.pdf#page=1) / [세진-30-E05.pdf](/documents/source-store/4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635.pdf#page=1) / [세진-30-E06.pdf](/documents/source-store/be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b.pdf#page=1) / [세진-30-E07.pdf](/documents/source-store/d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae.pdf#page=1) / [세진-30-E08.pdf](/documents/source-store/9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee.pdf#page=1)

## 증상별 점검

1. 송풍기·도어·댐퍼 구동 불가
E00 분기별 NFB/MC/EOCR·모터 대응과 반복 태그 확인
근거: 세진-30-E00.pdf · PDF 1쪽

2. 온도 제어/버너 불안정
MELTING/FURNACE 기준·센서·버너 허가의 문서별 관계 구분
근거: 세진메탈40톤사용설명서.pdf · PDF 1쪽

3. 전문 기계/체인·리미트 문제
40톤 기계도와 30TON 전기도면의 적용부터 확인
근거: 세진메탈40톤사용설명서.pdf · PDF 1쪽

4. 별도 리프트 이상
본체와 리프트 회로를 분리하고 현장 호기 식별
근거: 세진메탈 리프트전기도면.pdf · PDF 1쪽

기록 기준
실제 최초 시각·표시/코드·정지 구간·관찰·측정·조치·복구 근거를 구분해 수리 기록 양식에 남깁니다. 이번 작업에서 현장 고장/수리 이력을 새로 생성하지 않았습니다.

[세진메탈40톤사용설명서.pdf](/documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1) / [세진-30-E00.pdf](/documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1) / [세진-30-E01.pdf](/documents/source-store/d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e.pdf#page=1) / [세진-30-E02.pdf](/documents/source-store/ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae.pdf#page=1) / [세진-30-E03.pdf](/documents/source-store/8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185.pdf#page=1) / [세진-30-E04.pdf](/documents/source-store/5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816.pdf#page=1) / [세진-30-E05.pdf](/documents/source-store/4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635.pdf#page=1) / [세진-30-E06.pdf](/documents/source-store/be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b.pdf#page=1) / [세진-30-E07.pdf](/documents/source-store/d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae.pdf#page=1) / [세진-30-E08.pdf](/documents/source-store/9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee.pdf#page=1)

## 완료 기준

작성한 것
- 사용자 지정 폴더 원본 50개와 압축 내부 0개 연결·해시 보존
- 설비 계통 구분·7개 매뉴얼 항목·전기/I/O/단자 참조 3행·조작 참조 1행
- 핵심 PDF 페이지 미리보기 25개·원본 자료실·추출 텍스트/표/그림 연결
- 증상별 점검 4개·확인 대장 6개

미확정·추가 확인
- 40톤/30TON 표제: 설명서 40TON vs 전기 E00 30TON/CH AL-HOLDING / 명판·반번호·최신 도면 적용 확인
- 반복 전기 태그: NFB-03·MU01/MD01·M3 중복 / 분기·좌표·선번·실물 기준 식별
- 리프트 적용: 기존 리프트 전기도면과 신설9번 자료 구분 / 같은 설비 여부·개조 범위 확인
- PLC/HMI 원본 및 현재 적용: 도면·설명서 범위로 정리 / 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조
- 현장·안전·복구 확인: 파일 검토·로컬 문서화만 수행 / 실제 관찰·측정·현재 보호/재기동·복구 기록 별도
- 문서 판독 범위: 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. / 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조

판정
문서화 완료(핵심 자료·정적 참조 범위)입니다. 전체 카탈로그의 모든 페이지 판독·PLC 전체 의미 해석·현장 운전/안전/복구 검증 완료가 아닙니다. 실제 수리 이력은 생성하지 않았습니다.

[세진메탈40톤사용설명서.pdf](/documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1) / [세진-30-E00.pdf](/documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1) / [세진-30-E01.pdf](/documents/source-store/d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e.pdf#page=1) / [세진-30-E02.pdf](/documents/source-store/ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae.pdf#page=1) / [세진-30-E03.pdf](/documents/source-store/8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185.pdf#page=1) / [세진-30-E04.pdf](/documents/source-store/5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816.pdf#page=1) / [세진-30-E05.pdf](/documents/source-store/4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635.pdf#page=1) / [세진-30-E06.pdf](/documents/source-store/be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b.pdf#page=1) / [세진-30-E07.pdf](/documents/source-store/d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae.pdf#page=1) / [세진-30-E08.pdf](/documents/source-store/9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee.pdf#page=1)

## 입출력·접점·단자

| 계통 | 구분 | 주소/기호 | 기능 | 자료 구분 | 출처 | 원본 |
|---|---|---|---|---|---|---|
| 30TON/CH 표제 전기 · 40톤 적용 미확정 | 동력·보호 참조 | NFB-02 / MC01 / EOCR | 연소 송풍기 동력·보호 | 원본 표기; 현재 할당·실물 미확정 | 세진-30-E00.pdf · PDF 1쪽 | /documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1 |
| 30TON/CH 표제 전기 · 40톤 적용 미확정 | 동력·보호 참조 | NFB-03 / MU01 / MD01 | 도어모터 분기(태그 반복 주의) | 원본 표기; 현재 할당·실물 미확정 | 세진-30-E00.pdf · PDF 1쪽 | /documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1 |
| 30TON/CH 표제 전기 · 40톤 적용 미확정 | 동력·보호 참조 | NFB-03 / MU01 / MD01 / M3 | 댐퍼모터 분기(태그 반복 주의) | 원본 표기; 현재 할당·실물 미확정 | 세진-30-E00.pdf · PDF 1쪽 | /documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1 |

## 조작/화면

| 항목 | 설명 | 출처 | 원본 |
|---|---|---|---|
| 조작반·온도 기준 | MELTING/FURNACE 및 버너/송풍·도어/댐퍼 자료 | 세진메탈40톤사용설명서.pdf · PDF 7쪽 | /documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=7 |

## 점검 후보

| 증상 | 대조 항목 | 근거 | 미확정 | 원본 |
|---|---|---|---|---|
| 송풍기·도어·댐퍼 구동 불가 | E00 분기별 NFB/MC/EOCR·모터 대응과 반복 태그 확인 | 세진-30-E00.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf#page=1 |
| 온도 제어/버너 불안정 | MELTING/FURNACE 기준·센서·버너 허가의 문서별 관계 구분 | 세진메탈40톤사용설명서.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1 |
| 전문 기계/체인·리미트 문제 | 40톤 기계도와 30TON 전기도면의 적용부터 확인 | 세진메탈40톤사용설명서.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf#page=1 |
| 별도 리프트 이상 | 본체와 리프트 회로를 분리하고 현장 호기 식별 | 세진메탈 리프트전기도면.pdf · PDF 1쪽 | 실제 원인·측정·조치·복구 미확정. 현재 설비와 승인 절차 대조 전. | /documents/source-store/580af0cf4483e9f297dfa4a0d17499e243c7ab24e6272066eebee9e8ed0615c2.pdf#page=1 |

## 확인 대장

| 항목 | 상태 | 차이/근거 | 후속 확인 |
|---|---|---|---|
| 40톤/30TON 표제 | 미확정·원문 차이 보존 | 설명서 40TON vs 전기 E00 30TON/CH AL-HOLDING | 명판·반번호·최신 도면 적용 확인 |
| 반복 전기 태그 | 미확정·원문 차이 보존 | NFB-03·MU01/MD01·M3 중복 | 분기·좌표·선번·실물 기준 식별 |
| 리프트 적용 | 미확정·원문 차이 보존 | 기존 리프트 전기도면과 신설9번 자료 구분 | 같은 설비 여부·개조 범위 확인 |
| PLC/HMI 원본 및 현재 적용 | 현재 프로그램 미확보 | 도면·설명서 범위로 정리 | 현재 CPU·반번호·프로그램/HMI·I/O/타이머·설정 백업 대조 |
| 현장·안전·복구 확인 | 미수행 | 파일 검토·로컬 문서화만 수행 | 실제 관찰·측정·현재 보호/재기동·복구 기록 별도 |
| 문서 판독 범위 | 핵심 자료 중심 검토 | 모든 제조사 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님. 스캔/전용 형식·그림/셀 배치 제한 표시. | 설비별 최신 적용도·필요한 전용 형식의 정적 내보내기 대조 |

## 출처 목록

- [40톤 유지로-내화물 Model (1).pdf](/documents/source-store/a042a182df15cb20ae43db065cba466dc7b7e8469615a59b88235a38b14f9b2a.pdf) / 40톤로/40톤 유지로-내화물 Model (1).pdf / 347228bytes / SHA-256 a042a182df15cb20ae43db065cba466dc7b7e8469615a59b88235a38b14f9b2a
- [40톤 유지로-문DOOR Model (1).pdf](/documents/source-store/143a3ae64e608e392336cae05fab9adb8902bef3372ea4d5199d45c9289e9820.pdf) / 40톤로/40톤 유지로-문DOOR Model (1).pdf / 114915bytes / SHA-256 143a3ae64e608e392336cae05fab9adb8902bef3372ea4d5199d45c9289e9820
- [40톤 유지로-문고리볼트 Model (1).pdf](/documents/source-store/8214d617cb71d8d5c99fd386a9a613106b4c32cb4e596e0233ab497a0f447d32.pdf) / 40톤로/40톤 유지로-문고리볼트 Model (1).pdf / 48476bytes / SHA-256 8214d617cb71d8d5c99fd386a9a613106b4c32cb4e596e0233ab497a0f447d32
- [40톤 유지로PDF  total.pdf](/documents/source-store/49d748eab6dbc5f0e8828ad8c03ec5fada2656cde235af8691dde8cadfba37df.pdf) / 40톤로/40톤 유지로PDF  total.pdf / 2815196bytes / SHA-256 49d748eab6dbc5f0e8828ad8c03ec5fada2656cde235af8691dde8cadfba37df
- [40톤로.tif](/documents/source-store/cc3e07aa28db1af2dbba385e1f3238f8ceb308e2e0e9a4b654ed87ba5fafba42.tif) / 40톤로/40톤로.tif / 83340bytes / SHA-256 cc3e07aa28db1af2dbba385e1f3238f8ceb308e2e0e9a4b654ed87ba5fafba42
- [세진메탈40톤사용설명서.pdf](/documents/source-store/5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9.pdf) / 40톤로/세진메탈40톤사용설명서.pdf / 282622bytes / SHA-256 5a77b8fccbed799ae0179dd3711a1e93e1cf56546a4b75fa21e2a5ac516e05e9
- [세진 EOCR.pdf](/documents/source-store/95c7235dc3c8ad1c39189ac76aa408eef348f0b52cdce1d16a159270faa0c32c.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진 EOCR.pdf / 75568bytes / SHA-256 95c7235dc3c8ad1c39189ac76aa408eef348f0b52cdce1d16a159270faa0c32c
- [세진-30-E00.pdf](/documents/source-store/02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E00.pdf / 93260bytes / SHA-256 02389998450e88369d50d5720fdca26f85d7ccd5d27b44e3b9d1c65e6546eede
- [세진-30-E01.pdf](/documents/source-store/d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E01.pdf / 84511bytes / SHA-256 d532fd005b537bf9b4e9ce6263fa7f28365e15d3defdf2d44cb7bd39ff4d1c0e
- [세진-30-E02.pdf](/documents/source-store/ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E02.pdf / 77068bytes / SHA-256 ca0ac7d8bde1fba7a9d5e80f2d81b8346e0e3ee7de4c08f8faa70548cbc0c0ae
- [세진-30-E03.pdf](/documents/source-store/8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E03.pdf / 92193bytes / SHA-256 8782e3507255d2efeac65133356a222c7aa93b14ad178998b4ad6e2a379e0185
- [세진-30-E04.pdf](/documents/source-store/5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E04.pdf / 123623bytes / SHA-256 5f7d04cc3693bc3e333f8b9db4ca30e4123354f20a32ee36700e1d0de9c70816
- [세진-30-E05.pdf](/documents/source-store/4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E05.pdf / 95118bytes / SHA-256 4bacc23d34b180368d4a929498ac0f957fd2e32577bf30dacb219865bae3b635
- [세진-30-E06.pdf](/documents/source-store/be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E06.pdf / 95288bytes / SHA-256 be98074cfb464d2971363597292731a132ee67414bf1e5f64df3d060f751f36b
- [세진-30-E07.pdf](/documents/source-store/d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E07.pdf / 95567bytes / SHA-256 d22c55905241380b6a764dcff549df2696bf8851e0ccd4461285c6fb4614e7ae
- [세진-30-E08.pdf](/documents/source-store/9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E08.pdf / 99853bytes / SHA-256 9f67ac12a2891aa1ca255576f73fb9d796781b24e04da959840219f4dd517aee
- [세진-30-E09.pdf](/documents/source-store/db0e53140919dc62cc1be242c5ea07e77f55cf6958d8893c74cf0f49fa9cabfc.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E09.pdf / 146545bytes / SHA-256 db0e53140919dc62cc1be242c5ea07e77f55cf6958d8893c74cf0f49fa9cabfc
- [세진-30-E10.pdf](/documents/source-store/fb2d78278bda04ceb509ec805dc2f688a315346035ef184bf319aab3eec95dfd.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E10.pdf / 94177bytes / SHA-256 fb2d78278bda04ceb509ec805dc2f688a315346035ef184bf319aab3eec95dfd
- [세진-30-E11.pdf](/documents/source-store/24b0f58e57273d764b0e984abc3c0f56d6191aa70c7f46273d4edc1a25bd11e9.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-30-E11.pdf / 95420bytes / SHA-256 24b0f58e57273d764b0e984abc3c0f56d6191aa70c7f46273d4edc1a25bd11e9
- [세진-로컬-01.pdf](/documents/source-store/ca536404397f96d4b492f7dd3c87b9d95b8ad475703aa92c6cd0a9df3fc447cd.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-로컬-01.pdf / 128627bytes / SHA-256 ca536404397f96d4b492f7dd3c87b9d95b8ad475703aa92c6cd0a9df3fc447cd
- [세진-메인-01.pdf](/documents/source-store/5cb0d8a4c29e45e03e94dd685fe001d5154e3237a2977c483c0e9251a7ca0036.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진-메인-01.pdf / 120577bytes / SHA-256 5cb0d8a4c29e45e03e94dd685fe001d5154e3237a2977c483c0e9251a7ca0036
- [세진메탈 리프트전기도면.pdf](/documents/source-store/580af0cf4483e9f297dfa4a0d17499e243c7ab24e6272066eebee9e8ed0615c2.pdf) / 40톤로/합금 40톤 보온로 전기도면/세진메탈 리프트전기도면.pdf / 390862bytes / SHA-256 580af0cf4483e9f297dfa4a0d17499e243c7ab24e6272066eebee9e8ed0615c2
- [(주)세진메탈-60톤-30톤-40톤유지로-트래베1.5톤.pdf](/documents/source-store/cf73bc2f22e1e87c0478b5172016f31c20fdbbd412ea429f66c6b2541a23bd2f.pdf) / 기존 기계도면/(주)세진메탈-60톤-30톤-40톤유지로-트래베1.5톤.pdf / 2212543bytes / SHA-256 cf73bc2f22e1e87c0478b5172016f31c20fdbbd412ea429f66c6b2541a23bd2f
- [2. 40톤 유지로.dwg](/documents/source-store/b3798add2b7920aa263a6269ac4a5c4c144fa1fe74fbd3549176adf2b27c4107.dwg) / 기존 기계도면/2. 40톤 유지로.dwg / 3667352bytes / SHA-256 b3798add2b7920aa263a6269ac4a5c4c144fa1fe74fbd3549176adf2b27c4107
- [DH-LNOG-15FS(합금40톤보온로).dwg](/documents/source-store/ceb35caf566ee9ce661e1dc88b834e800a40d2cd3bd95c6ef05e1d559d5da4b4.dwg) / 배관·버너 도면/1. 1차 도면/DH-LNOG-15FS(합금40톤보온로).dwg / 529598bytes / SHA-256 ceb35caf566ee9ce661e1dc88b834e800a40d2cd3bd95c6ef05e1d559d5da4b4
- [DH-LNOG-15FS(합금40톤보온로).dwg](/documents/source-store/c395b7bb6799121fca492bc4368d3b572a1fb17a4a0cb2c80bc76c3b59d1c22e.dwg) / 배관·버너 도면/2. 2차 도면/DH-LNOG-15FS(합금40톤보온로).dwg / 529592bytes / SHA-256 c395b7bb6799121fca492bc4368d3b572a1fb17a4a0cb2c80bc76c3b59d1c22e
- [8. 40TON 유지로.dwg](/documents/source-store/639198bbe4e11b2d4c3aaf9b061c6bba9b404ab5a159c78b0863861f82d76d7e.dwg) / 배관·버너 도면/LNG 배관/8. 40TON 유지로.dwg / 1670019bytes / SHA-256 639198bbe4e11b2d4c3aaf9b061c6bba9b404ab5a159c78b0863861f82d76d7e
- [DH-LNOG-15FS(합금보온로).dwg](/documents/source-store/2fed86760ec7c854e27c88e08bd8d2624d66034d7135fc0fee0cfd0eb3b0577c.dwg) / 배관·버너 도면/기존 버너도면/DH-LNOG-15FS(합금보온로).dwg / 329760bytes / SHA-256 2fed86760ec7c854e27c88e08bd8d2624d66034d7135fc0fee0cfd0eb3b0577c
- [세진메탈 중유 버너 계통도-보온로.dwg](/documents/source-store/a7655d82855db192955d4928cdaecdd95893f20d2ae6a0886c8b8299acd210f3.dwg) / 배관·버너 도면/기존 버너도면/세진메탈 중유 버너 계통도-보온로.dwg / 1749920bytes / SHA-256 a7655d82855db192955d4928cdaecdd95893f20d2ae6a0886c8b8299acd210f3
- [8. DH-LNOG-15FS(합금40톤보온로).dwg](/documents/source-store/c395b7bb6799121fca492bc4368d3b572a1fb17a4a0cb2c80bc76c3b59d1c22e.dwg) / 배관·버너 도면/정제유 변경배관/8. DH-LNOG-15FS(합금40톤보온로).dwg / 529592bytes / SHA-256 c395b7bb6799121fca492bc4368d3b572a1fb17a4a0cb2c80bc76c3b59d1c22e
- [DH-LNOG-15FS(합금보온로).dwg](/documents/source-store/67772d29c03f13d134a30e8b24fe88cd232eed0942548fcdbc23fcba4147054d.dwg) / 생산부공용 추가도면/버너 및 설비도면/DH-LNOG-15FS(합금보온로).dwg / 342720bytes / SHA-256 67772d29c03f13d134a30e8b24fe88cd232eed0942548fcdbc23fcba4147054d
- [DH-LNOG-15FS(합금보온로).pdf](/documents/source-store/d2785096eb6ba0c4f8d2df90288827e3b50bf7db51fc12419e698ef74a58626b.pdf) / 생산부공용 추가도면/버너 및 설비도면/DH-LNOG-15FS(합금보온로).pdf / 261092bytes / SHA-256 d2785096eb6ba0c4f8d2df90288827e3b50bf7db51fc12419e698ef74a58626b
- [CO2설비 40톤.pdf](/documents/source-store/d248181a5ef5515926cc243234fd8860004c47a2c2e0face89a022208bfa2d36.pdf) / 생산부공용 추가도면/소방 관련 참고자료(적용확인필요)/CO2설비 40톤.pdf / 88441bytes / SHA-256 d248181a5ef5515926cc243234fd8860004c47a2c2e0face89a022208bfa2d36
- [local-01.dwg](/documents/source-store/92647d2665ff825f0eb869006c8c3918b42ad6b9f167ba60f94c50a0b979cffe.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/local-01.dwg / 1922144bytes / SHA-256 92647d2665ff825f0eb869006c8c3918b42ad6b9f167ba60f94c50a0b979cffe
- [세진-30-E00.dwg](/documents/source-store/978a254e2b918e81dbb0bf1d0101558a74730b50d3fd6611a77870373fd6c87d.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E00.dwg / 2076160bytes / SHA-256 978a254e2b918e81dbb0bf1d0101558a74730b50d3fd6611a77870373fd6c87d
- [세진-30-E01.dwg](/documents/source-store/d6dd131a5d4035bdceec350e0920388d1e9255a5d89722c06ee6457fb756a838.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E01.dwg / 1772800bytes / SHA-256 d6dd131a5d4035bdceec350e0920388d1e9255a5d89722c06ee6457fb756a838
- [세진-30-E02.dwg](/documents/source-store/85be1085b58f2662cc67deefe24f74d4df61e5dcfe533ce05b226765b72cd52f.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E02.dwg / 1816896bytes / SHA-256 85be1085b58f2662cc67deefe24f74d4df61e5dcfe533ce05b226765b72cd52f
- [세진-30-E03.dwg](/documents/source-store/2a40bb9d8f6eb2304a7aefe1a05a09e3b228bf9ec1d49cf546a4c0fc6207e025.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E03.dwg / 1824928bytes / SHA-256 2a40bb9d8f6eb2304a7aefe1a05a09e3b228bf9ec1d49cf546a4c0fc6207e025
- [세진-30-E04.dwg](/documents/source-store/6e1bdc12c5e52aa211dba12b0a30229475d4ba81ac13068ad7e92e4ffbc3acef.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E04.dwg / 2024736bytes / SHA-256 6e1bdc12c5e52aa211dba12b0a30229475d4ba81ac13068ad7e92e4ffbc3acef
- [세진-30-E05.dwg](/documents/source-store/a620b60df985e10d71608e5ab048bf0140a810480d42cfee5dea33fbc79c0bc0.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E05.dwg / 2032704bytes / SHA-256 a620b60df985e10d71608e5ab048bf0140a810480d42cfee5dea33fbc79c0bc0
- [세진-30-E06.dwg](/documents/source-store/58782326b0f28e1d6cda470553cc91f9809c24187ec961a0ce1ca48415eba13b.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E06.dwg / 2098528bytes / SHA-256 58782326b0f28e1d6cda470553cc91f9809c24187ec961a0ce1ca48415eba13b
- [세진-30-E07.dwg](/documents/source-store/9ed1e27de35825ed2b91fd2aa793d086e0feefddd8a8b37fb259b0b5ef9d51b3.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E07.dwg / 1901184bytes / SHA-256 9ed1e27de35825ed2b91fd2aa793d086e0feefddd8a8b37fb259b0b5ef9d51b3
- [세진-30-E08.dwg](/documents/source-store/d88f221f1eda6821d3e748b7047a9bd729b2ba406ddc948b1e950c60641cdf27.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E08.dwg / 1926752bytes / SHA-256 d88f221f1eda6821d3e748b7047a9bd729b2ba406ddc948b1e950c60641cdf27
- [세진-30-E09.dwg](/documents/source-store/34dc8c0dd6b6ec21baa282a8fe98bd8a45c76399132cb66421e12141a4575146.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E09.dwg / 1910528bytes / SHA-256 34dc8c0dd6b6ec21baa282a8fe98bd8a45c76399132cb66421e12141a4575146
- [세진-30-E10.dwg](/documents/source-store/131e6036138cb9dab07528e0571875242ac0690cd7117b1e32a725621facf069.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E10.dwg / 1896160bytes / SHA-256 131e6036138cb9dab07528e0571875242ac0690cd7117b1e32a725621facf069
- [세진-30-E11.dwg](/documents/source-store/c11d7f1ec56eaf9ca949bab12e976a67ab43ff34d6af353e9dae2bafa740b6a0.dwg) / 생산부공용 추가도면/유지로 전기도면 CAD/세진-30-E11.dwg / 1917536bytes / SHA-256 c11d7f1ec56eaf9ca949bab12e976a67ab43ff34d6af353e9dae2bafa740b6a0
- [보온로 집진기 송풍기팬.dwg](/documents/source-store/b2293950fb95d04152a426268c0ef036be427f86e86ed3817091f82da06eef73.dwg) / 설비확인필요/보온로 집진기 도면/보온로 집진기 송풍기팬.dwg / 808480bytes / SHA-256 b2293950fb95d04152a426268c0ef036be427f86e86ed3817091f82da06eef73
- [세진메탈 TF1600CMM 보온로.pdf](/documents/source-store/60d2fa8a2640e1de7a5f2891de05d6771a3ead10d4a9403541d0c522f79b17b6.pdf) / 설비확인필요/보온로 집진기 도면/세진메탈 TF1600CMM 보온로.pdf / 223871bytes / SHA-256 60d2fa8a2640e1de7a5f2891de05d6771a3ead10d4a9403541d0c522f79b17b6
- [5.40 TON.pdf](/documents/source-store/2a3c2de1bd30c4e14ec501215c96bc714dfc5ee9df70110d4160ae8e89262c24.pdf) / 소방 도면·계산서/5.40 TON.pdf / 56652bytes / SHA-256 2a3c2de1bd30c4e14ec501215c96bc714dfc5ee9df70110d4160ae8e89262c24
- [CO2 - 40ton.pdf](/documents/source-store/a1a466c2091f9a4a45e8f23d8630c0911fdf96dc7e59ba0bcf95a2f021501de4.pdf) / 소방 도면·계산서/CO2 - 40ton.pdf / 95956bytes / SHA-256 a1a466c2091f9a4a45e8f23d8630c0911fdf96dc7e59ba0bcf95a2f021501de4
