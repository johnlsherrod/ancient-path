// story.js v15: "Now that it's written" — the five taps move from the two pages into the engine's finish, after Read it back and the walk, on every piece; feeling words from The Word for It only.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const WORD_FOR_IT = ["ashamed", "exposed", "afraid", "angry", "sad", "alone", "numb", "tired", "stuck", "restless", "convicted", "sorry", "tender", "relieved", "seen", "hopeful", "grateful", "steady", "free", "glad"];
function page(o) {
  o = o || {};
  const html = '<!doctype html><html><head><meta name="csrf-token" content="x"></head><body><div class="wif-root" id="root">' +
    '<div class="wif-step"><h2 class="wif-step-title">The ordinary things</h2><div><input id="item"></div><div><input id="prod1"><input id="prod2"></div></div>' +
    '<div class="wif-step" style="display:none"><h2 class="wif-step-title">The house</h2><div><input id="home"></div></div>' +
    '<div id="nav" class="wif-nav"><button id="back" class="wif-btn wif-btn-ghost">Back</button><button id="stop" class="wif-btn">Save and stop for now</button><button id="next" class="wif-btn wif-btn-primary">Next</button></div>' +
    '<div class="wif-finish"><div id="acts" class="wif-actions"><button>Print</button></div></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/where-i-am-from" });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.getBoundingClientRect = function () { let e = this, shown = true; while (e && e.nodeType === 1) { if (w.getComputedStyle(e).display === "none") { shown = false; break; } e = e.parentNode; } return { top: 0, left: 0, width: shown ? 100 : 0, height: shown ? 40 : 0, right: 100, bottom: 40 }; };
  const scrolled = []; w.HTMLElement.prototype.scrollIntoView = function () { scrolled.push(this.id || this.className); };
  w.getUserToken = () => "tok";
  if (o.noReader) { w.AP_READER = false; }
  w.fetch = (path, init) => {
    if (/assessment\/state/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) });
    if (/script\.google/.test(path)) { const input = JSON.parse(init.body).input; return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true, data: o.relay(input) }) }); }
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted" } }) });
  };
  d.getElementById("next").addEventListener("click", () => { d.querySelectorAll(".wif-step")[1].style.display = ""; d.querySelectorAll(".wif-step")[0].style.display = "none"; });
  d.getElementById("back").addEventListener("click", () => { d.querySelectorAll(".wif-step")[1].style.display = "none"; d.querySelectorAll(".wif-step")[0].style.display = ""; });
  w.eval(src);
  const TAIL = "After the form of “Where I’m From” by George Ella Lyon.";
  const T = a => { const lines = [a.item ? "I am from " + a.item + "." : "", (a.prod1 || a.prod2) ? "From " + a.prod1 + " and " + a.prod2 + "." : "", a.home ? "I am from the " + a.home + "," : ""].filter(Boolean); return lines.length ? lines.join("\n") + "\n\n" + TAIL : ""; };
  const cfg = { form: "wif", root: "#root", navHost: "#navOff", actionsRow: "#acts", pagePath: "/start", buttonClass: "wif-btn", primaryClass: "wif-btn-primary", ghostClass: "wif-btn-ghost", tail: TAIL,
    fields: [{ id: "item", key: "item" }, { id: "prod1", key: "prod1" }, { id: "prod2", key: "prod2" }, { id: "home", key: "home" }], lw: { unit: "u", blocks: { json: "J", whole: "W" } }, document: T,
    assistant: o.assistant === undefined ? { kind: "poem", name: "Where I'm From" } : o.assistant };
  if (o.after !== undefined) { cfg.after = o.after; }
  w.APStory.init(cfg);
  return { w, d, scrolled, TAIL };
}
function write(d) { d.getElementById("item").value = "Pastor Mike's porch"; d.getElementById("prod1").value = "folgers"; d.getElementById("prod2").value = "what my father said"; d.getElementById("home").value = "house on Elm"; }
const relay = input => {
  if (/return three things/.test(input)) return { heard: "A reader will hear a house and a bowl.", open: [{ check: "stranger", quote: "I am from the house on Elm,", question: "Which house?" }], people: [] };
  if (/did not write this read-back/.test(input)) return { heardOk: true, verdicts: [{ i: 0, keep: true }], people: [] };
  return {};
};
(async () => {
  // ---- 0. the engine carries The Word for It, once, and says it is v15
  { const { w } = page({ relay });
    t("APStory.version is 15", w.APStory.version === "18.2");
    t("APStory.wordForIt is The Word for It, the twenty words heavy to light", JSON.stringify(w.APStory.wordForIt) === JSON.stringify(WORD_FOR_IT)); }

  // ---- 1. where it sits: in the finish, after Read it back and its results, before Save
  { const { w, d } = page({ relay }); await sleep(50);
    const row = d.getElementById("acts"), after = row.querySelector(".aps-after");
    t("the finish row carries one 'Now that it's written' tier", !!after && row.querySelectorAll(".aps-after").length === 1 && after.parentNode === row);
    const o = n => +n.style.order;
    t("v18: it sits on the quiet line with Read it back, below Save", o(after) === o(row.querySelector(".aps-act")) && o(after) > o(d.getElementById("apsSave")));
    const btn = after.querySelector(".aps-after-open");
    t("the offer is one link, 'Five questions', with what it is beside it", btn && btn.textContent === "Five questions" && /Five questions about what you just wrote/.test(after.textContent) && /one tap/.test(after.textContent));
    btn.click(); await sleep(20);
    t("pressed with nothing written: it says so, and no card opens", /nothing written yet/i.test(after.textContent) && !after.querySelector(".aps-after-card")); }

  // ---- 2. it is there without Claude too (no relay): the five need no reader
  { const { d } = page({ noReader: true }); await sleep(50);
    t("with no reader the Story assistant is absent but 'Now that it's written' is still offered", !d.getElementById("apsHeard") && !!d.querySelector("#acts .aps-after .aps-after-open")); }

  // ---- 3. the five, one at a time, a tap moves him on
  { const { w, d, TAIL } = page({ relay }); await sleep(50); write(d);
    const after = d.querySelector(".aps-after"); after.querySelector(".aps-after-open").click(); await sleep(20);
    let card = after.querySelector(".aps-after-card");
    t("1 of 5: How do you feel, now that it's written?", card && /1 of 5/.test(card.textContent) && /How do you feel, now that it’s written\?/.test(card.textContent));
    const words = Array.from(card.querySelectorAll(".aps-tap")).map(b => b.textContent);
    t("the feeling words are The Word for It, all twenty, in order, and nothing else", JSON.stringify(words) === JSON.stringify(WORD_FOR_IT));
    t("and a box for his own word", !!card.querySelector(".aps-own") && /own word/i.test(card.textContent));
    t("the offer button is gone while the card is up", !after.querySelector(".aps-after-open"));
    card.querySelectorAll(".aps-tap")[0].click(); await sleep(20);
    card = after.querySelector(".aps-after-card");
    t("tapping 'ashamed' moves him to 2 of 5: Where do you feel it? with the body places and the page's own line about pointing to it", card && /2 of 5/.test(card.textContent) && /Where do you feel it\?/.test(card.textContent) && /In your body, right now\. It will feel odd the first time/.test(card.textContent) && /A feeling you can point to is one you can name/.test(card.textContent));
    const body = Array.from(card.querySelectorAll(".aps-tap")).map(b => b.textContent);
    t("the body places are the house list", JSON.stringify(body) === JSON.stringify(["chest", "gut", "throat", "shoulders", "hands", "jaw", "nowhere yet"]));
    // Back returns to 1 of 5 with his pick still marked
    card.querySelector(".aps-after-back").click(); await sleep(20); card = after.querySelector(".aps-after-card");
    t("Back returns to 1 of 5 with 'ashamed' still marked", /1 of 5/.test(card.textContent) && card.querySelectorAll(".aps-tap")[0].getAttribute("aria-pressed") === "true");
    card.querySelector(".aps-after-next").click(); await sleep(20); card = after.querySelector(".aps-after-card");
    t("Next from a marked card keeps the pick and moves on", /2 of 5/.test(card.textContent));
    card.querySelectorAll(".aps-tap")[0].click(); await sleep(20); card = after.querySelector(".aps-after-card");
    t("3 of 5: Which line surprised you? lists his own lines, in order, without the byline", card && /3 of 5/.test(card.textContent) && /Which line surprised you\?/.test(card.textContent) && JSON.stringify(Array.from(card.querySelectorAll(".aps-tap")).map(b => b.textContent)) === JSON.stringify(["I am from Pastor Mike's porch.", "From folgers and what my father said.", "I am from the house on Elm,"]) && card.textContent.indexOf(TAIL) < 0);
    card.querySelectorAll(".aps-tap")[1].click(); await sleep(20); card = after.querySelector(".aps-after-card");
    t("4 of 5: If someone read only one line, which do you want it to be? lists the lines again", card && /4 of 5/.test(card.textContent) && /If someone read only one line, which do you want it to be\?/.test(card.textContent) && card.querySelectorAll(".aps-tap").length === 3);
    card.querySelectorAll(".aps-tap")[2].click(); await sleep(20); card = after.querySelector(".aps-after-card");
    t("5 of 5: Before today, how much of this had you said out loud to anyone? five dots from None of it to All of it", card && /5 of 5/.test(card.textContent) && /Before today, how much of this had you said out loud to anyone\?/.test(card.textContent) && card.querySelectorAll(".aps-dot").length === 5 && /None of it/.test(card.textContent) && /All of it/.test(card.textContent));
    card.querySelectorAll(".aps-dot")[2].click(); await sleep(20);
    const done = after.querySelector(".aps-after-done");
    t("after the fifth: That's everything, the card is gone, his answers read back in one short block", done && !after.querySelector(".aps-after-card") && /That’s everything\./.test(done.textContent) && /ashamed/.test(done.textContent) && /chest/.test(done.textContent) && /From folgers and what my father said\./.test(done.textContent) && /I am from the house on Elm,/.test(done.textContent) && /some of it/.test(done.textContent));
    t("and it says plainly that these are for him and not saved with the piece", /These are for you\. They are not saved with the piece\./.test(done.textContent));
    t("v18.1: Save and Your page sit above the quiet line, Print below it", +d.getElementById("apsSave").style.order < +after.style.order && +d.getElementById("acts").querySelector("a").style.order < +after.style.order && +Array.from(d.getElementById("acts").children).find(c => /^Print/.test(c.textContent)).style.order > +after.style.order);
    // he can go through them again
    t("'Go through them again' is offered", !!after.querySelector(".aps-after-open") && /again/i.test(after.querySelector(".aps-after-open").textContent)); }

  // ---- 4. skipping, and his own word
  { const { d } = page({ relay }); await sleep(50); write(d);
    const after = d.querySelector(".aps-after"); after.querySelector(".aps-after-open").click(); await sleep(20);
    let card = after.querySelector(".aps-after-card");
    const own = card.querySelector(".aps-own"); own.value = "wrung out"; own.dispatchEvent(new (d.defaultView.Event)("input", { bubbles: true }));
    let skips = card.querySelector(".aps-after-skip") ? 1 : 0;
    card.querySelector(".aps-after-next").click(); await sleep(20);
    for (let i = 0; i < 4; i++) { card = after.querySelector(".aps-after-card"); if (card.querySelector(".aps-after-skip")) { skips++; } card.querySelector(".aps-after-skip").click(); await sleep(20); }
    const done = after.querySelector(".aps-after-done");
    t("his own word is kept and read back; skipped questions are simply absent from the read-back", done && /wrung out/.test(done.textContent) && !/chest|None of it|surprised/.test(done.textContent));
    t("every one of the five cards carried a Skip", skips === 5); }

  // ---- 5. after the walk, the walked note points him on to it
  { const { w, d } = page({ relay }); await sleep(50); write(d);
    d.getElementById("apsHeard").click(); await sleep(80);
    const out = d.getElementById("apsRead"); out.querySelector(".aps-walk").click(); await sleep(300);
    d.getElementById("apsGuide").querySelector(".aps-guide-next").click(); await sleep(60);
    t("the walk's closing note points him to the five questions, below", /the five questions, below/.test(out.querySelector(".aps-walked").textContent));
    d.querySelector(".aps-after .aps-after-open").click(); await sleep(20);
    t("and it opens the same five", /1 of 5/.test(d.querySelector(".aps-after-card").textContent)); }

  // ---- 5b. after a save, answering the five does not wake Save back up: only a change to his piece does
  { const { w, d } = page({ relay }); await sleep(50); write(d);
    d.getElementById("apsSave").click(); await sleep(60);
    t("saved: the button reads Saved and the status line is up", d.getElementById("apsSave").textContent === "Saved" && /Saved to your page/.test(d.getElementById("apsNote").textContent));
    const after = d.querySelector(".aps-after"); after.querySelector(".aps-after-open").click(); await sleep(20);
    const own = after.querySelector(".aps-own"); own.value = "wrung out"; own.dispatchEvent(new w.Event("input", { bubbles: true })); await sleep(20);
    after.querySelectorAll(".aps-tap")[3].click(); await sleep(20);
    t("typing his own word and tapping through leaves Saved standing", d.getElementById("apsSave").textContent === "Saved" && /Saved to your page/.test(d.getElementById("apsNote").textContent));
    d.getElementById("home").value = "house on Elm, with the porch"; d.getElementById("home").dispatchEvent(new w.Event("input", { bubbles: true })); await sleep(20);
    t("a change to a line of the piece is what brings Save back", d.getElementById("apsSave").textContent === "Save"); }

  // ---- 6. off when a page says so, and not on a story-kind piece (the Road keeps its own)
  { const { d } = page({ relay, after: false }); await sleep(50);
    t("cfg.after: false leaves it off", !d.querySelector(".aps-after")); }
  { const { d } = page({ relay, assistant: { kind: "story", name: "Road" } }); await sleep(50);
    t("a story-kind profile does not get it (the Road has its own)", !d.querySelector(".aps-after")); }
  { const { d } = page({ relay, assistant: null, after: true }); await sleep(50);
    t("cfg.after: true mounts it on a page with no assistant at all", !!d.querySelector(".aps-after .aps-after-open")); }

  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})().catch(e => { console.error(e); process.exit(2); });
