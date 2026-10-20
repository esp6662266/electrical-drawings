from pathlib import Path
import sys,json,zlib,struct,re,zipfile,hashlib,io,posixpath
ROOT=Path(__file__).resolve().parents[1];sys.path.insert(0,str(ROOT/'qa'/'hwpdeps'))
import olefile
from PIL import Image
OUT=ROOT/'documents'/'source-figures';OUT.mkdir(exist_ok=True);QA=ROOT/'qa'/'equipment-batch';wmf=[]
def figure(raw,name,source):
    sha=hashlib.sha256(raw).hexdigest();suffix=Path(name).suffix.lower();target=OUT/(sha+suffix)
    if not target.exists():target.write_bytes(raw)
    try:
        im=Image.open(io.BytesIO(raw));im.load();im=im.convert('RGB');im.thumbnail((2300,2300));preview=OUT/(sha+'.webp')
        if not preview.exists():im.save(preview,quality=88,method=3)
        return {'member':name,'source_id':source,'url':'/documents/source-figures/'+preview.name,'width':im.width,'height':im.height}
    except Exception:
        if suffix in ('.wmf','.emf'):wmf.append({'input':str(target),'output':str(OUT/(sha+'.png')),'sha256':sha,'member':name,'source_id':source});return {'member':name,'source_id':source,'pending_metafile':sha}
    return None
for n in [int(v) for v in sys.argv[1:]]:
    mf=ROOT/'documents'/f'equipment-{n:02d}'/'source-manifest.json';m=json.loads(mf.read_text(encoding='utf8'));seen=set()
    for s in m['sources']:
        if s['sha256'] in seen:continue
        seen.add(s['sha256']);ext=s['extension'];p=ROOT/s['file'].lstrip('/');cache=ROOT/s['inspection'].lstrip('/');info=json.loads(cache.read_text(encoding='utf8'));figures=[]
        if ext=='.hwp':
            with olefile.OleFileIO(p) as ole:
                compressed=bool(struct.unpack_from('<I',ole.openstream('FileHeader').read(),36)[0]&1)
                for stream in ole.listdir():
                    if stream[0]!='BinData':continue
                    raw=ole.openstream(stream).read()
                    if compressed:
                        try:raw=zlib.decompress(raw,-15)
                        except zlib.error:pass
                    f=figure(raw,stream[-1],s['id'])
                    if f:figures.append(f)
            if not info.get('paragraphs'):info['status']='HWP 본문 텍스트 없음; 삽입 그림·원본 확인'
        elif ext in ('.pptx','.xlsx','.docx'):
            with zipfile.ZipFile(p) as z:
                for name in z.namelist():
                    if '/media/' not in name:continue
                    f=figure(z.read(name),name,s['id'])
                    if f:figures.append(f)
        elif ext=='.doc':
            try:
                with olefile.OleFileIO(p) as ole:
                    word=ole.openstream('WordDocument').read();table=ole.openstream('1Table' if struct.unpack_from('<H',word,10)[0]&0x200 else '0Table').read();fc,lcb=struct.unpack_from('<II',word,418);clx=table[fc:fc+lcb];at=0
                    while clx[at]==1:at+=3+struct.unpack_from('<H',clx,at+1)[0]
                    assert clx[at]==2;length=struct.unpack_from('<I',clx,at+1)[0];plc=clx[at+5:at+5+length];pieces=(length-4)//12;cps=struct.unpack_from('<'+'I'*(pieces+1),plc,0);parts=[]
                    for i in range(pieces):
                        fcRaw=struct.unpack_from('<I',plc,4*(pieces+1)+8*i+2)[0];compressed=bool(fcRaw&0x40000000);offset=fcRaw&0x3fffffff;offset=offset//2 if compressed else offset;count=cps[i+1]-cps[i];parts.append(word[offset:offset+count*(1 if compressed else 2)].decode('cp1252' if compressed else 'utf-16le','replace'))
                    info['paragraphs']=[x.strip() for x in ''.join(parts).replace('\x07',' | ').split('\r') if x.strip()];info['status']='DOC 본문 조각표 추출; 페이지 배치 미재현'
            except Exception as ex:info['error']=type(ex).__name__+': '+str(ex)[:120];info['status']='DOC 원형 보존; 본문 추출 제한'
        elif ext=='.xgwx':
            raw=p.read_bytes();strings=[]
            for match in re.finditer(b'\xff\xfe\xff',raw):
                off=match.end()
                if off>=len(raw):continue
                length=raw[off];off+=1
                if length==255 and off+2<=len(raw):length=struct.unpack_from('<H',raw,off)[0];off+=2
                if 0<length<10000 and off+length*2<=len(raw):
                    text=raw[off:off+length*2].decode('utf-16le','replace')
                    if all(c.isprintable() or c.isspace() for c in text):strings.append(text)
            info['native_strings']=list(dict.fromkeys(strings));info['status']='XG5000 워크스페이스 원본·문자열 정적 확인; 래더 의미 해석은 별도'
        if figures:info['figures']=figures
        if ext=='.xls':
            import xlrd
            book=xlrd.open_workbook(p,on_demand=True)
            for sheet in info.get('sheets',[]):
                orig=book.sheet_by_name(sheet['name']);sheet['source_rows']=[i+1 for i in range(orig.nrows) if any(str(v) for v in orig.row_values(i))]
            book.release_resources()
        cache.write_text(json.dumps(info,ensure_ascii=False,indent=2),encoding='utf8')
    print(json.dumps({'equipment':n,'sources_enriched':len(seen)},ensure_ascii=True),flush=True)
existing=QA/'metafile-jobs.json';old=json.loads(existing.read_text(encoding='utf8')) if existing.exists() else [];bykey={j['input']:j for j in old+wmf};existing.write_text(json.dumps(list(bykey.values()),ensure_ascii=False,indent=2),encoding='utf8')
