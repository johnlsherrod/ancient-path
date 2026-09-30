const { chromium } = require('playwright'); const fs = require('fs');
const src = fs.readFileSync(__dirname + '/../story.js', 'utf8');
const page = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="csrf-token" content="x">
<style>body{margin:0;font-family:'Source Sans 3',-apple-system,Segoe UI,Helvetica,Arial,sans-serif;color:#2B3040;background:#fff}#pageContent{max-width:700px;margin:0 auto;padding:20px 18px}
.wif-step-title{font-family:'Source Serif 4',Georgia,serif;font-size:22px;margin:0 0 14px;color:#1F2A44}.wif-field{margin:0 0 6px}.wif-label{font-size:18px;line-height:1.4;margin:0 0 8px;color:#1F2A44;font-weight:600}
.wif-input{width:100%;box-sizing:border-box;font:inherit;font-size:17px;padding:12px 14px;border:1px solid #C9C2B6;border-radius:8px}
.wif-btn{font:inherit;font-size:16px;padding:10px 16px;border-radius:8px;border:1px solid #C9A227;background:#fff;color:#1F2A44;cursor:pointer}.wif-btn-primary{background:#1F2A44;color:#fff;border-color:#1F2A44}.wif-btn-ghost{background:none}
.wif-actions{display:flex;flex-wrap:wrap;gap:12px}</style></head><body><div id="pageContent"><div class="wif-root" id="root">
<div class="wif-step"><h2 class="wif-step-title">The ordinary things</h2>
<div class="wif-field"><label for="item" class="wif-label">One ordinary thing from the house you grew up in — a stove, a chair, a smell.</label><input class="wif-input" id="item"></div>
<div class="wif-field"><p class="wif-label">A product that was always around.</p><input class="wif-input" id="prod1"></div>
<div class="wif-field"><p class="wif-label">And another one.</p><input class="wif-input" id="prod2"></div></div>
<div class="wif-step" style="display:none"><h2 class="wif-step-title">The house</h2><div class="wif-field"><p class="wif-label">Where you lived</p><textarea class="wif-input" id="home"></textarea></div></div>
<div id="nav" class="wif-nav"><button id="back" class="wif-btn wif-btn-ghost">Back</button><button id="stop" class="wif-btn">Save and stop for now</button><button id="next" class="wif-btn wif-btn-primary">Next</button></div>
<div class="wif-finish" style="margin-top:40px"><div id="acts" class="wif-actions"><button class="wif-btn">Print</button></div></div></div></div>
<script>window.getUserToken=function(){return "tok"};window.AP_READER=false;</script>
<script>${src.replace(/<\/script>/g, '<\\/script>')}</script>
<script>APStory.init({ form: "wif", root: "#root", navHost: "#navOff", actionsRow: "#acts", stepsHost: "#root", stepSelector: ".wif-step", pagePath: "/start", buttonClass: "wif-btn", primaryClass: "wif-btn-primary", ghostClass: "wif-btn-ghost", tail: "x",
 fields: [{ id: "item", key: "item" }, { id: "prod1", key: "prod1" }, { id: "prod2", key: "prod2" }, { id: "home", key: "home" }], lw: { unit: "u", blocks: { json: "J", whole: "W" } }, document: function(a){ return a.item ? "I am from " + a.item + "." : ""; }, assistant: false, after: false });</script>
</body></html>`;
(async () => {
  const b = await chromium.launch();
  for (const [name, vp, touch] of [["phone", { width: 390, height: 844 }, true], ["desk", { width: 1100, height: 800 }, false]]) {
    const ctx = await b.newContext({ viewport: vp, hasTouch: touch, isMobile: touch });
    await ctx.addInitScript(() => { if (!window.SpeechRecognition && !window.webkitSpeechRecognition) { window.SpeechRecognition = function () { this.start = function () {}; this.stop = function () {}; }; } });
    const pg = await ctx.newPage(); pg.on('pageerror', e => console.log('PAGEERROR', e.message));
    await pg.route('**/*', async (route) => { const u = route.request().url(); if (u.startsWith('https://www.ancientpathcoaching.com/where-i-am-from')) return route.fulfill({ status: 200, contentType: 'text/html', body: page }); if (/assessment\/state/.test(u)) return route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true,"latestSubmission":null}' }); return route.fulfill({ status: 200, contentType: 'application/json', body: '{"success":true,"submitted":true,"submission":{"status":"submitted","id":"s1"}}' }); });
    await pg.goto('https://www.ancientpathcoaching.com/where-i-am-from'); await pg.waitForTimeout(800);
    if (touch) { await pg.click('.aps-talk'); await pg.waitForTimeout(100); }
    else { await pg.fill('#item', 'the yellow stove'); await pg.click('.aps-handoff-link'); await pg.waitForTimeout(900); }
    await pg.screenshot({ path: `${name}.png` });
    console.log(name, 'errors ok');
    await ctx.close();
  }
  await b.close();
})();
