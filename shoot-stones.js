// A picture of What These Stones Mean (stones.html) with two published stones — stone.js served locally, the review script mocked.
const { chromium } = require("playwright"); const fs = require("fs"); const crypto = require("crypto");
const sri = f => "sha384-" + crypto.createHash("sha384").update(fs.readFileSync(__dirname + "/" + f)).digest("base64");
const html = fs.readFileSync(__dirname + "/stones.html", "utf8").replace(/var STONE_SRI = "[^"]+"/, 'var STONE_SRI = "' + sri("stone.js") + '"');
const stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
const pub = [
  { id: "1", name: "", title: "Stone a", from: "Set a Stone", piece: "This stone is for my son.\nThe LORD has kept me.\nWhat this stone means to me is a new discipline.", at: "2026-12-03T10:00:00Z" },
  { id: "2", name: "Mike Allen", title: "Stone b", from: "Set a Stone", piece: "This stone is for a man I walk with.\nThe LORD has walked beside me.\nWhat this stone means to me is surrender.", at: "2026-11-12T10:00:00Z" }
];
const doc = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0;padding:24px 0;background:#fff}</style></head><body>' + html + '</body></html>';
(async () => {
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(() => chromium.launch());
  for (const [name, w, h] of [["desk", 1100, 900], ["phone", 390, 844]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h } }); const p = await ctx.newPage();
    p.on("pageerror", e => console.log("pageerror:", e.message));
    await p.route("**/*", (route) => {
      const u = route.request().url();
      if (/stone\.js/.test(u)) return route.fulfill({ contentType: "application/javascript", body: stone });
      if (/feed=published/.test(u)) { const cb = decodeURIComponent(u.split("callback=")[1].split("&")[0]); return route.fulfill({ contentType: "application/javascript", body: cb + "(" + JSON.stringify({ pieces: pub }) + ");" }); }
      if (/ancientpathcoaching\.com\/stones/.test(u)) return route.fulfill({ contentType: "text/html", body: doc });
      return route.fulfill({ status: 204, body: "" });
    });
    await p.goto("https://www.ancientpathcoaching.com/stones"); await p.waitForTimeout(900);
    console.log(name, await p.evaluate(() => ({ stones: document.querySelectorAll(".ap-stone").length, metas: [...document.querySelectorAll(".ap-stone-meta")].map(e => e.textContent), you: document.querySelector(".aps-you").textContent.trim().replace(/\s+/g, " ") })));
    await p.locator("#apStonesRoot").screenshot({ path: __dirname + "/stones-b5-" + name + ".png" });
    await ctx.close();
  }
  await b.close();
})();
