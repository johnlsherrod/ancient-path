// road.js v39.2: Hear it on Read, the two asks, the mark, and the nine must-survive checks.
// Spec: CONTRACT-v39.2.md in this folder. Run: node test-road-v39.2.js
const { JSDOM } = require("jsdom"); const fs = require("fs"); const crypto = require("crypto");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), road = fs.readFileSync(__dirname + "/road.js", "utf8");
let fails = 0, total = 0;
const t = (n, c) => { total++; console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const PRIVACY = "Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.";
const PRIVACY_FIRST = "Nothing you write here reaches us unless you choose to save it with us.";

/* Run one check that may throw (a selector that does not exist yet): a throw is a FAIL, never a crash. */
async function T(name, fn) { let ok = false; try { ok = !!(await fn()); } catch (e) { ok = false; } t(name, ok); }

/* ---- the page ----
   SITE mode: AP_ROAD set, his own empty walk, stage "me". The writer lives here.
   SAMPLE mode: the finished man "Daniel R.". road.js returns at once when AP_ROAD is unset (its line 4), so the only way
   to reach the sample is the page's own stage switch: a click on a [data-stage="finished"] control inside #ap-road
   (road.js handles it in its document click listener). toSample() makes that click. */
function boot(o) {
  o = o || {};
  const dom = new JSDOM('<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div id="ap-road"><div id="ap-road-app"></div></div></body></html>', { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/the-road-i-walked" });
  const w = dom.window;
  if (o.signedIn !== false) w.getUserToken = () => "tok";
  Object.defineProperty(w, "innerWidth", { value: 1200, configurable: true });
  w.matchMedia = (q) => ({ matches: false });
  const spoken = [], state = { cancelled: 0, posts: 0 };
  if (o.speech !== false) {
    w.SpeechSynthesisUtterance = function (text) { this.text = text; };
    w.speechSynthesis = { speak(u) { spoken.push(u); }, cancel() { state.cancelled++; }, getVoices() { return []; } };
  }
  let latest = null;
  w.fetch = (path, init) => {
    if (/assessment\/state/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: latest }) });
    const body = init && init.body ? JSON.parse(init.body) : {};
    if (body.answers) { state.posts++; latest = { status: "submitted", answers: body.answers, submittedTimestamp: 1 }; }
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted", id: "s1" } }) });
  };
  w.scrollTo = () => {}; w.HTMLElement.prototype.scrollIntoView = function () {};
  w.claude = { use: () => Promise.resolve(null) };   /* the Story assistant's canRead() is true, so its four buttons render */
  w.eval(story);
  w.AP_ROAD = { lw: { unit: "u1", blocks: { walk: ["a", "b", "c"], whole: "w", meta: "m" } }, reader: false, plate: false, worksheet: false };
  w.module = {}; w.eval(road);
  return { w, d: w.document, spoken, state };
}
async function toSample(d) {
  const b = d.createElement("button"); b.setAttribute("data-stage", "finished"); b.hidden = true;
  d.getElementById("ap-road").appendChild(b); b.click(); await sleep(80); b.remove();
}
const app = d => d.querySelector("#ap-road-app");
const click = async (d, sel, ms) => { const el = d.querySelector(sel); if (!el) throw new Error("no " + sel); el.click(); await sleep(ms || 80); return el; };
const type = (w, el, v) => { el.value = v; el.dispatchEvent(new w.Event("input", { bubbles: true })); };
const txt = el => (el ? el.textContent.trim() : "");

/* ---- must-survive 8: the row on every screen ---- */
function rowProblems(d, w) {
  const rows = Array.from(app(d).querySelectorAll(".aps-row")), bad = [];
  if (!rows.length) bad.push("no .aps-row on the screen");
  rows.forEach((r, i) => {
    const tag = "row " + (i + 1) + ": ";
    if (r.getAttribute("data-aps-row") !== "1") bad.push(tag + "data-aps-row is not 1");
    if (r.querySelectorAll(".aps-next").length !== 1) bad.push(tag + "not exactly one .aps-next (" + r.querySelectorAll(".aps-next").length + ")");
    if (r.querySelectorAll(".aps-back").length > 1) bad.push(tag + "more than one .aps-back");
    if (r.querySelector(".btn.main")) bad.push(tag + "a .btn.main inside the row");
    let c; try { c = w.APStory.row.check(r); } catch (e) { c = ["check threw: " + e.message]; }
    if (!Array.isArray(c) || c.length) bad.push(tag + "APStory.row.check: " + JSON.stringify(c));
  });
  return bad;
}
function rowCheck(d, w, screen) {
  const bad = rowProblems(d, w);
  if (bad.length) console.log("       (" + bad.join("; ") + ")");
  t("MUST · APStory.row on every row — " + screen, bad.length === 0);
}

/* ---- the voice: read the page through, one unit at a time ---- */
/* the words a unit reads: a box's value, or its text without the label over a line (.lead) and without any button inside it; spaces collapsed */
const unitText = el => { if (el.tagName === "TEXTAREA" || el.tagName === "INPUT") return el.value.replace(/\s+/g, " ").trim(); const c = el.cloneNode(true); c.querySelectorAll(".lead, button.link").forEach(n => n.remove()); return c.textContent.replace(/\s+/g, " ").trim(); };
const units = (d, root) => Array.from(d.querySelectorAll(root + " [data-hear]"));
const lit = (d, root) => Array.from(d.querySelectorAll(root + " [data-hear].lit"));
/* press Hear it, then let each unit end in turn; return what the voice said and what was lit as it said it */
async function readThrough(ctx, root) {
  const { d, spoken } = ctx, log = { said: [], lit: [], ok: true };
  const start = spoken.length;
  await click(d, "#hearbtn");
  if (spoken.length === start) { log.ok = false; return log; }   /* the voice never started */
  for (let guard = 0; guard < 400 && spoken.length > start + log.said.length; guard++) {
    const u = spoken[start + log.said.length];
    log.said.push(u.text);
    const l = lit(d, root); log.lit.push(l.length === 1 ? units(d, root).indexOf(l[0]) : -1);
    if (typeof u.onend !== "function") { log.ok = false; break; }
    await sleep(130); u.onend(); await sleep(20);   /* the unit ended after a real-length pause: a voice that ends three units at once is read as a failed device (v39.2 guard) */
  }
  await sleep(60);
  return log;
}

(async () => {
  /* ---- header and engine ---- */
  t("road.js says v39.2", /AP-ROAD-v1 \(v39\.2:/.test(road));
  t("story.js is byte-identical to the repo's 19.2", "sha384-" + crypto.createHash("sha384").update(fs.readFileSync(__dirname + "/story.js")).digest("base64") === "sha384-QEvus4BjWm7yg8cm3JZVqwOgZCooLWZXyZfxj+Efb1dsPmkNaoHp1HaPVpj1DlmG");

  /* ============ SITE mode: the door and the writer ============ */
  const voiceByStep = [];
  {
    const ctx = boot(); const { w, d } = ctx; await sleep(100);
    t("the door shows Begin as the one next step", !!d.querySelector('#ap-road-app .sheet [data-do="pickup"].aps-next'));
    rowCheck(d, w, "the door (his own walk)");
    await click(d, '[data-do="pickup"]');
    t("Begin opens the chapter writer", !!d.querySelector("#writer"));
    await click(d, '[data-n="0-4"]');
    t("picking a dot opens the line box #t-0", !!d.querySelector("#t-0"));
    type(w, d.querySelector("#t-0"), "I hide in my work, because nobody there asks how I am.");
    await sleep(80);
    t("the words typed in #t-0 stay in the box", /nobody there asks/.test(d.querySelector("#t-0").value));
    let steps = 0, reachedFinish = false;
    for (let i = 0; i < 14; i++) {
      steps++;
      const boxes = Array.from(app(d).querySelectorAll("textarea, input[type=text]"));
      const foot = Array.from(app(d).querySelectorAll("p.fixed.foot"));
      const row = app(d).querySelector(".aps-row");
      voiceByStep.push({ step: steps, boxes: boxes.length, allVoiced: boxes.every(b => b.getAttribute("data-aps-voice") === "1") });
      /* must-survive 7: the privacy line at the foot */
      const f = foot[0], b = f && f.querySelector("b");
      t("MUST · the privacy line at the foot — step " + steps + ": one line, the exact words, first sentence bold, right before the row",
        foot.length === 1 && txt(f) === PRIVACY && !!b && txt(b) === PRIVACY_FIRST && !!row && f.nextElementSibling === row);
      rowCheck(d, w, "writer step " + steps);
      if (d.querySelector('[data-wgo="story"]')) { reachedFinish = true; break; }
      const next = d.querySelector(".aps-next[data-wstep]");
      if (!next) break;
      next.click(); await sleep(80);
    }
    t("Next steps through the writer until Finish appears", reachedFinish);
    t("MUST · the voice attached on every box — step 1 (the line box)", voiceByStep.length > 0 && voiceByStep[0].boxes > 0 && voiceByStep[0].allVoiced);
    t("MUST · the voice attached on every box — every writer step that has a box", voiceByStep.length > 0 && voiceByStep.every(s => s.allVoiced));
    const fin = d.querySelector('[data-wgo="story"]');
    t("Finish is the one next step of the last writer step", !!fin && fin.classList.contains("aps-next"));
    if (fin) { fin.click(); await sleep(300); }
    t("Finish lands on Your words (#story-read)", !!d.querySelector("#story-read"));
    const saved = d.querySelector(".aps-saved");
    t("MUST · Keep and sign-in (signed in) — after Finish the saved words show, starting Saved", ctx.state.posts > 0 && !!saved && !saved.hidden && /^Saved/.test(txt(saved)));
    rowCheck(d, w, "Your words after his own Finish");
    /* v39.2 · Hear it changes nothing he wrote: pressing it leaves "Saved" standing and does not bring Save back */
    if (d.querySelector("#story-read #hearbtn")) {
      await click(d, "#story-read #hearbtn"); await sleep(80);
      const sv2 = d.querySelector("#ap-road .aps-saved"), sb2 = d.querySelector('#ap-road [data-site="save"]');
      t("Hear it on his own Your words does not mark the walk unsaved (Saved stays, Save stays hidden)", !!sv2 && !sv2.hidden && /^Saved/.test(txt(sv2)) && (!sb2 || sb2.hidden));
      /* a stale onend after Stop must not start the next unit */
      const u = ctx.spoken[ctx.spoken.length - 1], before = ctx.spoken.length;
      await click(d, "#story-read #hearbtn"); if (u && u.onend) u.onend(); await sleep(60);
      t("after Stop, the utterance that was cut off ending late does not read on", ctx.spoken.length === before && !d.querySelector("#story-read [data-hear].lit") && txt(d.querySelector("#hearbtn")) === "Hear it");
    } else { t("Hear it is on his own Your words after Finish", false); }
  }
  {
    const ctx = boot({ signedIn: false }); const { w, d, state } = ctx; await sleep(100);
    await click(d, '[data-do="pickup"]');
    await click(d, '[data-n="0-4"]');
    type(w, d.querySelector("#t-0"), "I hide in my work.");
    for (let i = 0; i < 14 && !d.querySelector('[data-wgo="story"]'); i++) { const n = d.querySelector(".aps-next[data-wstep]"); if (!n) break; n.click(); await sleep(80); }
    const fin = d.querySelector('[data-wgo="story"]'); if (fin) { fin.click(); await sleep(300); }
    const notes = Array.from(d.querySelectorAll(".savenote")).filter(n => !n.hidden);
    t("MUST · Keep and sign-in (signed out) — Finish does not save and the note says to sign in", !!fin && state.posts === 0 && notes.some(n => /Sign in/.test(n.textContent)));
  }

  /* ============ SAMPLE: the finished man ============ */
  {
    const ctx = boot(); const { w, d, spoken, state } = ctx; await sleep(100);
    await toSample(d);
    t("the sample man's door has Your words as the one next step", !!d.querySelector('.aps-next[data-do="readstory"]') && /Daniel/.test(txt(app(d))));
    rowCheck(d, w, "the sample door");
    await click(d, '[data-do="readstory"]');
    const sr = () => d.querySelector("#story-read");
    t("Your words opens (#story-read)", !!sr());

    /* must-survive 2: bridgeFor */
    t("MUST · bridgeFor — Your words has span.bridge elements", d.querySelectorAll("#story-read span.bridge").length > 0);
    t("MUST · bridgeFor — the chapter prose carries bridges between his lines", Array.from(d.querySelectorAll("#story-read .prose-p")).some(p => p.querySelector("span.bridge") && p.querySelector("button.hisline")));
    t("Your words keeps his lines as buttons (button.hisline[data-tell=ledit][data-id]) and the labels and epigraphs", d.querySelectorAll('#story-read button.hisline[data-tell="ledit"][data-id]').length > 0 && d.querySelectorAll("#story-read .part").length === 10 && d.querySelectorAll("#story-read p.ours").length > 0);
    rowCheck(d, w, "Your words");
    {
      const row = d.querySelector("#story-read .aps-row"), q = Array.from(row.querySelectorAll(".aps-mid .aps-quiet")).map(txt);
      t("Your words row: ← The Road I Walked on the left, quiet Download · Copy, Make it one story on the right", txt(row.querySelector(".aps-back")) === "← The Road I Walked" && q.includes("Download") && q.includes("Copy") && txt(row.querySelector(".aps-next")) === "Make it one story");
    }

    /* the tapline */
    await T("the tapline under his words reads: Tap any line to change it. Tap one line to mark it as the one you will read aloud at group.", () => txt(d.querySelector("#story-read p.tapline")) === "Tap any line to change it. Tap one line to mark it as the one you will read aloud at group.");

    /* ---- Hear it on Your words ---- */
    await T("Hear it block: #hearbox with the Hear it button and the quiet note", () => {
      const hb = d.querySelector("#story-read div.hear#hearbox"), btn = hb.querySelector('button.btn.main#hearbtn[data-tell="hear"]');
      return txt(btn) === "Hear it" && txt(hb.querySelector("p.quiet.hearnote")) === "Reads your words back to you in the voice this device has. Nothing is sent.";
    });
    await T("Hear it block sits under his words and above the row", () => {
      const hb = d.querySelector("#hearbox"), row = d.querySelector("#story-read .aps-row"), pp = Array.from(d.querySelectorAll("#story-read .prose-p")).pop();
      const F = w.Node.DOCUMENT_POSITION_FOLLOWING;
      return !!(pp.compareDocumentPosition(hb) & F) && !!(hb.compareDocumentPosition(row) & F);
    });
    t("MUST · Hear it on both story screens — #hearbtn on Your words", !!d.querySelector("#story-read #hearbtn"));
    await T("every unit the voice reads carries data-hear, counting up from 0 with no gaps, in reading order", () => {
      const us = units(d, "#story-read"); return us.length > 0 && us.every((u, i) => u.getAttribute("data-hear") === String(i));
    });
    await T("every one of his lines and every bridge is inside a unit", () => {
      const all = Array.from(d.querySelectorAll("#story-read button.hisline, #story-read span.bridge")); return all.length > 0 && all.every(e => !!e.closest("[data-hear]"));
    });
    const UW = await (async () => { try { return units(d, "#story-read").map(unitText); } catch (e) { return []; } })();
    let log = { said: [], lit: [], ok: false };
    try { log = await readThrough(ctx, "#story-read"); } catch (e) {}
    t("Hear it: speak is called once per unit, and each spoken text is that unit's text, in order", UW.length > 0 && log.ok && log.said.length === UW.length && log.said.every((s, i) => s === UW[i]));
    t("Hear it: exactly one unit carries .lit at a time, and it is the one being spoken", log.said.length > 0 && log.lit.every((n, i) => n === i));
    await T("when the last unit ends the button reads Hear it again, nothing is lit, and What did you hear? follows the Hear block", () => {
      const hb = d.querySelector("#hearbox"), hd = d.querySelector("section.heard#heardbox");
      return txt(d.querySelector("#hearbtn")) === "Hear it" && !d.querySelector("#hearbtn").classList.contains("on") && lit(d, "#story-read").length === 0 && !!hd && hb.nextElementSibling === hd;
    });
    await T("What did you hear? has its heading, two asks and the quiet close", () => {
      const hd = d.querySelector("#heardbox"), a = hd.querySelectorAll('button.pickline.ask[data-tell="hask"]'), c = hd.querySelector('button.link[data-tell="hclose"]');
      return txt(hd.querySelector("h2")) === "What did you hear?" && a.length === 2 &&
        txt(hd.querySelector('[data-x="more"]')) === "A line said more than I meant." && txt(hd.querySelector('[data-x="less"]')) === "A line said less than I meant." && txt(c) === "It said what I meant.";
    });
    await T("tapping an ask: it is marked on, Tap that line. appears, and Your words is picking", async () => {
      await click(d, '#heardbox [data-x="more"]');
      const hd = d.querySelector("#heardbox");
      return hd.querySelector('[data-x="more"]').classList.contains("on") && txt(hd.querySelector("p.quiet.tapthat")) === "Tap that line." && sr().classList.contains("picking");
    });
    await T("the other ask works the same way (A line said less than I meant.)", async () => {
      await click(d, '#heardbox [data-x="less"]');
      const hd = d.querySelector("#heardbox");
      return hd.querySelector('[data-x="less"]').classList.contains("on") && txt(hd.querySelector("p.quiet.tapthat")) === "Tap that line." && sr().classList.contains("picking");
    });
    await T("tapping a line after an ask opens Edit beside it and the heard box is gone", async () => {
      if (!sr().classList.contains("picking")) return false;
      await click(d, "#story-read button.hisline");
      const le = d.querySelector("#story-read .ledit.onwords");
      return !!le && !!le.querySelector("textarea[data-led]") && !!le.querySelector('[data-tell="ldone"]') && !!le.querySelector('[data-tell="lcancel"]') && !d.querySelector("#heardbox");
    });
    await T("a heard box closes with It said what I meant.", async () => {
      await click(d, '#story-read [data-tell="lcancel"]');
      await readThrough(ctx, "#story-read");
      if (!d.querySelector("#heardbox")) return false;
      await click(d, '#heardbox [data-tell="hclose"]');
      return !d.querySelector("#heardbox") && !sr().classList.contains("picking");
    });

    /* stopping */
    const before = state.cancelled;
    await T("Stop mid-read: the voice is cancelled, nothing is lit, no heard box, the button reads Hear it", async () => {
      await click(d, "#hearbtn");
      const u = spoken[spoken.length - 1]; if (u && u.onend) { await sleep(130); u.onend(); await sleep(20); }
      const midway = txt(d.querySelector("#hearbtn")) === "Stop" && d.querySelector("#hearbtn").classList.contains("on") && lit(d, "#story-read").length === 1;
      await click(d, "#hearbtn");
      return midway && state.cancelled > before && lit(d, "#story-read").length === 0 && !d.querySelector("#heardbox") && txt(d.querySelector("#hearbtn")) === "Hear it";
    });
    const before2 = state.cancelled;
    await T("pressing any other button mid-read also stops the voice", async () => {
      await click(d, "#hearbtn");
      await click(d, "#story-read button.hisline");
      return state.cancelled > before2 && lit(d, "#story-read").length === 0 && txt(d.querySelector("#hearbtn")) === "Hear it";
    });
    { const c = d.querySelector('#story-read [data-tell="lcancel"]'); if (c) { c.click(); await sleep(80); } }   /* set any open Edit box aside before the next checks */

    /* must-survive 5: Edit beside the line */
    {
      const line = () => d.querySelector('#story-read button.hisline[data-id="0-1"]');
      const orig = txt(line());
      await click(d, '#story-read button.hisline[data-id="0-1"]');
      const le = d.querySelector("#story-read .ledit.onwords"), ta = le && le.querySelector("textarea[data-led]");
      t("MUST · Edit beside the line — clicking a line opens .ledit.onwords with a box, Done and Cancel", !!le && !!ta && !!le.querySelector('[data-tell="ldone"]') && !!le.querySelector('[data-tell="lcancel"]'));
      if (ta) type(w, ta, "I set out from telling myself I am fine. I camped at a truer word.");
      await sleep(60);
      if (le && le.querySelector('[data-tell="ldone"]')) { le.querySelector('[data-tell="ldone"]').click(); await sleep(80); }
      t("MUST · Edit beside the line — Done changes the line and shows Changed from your chapter. with Undo",
        !!line() && txt(line()) === "I set out from telling myself I am fine. I camped at a truer word." &&
        Array.from(d.querySelectorAll("#story-read p.quiet.lchg")).some(p => /Changed from your chapter\./.test(p.textContent) && /Undo/.test(p.textContent)));
      const undo = d.querySelector('#story-read [data-tell="lundo"]'); if (undo) { undo.click(); await sleep(80); }
      t("MUST · Edit beside the line — Undo restores the line", !!undo && !!line() && txt(line()) === orig && !d.querySelector("#story-read p.quiet.lchg"));
    }

    /* ---- the mark ---- */
    {
      const line = id => d.querySelector('#story-read button.hisline[data-id="' + id + '"]');
      const openEdit = async id => { const c = d.querySelector('#story-read [data-tell="lcancel"]'); if (c) { c.click(); await sleep(80); } await click(d, '#story-read button.hisline[data-id="' + id + '"]'); };
      await T("an open Edit offers Read this one at group (quiet link with the line's id)", async () => {
        await openEdit("0-1");
        const m = d.querySelector('#story-read .ledit.onwords button.link[data-tell="lmark"][data-id]');
        return txt(m) === "Read this one at group";
      });
      await T("marking a line: its button is aloud and the note The line you will read aloud at group. sits under it with Unmark", async () => {
        await click(d, '#story-read .ledit.onwords [data-tell="lmark"]');
        const note = d.querySelector("#story-read p.quiet.lmark"), un = note && note.querySelector('button.link[data-tell="lunmark"]');
        return line("0-1").classList.contains("aloud") && txt(note).startsWith("The line you will read aloud at group.") && txt(un) === "Unmark" &&
          !!(line("0-1").compareDocumentPosition(note) & w.Node.DOCUMENT_POSITION_FOLLOWING);
      });
      await T("the marked line's Edit no longer offers Read this one at group", async () => {
        await openEdit("0-1");
        const absent = line("0-1").classList.contains("aloud") && !!d.querySelector("#story-read .ledit.onwords") && !d.querySelector('#story-read .ledit.onwords [data-tell="lmark"]');
        const c = d.querySelector('#story-read [data-tell="lcancel"]'); if (c) { c.click(); await sleep(80); }
        return absent;
      });
      await T("marking another line moves the mark: only one line is ever marked", async () => {
        await openEdit("0-3");
        await click(d, '#story-read .ledit.onwords [data-tell="lmark"]');
        return d.querySelectorAll("#story-read button.hisline.aloud").length === 1 && line("0-3").classList.contains("aloud") && !line("0-1").classList.contains("aloud") && d.querySelectorAll("#story-read p.quiet.lmark").length === 1;
      });
      await T("the mark survives leaving and coming back (the walk is saved with it)", async () => {
        const c = d.querySelector('#story-read [data-tell="lcancel"]'); if (c) { c.click(); await sleep(80); }
        await click(d, '#story-read [data-go="page"]');
        await click(d, '[data-do="readstory"]');
        return d.querySelectorAll("#story-read button.hisline.aloud").length === 1 && line("0-3").classList.contains("aloud");
      });
      await T("Unmark takes the mark away", async () => {
        await click(d, '#story-read [data-tell="lunmark"]');
        return d.querySelectorAll("#story-read button.hisline.aloud").length === 0 && !d.querySelector("#story-read p.quiet.lmark");
      });
    }
  }

  /* ============ SAMPLE: One story (its own fresh page, so nothing above can leave it half-way) ============ */
  async function freshTell() {
    const ctx = boot(); await sleep(100); await toSample(ctx.d); await click(ctx.d, '[data-do="readstory"]'); await click(ctx.d, '#story-read .aps-next[data-tell="work"]');
    return ctx;
  }
  {
    const ctx = await freshTell(); const { w, d, spoken } = ctx;
    const tell = () => d.querySelector("#tell");
    t("MUST · Make it one story — the row's next step reads Make it one story and pressing it shows One story", !!tell() && txt(tell().querySelector("h1")) === "One story");
    rowCheck(d, w, "One story");
    {
      const row = d.querySelector("#tell .aps-row"), q = Array.from(row.querySelectorAll(".aps-mid .aps-quiet")).map(txt);
      t("One story row: ← Your words on the left (data-tell=read), quiet Download · Copy, one next step Finish", txt(row.querySelector(".aps-back")) === "← Your words" && row.querySelector(".aps-back").getAttribute("data-tell") === "read" && q.includes("Download") && q.includes("Copy") && txt(row.querySelector(".aps-next")) === "Finish");
    }
    t("MUST · Hear it on both story screens — #hearbtn on One story", !!d.querySelector("#tell #hearbtn"));
    t("his lines in a part not yet put together are plain paragraphs (p.his.mine), not buttons", d.querySelectorAll("#tell p.his.mine").length > 0 && !d.querySelector("#tell button.hisline"));
    await T("Hear it block is at the top of Before you offer it: right after its heading and its line, before Read it back", () => {
      const h2 = Array.from(d.querySelectorAll("#tell h2")).find(h => txt(h) === "Before you offer it"), hb = d.querySelector("#tell #hearbox");
      return !!h2 && !!hb && hb.previousElementSibling.matches("p.fixed") && hb.previousElementSibling.previousElementSibling === h2 &&
        !!(hb.compareDocumentPosition(d.querySelector('#tell [data-tell="heard"]')) & w.Node.DOCUMENT_POSITION_FOLLOWING);
    });
    await T("the units on One story are, in order, the start (when it has words), each part's bridges and lines (or its put-together prose), then the God box (when it has words)", () => {
      const us = units(d, "#tell"), want = Array.from(d.querySelectorAll("#tell .tellpart p.his.bridge, #tell .tellpart p.his.mine, #tell textarea.prose[data-tp]"));
      return us.length > 0 && us.length === want.length && us.every((u, i) => u === want[i] && u.getAttribute("data-hear") === String(i));
    });
    const UW2 = await (async () => { try { return units(d, "#tell").map(unitText); } catch (e) { return []; } })();
    let log2 = { said: [], lit: [], ok: false };
    try { log2 = await readThrough(ctx, "#tell"); } catch (e) {}
    t("Hear it on One story: one utterance per unit, each the unit's text, in order", UW2.length > 0 && log2.ok && log2.said.length === UW2.length && log2.said.every((s, i) => s === UW2[i]));
    t("Hear it on One story: exactly one unit lit at a time, the one being spoken", log2.said.length > 0 && log2.lit.every((n, i) => n === i));
    await T("on One story the heard box follows the Hear block after a read", () => { const hb = d.querySelector("#tell #hearbox"); return !!hb && hb.nextElementSibling === d.querySelector("#tell section.heard#heardbox") && txt(d.querySelector("#hearbtn")) === "Hear it"; });
    await T("tapping an ask on One story puts his lines in buttons (picking)", async () => {
      const n = d.querySelectorAll("#tell p.his.mine").length;
      await click(d, '#tell #heardbox [data-x="more"]');
      return tell().classList.contains("picking") && d.querySelectorAll('#tell button.hisline.pick[data-tell="hpick"][data-id]').length === n;   /* the line keeps its label over it; the words become the button */
    });
    await T("tapping a line while picking returns to Your words with that line's Edit open and no heard box", async () => {
      /* the sample man's first line carries a label no part knows, so Your words never draws it (sample data, not the build): pick a line both screens show */
      const b = d.querySelector('#tell button.hisline.pick[data-tell="hpick"][data-id="0-1"]') || d.querySelector('#tell button.hisline.pick[data-tell="hpick"]'), id = b.getAttribute("data-id");
      b.click(); await sleep(80);
      return !!d.querySelector("#story-read") && !!d.querySelector("#story-read .ledit.onwords") && !!d.querySelector('#story-read textarea[data-led="' + id + '"]') && !d.querySelector("#heardbox");
    });
  }

  /* must-survive 6: the four assistant buttons (a fresh One story) */
  {
    const ctx = await freshTell(); const { w, d, spoken } = ctx;
    const rowOf = sel => { const b = d.querySelector(sel); return b && b.closest(".row"); };
    const headOf = sel => { const r = rowOf(sel); return r && r.previousElementSibling; };
    const isHead = el => !!el && el.matches("details.assist.rowhead") && /Story assistant/.test(txt(el.querySelector("summary")));
    t("MUST · the four assistant buttons — on a part in lines: Better questions, under a Story assistant heading", txt(d.querySelector('#tell [data-tell="gaps"]')) === "Better questions" && isHead(headOf('#tell [data-tell="gaps"]')));
    t("MUST · the four assistant buttons — Read it back sits under Before you offer it, under a Story assistant heading", txt(d.querySelector('#tell [data-tell="heard"]')) === "Read it back" && isHead(headOf('#tell [data-tell="heard"]')));
    const tg = d.querySelector('#tell [data-tell="together"]'), part0 = tg && tg.closest(".tellpart");
    if (tg) { tg.click(); await sleep(100); }
    const ask = d.querySelector('#tell .tellpart [data-tell="ask"]'), sm = d.querySelector('#tell .tellpart [data-tell="smooth"]');
    t("MUST · the four assistant buttons — Put it together shows Check it and Smooth it on that part", !!tg && txt(tg) === "Put it together" && txt(ask) === "Check it" && txt(sm) === "Smooth it");
    t("the Check it and Smooth it buttons sit under a Story assistant heading too", !!ask && isHead(ask.closest(".row") && ask.closest(".row").previousElementSibling));
    t("a put-together part shows its prose box (textarea.prose[data-tp]) in place of its lines", !!d.querySelector("#tell textarea.prose[data-tp]"));
    rowCheck(d, w, "One story (a part put together)");
    await T("a put-together part is read from its prose box (data-hear on the textarea, its value spoken)", async () => {
      const ta = d.querySelector("#tell textarea.prose[data-tp]"); if (!ta || !ta.hasAttribute("data-hear")) return false;
      const sp = spoken.length; await click(d, "#hearbtn");
      const ta2 = d.querySelector("#tell textarea.prose[data-tp]");   /* the press redraws the screen: the box is a new node */
      const ok = spoken.length === sp + 1 && spoken[sp].text === unitText(units(d, "#tell")[0]) && !!ta2 && ta2.classList.contains("lit");
      await click(d, "#hearbtn"); return ok;
    });
  }

  /* ============ SAMPLE: Evidence ============ */
  {
    const { w, d } = boot(); await sleep(100); await toSample(d);
    await click(d, '[data-go="evidence"]');
    t("Evidence opens", /Your evidence/.test(txt(app(d).querySelector("h1"))));
    rowCheck(d, w, "Evidence");
  }

  /* ---- a device whose voice fails: three units ending at once stop the reading with one calm line ---- */
  {
    const { w, d, spoken } = boot(); await sleep(100); await toSample(d); await click(d, '[data-do="readstory"]');
    const start = spoken.length; await click(d, "#hearbtn");
    for (let i = 0; i < 3; i++) { const u = spoken[spoken.length - 1]; if (u && u.onend) u.onend(); }
    await sleep(60);
    t("a voice that ends three units at once stops: no lit line, Hear it again, no heard box, one calm line in #say", spoken.length - start === 3 && !d.querySelector("#story-read [data-hear].lit") && txt(d.querySelector("#hearbtn")) === "Hear it" && !d.querySelector("#heardbox") && /could not read it aloud/.test(txt(d.querySelector("#story-read #say"))));
  }

  /* ---- no speech on this device: no Hear block ---- */
  {
    const { d } = boot({ speech: false }); await sleep(100); await toSample(d); await click(d, '[data-do="readstory"]');
    t("with no speechSynthesis on the device there is no Hear it block", !!d.querySelector("#story-read") && !d.querySelector("#hearbox") && !d.querySelector("#hearbtn"));
  }

  console.log("\n" + total + " checks, " + (total - fails) + " ok, " + fails + " FAILED");
  process.exit(fails ? 1 : 0);
})();
