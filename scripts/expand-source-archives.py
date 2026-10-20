from pathlib import Path
import sys,json,zipfile,hashlib,importlib.util
ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('source_inspector',ROOT/'scripts'/'ingest-equipment-batch.py');mod=importlib.util.module_from_spec(spec);spec.loader.exec_module(mod)
allowed={'.pdf','.hwp','.doc','.docx','.xls','.xlsx','.ppt','.pptx','.jpg','.jpeg','.png','.tif','.tiff','.dwg','.dxf','.xgwx','.xpd','.xgb','.xgk','.xgi','.zip','.csv','.txt','.osts'}
for n in [int(v) for v in sys.argv[1:]]:
    f=ROOT/'documents'/f'equipment-{n:02d}'/'source-manifest.json';m=json.loads(f.read_text(encoding='utf8'));known={s['relative_path'] for s in m['sources']};queue=[s for s in m['sources'] if s['extension']=='.zip'];count=0
    for source in queue:
        if source.get('archive_expanded'):continue
        with zipfile.ZipFile(ROOT/source['file'].lstrip('/')) as z:
            total=sum(i.file_size for i in z.infolist());assert total<2_000_000_000,'Archive larger than inspection bound'
            for i in z.infolist():
                name=i.filename
                if not i.flag_bits&0x800:
                    try:name=name.encode('cp437').decode('cp949')
                    except (UnicodeEncodeError,UnicodeDecodeError):pass
                ext=Path(name).suffix.lower();relative=source['relative_path']+'!/'+name
                if i.is_dir() or ext not in allowed or relative in known:continue
                if i.flag_bits&1:continue
                assert i.file_size<300_000_000
                raw=z.read(i);sha=hashlib.sha256(raw).hexdigest();dest=mod.STORE/(sha+ext)
                if not dest.exists():dest.write_bytes(raw)
                assert hashlib.sha256(dest.read_bytes()).hexdigest()==sha
                info=mod.static_inspect(dest,sha,ext)
                item={'id':'S'+sha[:16],'name':Path(name).name,'relative_path':relative,'file':'/documents/source-store/'+dest.name,'sha256':sha,'bytes':len(raw),'extension':ext,'inspection':'/documents/source-text/'+sha+'.json','inspection_status':info['status'],'container_source_id':source['id'],'container_sha256':source['sha256']}
                for k in ['page_count','error','image']:
                    if k in info:item[k]=info[k]
                m['sources'].append(item);known.add(relative);count+=1
                if ext=='.zip' and relative.count('!/')<2:queue.append(item)
        source['archive_expanded']=True
    m['archive_member_count']=sum('container_sha256' in s for s in m['sources']);m['unique_source_count']=len(set(s['sha256'] for s in m['sources']));f.write_text(json.dumps(m,ensure_ascii=False,indent=2),encoding='utf8');print(json.dumps({'equipment':n,'added_archive_members':count,'total_members':m['archive_member_count']},ensure_ascii=True),flush=True)
