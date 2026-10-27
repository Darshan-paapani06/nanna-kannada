import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function worker(){const u=new URL("../dist/server/index.js",import.meta.url);u.searchParams.set("test",`${process.pid}-${Date.now()}`);return (await import(u.href)).default}
async function render(path="/"){const w=await worker();return w.fetch(new Request(`http://localhost${path}`,{headers:{accept:"text/html"}}),{ASSETS:{fetch:async()=>new Response("Not found",{status:404})}},{waitUntil(){},passThroughOnException(){}})}

test("ಮುಖಪುಟ ಕನ್ನಡದಲ್ಲಿ ಸರ್ವರ್ ರೆಂಡರ್ ಆಗುತ್ತದೆ",async()=>{const res=await render();assert.equal(res.status,200);const html=await res.text();assert.match(html,/lang="kn"/);assert.match(html,/ನನ್ನ ಕನ್ನಡ/);assert.match(html,/ಇದು ನನ್ನ ನೆಲ/);assert.doesNotMatch(html,/codex-preview|Building your site|react-loading-skeleton/)});
test("ಮುಖ್ಯ ಒಳಪುಟಗಳು ನಿಜವಾದ ವಿಷಯ ನೀಡುತ್ತವೆ",async()=>{for(const [path,word] of [["/learn","ಕನ್ನಡ ಕಲ್ತ್ಕೋ"],["/dialects","ಊರಿಗೊಂದು ಕನ್ನಡ"],["/history","ರಾಜರ ಗರ್ಜನೆ"],["/ai","ಕನ್ನಡ ಮಿತ್ರ"],["/challenge","ಕನ್ನಡ ಕದನ"]]){const res=await render(path);assert.equal(res.status,200);assert.match(await res.text(),new RegExp(word))}});
test("ಸಿನಿಮಾಟಿಕ್ ಸ್ಥಿತಿ ಯಂತ್ರ ಮತ್ತು ಸುರಕ್ಷತಾ ಸೂಚನೆಗಳು ಮೂಲದಲ್ಲಿವೆ",async()=>{const [intro,product]=await Promise.all([readFile(new URL("../app/components/KannadaCinematicIntro.tsx",import.meta.url),"utf8"),readFile(new URL("../app/components/ProductExperience.tsx",import.meta.url),"utf8")]);for(const state of ["takeover","nannaKannada","nannaKarnataka","zoomOut","complete"])assert.match(intro,new RegExp(state));assert.match(intro,/prefers-reduced-motion/);assert.match(intro,/ಮುಂದೆ ಹೋಗೋಣ/);assert.match(product,/ಅಂಕ ಅಥವಾ ನಿಖರ ಉಚ್ಚಾರಣಾ ತೀರ್ಪು ಕೊಡುವುದಿಲ್ಲ/);assert.match(product,/ಸ್ವತಂತ್ರ ಭಾಷೆಗಳನ್ನು/)});
