// AP-REVIEW checks for Ending Well v6.4: what he types never runs under the microphone or Talk, at any width, on either door.
// Real keystrokes into every box on every part, the microphone and its word measured against the box and the text inside it.
const { chromium } = require("playwright"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8");
let pass = 0, total = 0; const res = [];
const chk = (n, c, d) => { total++; if (c) pass++; res.push((c ? "ok   " : "FAIL ") + n + (d ? " — " + d : "")); };
const CASES = [["course", "ending-well-v6.4.html", ""], ["public-group", "ending-well-v6.4-public.html", "?with=group"], ["public-one", "ending-well-v6.4-public.html", "?with=one"], ["public-alone", "ending-well-v6.4-public.html", "?with=alone"]];
const WIDTHS = [["phone390", 390, 800, true], ["phone430", 430, 900, true], ["tab700", 700, 900, true], ["tab820", 820, 1000, true], ["desk1024", 1024, 800, false], ["desk1440", 1440, 900, false]];
const LONG = "I told myself I had it handled, that nobody needed to know, that I could carry it alone and keep everything looking fine on the outside while I fell apart where no one could see, and I believed it for years.";
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_BIN || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome" });
  for (const [door, file, q] of CASES) for (const [name, w, h, touch] of WIDTHS.filter(x => door === "course" || door === "public-group" || /phone390|tab820|desk1440/.test(x[0]))) {
    const tag = door + "/" + name + ": ";
    const html = fs.readFileSync(__dirname + "/" + file, "utf8");
    const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: touch, isMobile: touch && w < 600, deviceScaleFactor: 1 }); const p = await ctx.newPage();
    const errs = []; p.on("pageerror", e => errs.push(e.message));
    await p.route("**/*", r => { const u = r.request().url();
      if (/story\.js/.test(u)) return r.fulfill({ contentType: "application/javascript", body: story, headers: { "access-control-allow-origin": "*" } });
      if (/ancientpathcoaching\.com\/ending-well/.test(u)) return r.fulfill({ contentType: "text/html; charset=utf-8", body: "<!doctype html><html><head><meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'></head><body style='background:#fff'>" + html + "</body></html>" });
      if (/api|assessment|submission|user_stats/.test(u)) return r.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, me: { first_name: "Test", last_name: "Learner" } }) });
      return r.fulfill({ status: 204, body: "" }); });
    await p.goto("https://www.ancientpathcoaching.com/ending-well" + q); await p.waitForTimeout(1500);
    const measure = () => p.evaluate(() => [...document.querySelectorAll(".ew-part.is-active textarea.ew-rest")].map(t => {
      const l = t.closest(".ew-line"), mic = l.querySelector(".aps-mic"), wd = l.querySelector(".aps-mic-word"), s = l.querySelector(".ew-stem");
      const R = e => { if (!e) return null; const x = e.getBoundingClientRect(); return { l: x.left, r: x.right, t: x.top, b: x.bottom }; };
      const lr = l.getBoundingClientRect(), tr = t.getBoundingClientRect();
      return { id: t.id, t: R(t), mic: R(mic), wd: wd && getComputedStyle(wd).display !== "none" ? R(wd) : null, s: R(s), stack: l.classList.contains("ew-stack"), line: { l: lr.left, r: lr.right }, wide: tr.width, scrollW: t.scrollWidth, clientW: t.clientWidth, sh: t.scrollHeight, ch: t.clientHeight };
    }));
    const verdict = (rows, label) => { const bad = []; rows.forEach(x => {
      if (x.mic) { if (x.mic.l < x.t.r - 1) bad.push(x.id + ": the microphone sits in the writing"); if (x.mic.r > x.line.r + 1) bad.push(x.id + ": the microphone leaves the box"); }
      if (x.wd) { if (x.wd.l < x.t.r - 1) bad.push(x.id + ": Talk sits in the writing"); if (x.wd.r > x.line.r + 1) bad.push(x.id + ": Talk leaves the box"); }
      if (x.sh > x.ch + 1) bad.push(x.id + ": the box is shorter than his words (" + x.sh + " in " + x.ch + ")");
      if (x.scrollW > x.clientW + 1) bad.push(x.id + ": his words run past the box sideways");
    }); return bad; };
    // empty boxes, every part
    let boxes = 0, mics = 0; const bad0 = [];
    for (let i = 0; i < 8; i++) { await p.evaluate(i => window.ewShow(i, true), i); await p.waitForTimeout(140); const r = await measure(); r.forEach(x => { boxes++; if (x.mic) mics++; }); bad0.push(...verdict(r)); }
    chk(tag + "empty boxes: no microphone or Talk in the writing, " + boxes + " boxes, " + mics + " with a microphone", bad0.length === 0 && mics > 0, bad0.slice(0, 3).join("; "));
    // long words typed with real keystrokes into every box on every part
    const bad1 = []; let typed = 0;
    for (let i = 0; i < 8; i++) {
      await p.evaluate(i => window.ewShow(i, true), i); await p.waitForTimeout(140);
      const ids = await p.evaluate(() => [...document.querySelectorAll(".ew-part.is-active textarea.ew-rest")].map(t => t.id));
      for (let k = 0; k < ids.length; k++) { const id = ids[k]; if (k === 0) { await p.click("#" + id); await p.keyboard.type(LONG.slice(0, 120), { delay: 0 }); } else { await p.evaluate(([id, v]) => { const t = document.getElementById(id); t.focus(); t.value = v; t.dispatchEvent(new Event("input", { bubbles: true })); }, [id, LONG]); } typed++; }
      await p.waitForTimeout(450);
      bad1.push(...verdict(await measure()));
    }
    chk(tag + "long words typed in all " + typed + " boxes wrap inside the box, beside the microphone and never under it", bad1.length === 0, bad1.slice(0, 3).join("; "));
    // the box grows as he types, one line at a time, and keeps the microphone at its corner
    await p.evaluate(() => { window.ewShow(1, true); });
    await p.waitForTimeout(200);
    const grow = await p.evaluate(async () => { const t = document.querySelector(".ew-part.is-active textarea.ew-rest"); t.value = ""; t.dispatchEvent(new Event("input", { bubbles: true })); await new Promise(r => setTimeout(r, 120)); const h0 = t.clientHeight; t.value = "word ".repeat(60); t.dispatchEvent(new Event("input", { bubbles: true })); await new Promise(r => setTimeout(r, 300)); const l = t.closest(".ew-line"), m = l.querySelector(".aps-mic").getBoundingClientRect(), lr = l.getBoundingClientRect(); return { h0, h1: t.clientHeight, micInside: m.bottom <= lr.bottom + 1 && m.top >= lr.top - 1 }; });
    chk(tag + "the box grows with his words and the microphone stays inside it", grow.h1 > grow.h0 && grow.micInside, JSON.stringify(grow));
    chk(tag + "no script errors", errs.length === 0, errs.join("; ").slice(0, 120));
    await ctx.close();
  }
  await b.close();
  console.log(res.join("\n")); console.log("\n" + pass + " of " + total + " pass");
  process.exit(pass === total ? 0 : 1);
})();
