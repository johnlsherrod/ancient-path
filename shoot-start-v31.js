// A picture of Your Page v27: the Remembrance Stones card beside its neighbors, and the pile section below, two stones (a v1 Ending Well stone and a Set a Stone), on a desk and a phone — story.js + stone.js served locally, the site mocked.
const { chromium } = require("playwright"); const fs = require("fs");
const crypto = require("crypto");
const sri = f => "sha384-" + crypto.createHash("sha384").update(fs.readFileSync(__dirname + "/" + f)).digest("base64");
/* the page pins the engines by hash; for the picture it is served the local files, so their hashes stand in for the pinned ones */
const html = fs.readFileSync(__dirname + "/pages/start-v31.html", "utf8").replace(/STORY_SRI = "[^"]+"/, 'STORY_SRI = "' + sri("story.js") + '"').replace(/STONE_SRI = "[^"]+"/, 'STONE_SRI = "' + sri("stone.js") + '"');
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
const IDS = JSON.parse(fs.readFileSync(__dirname + "/ew-ids.json", "utf8"));
const stones = [
  { id: "a", when: "2026-06-01T13:00:00Z", text: "What God did was put me in a room with men willing to walk with me.", answers: { text: "What God did was put me in a room with men willing to walk with me.", from: "ending-well", pieceTitle: "Ending Well" } },
  { id: "b", when: "2026-10-04T13:00:00Z", text: "x", answers: { text: "walked beside me", stonefor: "a man I walk with", meaning: "a new discipline", name: "Discipline", from: "set-a-stone", pieceTitle: "Set a Stone", returnAt: "2026-10-01", returns: "[]", rid: "", shown: "" } }
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
      if (/assessment\/state/.test(u)) { const unit = decodeURIComponent(u.split("objectId=")[1]); if (unit === IDS.EW_UNIT) { const a = {}; a[IDS.EW_WHOLE] = "ENDING WELL\n\nTo the men I walked with, I am tired and grateful.\nYou saw me on the Wednesday.\n\nWritten at the end of Breaking Free."; a[IDS.EW_JSON] = JSON.stringify({ iam: "tired", meta: JSON.stringify({ step: 5, finished: true }) }); return route.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, latestSubmission: latest(a) }) }); }
      if (unit === IDS.STONES_UNIT) { const a = {}; a[IDS.STONES_HISTORY] = JSON.stringify(stones); return route.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, latestSubmission: latest(a) }) }); } return route.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, latestSubmission: null }) }); }
      if (/user_stats/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ me: { id: "u1234567890", first_name: "John", email: "j@x.com" } }) });
      if (/status=/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ pieces: [] }) });
      if (/^https?:\/\/www\.ancientpathcoaching\.com\/start/.test(u)) return route.fulfill({ contentType: "text/html", body: doc });
      return route.fulfill({ status: 204, body: "" });
    });
    await p.goto("https://www.ancientpathcoaching.com/start"); await p.waitForTimeout(900); await p.click("#apStonesAll"); await p.waitForTimeout(300);
    const m = await p.evaluate(() => {
      const cards = [...document.querySelectorAll(".ap-card")].filter(c => c.style.display !== "none").map(c => { const r = c.getBoundingClientRect(); return [c.getAttribute("data-story") || c.id || c.querySelector(".ap-card-title").textContent, Math.round(r.width), Math.round(r.height)]; });
      const sec = document.getElementById("apRemembrance"); const sr = sec.getBoundingClientRect();
      const st = [...sec.querySelectorAll(".ap-stone")].map(e => { const r = e.getBoundingClientRect(); return [Math.round(r.left), Math.round(r.top), Math.round(r.width)]; });
      return { cards, section: sec.style.display !== "none", secTop: Math.round(sr.top + window.scrollY), stones: st, note: document.getElementById("apStoriesNote").textContent, wide: document.documentElement.scrollWidth > window.innerWidth };
    });
    console.log(name, JSON.stringify(m));
    const grid = await p.$('#apStories'); if (grid) await grid.screenshot({ path: __dirname + "/start-v31-cards-" + name + ".png" });
    const sec = await p.$('#apRemembrance'); if (sec) await sec.screenshot({ path: __dirname + "/start-v31-pile-" + name + ".png" });
    await ctx.close();
  }
  await b.close();
})();
