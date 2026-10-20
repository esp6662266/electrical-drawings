"""Prepare reviewed public readers; never alter network originals or publish access codes."""
from pathlib import Path
import json, hashlib, html

ROOT = Path(__file__).resolve().parents[1]
DOC = ROOT / 'documents'
POLICY = ROOT / 'publication-policy.json'
policy = json.loads(POLICY.read_text(encoding='utf8')) if POLICY.exists() else {
    'version': 1, 'approved_on': '2026-10-21',
    'approval': 'User explicitly requested GitHub and Netlify publication of the prepared equipment project.',
    'denied_paths': [], 'withheld_sources': []}
denied = set(policy['denied_paths'])
targets = {'S44b06169e5113a08': None, 'Sc0448bad6b7257cc': 32}
notice_dir = DOC / 'publication-notices'
notice_dir.mkdir(exist_ok=True)
for folder in sorted(DOC.glob('equipment-*')):
    path = folder / 'source-manifest.json'
    manifest = json.loads(path.read_text(encoding='utf8'))
    for source in manifest['sources']:
        if source['id'] not in targets:
            continue
        original = source.get('original_file', source['file'])
        denied.add(original.lstrip('/'))
        info_path = ROOT / source['inspection'].lstrip('/')
        info = json.loads(info_path.read_text(encoding='utf8'))
        if targets[source['id']] is None:
            for figure in info.get('figures', []):
                stem = Path(figure['url']).stem
                for asset in (DOC / 'source-figures').glob(stem + '.*'):
                    denied.add(asset.relative_to(ROOT).as_posix())
            info['figures'] = []
            info['pages'] = [{'page': 1, 'text': '과거 전원 OFF 후 MOTOR1 SOFT START FAULT 및 CONVEYOR MOTION SWITCH FAULT 표시 참고 자료입니다. 접근정보·보호설정 변경 설명과 원본 화면은 공개 열람본에서 제외했습니다. 현재 승인 설정·고장 원인은 별도 확인 대상입니다.'}]
        else:
            for page in info.get('pages', []):
                if page['page'] == targets[source['id']]:
                    page['text'] = '접근정보가 포함된 페이지는 공개 열람본에서 생략했습니다. 원본은 로컬에 보존했습니다.'
            preview_path = folder / 'preview-manifest.json'
            preview = json.loads(preview_path.read_text(encoding='utf8'))
            for entry in preview['sources']:
                if entry['sha256'] != source['sha256']:
                    continue
                for page in entry.get('previews', []):
                    if page['page'] == targets[source['id']]:
                        denied.add(page['url'].lstrip('/'))
                entry['previews'] = [p for p in entry.get('previews', []) if p['page'] != targets[source['id']]]
            preview_path.write_text(json.dumps(preview, ensure_ascii=False, indent=2), encoding='utf8')
        info['source_restriction'] = '접근정보 원본·민감 화면은 GitHub/Netlify 게시에서 제외. 원본은 로컬 보존.'
        info_path.write_text(json.dumps(info, ensure_ascii=False, indent=2), encoding='utf8')
        notice = notice_dir / (source['id'] + '.html')
        reader = '/' + folder.relative_to(ROOT).as_posix() + '/library.html?source=' + source['id']
        notice.write_text('<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>공개 열람 범위</title><link rel="stylesheet" href="../manual-batch.css"></head><body><header><h1>접근정보 원본 공개 제외</h1></header><main><h2>' + html.escape(source['name']) + '</h2><p>접근정보가 포함된 원본 파일은 공개하지 않습니다. 원본은 로컬에 보존했으며 해시는 원본 추적용입니다. 공개 열람본은 민감 본문·화면을 제외했습니다.</p><p><a href="' + reader + '">공개 열람본 보기</a></p><code>원본 SHA-256 ' + source['sha256'] + '</code></main></body></html>', encoding='utf8')
        source.update(original_file=original, file='/' + notice.relative_to(ROOT).as_posix(), publication_withheld=True,
                      public_sha256=hashlib.sha256(notice.read_bytes()).hexdigest(),
                      publication_review='접근정보 포함 원본·민감 화면 공개 제외. 정리한 공개 열람본과 원본 해시만 제공.')
        if source['id'] not in policy['withheld_sources']:
            policy['withheld_sources'].append(source['id'])
    path.write_text(json.dumps(manifest, ensure_ascii=False, indent=2), encoding='utf8')
# An image reused by another extracted document must not bypass the exclusion.
for path in (DOC / 'source-text').glob('*.json'):
    info = json.loads(path.read_text(encoding='utf8'))
    figures = info.get('figures', [])
    safe = [f for f in figures if f.get('url', '').lstrip('/') not in denied]
    if len(safe) != len(figures):
        info['figures'] = safe
        path.write_text(json.dumps(info, ensure_ascii=False, indent=2), encoding='utf8')
catalog_path = DOC / 'batch-catalog.json'
catalog = json.loads(catalog_path.read_text(encoding='utf8'))
catalog['equipment'] = [json.loads((DOC / ('equipment-%02d' % n) / 'source-manifest.json').read_text(encoding='utf8')) for n in range(3, 16)]
catalog['publication_note'] = '원본 경로/해시 수에는 로컬 보존한 공개 제외 원본 2개도 포함됩니다.'
catalog_path.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding='utf8')
policy['denied_paths'] = sorted(denied)
POLICY.write_text(json.dumps(policy, ensure_ascii=False, indent=2) + '\n', encoding='utf8')
ignore_path = ROOT / '.gitignore'
ignore = ignore_path.read_text(encoding='utf8')
for name in sorted(denied):
    line = '/' + name
    if line not in ignore.splitlines():
        ignore += '\n' + line
ignore_path.write_text(ignore.rstrip() + '\n', encoding='utf8')
print(json.dumps({'withheld_originals': len(policy['withheld_sources']), 'denied_assets': len(denied)}))
