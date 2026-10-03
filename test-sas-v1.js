// Set a Stone v1 + stone.js v2 on story.js (main): the three lines assemble with their stems, the tap rows, the meaning shows where it comes from,
// Save refused with nothing written, a save that is the stone (one history entry in the stone shape, whole = the lines, return date), John's examples
// do what their help lines ask, the stone shows on his page beside an Ending Well stone, the offer line after Save, Copy/Print survive, no Google tag.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8");
const stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
const page = fs.readFileSync(__dirname + "/set-a-stone.html", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const scripts = [...page.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const markup = page.replace(/<script>[\s\S]*?<\/script>/g, "");
const ids = JSON.parse(fs.readFileSync(__dirname + "/ew-ids.json", "utf8"));
const SU = ids.STONES_UNIT, SW = ids.STONES_WHOLE, SJ = ids.STONES_JSON, SH = ids.STONES_HISTORY;

async function mount(o) {
  o = o || {};
  const html = '<!doctype html><html lang="en"><head><meta name="csrf-token" content="x"></head><body><div id="pageContent">' + markup + '</div></body></html>';
  const dom = new JSDOM(html, { runScripts: "outside-only", pretendToBeVisual: true, url: "https://www.ancientpathcoaching.com/set-a-stone" + (o.query || "") });
  const w = dom.window, d = w.document;
  w.HTMLElement.prototype.scrollIntoView = function () {}; w.scrollBy = function () {};
  w.getUserToken = () => (o.signedOut ? null : "tok");
  w.matchMedia = (q) => ({ matches: false });
  const latest = o.latest || {};
  const log = { patches: [], inits: [], posts: [] }; let lastUnit = null;
  w.fetch = (path, init) => {
    if (/assessment\/state/.test(path)) {
      const u = decodeURIComponent(path.split("objectId=")[1]); const l = latest[u];
      return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, latestSubmission: l ? { status: "submitted", submittedTimestamp: "2026-10-03T12:00:00Z", answers: Object.keys(l.answers).map(b => ({ blockId: b, answer: { value: l.answers[b] } })) } : null }) });
    }
    if (/submission\/init/.test(path)) { lastUnit = JSON.parse(init.body).objectId; log.inits.push(lastUnit); return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submission: { status: "begun", snapshotId: "snap", source: { type: "unit" } } }) }); }
    if (/create_form_submission_id/.test(path)) {
      const b = JSON.parse(init.body); const a = {}; b.answers.forEach(x => { a[x.blockId] = x.answer.value; });
      log.patches.push({ unit: lastUnit, answers: a }); latest[lastUnit] = { answers: a };
      return Promise.resolve({ ok: true, json: () => Promise.resolve({ success: true, submitted: true, submission: { status: "submitted", id: "s" + log.patches.length } }) });
    }
    if (/user_stats/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ me: { id: "u1234567890", first_name: "Test", last_name: "Learner", email: "t@x.com" } }) });
    if (/status=/.test(path)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ pieces: [] }) });
    if (init && init.method === "POST" && /script\.google/.test(path)) { const b = JSON.parse(init.body); log.posts.push(b); return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true, rid: "R1", state: "offered" }) }); }
    return Promise.resolve({ ok: true, json: () => Promise.resolve({}) });
  };
  w.eval(scripts[0]); w.eval(story); w.eval(stone);
  const cfgScript = scripts[1].replace(/var s = document\.createElement\("script"\);[\s\S]*?document\.head\.appendChild\(s\);\s*/, "start();\n");
  if (!/start\(\);\n\}\)\(\);\s*$/.test(cfgScript)) throw new Error("loader not replaced");
  w.eval(cfgScript);
  await sleep(15);   /* the engine mounts on DOMContentLoaded */
  return { w, d, log, latest };
}
const type = (w, d, id, v) => { const n = d.getElementById(id); n.value = v; n.dispatchEvent(new w.Event("input", { bubbles: true })); };
const EX = { stonefor: "those who chose the same path.", text: "helped me see the men on the path with me, and that the battle has already been fought and won.", meaning: "surrender. The help was always there, as long as I surrendered the ego that said I needed to do it on my own." };

(async () => {
  // 1. the door and the three lines
  { const { d } = await mount();
    t("title and the two Scriptures, ESV, short", d.querySelector(".ew-h1").textContent === "Set a Stone" && /Joshua 4:6–7/.test(d.querySelectorAll(".ew-quote")[0].textContent) && /Till now the LORD has helped us/.test(d.querySelectorAll(".ew-quote")[1].textContent));
    t("the line under the two scenes, John's words", d.querySelector(".sas-frame").textContent === "Two stones. One remembers a crossing. One remembers help. Yours can be either.");
    t("the Till-now help line, John's words", d.querySelectorAll(".ew-slot-prompt")[1].textContent === "Have you had a miracle crossing? Say what you crossed and how he brought you over. Or maybe you only need to remember: how has God helped you?");
    t("the fixed first line", d.querySelector(".ew-safe").textContent === "Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.");
    const stems = [...d.querySelectorAll(".ew-stem")].map(s => s.textContent);
    t("three lines, the ruled stems in order", stems.join("|") === "This stone is for|Till now, the LORD has|What this stone means to me is");
    t("who it is for: the ruled pick list, roles only", [...d.querySelectorAll('.ew-words[data-for="stonefor"] .ew-word')].map(b => b.textContent).join("|") === "my son|my daughter|my wife|a friend|a man I walk with|my group|the man I was|myself, a year from now|someone who will ask one day");
    t("what it means: six meanings", d.querySelectorAll('.ew-words[data-for="meaning"] .ew-word').length === 6 && [...d.querySelectorAll('.ew-words[data-for="meaning"] .ew-word')].map(b => b.textContent).join("|") === "a rescue|a new discipline|more hope|growth in faith|capacity to love|a sacrifice");
    t("John's example under each line", d.querySelectorAll(".sas-ex").length === 3 && [...d.querySelectorAll(".sas-ex b")].every(b => b.textContent === "John wrote"));
    t("no season, no stranger, no brother, no next man", !/\bseason\b|stranger|\bbrother\b|next man|men who come after/i.test(d.querySelector(".ew-root").textContent));
    t("no Google tag in the block", !/G-VKPN74MHRZ|googletagmanager/.test(page));
    t("Save is on the page, Copy and Print beside it", !!d.getElementById("apsSave") && !!d.getElementById("sasCopy") && !!d.getElementById("sasPrint"));
    t("the note before saving carries the sign-in words", /You will be asked to sign in — that is the only thing an account is for here\./.test(d.getElementById("apsNote").textContent));
  }
  // 2. the examples assemble to John's lines; the tap rows; where a meaning comes from
  { const { w, d } = await mount();
    type(w, d, "sas_stonefor", EX.stonefor); type(w, d, "sas_text", EX.text); type(w, d, "sas_meaning", EX.meaning);
    const stoneText = d.getElementById("sasStone").textContent.split("\n");
    t("the stone gathers as three lines with their stems", stoneText.length === 3 && stoneText[0] === "This stone is for those who chose the same path." && stoneText[1] === "Till now, the LORD has helped me see the men on the path with me, and that the battle has already been fought and won." && stoneText[2] === "What this stone means to me is surrender. The help was always there, as long as I surrendered the ego that said I needed to do it on my own.");
    t("the examples match John's lines as the page shows them", [...d.querySelectorAll(".sas-ex")].map(e => e.textContent.replace(/^John wrote/, "")).join("|") === stoneText.join("|"));
    t("the whole document is the three lines, nothing of ours", w.sasDocument() === stoneText.join("\n"));
    d.querySelector('.ew-words[data-for="meaning"] .ew-word').click();
    t("tap a meaning: it fills the line and shows where it comes from", d.getElementById("sas_meaning").value === "a rescue" && /1 Samuel 7:12/.test(d.getElementById("sasWhere_meaning").textContent) && d.querySelector('.ew-words[data-for="meaning"] .ew-word').classList.contains("is-on"));
    d.querySelectorAll('.ew-words[data-for="stonefor"] .ew-word')[5].click();
    t("tap who it is for: the line reads with its stem", d.getElementById("sasStone").textContent.split("\n")[0] === "This stone is for my group");
    t("meta says finished once the stone line is there", JSON.parse(d.getElementById("sas_meta").value).finished === true && /^\d{4}-\d{2}-\d{2}$/.test(d.getElementById("sas_returnAt").value));
  }
  // 3. nothing written: Save refused with the fixed words; only the for-line written: still not a stone
  { const { w, d, log } = await mount();
    d.getElementById("apsSave").click(); await sleep(20);
    t("nothing written: refused, nothing sent", /There is nothing written yet/.test(d.getElementById("apsNote").textContent) && log.patches.length === 0);
    type(w, d, "sas_stonefor", "my son"); d.getElementById("apsSave").click(); await sleep(20);
    t("no stone line yet: still not a stone", log.patches.length === 0 && d.getElementById("sasStone").classList.contains("is-empty"));
  }
  // 4. a save IS the stone: one history entry in the stone shape, beside an Ending Well stone already there
  { const prior = [{ id: "ew9", when: "2026-10-02T10:00:00.000Z", text: "What God did was keep me.", answers: { text: "What God did was keep me.", from: "ending-well", piece: "p9", pieceTitle: "Ending Well" } }];
    const { w, d, log, latest } = await mount({ latest: { [SU]: { answers: { [SH]: JSON.stringify(prior) } } } });
    type(w, d, "sas_stonefor", EX.stonefor); type(w, d, "sas_text", EX.text); type(w, d, "sas_meaning", EX.meaning);
    d.getElementById("apsSave").click(); await sleep(60);
    t("one save to the Stones form", log.patches.length === 1 && log.inits[0] === SU);
    const a = log.patches[0].answers;
    t("whole = the three lines", a[SW] === "This stone is for those who chose the same path.\nTill now, the LORD has helped me see the men on the path with me, and that the battle has already been fought and won.\nWhat this stone means to me is surrender. The help was always there, as long as I surrendered the ego that said I needed to do it on my own.");
    const hist = JSON.parse(a[SH]);
    t("history: the Ending Well stone kept, the new stone added", hist.length === 2 && hist[0].id === "ew9" && hist[1].answers.from === "set-a-stone" && hist[1].answers.pieceTitle === "Set a Stone");
    t("the new entry is in the stone shape: the words as typed, return date, no returns, not offered", hist[1].text === a[SW] && hist[1].answers.text === EX.text && hist[1].answers.stonefor === EX.stonefor && /^\d{4}-\d{2}-\d{2}$/.test(hist[1].answers.returnAt) && hist[1].answers.returns === "[]" && hist[1].answers.rid === "" && !("meta" in hist[1].answers));
    t("Saved: the engine's words", /Saved to your page/.test(d.getElementById("apsNote").textContent) && /Finished\. It is on your page\./.test(d.getElementById("apsNote").textContent));
    await sleep(60);
    t("after Save: the return date, three months on", /^Set on your page\. On [A-Z][a-z]+ \d{1,2}, \d{4} we will ask you what it means to you\.$/.test(d.getElementById("sasAfter").textContent));
    t("after Save: the offer line, the ruled words, No name the default", d.querySelector("#sasOffer .ap-stone-offer-open") && d.querySelector("#sasOffer .ap-stone-offer-open").textContent === "Set it where others can see it" && d.querySelector('#sasOffer input[value="none"]').checked);
    // his page reads both stones, newest first
    const pile = d.createElement("div"); d.body.appendChild(pile);
    const l = await w.APStone.render(pile, { offer: false });
    t("his page: both stones, newest first, each with its date and where from", l.length === 2 && l[0].from === "set-a-stone" && l[1].id === "ew9" && pile.querySelectorAll(".ap-stone").length === 2 && /from Set a Stone/.test(pile.querySelectorAll(".ap-stone-meta")[0].textContent) && /from Ending Well/.test(pile.querySelectorAll(".ap-stone-meta")[1].textContent));
    t("his page: the Set a Stone lines read back with their opening words", l[0].text.indexOf("Till now, the LORD has ") === 0 && l[0].stonefor.indexOf("This stone is for ") === 0 && l[0].meaning.indexOf("What this stone means to me is ") === 0 && pile.querySelectorAll(".ap-stone")[0].querySelectorAll(".ap-stone-text").length === 3);
    t("his page: the v1 Ending Well stone drawn whole, one line", pile.querySelectorAll(".ap-stone")[1].querySelectorAll(".ap-stone-text").length === 1);
    // the offer goes to the sheet with the three lines
    d.querySelector("#sasOffer .ap-stone-offer-open").click();
    d.querySelector('#sasOffer input[value="first"]').click();
    d.querySelector("#sasOffer .ap-stone-offer-go").click(); await sleep(60);
    t("offer: the three lines, first name, its own unit, from Set a Stone", log.posts.length === 1 && log.posts[0].testimony === a[SW] && log.posts[0].attribution === "First name" && /^stone/.test(log.posts[0].unit) && log.posts[0].from === "Set a Stone");
    t("offer: the record remembers it", JSON.parse(latest[SU].answers[SH])[1].answers.rid === "R1" && /Offered/.test(d.querySelector("#sasOffer .ap-stone-offer-state").textContent));
  }
  // 5. signed out: Save asks for sign-in, nothing lost
  { const { w, d, log } = await mount({ signedOut: true });
    type(w, d, "sas_text", EX.text); d.getElementById("apsSave").click(); await sleep(20);
    t("signed out: nothing sent, the words stay", log.patches.length === 0 && d.getElementById("sas_text").value === EX.text);
  }
  console.log(fails ? fails + " FAILED" : "all passed");
  process.exit(fails ? 1 : 0);
})();
