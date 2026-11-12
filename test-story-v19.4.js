// story.js v19.4 (Return View build 1, second cut, ruled by John Nov 12, 2026): a signed-in man who opens a piece he already saved lands on his own words
// from ANY door, not only from Your Page (?open=1). Tests first. Run: node test-story-v19.4.js   (needs jsdom: npm i jsdom)
process.env.TZ = "Asia/Tokyo";   /* the device is NOT Central: the saved line must still read Central time */
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));

const NOW = Date.parse("2026-11-12T15:00:00Z");              /* Thursday, Nov 12, 9:00 AM Central */
const SAVED_YESTERDAY = "2026-11-11T20:00:00.000Z";          /* Wednesday, Nov 11, 2:00 PM Central */
const SAVED_TODAY = "2026-11-12T14:14:00.000Z";              /* Thursday, Nov 12, 8:14 AM Central */
const SAVED_LATE = "2026-11-12T03:00:00.000Z";               /* Wednesday, Nov 11, 9:00 PM Central — already the 12th in UTC and Tokyo */
const FIELDS = [{ id: "a1", key: "q1" }, { id: "a2", key: "q2" }, { id: "a3", key: "q3" }, { id: "meta", key: "meta" }];
const FINISHED = { q1: "I was afraid.", q2: "God was near.", q3: "I stayed.", meta: JSON.stringify({ step: 2, finished: true }) };
const STOPPED = { q1: "I was afraid.", q2: "God was near.", q3: "", meta: JSON.stringify({ step: 1, finished: false }) };

function world(o) {
  o = o || {};
  const html = '<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div id="root" class="root"><div id="steps">' +
    '<div class="p"><textarea id="a1"></textarea></div><div class="p"><textarea id="a2"></textarea></div><div class="p"><textarea id="a3"></textarea></div>' +
    '<input type="hidden" id="meta" value=""></div><div id="acts" class="actions"><button id="back" class="b">Back</button><button id="next" class="b">Next</button></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/course/x" + (o.search || "") });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.scrollIntoView = function () {};
  w.matchMedia = () => ({ matches: false });
  w.SpeechSynthesisUtterance = function (x) { this.text = x; }; w.speechSynthesis = { speak() {}, cancel() {} };
  if (!o.signedOut) { w.getUserToken = () => "tok"; }
  /* a fixed clock */
  w.eval("(function(){var R=Date,N=" + (o.now || NOW) + ";function D(){var a=[].slice.call(arguments);if(!(this instanceof D)){return new R(N).toString();}return a.length?new (Function.prototype.bind.apply(R,[null].concat(a)))():new R(N);}D.now=function(){return N;};D.parse=R.parse;D.UTC=R.UTC;D.prototype=R.prototype;window.Date=D;})()");
  /* the page, as the real pages are: it listens for the meta field (filled last) and puts itself on the finish or on his part */
  const views = []; d.body.dataset.view = "begin";
  d.getElementById("meta").addEventListener("input", () => { if (!d.getElementById("meta").value) { return; } try { const m = JSON.parse(d.getElementById("meta").value); d.body.dataset.view = m.finished ? "finish" : "step" + (m.step || 0); views.push(d.body.dataset.view); } catch (e) {} });
  /* the site */
  const calls = [];
  const answersFor = a => { const out = [{ blockId: "J", answer: { value: JSON.stringify(a) } }, { blockId: "W", answer: { value: [a.q1, a.q2, a.q3].filter(Boolean).join("\n\n") } }]; if (o.history) { out.push({ blockId: "H", answer: { value: JSON.stringify(o.history) } }); } return out; };
  w.fetch = (path, opts) => {
    calls.push((opts && opts.method || "GET") + " " + String(path).split("?")[0]);
    const ok = body => Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(body) });
    if (/assessment\/state/.test(path)) {
      if (o.latest === "fail") { return Promise.reject(new Error("offline")); }
      const wait = o.delay ? sleep(o.delay) : Promise.resolve();
      return wait.then(() => ok({ success: true, latestSubmission: o.latest ? { status: "submitted", submittedTimestamp: o.savedAt || SAVED_YESTERDAY, answers: answersFor(o.latest) } : null }));
    }
    if (/submission\/init/.test(path)) { return ok({ success: true, submission: { snapshotId: "s" } }); }
    return ok({ success: true, submitted: true, submission: { status: "submitted" } });
  };
  if (o.held) { w.localStorage.setItem("apStoryPending:test", JSON.stringify({ t: o.heldAt, a: o.held, press: false })); }
  w.eval(src);
  const cfg = { form: "test", root: "#root", actionsRow: "#acts", stepsHost: "#steps", navHost: "#navOff", pagePath: "/start", buttonClass: "b", noteBefore: "Saving puts this on your page.",
    fields: FIELDS, lw: { unit: "U", blocks: { json: "J", whole: "W", ...(o.history ? { history: "H" } : {}) } }, document: a => [a.q1, a.q2, a.q3].filter(Boolean).join("\n\n"),
    signInSelector: "#none" };
  if (o.returnView === false) { cfg.returnView = false; }
  const s = w.APStory.init(cfg);
  return { w, d, s, calls, views, note: () => d.getElementById("apsNote"), line: () => { const n = d.querySelector("#apsNote .aps-saved"); return n ? n.textContent : null; },
    left: () => { const n = d.querySelector("#apsNote .aps-left"); return n ? n.textContent : null; }, v: id => d.getElementById(id).value, view: () => d.body.dataset.view,
    gets: () => calls.filter(c => /GET/.test(c)).length, posts: () => calls.filter(c => /^(POST|PATCH)/.test(c)).length };
}

(async () => {
  t("story.js is v19.4", /AP-STORY-MODULE-v19\.4/.test(src.slice(0, 200)) && /version: "19\.4"/.test(src));

  /* 1 — blank from the course, a finished save: his words, the finish view, the saved line with the day */
  { const x = world({ latest: FINISHED, savedAt: SAVED_YESTERDAY }); await sleep(120);
    t("blank-from-course, finished save → his three answers are back in their boxes", x.v("a1") === FINISHED.q1 && x.v("a2") === FINISHED.q2 && x.v("a3") === FINISHED.q3);
    t("blank-from-course, finished save → the page is on its finish view (its own meta listener ran)", x.view() === "finish");
    t("the saved line carries the day when the save is not from today, 12-hour, Central: “Saved to your page · Wednesday, Nov 11, 2:00 PM.”", x.line() === "Saved to your page · Wednesday, Nov 11, 2:00 PM.");
    t("finished: the line under it says it is on his page", /Finished\. It is on your page\./.test(x.left() || ""));
    t("Save reads Saved and is quiet (nothing to save); one read of the site, no write", x.d.getElementById("apsSave").textContent === "Saved" && x.d.getElementById("apsSave").disabled && x.gets() === 1 && x.posts() === 0);
    { /* the same finish as a pressed Save gives: type the three answers, finish, press Save — then compare what is on the row */
      const y = world({ latest: null }); await sleep(60);
      ["a1", "a2", "a3"].forEach((id, i) => { y.d.getElementById(id).value = [FINISHED.q1, FINISHED.q2, FINISHED.q3][i]; y.d.getElementById(id).dispatchEvent(new y.w.Event("input", { bubbles: true })); });
      y.d.getElementById("meta").value = FINISHED.meta; y.d.getElementById("meta").dispatchEvent(new y.w.Event("input", { bubbles: true }));
      y.d.getElementById("apsSave").click(); await sleep(150);
      const names = n => Array.from(n.d.querySelectorAll("#root button, #root a")).map(b => b.textContent.trim()).join("|");
      t("no new button, no new link: the return view's row is exactly what a pressed Save leaves", names(x) === names(y) && /Saved/.test(names(x)));
      t("a save made now keeps the time only, in Central: “Saved to your page · 9:00 AM.” — and it is the same kind of line as the return view's", y.line() === "Saved to your page \u00b7 9:00 AM." && x.d.querySelector("#apsNote").className === y.d.querySelector("#apsNote").className); }
    t("his restored words are not held on this device as if unsaved (nothing in storage 1.2 s later)", (await sleep(1200), x.w.localStorage.getItem("apStoryPending:test") === null));
    x.d.getElementById("apsSave").disabled = false; x.d.getElementById("apsSave").click(); await sleep(60);
    t("pressing Save on words that are already saved sends nothing", x.posts() === 0);
  }

  /* 2 — a save from today keeps the time only; the day is Central, not the device's */
  { const x = world({ latest: FINISHED, savedAt: SAVED_TODAY }); await sleep(120);
    t("a save from today: the time only — “Saved to your page · 8:14 AM.”", x.line() === "Saved to your page · 8:14 AM."); }
  { const x = world({ latest: FINISHED, savedAt: SAVED_LATE }); await sleep(120);
    t("9:00 PM Central is already the 12th in UTC and Tokyo: still “Wednesday, Nov 11, 9:00 PM” (Central, never the device)", x.line() === "Saved to your page · Wednesday, Nov 11, 9:00 PM."); }
  { const x = world({ latest: FINISHED, savedAt: "2025-12-31T18:05:00.000Z" }); await sleep(120);
    t("a save from an earlier year says the year", x.line() === "Saved to your page · Wednesday, Dec 31, 2025, 12:05 PM."); }
  { const x = world({ latest: FINISHED, savedAt: "not a date" }); await sleep(120);
    t("a time the site gives in a shape we cannot read: the line says Saved to your page. with no time (never a wrong one)", x.line() === "Saved to your page."); }

  /* 3 — stopped partway: the part he stopped at, his earlier answers behind it */
  { const x = world({ latest: STOPPED }); await sleep(120);
    t("a held save → the page is on the part he stopped at (step 1), the earlier answers in their boxes", x.view() === "step1" && x.v("a1") === STOPPED.q1 && x.v("a2") === STOPPED.q2 && x.v("a3") === "");
    t("a held save → the saved line and what is left: “2 of 3 parts written. Save keeps your place.”", x.line() === "Saved to your page · Wednesday, Nov 11, 2:00 PM." && /2 of 3 \w+ written\. Save keeps your place\./.test(x.left() || "")); }

  /* 4 — no save: the page starts as it always has (Begin) */
  { const x = world({ latest: null }); await sleep(120);
    t("no save → nothing changes: boxes empty, page on its begin view, no saved line", x.v("a1") === "" && x.view() === "begin" && x.line() === null && x.views.length === 0);
    t("no save → Save still says Save, the note still says what saving does, one read only", x.d.getElementById("apsSave").textContent === "Save" && !x.d.getElementById("apsSave").disabled && x.note().textContent === "Saving puts this on your page." && x.gets() === 1);
    t("no save → opening it does not count as a saved piece being opened (the start is still counted when he types)", x.s._opened !== true); }

  /* 5 — device-held words keep winning (the existing step 1 order) */
  { const x = world({ latest: FINISHED, savedAt: SAVED_YESTERDAY, held: { q1: "words I typed and never saved", q2: "", q3: "", meta: "" }, heldAt: NOW - 60 * 1000 }); await sleep(200);
    t("words held on this device, newer than the save → those words, not the saved piece", x.v("a1") === "words I typed and never saved" && x.view() === "begin"); }
  { const x = world({ latest: FINISHED, savedAt: SAVED_YESTERDAY, held: { q1: "older words", q2: "", q3: "", meta: "" }, heldAt: Date.parse(SAVED_YESTERDAY) - 3600 * 1000 }); await sleep(200);
    t("words held on this device, OLDER than the save (saved from another device since) → the saved piece opens and the stale hold is dropped", x.v("a1") === FINISHED.q1 && x.view() === "finish" && x.w.localStorage.getItem("apStoryPending:test") === null); }

  /* 6 — the read fails: the calm line, the page as it is today */
  { const x = world({ latest: "fail" }); await sleep(150);
    t("failed read → “Your saved piece could not be opened just now. Try again from your page.”", x.note().textContent === "Your saved piece could not be opened just now. Try again from your page.");
    t("failed read → the page starts as it does today: boxes empty, begin view, Save still Save", x.v("a1") === "" && x.view() === "begin" && x.d.getElementById("apsSave").textContent === "Save"); }

  /* 7 — signed out: nothing is read, nothing changes */
  { const x = world({ signedOut: true, latest: FINISHED }); await sleep(120);
    t("signed out → no read of the site, page as it is", x.calls.length === 0 && x.v("a1") === "" && x.view() === "begin"); }

  /* 8 — his own typing is never overwritten by a slow read */
  { const x = world({ latest: FINISHED, delay: 150 }); await sleep(20);
    x.d.getElementById("a1").value = "I started again"; x.d.getElementById("a1").dispatchEvent(new x.w.Event("input", { bubbles: true }));
    t("while the read is on its way a quiet save cannot start (keep() says no), so his saved piece is not shadowed", x.s.keep() === false);
    await sleep(300);
    t("he typed while the read was on its way → his words stay, the saved piece does not overwrite them", x.v("a1") === "I started again" && x.v("a2") === "" && x.view() === "begin" && x.line() === null); }

  /* 9 — ?open=1 and ?open=<id> are still the doors from Your Page, and still read once */
  { const x = world({ search: "?open=1", latest: FINISHED }); await sleep(150);
    t("?open=1 → the latest piece, the finish view, one read (the return path does not read a second time)", x.v("a1") === FINISHED.q1 && x.view() === "finish" && x.gets() === 1);
    t("?open=1 → the same saved line as the other doors", x.line() === "Saved to your page · Wednesday, Nov 11, 2:00 PM."); }
  { const hist = [{ id: "111", when: "2026-10-01T15:00:00.000Z", text: "old", answers: { q1: "first piece", q2: "", q3: "" } }, { id: "222", when: "2026-11-11T20:00:00.000Z", text: "new", answers: { q1: "second piece", q2: "x", q3: "y" } }];
    const x = world({ search: "?open=111", latest: FINISHED, history: hist }); await sleep(150);
    t("?open=<id> → that one saved piece, not the latest", x.v("a1") === "first piece" && x.s.openEntryId === "111" && x.gets() === 1);
    t("?open=<id> → the saved line carries that piece's own day: “Thursday, Oct 1, 10:00 AM”", x.line() === "Saved to your page · Thursday, Oct 1, 10:00 AM."); }
  { const x = world({ search: "?open=1", latest: "fail" }); await sleep(150);
    t("?open=1 with a failed read → the same calm line as before", x.note().textContent === "Your saved piece could not be opened just now. Try again from your page."); }
  { const x = world({ search: "?open=1", latest: null }); await sleep(150);
    t("?open=1 with nothing saved → nothing happens, as before", x.v("a1") === "" && x.view() === "begin" && x.line() === null); }

  /* 10 — a form that keeps history (every Your Story page): the return view applies; a page whose blank form is how he adds the next piece (Set a Stone) opts out */
  { const hist = [{ id: "111", when: "2026-10-01T15:00:00.000Z", text: "a", answers: { q1: "one" } }, { id: "222", when: "2026-11-11T20:00:00.000Z", text: "b", answers: { q1: "two" } }];
    const x = world({ latest: FINISHED, history: hist }); await sleep(150);
    t("a form that keeps history, blank from the course → opens the latest and holds the newest entry open (a save updates it, never a second copy)", x.view() === "finish" && x.s.openEntryId === "222" && x.gets() === 1);
    const y = world({ latest: FINISHED, history: hist, returnView: false }); await sleep(150);
    t("returnView:false (Set a Stone) → stays blank, no read, so the next Save adds a stone instead of editing the newest", y.v("a1") === "" && y.view() === "begin" && y.line() === null && y.gets() === 0 && y.s.openEntryId === null);
    const z = world({ search: "?open=1", latest: FINISHED, history: hist, returnView: false }); await sleep(150);
    t("returnView:false with ?open=1 → the latest still opens (the opt-out is only for the blank door)", z.view() === "finish" && z.s.openEntryId === "222"); }

  /* 11 — the public format helper */
  { const x = world({ latest: null });
    t("APStory.savedWhen is exposed for the pages and tests", typeof x.w.APStory.savedWhen === "function" && x.w.APStory.savedWhen("2026-11-11T20:00:00.000Z") === "Wednesday, Nov 11, 2:00 PM" && x.w.APStory.savedWhen("2026-11-12T14:14:00.000Z") === "8:14 AM" && x.w.APStory.savedWhen(Date.parse("2026-11-11T20:00:00Z")) === "Wednesday, Nov 11, 2:00 PM" && x.w.APStory.savedWhen(null) === ""); }

  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})();
