// A picture of the two Remembrance Stones cards on the Your Story hub v10 — the page served locally, the site mocked.
const { chromium } = require("playwright"); const fs = require("fs");
const html = fs.readFileSync(__dirname + "/pages/your-story-v10.html", "utf8");
const doc = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}</style></head><body>' + html + '</body></html>';
(async () => {
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(() => chromium.launch());
  const p = await b.newPage({ viewport: { width: 1200, height: 900 } });
  await p.route("**/*", (r) => /ancientpathcoaching\.com\/your-story/.test(r.request().url()) ? r.fulfill({ contentType: "text/html", body: doc }) : r.fulfill({ status: 204, body: "" }));
  await p.goto("https://www.ancientpathcoaching.com/your-story"); await p.waitForTimeout(600);
  const cards = await p.$$('.aph-card[href="/set-a-stone"], .aph-card[href="/stones"]');
  await cards[0].scrollIntoViewIfNeeded(); await p.waitForTimeout(200);
  const box1 = await cards[0].boundingBox(), box2 = await cards[1].boundingBox();
  const x = Math.min(box1.x, box2.x), y = Math.min(box1.y, box2.y), w = Math.max(box1.x + box1.width, box2.x + box2.width) - x, h = Math.max(box1.y + box1.height, box2.y + box2.height) - y;
  await p.screenshot({ path: __dirname + "/ys-v10-stones.png", fullPage: true, clip: { x, y: y + await p.evaluate(() => window.scrollY), width: w, height: h } });
  console.log("shot", Math.round(w), Math.round(h)); await b.close();
})();
