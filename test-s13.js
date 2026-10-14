/* Section 13 build checks — Here I Am v13 · Your Next Step v7 (KBJ) · v8 (DHT). JSDOM, story.js be615046 served from disk. */
const { JSDOM, VirtualConsole } = require("jsdom");
const fs = require("fs"), path = require("path");
const OUT = "/home/claude/ap/out", STORY = fs.readFileSync("/home/claude/ap/story-be615046.js", "utf8");
const KEEP = "Nothing you write here reaches us unless you choose to save it with us.";
let pass = 0, fail = 0;
function ok(c, msg) { if (c) { pass++; } else { fail++; console.log("  FAIL " + msg); } }

async function load(file) {
  let html = fs.readFileSync(path.join(OUT, file), "utf8");
  html = html.replace(/https:\/\/cdn\.jsdelivr\.net\/gh\/johnlsherrod\/ancient-path@[0-9a-f]+\/story\.js/, "http://localhost/story.js");
  const vc = new VirtualConsole(); const errors = [];
  vc.on("jsdomError", e => errors.push(String(e.message || e).slice(0, 160)));
  vc.on("error", m => errors.push(String(m).slice(0, 160)));
  const dom = new JSDOM("<!doctype html><html><head><meta name='csrf-token' content='x'></head><body>" + html + "</body></html>", {
    url: "https://www.ancientpathcoaching.com/ebook/test", runScripts: "dangerously", pretendToBeVisual: true, virtualConsole: vc,
    beforeParse(w) {
      w.fetch = async (u) => ({ ok: true, status: 200, json: async () => ({}), text: async () => "" });
      w.scrollBy = () => {}; w.Element.prototype.scrollIntoView = () => {};
      /* story.js: when the page appends its script tag, run the local file instead */
      const ap = w.Node.prototype.appendChild;
      w.Node.prototype.appendChild = function (n) {
        if (n && n.tagName === "SCRIPT" && /localhost\/story\.js/.test(n.src)) { n.removeAttribute("src"); n.removeAttribute("integrity"); n.textContent = STORY; const r = ap.call(this, n); setTimeout(() => n.dispatchEvent(new w.Event("load")), 0); return r; }
        return ap.call(this, n);
      };
    }
  });
  await new Promise(r => setTimeout(r, 400));
  return { dom, d: dom.window.document, w: dom.window, errors, html };
}

(async () => {
  /* ---------------- Here I Am v13 */
  {
    const { d, w, errors, html } = await load("arc-kbj-v13.1.html");
    console.log("Here I Am v13");
    ok(html.startsWith("<!-- AP-HIA-KBJ-v13.1 ("), "marker v13.1");
    const ledes = [...d.querySelectorAll(".arc-lede")];
    ok(ledes.length === 2, "two opening paragraphs, got " + ledes.length);
    ok(/^In the opening pages of the Bible, God’s first question to a hiding Adam was not an accusation\. It was Ayeka — where are you\?/.test(ledes[0] && ledes[0].textContent), "first paragraph is John's copy");
    ok(ledes[0] && ledes[0].querySelector("em") && ledes[0].querySelector("em").textContent === "Ayeka", "Ayeka in italics");
    ok(ledes[1] && /^Here I Am is where you give your answer\. Twenty-seven lines, five parts\./.test(ledes[1].textContent), "second paragraph is John's copy");
    const paper = d.querySelector(".arc-paper");
    ok(paper && paper.textContent === "Prefer paper? Print the worksheet.", "worksheet line reads: " + (paper && paper.textContent));
    ok(paper && paper.previousElementSibling === ledes[1] && paper.nextElementSibling.className === "arc-progress", "worksheet line sits under the opening, above the progress row");
    const pa = paper && paper.querySelector("a");
    ok(pa && /Here_I_Am_worksheet\.pdf$/.test(pa.href) && pa.target === "_blank" && pa.rel === "noopener", "worksheet link → the Here I Am PDF, new tab");
    ok(!d.querySelector(".arc-safe"), "old grey second paragraph gone");
    ok(!/graded/.test(d.body.textContent), "no 'graded' anywhere");
    const keeps = [...d.querySelectorAll("p")].filter(p => p.textContent.indexOf(KEEP) === 0);
    ok(keeps.length === 1, "house privacy line once, got " + keeps.length);
    const k = keeps[0];
    ok(k && k.querySelector("strong") && k.querySelector("strong").textContent === KEEP && k.textContent === KEEP + " Everything else stays on your device.", "first sentence bold, nothing after the second");
    ok(k && k.nextElementSibling && /988 Suicide/.test(k.nextElementSibling.textContent), "privacy line directly above the 988 line");
    ok(k && k.compareDocumentPosition(d.getElementById("arcFinish")) & 2, "privacy line sits after the finished-poem panel (under the writing)");
    ok(k && k.compareDocumentPosition(d.getElementById("arcParts")) & 2, "privacy line sits after the writing boxes");
    ok(!/Luis/.test(d.body.textContent), "Luis gone from the page");
    const firstOne = d.getElementById("arc_firstOne");
    const slot = firstOne && firstOne.closest(".arc-slot");
    ok(slot && slot.querySelector(".arc-slot-prompt").textContent === "The first person you let know you, and where. By role, not name — a friend, a brother, a man in your group.", "prompt asks by role");
    ok(slot && /For example: The first one I let know me was a man in my group, on a Thursday, in a room of eight men\./.test(slot.querySelector(".arc-slot-shape").textContent), "example says a man in my group");
    ok(d.getElementById("arcCount").textContent === "0 of 27 written", "count reads 27: " + d.getElementById("arcCount").textContent);
    ok(d.querySelectorAll(".arc-part").length === 5 && d.querySelectorAll("textarea.arc-rest").length === 27, "5 parts, 27 lines");
    ok(d.getElementById("arcPartLabel").textContent === "1 of 5", "label reads 1 of 5: " + d.getElementById("arcPartLabel").textContent);
    d.getElementById("arcNext").click(); ok(d.getElementById("arcPartLabel").textContent === "2 of 5", "after Next: 2 of 5"); d.getElementById("arcBack").click();
    ok(w.APStory && d.getElementById("apsSave"), "story.js up, Save present");
    ok(d.getElementById("apsHeard") && d.querySelector(".aps-assist"), "story assistant row (Read it back + circled i) present");
    ok(errors.length === 0, "no script errors: " + errors.join(" | "));
    /* the page still assembles a poem: fill two lines */
    firstOne.value = "a man in my group"; firstOne.dispatchEvent(new w.Event("input"));
    d.getElementById("arc_tower").value = "the ministry calendar"; d.getElementById("arc_tower").dispatchEvent(new w.Event("input"));
    ok(/I built the ministry calendar\./.test(d.getElementById("arcDraft").textContent) && /The first one I let know me was a man in my group\./.test(d.getElementById("arcDraft").textContent), "poem assembles from the lines");
    /* the step row leaves the screen at the finish, with force; comes back on Back to the questions */
    ["measure","cameOff","table","answer"].forEach(k => { const x = d.getElementById("arc_" + k); x.value = "x"; x.dispatchEvent(new w.Event("input")); });
    w.arcFinish(false);
    const nav = d.getElementById("arcNav");
    ok(nav.style.getPropertyValue("display") === "none" && nav.style.getPropertyPriority("display") === "important", "step row hidden with force at the finish");
    ok(d.getElementById("arcFinish").classList.contains("is-active"), "finish view active");
    d.getElementById("arcEdit").click();
    ok(nav.style.getPropertyValue("display") === "" && nav.className.indexOf("aps-row") >= 0, "step row back for the questions (engine classes intact)");
    w.arcHold(); ok(nav.style.getPropertyPriority("display") === "important", "Save and stop for now also hides the row");
  }
  /* ---------------- Your Next Step v7 / v8 */
  for (const [file, marker, course] of [["nxs-kbj-v7.1.html", "<!-- AP-NEXTSTEP-KBJ-v7.1 (", "Known by Jesus"], ["nxs-dht-v8.1.html", "<!-- AP-NEXTSTEP-DHT-v8.1 (", "Do Hard Things"]]) {
    const { d, w, errors, html } = await load(file);
    console.log(file);
    ok(html.startsWith(marker), "marker");
    ok(d.querySelector(".nxs-eyebrow").textContent === course + " · Your Next Step", "eyebrow " + course);
    ok(d.getElementById("nxsStepLabel").textContent === "1 of 6", "label reads 1 of 6: " + d.getElementById("nxsStepLabel").textContent);
    d.getElementById("nxsNext").click();
    ok(d.getElementById("nxsStepLabel").textContent === "2 of 6", "after Next: 2 of 6");
    ok(!d.querySelector(".nxs-safe") && !/graded/.test(d.body.textContent), "old second paragraph gone, no 'graded'");
    ok(d.querySelector(".nxs-lede").nextElementSibling === d.getElementById("nxsAnchor"), "anchor line follows the lede directly");
    const keeps = [...d.querySelectorAll("p")].filter(p => p.textContent.indexOf(KEEP) === 0);
    ok(keeps.length === 1, "house privacy line once, got " + keeps.length);
    const k = keeps[0];
    ok(k && k.querySelector("strong").textContent === KEEP && k.textContent === KEEP + " Everything else stays on your device.", "first sentence bold, nothing after");
    ok(k && /988 Suicide/.test(k.nextElementSibling.textContent), "directly above the 988 line");
    ok(k && (k.compareDocumentPosition(d.getElementById("nxsFinish")) & 2) && (k.compareDocumentPosition(d.getElementById("nxsSteps")) & 2), "under the writing and the finished piece");
    ok(w.APStory && d.getElementById("apsSave"), "story.js up, Save present");
    ok(d.getElementById("apsHeard") && d.querySelector(".aps-assist") && /Story assistant/.test(d.querySelector(".aps-assist").textContent), "story assistant row present (Read it back + circled i)");
    ok(/reads the whole piece once and comes back with three things/.test(d.querySelector(".aps-assist p").textContent), "the circled i text matches what the row offers");
    ok(errors.length === 0, "no script errors: " + errors.join(" | "));
    /* nothing else moved: six steps, the finish, the keepsake */
    ok(d.querySelectorAll(".nxs-step").length === 6 && d.getElementById("nxsDownload") && d.getElementById("nxsCopy"), "six steps, Download, Copy");
    const t0 = d.getElementById("nxs_started"); t0.value = "x"; t0.dispatchEvent(new w.Event("input"));
    for (let i = 0; i < 6; i++) d.getElementById("nxsNext").click();
    const nav = d.getElementById("nxsNav");
    ok(d.getElementById("nxsFinish").classList.contains("is-active") && nav.style.getPropertyValue("display") === "none" && nav.style.getPropertyPriority("display") === "important", "step row hidden with force at the finish");
    d.getElementById("nxsEdit").click();
    ok(nav.style.getPropertyValue("display") === "" && d.getElementById("nxsStepLabel").textContent === "1 of 6", "step row back on Back to the questions");
    w.nxsHold(); ok(nav.style.getPropertyPriority("display") === "important", "Save and stop for now also hides the row");
  }
  console.log(`\n${pass} passed, ${fail} failed`);
  process.exit(fail ? 1 : 0);
})();
