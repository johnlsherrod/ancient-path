// AP-REVIEW checks for Ending Well v6.3 after the second read: the phone layout, the Stop for now view,
// On my own voice, the minors, and the Nov 20 rulings v6.2 missed. Both doors, every setting.
const { chromium } = require("playwright"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8");
let pass = 0, total = 0; const res = [];
const chk = (n, c, d) => { total++; if (c) pass++; res.push((c ? "ok   " : "FAIL ") + n + (d ? " — " + d : "")); };
const CASES = [["course", "ending-well-v6.3.html", ""], ["public-group", "ending-well-v6.3-public.html", "?with=group"], ["public-one", "ending-well-v6.3-public.html", "?with=one"], ["public-alone", "ending-well-v6.3-public.html", "?with=alone"]];
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_BIN || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome" });
  for (const [door, file, q] of CASES) for (const [name, w, h] of [["phone", 390, 800], ["desk", 1440, 900]]) {
    const tag = door + "/" + name + ": ";
    const html = fs.readFileSync(__dirname + "/" + file, "utf8");
    const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: name === "phone", isMobile: name === "phone", deviceScaleFactor: 2 }); const p = await ctx.newPage();
    const errs = []; p.on("pageerror", e => errs.push(e.message));
    await p.route("**/*", r => { const u = r.request().url();
      if (/story\.js/.test(u)) return r.fulfill({ contentType: "application/javascript", body: story, headers: { "access-control-allow-origin": "*" } });
      if (/ancientpathcoaching\.com\/ending-well/.test(u)) return r.fulfill({ contentType: "text/html; charset=utf-8", body: "<!doctype html><html><head><meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'></head><body style='background:#fff'>" + html + "</body></html>" });
      if (/api|assessment|submission|user_stats/.test(u)) return r.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, me: { first_name: "Test", last_name: "Learner" } }) });
      return r.fulfill({ status: 204, body: "" }); });
    await p.goto("https://www.ancientpathcoaching.com/ending-well" + q); await p.waitForTimeout(1800);

    // 1. every box on every part: the microphone and its word stay out of the writing, and the opening words fit or sit above
    const bad = []; let boxes = 0, mics = 0, stacked = 0;
    for (let i = 0; i < 8; i++) {
      await p.evaluate(i => window.ewShow(i, true), i); await p.waitForTimeout(160);
      const r = await p.evaluate(() => [...document.querySelectorAll(".ew-part.is-active .ew-line")].map(l => {
        const s = l.querySelector(".ew-stem"), t = l.querySelector("textarea"), m = l.querySelector(".aps-mic"), wd = l.querySelector(".aps-mic-word");
        const R = e => { if (!e) return null; const x = e.getBoundingClientRect(); return { l: x.left, r: x.right, t: x.top, b: x.bottom, w: x.width }; };
        const lr = l.getBoundingClientRect();
        return { id: t.id, stack: l.classList.contains("ew-stack"), s: R(s), t: R(t), m: R(m), wd: wd && getComputedStyle(wd).display !== "none" ? R(wd) : null, line: { l: lr.left, r: lr.right }, indent: parseFloat(t.style.textIndent) || 0, tw: t.clientWidth };
      }));
      r.forEach(x => { boxes++; if (x.stack) stacked++;
        const hit = (a, c) => a && c && a.l < c.r - 1 && a.r > c.l + 1 && a.t < c.b - 1 && a.b > c.t + 1;
        if (x.m) { mics++; if (x.m.l < x.t.r - 1 && name === "phone") bad.push(x.id + ": the microphone sits in the writing"); if (x.m.r > x.line.r + 1) bad.push(x.id + ": the microphone leaves the box"); if (hit(x.m, x.s)) bad.push(x.id + ": the microphone is over the opening words"); }
        if (x.wd && (hit(x.wd, x.s) || (name === "phone" && x.wd.l < x.t.r - 1 && x.wd.t < x.t.b && x.wd.b > x.t.t))) bad.push(x.id + ": Talk is over the words");
        if (x.s && !x.stack && x.s.r > x.t.r + 1) bad.push(x.id + ": the opening words run past the box");
        if (x.s && x.stack && x.s.b > x.t.t + 2) bad.push(x.id + ": stacked opening words are not above the box");
        if (!x.stack && x.indent > x.tw - 60) bad.push(x.id + ": the indent leaves under 60px to write in");
      });
    }
    chk(tag + "no microphone, Talk or opening words over his writing, " + boxes + " boxes (" + mics + " with a microphone, " + stacked + " with the opening words above)", bad.length === 0, bad.slice(0, 4).join("; "));

    // 2. Stop for now has its own view
    await p.evaluate(() => window.ewShow(0, true)); await p.waitForTimeout(120);
    await p.evaluate(() => { [["ew_iam", "grateful, you stayed"], ["ew_sawinyou", "patience"]].forEach(([id, v]) => { const t = document.getElementById(id); t.value = v; t.dispatchEvent(new Event("input", { bubbles: true })); }); });
    await p.evaluate(() => window.ewShow(2, true)); await p.waitForTimeout(150);
    await p.click("#ewSaveNow"); await p.waitForTimeout(500);
    const held = await p.evaluate(() => { const vis = e => e && e.offsetParent !== null; const g = id => document.getElementById(id);
      const navy = [...document.querySelectorAll(".ew-root button")].filter(vis).filter(e => { const c = getComputedStyle(e).backgroundColor.match(/\d+/g).map(Number); return c[0] < 60 && c[1] < 70 && c[2] > 40 && c[2] < 120; }).map(e => e.textContent.trim());
      return { held: vis(g("ewHeld")), heldH: (g("ewHeld").querySelector("h2") || {}).textContent, btn: g("ewPickUp").textContent, finish: vis(g("ewFinish")), safety: vis(g("ewSafety")), stone: vis(document.querySelector(".ew-next")), nav: vis(g("ewNav")), parts: vis(g("ewParts")), draft: vis(g("ewDraftPanel")), draftText: g("ewDraft").innerText, navy, meta: g("ew_meta").value }; });
    chk(tag + "Stop for now shows 'Pick up where you left off.'", held.held && /Pick up where you left off\./.test(held.heldH || ""), held.heldH);
    chk(tag + "the one filled button names the part he stopped on", held.navy.length === 1 && /^Pick up at /.test(held.btn) && held.navy[0] === held.btn, JSON.stringify(held.navy) + " / " + held.btn);
    chk(tag + "the finished view, the 988 line and the Set a Stone walk wait", !held.finish && !held.safety && !held.stone && !held.nav && !held.parts, JSON.stringify({ f: held.finish, s: held.safety, st: held.stone }));
    chk(tag + "his words so far show", held.draft && /grateful, you stayed/.test(held.draftText), held.draftText.slice(0, 60));
    chk(tag + "the record says unfinished, at his part", /"finished":false/.test(held.meta) && /"step":2/.test(held.meta), held.meta.slice(0, 80));
    await p.click("#ewPickUp"); await p.waitForTimeout(300);
    const back = await p.evaluate(() => { const vis = e => e && e.offsetParent !== null; return { held: vis(document.getElementById("ewHeld")), finish: vis(document.getElementById("ewFinish")), lbl: document.getElementById("ewPartLabel").textContent, nav: vis(document.getElementById("ewNav")) }; });
    chk(tag + "Pick up returns to the part, the finished view stays away", !back.held && !back.finish && back.nav && /Part 3 of 8/.test(back.lbl), JSON.stringify(back));
    // coming back to the page (restore) lands on the same view
    await p.evaluate(() => { document.getElementById("ew_meta").value = JSON.stringify({ step: 4, finished: false, door: window.ewDoor, with: window.ewWith }); window.ewHold(true); }); await p.waitForTimeout(250);
    const rest = await p.evaluate(() => ({ held: document.getElementById("ewHeld").offsetParent !== null, btn: document.getElementById("ewPickUp").textContent, fin: document.getElementById("ewFinish").offsetParent !== null }));
    chk(tag + "a restored unfinished piece lands on the same view, at its part", rest.held && !rest.fin && /^Pick up at /.test(rest.btn), rest.btn);
    // finishing still works, and shows the end
    await p.evaluate(() => { window.ewShow(0, true); });
    await p.evaluate(() => { document.querySelectorAll(".ew-rest").forEach(t => { if (!t.value) { t.value = "A real line."; t.dispatchEvent(new Event("input", { bubbles: true })); } }); window.ewFinish(false); }); await p.waitForTimeout(500);
    const fin = await p.evaluate(() => { const vis = e => e && e.offsetParent !== null; return { fin: vis(document.getElementById("ewFinish")), safety: vis(document.getElementById("ewSafety")), held: vis(document.getElementById("ewHeld")), stone: vis(document.querySelector(".ew-next")) }; });
    chk(tag + "Finish shows the finished view, the 988 line and the walk to Set a Stone, and not the held view", fin.fin && fin.safety && fin.stone && !fin.held, JSON.stringify(fin));

    // 3. the words
    await p.evaluate(() => window.ewShow(0, true));
    const words = await p.evaluate(() => { const all = []; for (let i = 0; i < 8; i++) { window.ewShow(i, true); all.push(document.querySelector(".ew-root").innerText); } return { all: all.join("\n"), lede: document.getElementById("ewLede").textContent, kp: String(window.ewKeepsake), titles: [...document.querySelectorAll(".ew-part")].map(x => (x.querySelector("h2") || {}).textContent), voiceRow: null, src: document.documentElement.outerHTML.length }; });
    chk(tag + "eight parts, the last two are What I take with me and How I’ll keep it", /How I’ll keep it/.test(words.all) && /Part 8 of 8/i.test(words.all) && /Part 7 of 8/i.test(words.all), words.titles.join(" | "));
    chk(tag + "the lede says line by line, and 'one line at a time' is gone", /line by line/.test(words.lede) && !/one line at a time/.test(words.all), words.lede.slice(-40));
    chk(tag + "no 'merchandised'", !/merchandised/.test(words.all));
    chk(tag + "the PDF label: YOUR STORY on the public door, BREAKING FREE on the course", door === "course" ? /"BREAKING FREE"/.test(words.kp) : (/"YOUR STORY"/.test(words.kp) && !/ENDING WELL/.test(words.kp)));
    if (door === "course") {
      chk(tag + "Week 12's first line uses the written example, not his own", /To the men I walked with, I am tired and grateful/.test(words.all) && !/hopeful and restless/.test(words.all.split("Where I started")[0] || ""), "");
      chk(tag + "his own goddid line reads 'laid out'", /freedom trail laid out/.test(words.all));
      chk(tag + "'group', not 'room', where a line means the people", !/in this room did|In a room like that|room going quiet|room to go cold|no room and no men/.test(words.all));
    } else {
      chk(tag + "'smell, or touch' is gone from what came in", !/smell, or touch/.test(words.all));
      chk(tag + "the answer prompt has no unsourced quotation marks", !/“The days are not the achievement/.test(words.all) && /The days are not the achievement/.test(words.all));
    }
    if (door === "public-group") chk(tag + "the You saw me example says the day, like its prompt", /You saw me the day I said/.test(words.all) && !/You saw me the night/.test(words.all));
    if (door === "public-alone") {
      const v = await p.evaluate(() => { window.ewShow(7, true); const t = document.getElementById("ew_voice"); const box = t.closest(".ew-slot") || t.parentNode.parentNode; return box.innerText; });
      chk(tag + "On my own: the voice example is 'Do the next right thing.' and the row has no 'They heard the worst and stayed.'", /For example: The voice that calls me back says, “Do the next right thing\.”/.test(v) && !/They heard the worst and stayed/.test(v), v.replace(/\s+/g, " ").slice(0, 200));
    } else if (door !== "course") {
      const v = await p.evaluate(() => { window.ewShow(7, true); const t = document.getElementById("ew_voice"); const box = t.closest(".ew-slot") || t.parentNode.parentNode; return box.innerText; });
      chk(tag + "a group or one person still hears 'They heard the worst and stayed.'", /They heard the worst and stayed/.test(v));
    }
    chk(tag + "no page errors", errs.length === 0, errs.join(" | "));
    if (name === "phone" && (door === "course" || door === "public-alone")) {
      await p.evaluate(() => window.ewShow(7, true)); await p.waitForTimeout(200);
      await p.click("#ew_smallstep"); await p.keyboard.type("one chapter of John before my phone, every morning this month", { delay: 2 }); await p.waitForTimeout(400);
      const el = await p.$("#ew_smallstep"); const box = await el.evaluateHandle(e => e.closest(".ew-line")); await box.asElement().screenshot({ path: "/tmp/ewr/v631-" + door + "-smallstep.png" });
      await p.evaluate(() => window.ewShow(0, true)); await p.waitForTimeout(200);
      const el0 = await p.$("#ew_iam"); const box0 = await el0.evaluateHandle(e => e.closest(".ew-line")); await box0.asElement().screenshot({ path: "/tmp/ewr/v631-" + door + "-iam.png" });
    }
    await ctx.close();
  }
  await b.close();
  console.log(res.join("\n")); console.log("\n" + pass + " of " + total + " passed");
})();
