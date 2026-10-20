from pathlib import Path
import json,shutil,hashlib
ROOT=Path(__file__).resolve().parents[1];DOC=ROOT/'documents';QA=ROOT/'qa'/'equipment-batch';quarantine=QA/'non-document-cache';quarantine.mkdir(exist_ok=True)
catalog=[];excluded=[];used=set()
for n in range(3,16):
    f=DOC/f'equipment-{n:02d}'/'source-manifest.json';m=json.loads(f.read_text(encoding='utf8'));keep=[];omitted=[]
    for s in m['sources']:
        if s['extension'] in ('.db','.log'):
            omitted.append(s);excluded.append(s);continue
        p=ROOT/s['inspection'].lstrip('/');info=json.loads(p.read_text(encoding='utf8'));s['inspection_status']=info['status'];keep.append(s);used.add(s['file'])
        if s['id']=='S44b06169e5113a08':
            s['publication_review']='접근정보·보호설정 변경 설명 포함; 로컬 참고 전용'
            for page in info.get('pages',[]):
                import re
                page['text']=re.sub(r'PASSWORD\s*:\s*\d+','PASSWORD: [원본 접근정보 생략]',page['text'],flags=re.I)
            info['source_restriction']='접근정보는 추출 텍스트에서 생략. 보호설정 설명은 현재 작업 지시가 아님.';p.write_text(json.dumps(info,ensure_ascii=True,indent=2),encoding='utf8')
    m['sources']=keep;m['excluded_cache_count']=len(omitted);m['source_count']=sum('container_sha256' not in s for s in keep);m['archive_member_count']=sum('container_sha256' in s for s in keep);m['unique_source_count']=len(set(s['sha256'] for s in keep));m['coverage_note']='원본 해시 보존·정적 본문 추출·핵심 자료 중심 검토. 모든 부품 카탈로그 페이지의 상세 판독/현재 적용 검증은 아님.'
    f.write_text(json.dumps(m,ensure_ascii=False,indent=2),encoding='utf8');catalog.append(m)
for s in excluded:
    if s['file'] in used:continue
    source=(ROOT/s['file'].lstrip('/')).resolve();store=(DOC/'source-store').resolve();assert source.is_relative_to(store)
    dest=(quarantine/source.name).resolve();assert dest.is_relative_to(quarantine.resolve())
    if source.exists() and not dest.exists():shutil.move(str(source),str(dest))
    text=ROOT/s['inspection'].lstrip('/')
    if text.exists() and not (quarantine/text.name).exists():shutil.move(str(text),str(quarantine/text.name))
result={'equipment':catalog,'original_file_count':sum(m['source_count'] for m in catalog),'archive_member_count':sum(m['archive_member_count'] for m in catalog),'reference_path_count':sum(len(m['sources']) for m in catalog),'unique_hash_count':len(set(s['sha256'] for m in catalog for s in m['sources'])),'excluded_cache_count':len(excluded)}
(DOC/'batch-catalog.json').write_text(json.dumps(result,ensure_ascii=False,indent=2),encoding='utf8');(QA/'excluded-cache-inventory.json').write_text(json.dumps(excluded,ensure_ascii=False,indent=2),encoding='utf8');print(json.dumps({k:v for k,v in result.items() if k!='equipment'},ensure_ascii=True))
