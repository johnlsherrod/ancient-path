// Pictures of Set a Stone: the door on a phone and a desk, and the finished view after Save (story.js + stone.js served locally, the site mocked).
const { chromium } = require("playwright"); const fs = require("fs"); const path = require("path");
const page = fs.readFileSync(__dirname + "/set-a-stone.html", "utf8");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
const scripts = [...page.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const markup = page.replace(/<script>[\s\S]*?<\/script>/g, "");
const cfg = scripts[1].replace(/var s = document\.createElement\("script"\);[\s\S]*?document\.head\.appendChild\(s\);\s*/, "start();\n");
const html = '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="csrf-token" content="x"><style>body{margin:0;padding:24px 16px;font-family:-apple-system,Segoe UI,Roboto,sans-serif;background:#fff}</style></head><body><div style="max-width:760px;margin:0 auto">' + markup + '</div><script>window.getUserToken=function(){return "tok"};</script><script>' + scripts[0] + '</script><script>' + story + '</script><script>' + stone + '</script><script>' + cfg + '</script></body></html>';
(async () => {
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(() => chromium.launch());
  for (const [name, w, h] of [["phone", 390, 844], ["desk", 1200, 900]]) {
    const ctx = await b.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
    const p = await ctx.newPage();
    let saved = null;
    await p.route("**/*", (route) => {
      const u = route.request().url();
      if (/assessment\/state/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, latestSubmission: saved ? { status: "submitted", submittedTimestamp: new Date().toISOString(), answers: saved } : null }) });
      if (/submission\/init/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, submission: { status: "begun", snapshotId: "s", source: { type: "unit" } } }) });
      if (/create_form_submission_id/.test(u)) { saved = JSON.parse(route.request().postData()).answers; return route.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, submitted: true, submission: { status: "submitted", id: "s1" } }) }); }
      if (/user_stats/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ me: { id: "u1234567890", first_name: "John", email: "j@x.com" } }) });
      if (/status=/.test(u)) return route.fulfill({ contentType: "application/json", body: JSON.stringify({ pieces: [] }) });
      if (/^https?:\/\/www\.ancientpathcoaching\.com\/set-a-stone/.test(u)) return route.fulfill({ contentType: "text/html", body: html });
      return route.fulfill({ status: 204, body: "" });
    });
    await p.goto("https://www.ancientpathcoaching.com/set-a-stone"); await p.waitForTimeout(400);
    await p.screenshot({ path: __dirname + "/sas-door-" + name + ".png", fullPage: true });
    for (const [id, v] of [["sas_stonefor", "those who chose the same path."], ["sas_text", "kept a room of men around me who heard the worst and stayed."], ["sas_meaning", "a new discipline: I do the next right thing."], ["sas_name", "Discipline"]]) {
      await p.fill("#" + id, v);
    }
    await p.waitForTimeout(100);
    p.on("console", m => { if (/error/i.test(m.type())) console.log("console:", m.text()); }); p.on("pageerror", e => console.log("pageerror:", e.message));
    await p.click("#apsSave"); await p.waitForTimeout(900);
    console.log(name, "note:", await p.$eval("#apsNote", n => n.textContent), "| after:", await p.$eval("#sasAfter", n => n.textContent), "| offer:", await p.$eval("#sasOffer", n => n.innerHTML.slice(0, 80)));
    if (await p.$("#sasOffer .ap-stone-offer-open")) { await p.click("#sasOffer .ap-stone-offer-open"); await p.waitForTimeout(100); }
    await p.screenshot({ path: __dirname + "/sas-saved-" + name + ".png", fullPage: true });
    // the measurements that matter: the stem never sits over his words, nothing wider than the screen
    const m = await p.evaluate(() => {
      const out = { over: 0, wide: document.documentElement.scrollWidth > window.innerWidth };
      document.querySelectorAll(".ew-line").forEach(l => { const s = l.querySelector(".ew-stem"), t = l.querySelector("textarea"); if (!s) return; const si = parseFloat(getComputedStyle(t).textIndent); if (si < s.offsetWidth) out.over++; });
      return out;
    });
    console.log(name, JSON.stringify(m));
    await ctx.close();
  }
  await b.close();
})();
