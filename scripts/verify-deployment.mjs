import fs from 'node:fs/promises';import crypto from 'node:crypto';import vm from 'node:vm';import assert from 'node:assert/strict';
const base=process.argv[2]||'https://sejin-electrical-drawings.netlify.app/';
const expected=process.env.EXPECTED_COMMIT;
const local=JSON.parse(await fs.readFile('dist/build-manifest.json','utf8'));
const manifestResponse=await fetch(new URL('build-manifest.json',base));assert.equal(manifestResponse.status,200);
const remote=await manifestResponse.json();assert.equal(remote.version,local.version);if(expected)assert.equal(remote.commit,expected);
assert.deepEqual(remote.files,local.files);
const policy=JSON.parse(await fs.readFile('publication-policy.json','utf8'));
const wanted=new Set(['all-in-one/index.html','data/project.js','documents/batch-index.html','documents/library.js','documents/library.css']);
// Every authored HTML/JS/CSS/JSON, every curated drawing preview, and a binary original per equipment.
for(const file of local.files)if(/\.(html|js|css|json)$/.test(file.path))wanted.add(file.path);
const ctx={window:{}};vm.runInNewContext(await fs.readFile('data/project.js','utf8'),ctx);assert.equal(ctx.window.ED_PROJECT.equipment.length,15);
for(const e of ctx.window.ED_PROJECT.equipment){for(const d of e.drawings)wanted.add(d.preview.slice(1));if(e.source_manifest){const m=JSON.parse(await fs.readFile(e.source_manifest.slice(1),'utf8'));const s=m.sources.find(s=>!s.publication_withheld&&s.extension==='.pdf');if(s)wanted.add(s.file.slice(1));}else for(const d of e.drawings.slice(0,1))wanted.add(d.url.split('#')[0].slice(1));}
let next=0,bytes=0;const errors=[],annotatedHtml=[],files=local.files.filter(f=>wanted.has(f.path));
// Netlify adds its hosting comment and same-origin public HUD after deployment.
// Ignore only those observed host additions; every authored byte still has to match.
const stripHostAnnotations=text=>text.replace(/\n<!-- This site is hosted on Netlify\.[\s\S]*?Netlify hosting facts for this site: static\/SSR served via Netlify Edge\. -->/g,'').replace(/<script async src="\/\.netlify\/scripts\/hud\?variant=public" data-nf-variant="public" data-netlify-site-id="9e5acccc-79cc-4613-b0f2-0a378f49340b" data-app-host="app\.netlify\.com" data-account-tier="free"><\/script>\n?/g,'');
await Promise.all(Array.from({length:6},async()=>{while(next<files.length){const f=files[next++];try{const r=await fetch(new URL(f.path,base));assert.equal(r.status,200);const b=Buffer.from(await r.arrayBuffer());let hash=crypto.createHash('sha256').update(b).digest('hex');if(hash!==f.sha256&&f.path.endsWith('.html')){hash=crypto.createHash('sha256').update(stripHostAnnotations(b.toString('utf8'))).digest('hex');annotatedHtml.push(f.path);}assert.equal(hash,f.sha256);bytes+=b.length;}catch(error){errors.push({path:f.path,error:error.message});}}}));
for(const path of policy.denied_paths){const response=await fetch(new URL(path,base),{method:'HEAD'});assert.equal(response.status,404,'private asset accessible: '+path);}
const headers=(await fetch(new URL('all-in-one/',base))).headers;assert.ok(headers.get('content-security-policy')?.includes("script-src 'self'"));
const report={site:base,version:remote.version,commit:remote.commit,files_in_build:remote.files.length,public_files_hash_checked:files.length,html_with_observed_netlify_annotations:annotatedHtml,bytes_checked:bytes,private_paths_404:policy.denied_paths.length,equipment:15,errors,csp:'verified',checked_at:new Date().toISOString()};
await fs.mkdir('qa/publication',{recursive:true});await fs.writeFile('qa/publication/public-verification.json',JSON.stringify(report,null,2)+'\n');console.log(JSON.stringify(report,null,2));assert.equal(errors.length,0);
