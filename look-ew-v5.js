// Playwright look at Ending Well v5, both doors, phone and desktop: no sideways scroll, one navy button per row, the way back reads where it goes.
const { chromium } = require("playwright"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
const IDS = JSON.parse(fs.readFileSync(__dirname + "/ew-ids.json", "utf8"));
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_BIN || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome" }); const out = [];
  for (const door of ["course", "public"]) for (const [name, w, h] of [["desk", 1200, 900], ["phone", 390, 800]]) {
    let page = fs.readFileSync(__dirname + (door === "course" ? "/ending-well-v5.html" : "/ending-well-v5-public.html"), "utf8");
    const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: name === "phone", isMobile: name === "phone" });
    const p = await ctx.newPage();
    await p.route("**/*", r => {
      const u = r.request().url();
      if (/cdn\.jsdelivr\.net.*story\.js/.test(u)) return r.fulfill({ contentType: "application/javascript", body: story, headers: { "access-control-allow-origin": "*" } });
      if (/cdn\.jsdelivr\.net.*stone\.js/.test(u)) return r.fulfill({ contentType: "application/javascript", body: stone, headers: { "access-control-allow-origin": "*" } });
      if (/^https:\/\/www\.ancientpathcoaching\.com\/(ending-well|set-a-stone)$/.test(u) || /ewtest/.test(u)) return r.fulfill({ contentType: "text/html; charset=utf-8", body: "<!doctype html><html><head><meta name='csrf-token' content='x'><meta name='viewport' content='width=device-width,initial-scale=1'></head><body style='margin:0;padding:16px;max-width:760px;margin:auto'><div id='pageContent'>" + page + "</div></body></html>" });
      if (/api|assessment|submission|user_stats/.test(u)) return r.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, me: { first_name: "Test", last_name: "Learner" }, latestSubmission: null }) });
      return r.fulfill({ status: 204, body: "" });
    });
    await p.goto("https://www.ancientpathcoaching.com/ending-well"); await p.waitForTimeout(1500);
    const m = async (label) => {
      const r = await p.evaluate(() => {
        const rows = Array.from(document.querySelectorAll(".aps-row")).filter(e => e.offsetParent !== null);
        return { scrollX: document.documentElement.scrollWidth - document.documentElement.clientWidth, rows: rows.map(e => ({ id: e.id || e.className.slice(0, 30), navy: Array.from(e.querySelectorAll("button,a")).filter(x => { const c = getComputedStyle(x); return x.offsetParent !== null && /rgb\(31, 42, 68\)/.test(c.backgroundColor); }).length, buttons: Array.from(e.querySelectorAll("button,a")).filter(x => x.offsetParent !== null).map(x => x.textContent.trim().slice(0, 28)), right: Math.round(e.getBoundingClientRect().right), w: innerWidth })) };
      });
      out.push(door + "/" + name + "/" + label + ": " + JSON.stringify(r));
      await p.screenshot({ path: "/tmp/ew-" + door + "-" + name + "-" + label + ".png" });
    };
    await m("first");
    await p.evaluate(() => window.ewShow(6, true)); await p.waitForTimeout(300); await m("part7");
    await p.evaluate(() => { for (const k in { iam: 1, started: 1, renewed: 1, goddid: 1 }) { const n = document.getElementById("ew_" + k); n.value = "a few words here."; n.dispatchEvent(new Event("input", { bubbles: true })); } window.ewFinish(true); }); await p.waitForTimeout(500); await m("finish");
    await ctx.close();
  }
  await b.close(); console.log(out.join("\n"));
})().catch(e => { console.error(e); process.exit(1); });
