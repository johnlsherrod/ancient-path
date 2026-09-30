// story.js v18: the finish reshaped — his piece with "Tap any line to change it", Edit · Save, the quiet line (Read it back · Hear it · Five questions), Your page; after a save the same screen.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
function page(o) {
  o = o || {};
  const html = '<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div class="wif-root" id="root">' +
    '<div class="wif-step"><h2 class="wif-step-title">The ordinary things</h2><div class="wif-field"><p class="wif-label">One ordinary thing</p><input id="item"></div><div class="wif-field"><p class="wif-label">A product</p><input id="prod1"></div><div class="wif-field"><p class="wif-label">And another</p><input id="prod2"></div></div>' +
    '<div class="wif-step" style="display:none"><h2 class="wif-step-title">The house</h2><div class="wif-field"><p class="wif-label">Where you lived</p><input id="home"></div></div>' +
    '<div id="nav" class="wif-nav"><button id="back" class="wif-btn wif-btn-ghost">Back</button><button id="next" class="wif-btn wif-btn-primary">Next</button></div>' +
    '<div class="wif-finish"><div id="draftPanel"><div id="draft" class="wif-poem"></div></div><div id="acts" class="wif-actions"><button id="toq" class="wif-btn wif-btn-ghost">Back to the questions</button><button class="wif-btn">Print it</button><button class="wif-btn">Copy the words</button></div></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/where-i-am-from" });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.getBoundingClientRect = function () { let e = this, shown = true; while (e && e.nodeType === 1) { if (w.getComputedStyle(e).display === "none") { shown = false; break; } e = e.parentNode; } return { top: 0, left: 0, width: shown ? 100 : 0, height: shown ? 40 : 0, right: 100, bottom: 40 }; };
  w.HTMLElement.prototype.scrollIntoView = function () {};
  w.getUserToken = () => "tok"; w.AP_READER = false;
  Object.defineProperty(w, "innerWidth", { value: o.width || 1200, configurable: true });
  w.matchMedia = (q) => ({ matches: /pointer: coarse|hover: none/.test(q) ? !!o.touch : false });
  w.SpeechSynthesisUtterance = function (text) { this.text = text; }; w.speechSynthesis = { speak() {}, cancel() {} };
  w.fetch = (path) => /assessment\/state/.test(path) ? Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: null }) }) : Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted", id: "s1" } }) });
  const TAIL = "After the form of “Where I’m From” by George Ella Lyon.";
  const T = a => { const lines = [a.item ? "I am from " + a.item + "." : "", (a.prod1 || a.prod2) ? "From " + a.prod1 + " and " + a.prod2 + "." : "", a.home ? "I am from the " + a.home + "," : ""].filter(Boolean); return lines.length ? lines.join("\n") + "\n\n" + TAIL : ""; };
  /* the page draws its own poem, one <p> a line, on every input, as Where I'm From does */
  const draw = () => { const a = { item: d.getElementById("item").value, prod1: d.getElementById("prod1").value, prod2: d.getElementById("prod2").value, home: d.getElementById("home").value }; d.getElementById("draft").innerHTML = T(a).split("\n").filter(Boolean).map(l => "<p>" + l + "</p>").join(""); };
  d.addEventListener("input", draw);
  d.getElementById("next").addEventListener("click", () => { d.querySelectorAll(".wif-step")[1].style.display = ""; d.querySelectorAll(".wif-step")[0].style.display = "none"; });
  d.getElementById("back").addEventListener("click", () => { d.querySelectorAll(".wif-step")[1].style.display = "none"; d.querySelectorAll(".wif-step")[0].style.display = ""; });
  let wentBack = 0; d.getElementById("toq").addEventListener("click", () => { wentBack++; });
  w.eval(src);
  w.APStory.init({ form: "wif", root: "#root", navHost: "#navOff", actionsRow: "#acts", stepsHost: "#root", stepSelector: ".wif-step", pagePath: "/start", buttonClass: "wif-btn", primaryClass: "wif-btn-primary", ghostClass: "wif-btn-ghost", tail: TAIL,
    fields: [{ id: "item", key: "item" }, { id: "prod1", key: "prod1" }, { id: "prod2", key: "prod2" }, { id: "home", key: "home" }], lw: { unit: "u", blocks: { json: "J", whole: "W" } }, document: T, assistant: { kind: "poem", name: "Where I'm From" }, after: true });
  return { w, d, back: () => wentBack };
}
const type = (w, d, id, v) => { const n = d.getElementById(id); n.value = v; n.dispatchEvent(new w.Event("input", { bubbles: true })); };
const order = (el) => +el.style.order;
(async () => {
  t("story.js says v18", /AP-STORY-MODULE-v18/.test(src.slice(0, 200)));
  { const { w, d, back } = page(); await sleep(60);
    const acts = d.getElementById("acts");
    const edit = acts.querySelector(".aps-edit-main"), save = d.getElementById("apsSave"), hear = d.getElementById("apsHear"), read = acts.querySelector(".aps-act:not(.aps-hear)"), five = acts.querySelector(".aps-after"), your = acts.querySelector("a");
    t("the page's own way back to its questions is the Edit button, in Save's clothes, beside Save", edit && edit.textContent === "Edit" && edit.id === "toq" && edit.className.replace(" aps-edit-main", "") === save.className && order(edit) === 6 && order(save) === 7);
    t("v18.1: Your page comes next, then one quiet line on its own line: Hear it · Five questions (Read it back joins it when a reader is on)", hear && five && order(hear.closest(".aps-act")) === 23 && order(five) === 23 && order(your) > order(save) && order(your) < order(five) && acts.querySelector('.aps-break[data-at="c"]') && order(acts.querySelector('.aps-break[data-at="c"]')) === 22 && five.querySelector(".aps-after-open").textContent === "Five questions");
    t("v18.1: one Edit — the engine mounts no \"Edit the whole thing\" button", !d.getElementById("apsEdit") && Array.from(acts.querySelectorAll("button")).filter(b => /^Edit/.test(b.textContent.trim())).length === 1);
    t("then Your page; Print and Copy are the quiet things at the foot", your && order(your) === 21 && Array.from(acts.querySelectorAll("button")).filter(b => /^(Print|Copy)/.test(b.textContent)).every(b => order(b) === 30 && b.classList.contains("aps-quiet")));
    edit.click();
    t("Edit still does what the page's own button did", back() === 1);
    /* the piece and the way back into it */
    type(w, d, "item", "the yellow stove"); type(w, d, "prod1", "folgers"); type(w, d, "prod2", "lava soap"); await sleep(1300);
    const piece = d.getElementById("draft");
    t("the finished piece is found (the smallest element holding its first line) and carries 'Tap any line to change it' under it", piece.classList.contains("aps-can-tap") && piece.nextElementSibling && piece.nextElementSibling.textContent === "Tap any line to change it.");
    const line2 = piece.querySelectorAll("p")[1];
    line2.dispatchEvent(new w.MouseEvent("click", { bubbles: true, clientX: 10, clientY: 10 }));
    await sleep(50);
    t("a tap on the second line goes to that line's box (the first box whose words sit in it)", d.activeElement && d.activeElement.id === "prod1");
    save.click(); await sleep(150);
    t("after a save the first line is Saved to your page, and Edit is still there in the same place", /Saved to your page/.test(d.getElementById("apsNote").textContent) && edit.parentNode === acts && order(edit) === 6 && save.textContent === "Saved");
    type(w, d, "home", "house on Elm"); await sleep(20);
    t("a change after saving makes Save live again", save.textContent === "Save" && !save.disabled);
  }
  { const { w, d } = page({ touch: true, width: 390 }); await sleep(60);
    type(w, d, "item", "the porch"); type(w, d, "prod1", "folgers"); type(w, d, "prod2", "soap"); await sleep(1300);
    d.querySelector(".aps-q-all") && d.querySelector(".aps-q-all").click(); await sleep(20);
    const s = w.APStory; const piece = d.getElementById("draft");
    t("on a phone the hint is there too", piece.nextElementSibling && /Tap any line/.test(piece.nextElementSibling.textContent));
    t("on a phone the quiet line shows the links without the words beside them (a style rule)", /max-width:620px\)\{\.aps-row\.aps-finish \.aps-act-what/.test(src));
  }
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})();
