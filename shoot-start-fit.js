// Your Page v25.5: the content block is centered inside the page area on the live layout as measured Oct 2
// (window 1116, #sectionsWrapper scrolls with its own scrollbar → clientWidth 1106; column pads 25/25;
// el_1600361776627_10 pads 0 left / 25 right; apHome max-width 1040, padding 20). Also: no side menu, and a phone.
const { chromium } = require('playwright'); const fs = require('fs');
const page = fs.readFileSync(__dirname + '/pages/start-v25.html', 'utf8');
function shell(inner, opts) {
  const pad10 = opts.asym ? 'padding:0 25px 0 0' : 'padding:0';
  return '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="csrf-token" content="x">' +
    '<style>html,body{margin:0;height:100%;overflow:hidden}#sectionsWrapper{height:100%;overflow-y:auto;overflow-x:hidden}' +
    '.column{padding:0 25px}.lw-cols{display:flex}.col{box-sizing:border-box;display:flex;width:100%;min-width:0;max-width:100%;' + pad10 + '}.inner{flex:1 1 auto;min-width:0}' +
    '</style></head><body><div id="sectionsWrapper"><div class="column"><div class="lw-cols"><div class="col" id="el_1600361776627_10"><div class="inner" id="el_1600361776628_11">' +
    inner + '</div></div></div></div><div style="height:3000px"></div></div></body></html>';
}
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  let fails = 0;
  for (const [name, w, asym] of [['desk-asym', 1106, true], ['desk-even', 1116, false], ['phone', 390, true]]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    await p.addInitScript(() => { window.getUserToken = () => 'tok'; window.fetch = () => Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null, me: { first_name: 'Test' } }) }); });
    await p.setContent(shell(page, { asym })); await p.waitForTimeout(600);
    const m = await p.evaluate(() => {
      const r = s => { const e = document.querySelector(s); const b = e.getBoundingClientRect(); return [Math.round(b.left * 10) / 10, Math.round(b.right * 10) / 10, Math.round(b.width)]; };
      const reg = document.getElementById('sectionsWrapper').clientWidth;
      return { reg, home: r('#apHome'), band: r('#apHome .ap-band'), why: r('#apHome .ap-why') || null, scrollW: document.getElementById('sectionsWrapper').scrollWidth };
    });
    const gl = m.home[0], gr = m.reg - m.home[1];
    const ok = Math.abs(gl - gr) <= 1 && m.band[0] === 0 && m.band[2] === m.reg && m.scrollW <= m.reg + 1;
    console.log((ok ? 'ok   ' : 'FAIL ') + name + '  region ' + m.reg + '  apHome ' + m.home.join('/') + '  gaps ' + gl + ' / ' + gr + '  band ' + m.band.join('/') + '  scrollWidth ' + m.scrollW);
    if (!ok) fails++;
    await p.screenshot({ path: `pictures/start-fit-${name}.png`, clip: { x: 0, y: 0, width: w, height: 700 } });
    await p.close();
  }
  await b.close();
  console.log(fails ? fails + ' FAILED' : 'all level'); process.exit(fails ? 1 : 0);
})();
