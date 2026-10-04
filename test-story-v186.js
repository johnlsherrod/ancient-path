// story.js v18.6 + stone.js v2.1: no "}}" ever leaves for LearnWorlds; a list already cut short is mended on read. Run: node test-story-v186.js
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8"), stoneSrc = fs.readFileSync(__dirname + "/stone.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
// the damaged list exactly as LearnWorlds returned it on 3 Oct (the two closing braces at the end gone)
const GOOD = [{ id: "1791078087389-aeifmc", when: "2026-10-04T01:41:27.389Z", text: "This stone is for a friend\nTill now, the LORD has helped\nWhat this stone means to me is more hope", answers: { stonefor: "a friend", text: "helped", meaning: "more hope", from: "set-a-stone", pieceTitle: "Set a Stone", returnAt: "2027-01-03", returns: "[]", rid: "", shown: "" } }];
const DAMAGED = JSON.stringify(GOOD).slice(0, -3) + "]";
t("the damaged list is what was measured: valid minus its last two braces, not valid JSON", DAMAGED.length === JSON.stringify(GOOD).length - 2 && (() => { try { JSON.parse(DAMAGED); return false; } catch (e) { return true; } })());
function page(stateHistory) {
  const html = '<!doctype html><html><head><meta name="csrf-token" content="x"></head><body><div id="root"><input id="a"><input id="b"><input id="meta" type="hidden"><div id="acts"></div></div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/set-a-stone" });
  const w = dom.window, d = w.document; w.getUserToken = () => "tok"; w.HTMLElement.prototype.scrollIntoView = function () {};
  const sent = [];
  w.fetch = (path, opts) => {
    if (/assessment\/state/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: stateHistory == null ? null : { status: "submitted", answers: [{ blockId: "H", answer: { value: stateHistory } }, { blockId: "J", answer: { value: "{}" } }, { blockId: "W", answer: { value: "x" } }] } }) });
    if (opts && opts.body) sent.push(JSON.parse(opts.body));
    return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted" } }) });
  };
  w.eval(src); w.eval(stoneSrc);
  const inst = w.APStory.init({ form: "t", root: "#root", actionsRow: "#acts", pagePath: "/start", navHost: "#navOff", buttonClass: "b", primaryClass: "p", ghostClass: "g",
    fields: [{ id: "a", key: "a" }, { id: "b", key: "b" }, { id: "meta", key: "meta" }], lw: { unit: "U", blocks: { json: "J", whole: "W", history: "H" } }, document: a => (a.a || "") + (a.b ? "\n" + a.b : "") });
  return { w, d, inst, sent };
}
const type = (w, d, id, v) => { const n = d.getElementById(id); n.value = v; n.dispatchEvent(new w.Event("input", { bubbles: true })); };
const values = (sent, skipWhole) => { const out = []; sent.forEach(s => (s.answers || []).forEach(a => { if (!(skipWhole && a.blockId === "W")) out.push(String(a.answer && a.answer.value)); })); return out; };
(async () => {
  t("story.js says v18.6, stone.js says v2.5", /AP-STORY-MODULE-v18\.6/.test(src.slice(0, 120)) && /AP-STONE-v2\.5/.test(stoneSrc.slice(0, 120)));
  { const { w, d, inst, sent } = page(null); await sleep(60);
    type(w, d, "a", "a line he wrote {{with}} braces}}"); type(w, d, "b", "second"); d.getElementById("meta").value = JSON.stringify({ finished: true });
    inst.save({ working() {}, done() {}, fail(m) { t("no fail: " + m, false); } }); await sleep(120);
    const vals = values(sent, true);   /* W is his own text, stored as typed */
    t("a finished save went out with its three blocks", values(sent).length === 3);
    t("v18.6: nothing sent to LearnWorlds contains two braces in a row", vals.every(v => v.indexOf("}}") < 0 && v.indexOf("{{") < 0));
    const hist = vals.filter(v => v.charAt(0) === "[")[0] || "";
    let parsed = null; try { parsed = JSON.parse(hist); } catch (e) {}
    t("v18.6: the history list is still valid JSON, one entry, his two lines in it", parsed && parsed.length === 1 && parsed[0].text === "a line he wrote { {with} } braces} }\nsecond");
    const json = vals.filter(v => v.charAt(0) === "{")[0] || "";
    let pj = null; try { pj = JSON.parse(json); } catch (e) {}
    t("v18.6: the answers JSON is valid too, and the meta string inside it survives", pj && pj.a && pj.meta === '{"finished":true}');
  }
  { const { w, d, inst, sent } = page(DAMAGED); await sleep(60);
    type(w, d, "a", "a second stone"); d.getElementById("meta").value = JSON.stringify({ finished: true });
    inst.save({ working() {}, done() {}, fail(m) { t("no fail: " + m, false); } }); await sleep(120);
    const hist = values(sent).filter(v => v.charAt(0) === "[")[0] || "";
    let parsed = null; try { parsed = JSON.parse(hist); } catch (e) {}
    t("v18.6: a list LearnWorlds cut short is mended on read, so a new save adds to it instead of losing it (two entries, the old one whole)", parsed && parsed.length === 2 && parsed.some(e => e.id === "1791078087389-aeifmc" && e.answers && e.answers.returnAt === "2027-01-03"));
    t("v18.6: and what goes back out has no two braces in a row", hist.indexOf("}}") < 0);
    // stone.js reads the same damaged list and finds the stone
    w.APStone.config({ unit: "U", blocks: { whole: "W", json: "J", history: "H" }, script: "" });
    const l = await w.APStone.list();
    t("stone.js v2.1: the damaged stone reads back whole — its three lines, its return date", l.length >= 1 && l.some(s => s.stonefor === "This stone is for a friend" && /^The LORD has helped$/.test(s.text) && s.meaning === "What this stone means to me is more hope" && s.returnAt === "2027-01-03"));
  }
  { const { w, d, inst, sent } = page(null); await sleep(60);
    type(w, d, "a", "a stone"); d.getElementById("meta").value = JSON.stringify({ finished: false });
    inst.save({ working() {}, done() {}, fail(m) { t("no fail: " + m, false); } }); await sleep(120);
    const hist = values(sent).filter(v => v.charAt(0) === "[")[0];
    t("a stop-for-now save with no history yet carries an empty list, not a broken one", hist === "[]");
  }
  console.log(fails ? fails + " FAILED" : "all passed"); process.exit(fails ? 1 : 0);
})();
