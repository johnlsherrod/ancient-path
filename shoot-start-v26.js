// A picture of Your Page v26 with two stones in the card (a v1 Ending Well stone and a Set a Stone), on a desk and a phone — story.js + stone.js served locally, the site mocked.
const { chromium } = require("playwright"); const fs = require("fs");
const html = fs.readFileSync(__dirname + "/pages/start-v26.html", "utf8");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
const IDS = JSON.parse(fs.readFileSync(__dirname + "/ew-ids.json", "utf8"));
const stones = [
  { id: "a", when: "2026-06-01T13:00:00Z", text: "What God did was put me in a room with men willing to walk with me.", answers: { text: "What God did was put me in a room with men willing to walk with me.", from: "ending-well", pieceTitle: "Ending Well" } },
  { id: "b", when: "2026-10-04T13:00:00Z", text: "x", answers: { text: "walked beside me", stonefor: "a man I walk with", meaning: "a new discipline", from: "set-a-stone", pieceTitle: "Set a Stone", returnAt: "2027-01-04", returns: "[]", rid: "", shown: "" } }
];
function latest(a) { return { status: "submitted", submittedTimestamp: "2026-10-04T12:00:00Z", answers: Object.keys(a).map(b => ({ blockId: b, answer: { value: a[b] } })) }; }
const doc = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="csrf-token" content="x"><style>body{margin:0}</style><script>window.getUserToken=function(){return "tok"};</script></head><body class="ap-home"><div id="sectionsWrapper"><div class="column" style="padding:0 25px"><div id="el_1600361776627_10" style="padding:0 25px 0 0"><div id="el_1600361776628_11">' + html + '</div></div></div></div></body></html>';
(async () => {
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(() => chromium.launch());
  for (const [name, w, h] of [["desk", 1200, 900], ["phone", 390, 844]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 }); const p = await ctx.newPage();
    p.on("pageerror", e => console.log("pageerror:", e.message));
    await p.route("**/*", (route) => {
      const u = route.request().url();
      if (/story\.js/.test(u)) return route.fulfill({ contentType: "application/javascript", body: story });
      if (/stone\.js/.test(u)) return route.fulfill({ contentType: "application/javascript", body: stone });
      if (/assessment\/state/.test(u)) { const unit = decodeURIComponent(u.split("objectId=")[1]); if (unit === IDS.STONES_UNIT) { const a = {}; a[IDS.STONES_HISTORY] = JSON.stringify(stones); return route.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, latestSubmission: latest(a) }) }); } return route.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, latestSubmission: null }) }); }
      if (/user_stats/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ me: { id: "u1234567890", first_name: "John", email: "j@x.com" } }) });
      if (/status=/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ pieces: [] }) });
      if (/^https?:\/\/www\.ancientpathcoaching\.com\/start/.test(u)) return route.fulfill({ contentType: "text/html", body: doc });
      return route.fulfill({ status: 204, body: "" });
    });
    await p.goto("https://www.ancientpathcoaching.com/start"); await p.waitForTimeout(900);
    const m = await p.evaluate(() => {
      const card = document.querySelector('[data-story="stones"]'); if (!card) return { card: false };
      const st = [...card.querySelectorAll(".ap-stone")].map(e => { const r = e.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), Math.round(r.width)]; });
      return { card: card.style.display !== "none", state: card.querySelector(".ap-card-state").textContent, stones: st, lines: [...card.querySelectorAll(".ap-stone")].map(e => e.querySelectorAll(".ap-stone-text").length), wide: document.documentElement.scrollWidth > window.innerWidth };
    });
    console.log(name, JSON.stringify(m));
    const card = await p.$('[data-story="stones"]'); if (card) await card.screenshot({ path: __dirname + "/start-v26-stones-" + name + ".png" });
    await ctx.close();
  }
  await b.close();
})();
