# 전기도면 입력 양식

빈 설비 JSON의 `id`와 `name`은 필수입니다. 빈 양식 파일 자체는 미등록 상태이며 ID·이름을 채운 뒤 등록합니다. 원본 근거가 없으면 해당 목록을 빈 배열로 두세요. 알 수 없는 값은 실제 확인값처럼 채우지 않습니다.

| 항목 | 각 행에 넣을 필드 |
|---|---|
| io | direction, address, name, type, description, source |
| hmi | name, address, screen, description, source |
| networks | block, network, title, logic, source, url |
| calls | caller, callee, condition, source |
| signals | name, address, writer, reader, source |
| drawings | name, kind, page, version, path, source, url |
| alarms | name, address, trigger, reset, source |
| repair | symptom, check, source, unresolved |
| checks | title, status, evidence, next |
| reviews | title, status, source, observation, next |
| tests | title, status, evidence, source |

`manual`의 overview, io, control, circuits, alarms, repair, completion에는 설명 문자열을 넣습니다. 표의 `source`에는 원본 파일·페이지·블록·네트워크 위치를 적고 `url`에는 실제 열 수 있는 파일 경로 또는 HTTPS 주소를 넣습니다. `/documents/파일.pdf#page=3`처럼 사이트 루트 기준 경로를 권장합니다. PLC 로직은 원문 참조와 정적 해석을 기록하는 용도입니다.

프로젝트의 `resources`는 공통 자료 목록이며 name, kind, version, url 필드를 사용합니다. `layout`은 미등록 시 null, 등록 시 name과 url을 가진 객체를 넣습니다. 자료 추가 후에도 기존 항목의 ID를 임의 변경하지 마세요.
