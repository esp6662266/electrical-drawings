import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,readdir,stat} from 'node:fs/promises';
import {resolve,relative,dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const policy=JSON.parse(await readFile(resolve(root,'publication-policy.json'),'utf8'));
const denied=new Set(policy.denied_paths);
async function walk(path){const result=[];for(const entry of await readdir(path,{withFileTypes:true})){const next=resolve(path,entry.name);if(entry.isDirectory())result.push(...await walk(next));else result.push(next);}return result;}
test('access-bearing originals and their sensitive image derivatives cannot enter publication',async()=>{
  assert.equal(policy.withheld_sources.length,2);
  const ignore=await readFile(resolve(root,'.gitignore'),'utf8');
  for(const path of denied){assert.ok(path.startsWith('documents/'));assert.ok(!path.includes('..'));assert.ok(ignore.split(/\r?\n/).includes('/'+path));}
  for(const id of policy.withheld_sources){
    const catalog=JSON.parse(await readFile(resolve(root,'documents/batch-catalog.json'),'utf8'));
    const source=catalog.equipment.flatMap(m=>m.sources).find(s=>s.id===id);
    assert.equal(source.publication_withheld,true);assert.ok(denied.has(source.original_file.slice(1)));
    assert.ok(source.file.startsWith('/documents/publication-notices/'));
    const info=JSON.parse(await readFile(resolve(root,source.inspection.slice(1)),'utf8'));
    assert.ok(!(info.figures||[]).some(f=>denied.has(f.url.slice(1))));
    if(id==='S44b06169e5113a08'){assert.equal(info.figures.length,0);assert.ok(!info.pages[0].text.includes('PASSWORD'));}
    else assert.match(info.pages.find(p=>p.page===32).text,/생략/);
  }
});
test('public authored HTML links resolve and do not point to withheld original assets',async()=>{
  const files=(await walk(resolve(root,'documents'))).filter(p=>p.endsWith('.html'));
  files.push(resolve(root,'all-in-one/index.html'),resolve(root,'index.html'));
  let count=0;
  for(const file of files){const html=await readFile(file,'utf8');for(const match of html.matchAll(/(?:href|src)="([^"]+)"/g)){
    const href=match[1].replace(/&amp;/g,'&');if(/^(?:https?:|data:|blob:|#)/.test(href))continue;
    const target=new URL(href,'https://example.test/'+relative(root,file).replaceAll('\\','/'));
    const path=decodeURIComponent(target.pathname).replace(/^\//,'');assert.ok(!denied.has(path),file+' -> '+path);
    const abs=resolve(root,path);assert.ok(abs.startsWith(root));const info=await stat(abs);if(info.isDirectory())await stat(resolve(abs,'index.html'));count++;
  }}for(let n=3;n<=15;n++)assert.ok(files.includes(resolve(root,'documents/equipment-'+String(n).padStart(2,'0')+'/manual.html')));assert.ok(count>files.length);
});
