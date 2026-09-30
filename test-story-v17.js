// story.js v17: Speak it (phone-first) and Continue on your phone. Tap and talk · Read it to me · Hear it · one question on a phone · the square code on a desk.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
function page(o) {
  o = o || {};
  const html = '<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div class="wif-root" id="root">' +
    '<div class="wif-step"><h2 class="wif-step-title">The ordinary things</h2>' +
    '<div class="wif-field"><label for="item" class="wif-label">One ordinary thing from the house you grew up in</label><input id="item"></div>' +
    '<div class="wif-field"><p class="wif-label">A product from those years</p><input id="prod1"></div>' +
    '<div class="wif-field"><p class="wif-label">And another</p><input id="prod2"></div></div>' +
    '<div class="wif-step" style="display:none"><h2 class="wif-step-title">The house</h2><div class="wif-field"><p class="wif-label">Where you lived</p><textarea id="home"></textarea></div></div>' +
    '<div id="nav" class="wif-nav"><button id="back" class="wif-btn wif-btn-ghost">Back</button><button id="stop" class="wif-btn">Save and stop for now</button><button id="next" class="wif-btn wif-btn-primary">Next</button></div>' +
    '<div class="wif-finish"><div id="acts" class="wif-actions"><button>Print</button></div></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: o.url || "https://www.ancientpathcoaching.com/where-i-am-from" });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.getBoundingClientRect = function () { let e = this, shown = true; while (e && e.nodeType === 1) { if (w.getComputedStyle(e).display === "none") { shown = false; break; } e = e.parentNode; } return { top: 0, left: 0, width: shown ? 100 : 0, height: shown ? 40 : 0, right: 100, bottom: 40 }; };
  w.HTMLElement.prototype.scrollIntoView = function () {};
  w.getUserToken = () => "tok";
  w.AP_READER = false;
  Object.defineProperty(w, "innerWidth", { value: o.width || 1200, configurable: true });
  w.matchMedia = (q) => ({ matches: /pointer: coarse/.test(q) ? !!o.touch : false });
  if (o.touch) { w.ontouchstart = null; }
  const spoken = [], recs = [];
  if (!o.noSR) { w.SpeechRecognition = function () { const r = this; recs.push(r); r.start = () => { r.started = true; }; r.stop = () => { r.stopped = true; if (r.onend) r.onend(); }; }; }
  if (!o.noTTS) { w.SpeechSynthesisUtterance = function (text) { this.text = text; }; w.speechSynthesis = { speak: (u) => { spoken.push(u.text); }, cancel: () => { spoken.push("(cancel)"); } }; }
  w.fetch = (path) => /assessment\/state/.test(path) ? Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) }) : Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted", id: "s1" } }) });
  d.getElementById("next").addEventListener("click", () => { d.querySelectorAll(".wif-step")[1].style.display = ""; d.querySelectorAll(".wif-step")[0].style.display = "none"; });
  d.getElementById("back").addEventListener("click", () => { d.querySelectorAll(".wif-step")[1].style.display = "none"; d.querySelectorAll(".wif-step")[0].style.display = ""; });
  w.eval(src);
  const TAIL = "After the form of “Where I’m From” by George Ella Lyon.";
  const T = a => { const lines = [a.item ? "I am from " + a.item + "." : "", (a.prod1 || a.prod2) ? "From " + a.prod1 + " and " + a.prod2 + "." : "", a.home ? "I am from the " + a.home + "," : ""].filter(Boolean); return lines.length ? lines.join("\n") + "\n\n" + TAIL : ""; };
  const cfg = { form: "wif", root: "#root", navHost: "#navOff", actionsRow: "#acts", stepsHost: "#root", stepSelector: ".wif-step", pagePath: "/start", buttonClass: "wif-btn", primaryClass: "wif-btn-primary", ghostClass: "wif-btn-ghost", tail: TAIL,
    fields: [{ id: "item", key: "item" }, { id: "prod1", key: "prod1" }, { id: "prod2", key: "prod2" }, { id: "home", key: "home" }], lw: { unit: "u", blocks: { json: "J", whole: "W" } }, document: T, assistant: false, after: false };
  Object.assign(cfg, o.cfg || {});
  w.APStory.init(cfg);
  return { w, d, spoken, recs };
}
const vis = (w, n) => { let e = n; while (e && e.nodeType === 1) { if (w.getComputedStyle(e).display === "none") return false; e = e.parentNode; } return true; };
const fire = (rec, text) => { rec.onresult({ resultIndex: 0, results: [Object.assign([{ transcript: text }], { isFinal: true })] }); };
(async () => {
  t("story.js says v18", /AP-STORY-MODULE-v18/.test(src.slice(0, 200)));
  t("nothing is loaded from anywhere: the square code encoder is inlined, no script or fetch to a host", /var QR = \(function \(\)/.test(src) && !/cdn|jsdelivr|unpkg/.test(src.replace(/\/\*[\s\S]*?\*\//g, "")));

  // ---- 1. a laptop with a microphone: Tap and talk beside every box, one note, Read it to me as a quiet link, Hear it in the finish
  { const { w, d, spoken, recs } = page(); await sleep(60);
    const rows = d.querySelectorAll(".aps-voice");
    t("every box gets a voice row: four boxes, four rows, each right under its box", rows.length === 4 && Array.from(rows).every(r => r.previousElementSibling && ["item", "prod1", "prod2", "home"].includes(r.previousElementSibling.id)));
    t("Tap and talk on every box; the one-line note appears once, under the first", d.querySelectorAll(".aps-voice .aps-talk").length === 4 && d.querySelectorAll(".aps-voice-note").length === 1 && rows[0].querySelector(".aps-voice-note") && /Your computer turns your voice into words\. Nothing is recorded, and nothing is sent to us\./.test(rows[0].textContent));
    t("Read it to me is on every box that has a question, reading the page's own words", d.querySelectorAll(".aps-voice .aps-readq").length === 4);
    rows[0].querySelector(".aps-readq").click();
    t("Read it to me speaks the box's own label and the link says Stop while it does", spoken[spoken.length - 1] === "One ordinary thing from the house you grew up in" && rows[0].querySelector(".aps-readq").textContent === "Stop");
    const talk = rows[0].querySelector(".aps-talk"); talk.click();
    t("Tap and talk starts listening and says so, without raising the keyboard", recs.length === 1 && recs[0].started && talk.classList.contains("is-on") && talk.textContent === "Listening…" && d.activeElement !== d.getElementById("item"));
    fire(recs[0], "the yellow stove");
    t("the words land in the box, capitalised as a sentence start, no period on a one-line box", d.getElementById("item").value === "The yellow stove");
    fire(recs[0], "and the lava soap");
    t("more words follow with a space", d.getElementById("item").value === "The yellow stove and the lava soap");
    talk.click();
    t("tapping again stops, and the button reads Tap and talk", recs[0].stopped && !talk.classList.contains("is-on") && talk.textContent === "Tap and talk");
    /* John's phone, Sept 29: the first question listened, the second did not. One listener now; a tap on the next box waits for the first to end. */
    talk.click(); await sleep(10);
    const talk2 = rows[1].querySelector(".aps-talk"); talk2.click(); await sleep(10);
    t("a tap on the second box while the first still listens: the first ends, the second waits its turn", recs.length === 1 && !talk.classList.contains("is-on"));
    await sleep(250);
    t("then the second box listens with the same one listener, and its words land in the second box", talk2.classList.contains("is-on") && recs.length === 1 && (fire(recs[0], "folgers"), d.getElementById("prod1").value === "Folgers" && d.getElementById("item").value === "The yellow stove and the lava soap"));
    talk2.click();
    const hear = d.getElementById("apsHear");
    t("Hear it sits in the finish row with what it does beside it", hear && hear.textContent === "Hear it" && /Reads your piece back to you in a plain voice\. Nothing is sent\./.test(hear.parentNode.textContent));
    hear.click();
    t("Hear it reads his piece as it stands and offers Stop", /I am from The yellow stove and the lava soap/.test(spoken[spoken.length - 1]) && hear.textContent === "Stop");
    hear.click();
    t("Stop cancels the voice", spoken[spoken.length - 1] === "(cancel)" && hear.textContent === "Hear it");
    t("a laptop is not one-question-at-a-time: all three boxes of the step are visible", ["item", "prod1", "prod2"].every(id => vis(w, d.getElementById(id))) && !d.querySelector(".aps-q-row"));
  }
  // ---- 2. a textarea gets a period when he pauses; refusing the microphone takes it off the page
  { const { w, d, recs } = page(); await sleep(60);
    d.getElementById("next").click(); await sleep(20);
    const row = d.querySelector('#home + .aps-voice'); row.querySelector(".aps-talk").click();
    fire(recs[0], "the house on Elm Street"); fire(recs[0], "where the porch light stayed on");
    t("into a textarea each pause lands a sentence with a period", d.getElementById("home").value === "The house on Elm Street. Where the porch light stayed on.");
    recs[0].onerror({ error: "not-allowed" });
    t("a microphone he refused is taken off every box for this visit, with the note; the boxes still work", d.querySelectorAll(".aps-talk").length === 0 && d.querySelectorAll(".aps-voice-note").length === 0 && d.getElementById("home").value.length > 0);
  }
  // ---- 3. a device that cannot listen or speak shows none of it
  { const { d } = page({ noSR: true, noTTS: true }); await sleep(60);
    t("no microphone and no voice: no voice row, no Hear it, the page as before", d.querySelectorAll(".aps-voice").length === 0 && !d.getElementById("apsHear")); }
  { const { d } = page({ noSR: true }); await sleep(60);
    t("a device that speaks but cannot listen: Read it to me and Hear it, no Tap and talk, no note", d.querySelectorAll(".aps-readq").length === 4 && d.querySelectorAll(".aps-talk").length === 0 && d.querySelectorAll(".aps-voice-note").length === 0 && !!d.getElementById("apsHear")); }
  // ---- 4. a phone: one question fills the screen; Tap and talk, Next question, one grey line; no handoff link
  { const { w, d } = page({ touch: true, width: 390 }); await sleep(60);
    const shown = ["item", "prod1", "prod2"].filter(id => vis(w, d.getElementById(id)));
    t("on a phone one box of the step shows at a time, the first", shown.join(",") === "item");
    const row = d.querySelector(".aps-q-row");
    t("under it: one dark Next question, then one small line '1 of 3 · Show all questions'", row && row.querySelector(".aps-q-next") && Array.from(row.querySelector(".aps-q-line").children).map(e => e.textContent).join(" ") === "1 of 3 · Show all questions" && !row.querySelector(".aps-q-back"));
    t("the note says Your phone; Tap and talk is the one button on the box; Read it to me is a small link above the box's row", /Your phone turns your voice/.test(d.querySelector(".aps-voice-note").textContent) && d.querySelector("#item + .aps-voice").classList.contains("aps-touch") && !d.querySelector("#item + .aps-voice .aps-readq") && d.getElementById("item").previousElementSibling.classList.contains("aps-voice-q") && d.getElementById("item").previousElementSibling.querySelector(".aps-readq"));
    row.querySelector(".aps-q-next").click(); await sleep(20);
    t("Next question shows the second box alone, with Back", ["item", "prod1", "prod2"].filter(id => vis(w, d.getElementById(id))).join(",") === "prod1" && d.querySelector(".aps-q-row .aps-q-back") && /2 of 3/.test(d.querySelector(".aps-q-line").textContent));
    d.querySelector(".aps-q-row .aps-q-next").click(); await sleep(20);
    t("the last box of the step has no Next question of its own; the page's own Next carries on", !d.querySelector(".aps-q-row .aps-q-next") && /3 of 3/.test(d.querySelector(".aps-q-line").textContent));
    d.getElementById("next").click(); await sleep(500);
    t("when the page moves to a step with one box, the box shows plainly with no row", vis(w, d.getElementById("home")) && d.querySelector(".aps-q-row") === null && !d.getElementById("root").classList.contains("aps-one"));
    d.getElementById("back").click(); await sleep(500);
    d.querySelector(".aps-q-all").click(); await sleep(20);
    t("Show all questions ends it: all three boxes back, no row", ["item", "prod1", "prod2"].every(id => vis(w, d.getElementById(id))) && !d.querySelector(".aps-q-row"));
    t("a phone gets no Continue on your phone", d.querySelectorAll(".aps-handoff-link").length === 0);
  }
  // ---- 5. a desk: Continue on your phone saves first, then shows the square code and the link in words
  { const { w, d } = page(); await sleep(60);
    const links = d.querySelectorAll(".aps-handoff-link");
    t("Continue on your phone sits in the step row and the finish row as a quiet link", links.length === 2 && Array.from(links).every(l => l.textContent === "Continue on your phone"));
    d.getElementById("item").value = "the porch"; d.getElementById("item").dispatchEvent(new w.Event("input", { bubbles: true }));
    links[0].click(); await sleep(400);
    const box = links[0].nextElementSibling;
    t("it saved what he has first, then showed the code with the words and the link", /Saved/.test(d.getElementById("apsSave").textContent) && !box.hidden && box.querySelector("svg path") && /Point your phone’s camera at this/.test(box.textContent) && /ancientpathcoaching\.com\/where-i-am-from\?open=1/.test(box.querySelector(".aps-handoff-url").textContent));
    t("the code carries the page and open-where-I-left-off, never his words", w.APStory.handoffLink() === "https://www.ancientpathcoaching.com/where-i-am-from?open=1" && !/porch/.test(box.innerHTML));
    box.querySelector(".aps-handoff-done").click();
    t("Done hides it", box.hidden);
  }
  { const { w } = page({ url: "https://www.ancientpathcoaching.com/path-player?courseid=do-hard-things&unit=6a9edad8ec5e03f7ab034a63Unit" }); await sleep(60);
    t("inside the course player the code opens his page instead", w.APStory.handoffLink() === "https://www.ancientpathcoaching.com/start"); }
  { const { d } = page({ cfg: { voice: false, handoff: false } }); await sleep(60);
    t("a page can turn both off in its config", d.querySelectorAll(".aps-voice, .aps-handoff-link").length === 0 && !d.getElementById("apsHear")); }
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})();
