const { chromium } = require('playwright'); const fs = require('fs');
const band = fs.readFileSync(__dirname + '/ap-promise-band-v2.html', 'utf8');
const html = '<!doctype html><html><head><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;background:#FBF9F5;font-family:Georgia,serif}</style></head><body>' + band + '</body></html>';
(async () => {
  const b = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium' });
  for (const [name, w] of [['phone', 390], ['desk', 1100]]) {
    const p = await b.newPage({ viewport: { width: w, height: 900 }, deviceScaleFactor: 1 });
    await p.setContent(html); await p.waitForTimeout(200);
    await p.locator('.apb').screenshot({ path: `band-v2-${name}.png` });
    await p.close();
  }
  await b.close();
})();
