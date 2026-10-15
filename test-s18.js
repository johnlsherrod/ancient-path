/* Section 18 build checks — The Man Who Crossed v13 (AP-ARC-DHT-v13). JSDOM, story.js be615046 served from disk. */
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
  const { d, w, errors, html } = await load("arc-dht-v13.html");
  console.log("The Man Who Crossed v13");
  ok(html.startsWith("<!-- AP-ARC-DHT-v13 ("), "marker v13");
  ok(html.indexOf("{{") < 0, "no literal {{");
  const ledes = [...d.querySelectorAll(".arc-lede")];
  ok(ledes.length === 2, "two opening paragraphs, got " + ledes.length);
  ok(/^Do Hard Things was one path into the work you have been doing, not the whole of it\. Before Peter walked on water there was another storm/.test(ledes[0] && ledes[0].textContent), "first paragraph as ruled");
  ok(/Twelve parts worked the same way: not one act of strength, but lesson after lesson, each one Christ used to prepare you for what came next\.$/.test(ledes[0] && ledes[0].textContent), "first paragraph ends on preparation");
  ok(/hear “Come” and step out of the boat/.test(ledes[0] && ledes[0].textContent), "Come in curly quotes");
  ok(ledes[1] && /^The Man Who Crossed is where you name what that preparation built, and what the last hard thing — the crossing — cost\. Twenty-five lines, five parts\. Each line starts for you; you finish it in your own words\./.test(ledes[1].textContent), "second paragraph as ruled");
  ok(ledes[1] && /This asks what you did\.$/.test(ledes[1].textContent), "second paragraph keeps the Where I'm From line");
  const guide = d.querySelector(".arc-guide");
  ok(guide && guide.textContent === "Short is better. Write what you could point at — a place, a person, something someone said, what your body did. One picture per idea.", "guidance line, one line: " + (guide && guide.textContent));
  ok(guide && guide.previousElementSibling === ledes[1], "guidance line sits under the opening");
  const paper = d.querySelector(".arc-paper");
  ok(paper && paper.textContent === "Prefer paper? Print the worksheet.", "worksheet line reads: " + (paper && paper.textContent));
  ok(paper && paper.previousElementSibling === guide && paper.nextElementSibling.className === "arc-progress", "worksheet line under the guidance line, above the progress row");
  const pa = paper && paper.querySelector("a");
  ok(pa && /2-The_Man_Who_Crossed_worksheet\.pdf$/.test(pa.href) && pa.target === "_blank" && pa.rel === "noopener", "worksheet link → the Man Who Crossed PDF, new tab");
  ok(!d.querySelector(".arc-safe"), "old grey bar paragraph gone");
  ok(!/graded|leaves this page/.test(d.body.textContent), "no 'graded' / 'leaves this page' anywhere");
  const keeps = [...d.querySelectorAll("p")].filter(p => p.textContent.indexOf(KEEP) === 0);
  ok(keeps.length === 1, "house privacy line once, got " + keeps.length);
  const k = keeps[0];
  ok(k && k.querySelector("strong") && k.querySelector("strong").textContent === KEEP && k.textContent === KEEP + " Everything else stays on your device.", "first sentence bold, nothing after the second");
  ok(k && k.nextElementSibling && /988 Suicide/.test(k.nextElementSibling.textContent), "privacy line directly above the 988 line");
  ok(k && (k.compareDocumentPosition(d.getElementById("arcFinish")) & 2) && (k.compareDocumentPosition(d.getElementById("arcParts")) & 2), "privacy line sits under the writing and the finished poem");
  ok(!/\bDan\b|Luis/.test(d.body.textContent), "Dan and Luis gone from the page");
  const slotOf = id => d.getElementById(id).closest(".arc-slot");
  ok(slotOf("arc_stayed").querySelector(".arc-slot-prompt").textContent === "The man, or the people, who stayed in the room when you could not fix yourself. By role, not name — a friend, a man from your group.", "Who Stayed asks by role");
  ok(/For example: A man from my group stayed in the room\./.test(slotOf("arc_stayed").querySelector(".arc-slot-shape").textContent), "Who Stayed example by role");
  ok(slotOf("arc_crossedWith").querySelector(".arc-slot-prompt").textContent === "The men who walked this with you. By role, not name — a friend, the men in your group.", "Crossed With asks by role");
  ok(/For example: Two men from my group walked it with me\./.test(slotOf("arc_crossedWith").querySelector(".arc-slot-shape").textContent), "Crossed With example by role");
  ok(/the way a man from my group reached for me\./.test(slotOf("arc_hand").querySelector(".arc-slot-shape").textContent), "The Hand example by role");
  ok(d.getElementById("arcCount").textContent === "0 of 25 written", "count reads 25");
  ok(d.querySelectorAll(".arc-part").length === 5 && d.querySelectorAll("textarea.arc-rest").length === 25, "5 parts, 25 lines");
  ok(d.getElementById("arcPartLabel").textContent === "1 of 5", "label reads 1 of 5: " + d.getElementById("arcPartLabel").textContent);
  d.getElementById("arcNext").click(); ok(d.getElementById("arcPartLabel").textContent === "2 of 5", "after Next: 2 of 5"); d.getElementById("arcBack").click();
  ok(w.APStory && d.getElementById("apsSave"), "story.js up, Save present");
  ok(d.getElementById("apsHeard") && d.querySelector(".aps-assist"), "story assistant row present");
  ok(errors.length === 0, "no script errors: " + errors.join(" | "));
  /* the poem still assembles, and the Hand line echoes Who Stayed */
  const set = (k, v) => { const x = d.getElementById("arc_" + k); x.value = v; x.dispatchEvent(new w.Event("input")); };
  set("stayed", "A man from my group"); set("hand", "the guy at work whose marriage is coming apart"); set("crossedWith", "Two men from my group");
  const draft = d.getElementById("arcDraft").textContent;
  ok(/A man from my group stayed in the room\./.test(draft), "Who Stayed line reads");
  ok(/Two men from my group walked it with me\./.test(draft), "Crossed With line reads");
  ok(/I reach down to the guy at work whose marriage is coming apart, the way a man from my group reached for me\./.test(draft), "The Hand line echoes Who Stayed by role: " + draft.split("\n").filter(l => /reach down/.test(l)).join(""));
  /* the step row leaves the screen at the finish, with force; comes back on Back to the questions */
  ["cry", "honest", "door", "standing"].forEach(k => set(k, "x"));
  w.arcFinish(false);
  const nav = d.getElementById("arcNav");
  ok(nav.style.getPropertyValue("display") === "none" && nav.style.getPropertyPriority("display") === "important", "step row hidden with force at the finish");
  ok(d.getElementById("arcFinish").classList.contains("is-active"), "finish view active");
  d.getElementById("arcEdit").click();
  ok(nav.style.getPropertyValue("display") === "" && nav.className.indexOf("aps-row") >= 0, "step row back for the questions (engine classes intact)");
  w.arcHold(); ok(nav.style.getPropertyPriority("display") === "important", "Save and stop for now also hides the row");
  /* id gate: every getElementById literal in the page's own script exists */
  const ids = [...html.matchAll(/\$\("([A-Za-z_]+)"\)|getElementById\("([A-Za-z_]+)"\)/g)].map(m => m[1] || m[2]);
  const missing = [...new Set(ids)].filter(id => !d.getElementById(id) && !/^arc_/.test(id) && id !== "apsOffline");
  ok(missing.length === 0, "id gate: missing " + missing.join(", "));
  console.log(`pass ${pass} fail ${fail}`);
  process.exit(fail ? 1 : 0);
})();
