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
  if (o.voice) { w.webkitSpeechRecognition = function () { this.start = () => {}; this.stop = () => {}; }; w.SpeechSynthesisUtterance = function (t) { this.text = t; }; w.speechSynthesis = { speak() {}, cancel() {}, getVoices: () => [] }; }
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
const EX = { stonefor: "those who chose the same path.", text: "given me a new heart, one of flesh and not of stone. He has given me eyes to see and ears to hear the encouragement the community gives. All promises the Scriptures make, and I have the privilege of walking them out.", meaning: "surrender. The help was always there, as long as I surrendered the ego that said I needed to do it on my own." };

(async () => {
  // 1. the door and the three lines
  { const { d } = await mount();
    t("title and the two Scriptures, ESV, short — Joshua 4:21–24 (the crossing on dry ground, why others should see it) then 1 Samuel 7:12", d.querySelector(".ew-h1").textContent === "Set a Stone" && /Joshua 4:21–24/.test(d.querySelectorAll(".ew-quote")[0].textContent) && /passed over this Jordan on dry ground/.test(d.querySelectorAll(".ew-quote")[0].textContent) && /all the peoples of the earth may know/.test(d.querySelectorAll(".ew-quote")[0].textContent) && !/Joshua 4:6/.test(d.body.textContent) && /Till now the LORD has helped us/.test(d.querySelectorAll(".ew-quote")[1].textContent));
    t("build 4: the meaning help line is the answer to the children's question; the page pins stone.js to John's commit", /The answer you give when someone asks what this stone means — its name\. Samuel named his Help\./.test(d.querySelectorAll(".ew-slot-prompt")[2].textContent) && /The answer you give when someone asks what this stone means — its name\. Samuel named his Help\./.test(page) && /Pick a name to see where it comes from, or give your own\./.test(page) && page.split("ancient-path@8cb3d9f1b25db2b711f50844446993afef469479/stone.js").length === 2 && page.indexOf("0ad7e1c54b10ea5446cc6bc6a145e25ed91eab7a") < 0);
    t("build 7: under each scene, what the stone was — set to be asked, the stone of help on the ground of the loss; the frame line says why three lines and why it asks him", (() => { const w = [...d.querySelectorAll(".sas-what")].map(e => e.textContent); return w.length === 2 && /^God promised Abraham a land and a people\. Generations later Israel stood at the river, and the promise needed God himself to keep it/.test(w[0]) && /^Israel had the land and broke the covenant\./.test(w[1]) && /named it Ebenezer, stone of help — help they had not earned\. God brought them back: from twenty years of idols, to the LORD they had left\.$/.test(w[1]) && d.querySelector(".sas-what").previousElementSibling.classList.contains("ew-quote") && d.querySelector(".sas-frame").textContent === "Two stones, one line through them: what God promised, God kept — by bringing them in, and by bringing them back when they had broken it. Neither was set from a place of strength. Both were named, and both were set to be asked about. The stone does not change you; it reminds you who does. What about you? Can you stand on his promises and accept that, at times, he will step in for you? That is why your stone has three lines — who it is for, what the LORD has done, and the name you give it — and why, three months from now, it asks you to look again." && [...d.querySelectorAll(".sas-scene-k")].map(e => e.textContent).join("|") === "Possession of the promise · In|Divine intervention · Back" && /Gilgal means to roll — on that ground the LORD rolled their shame away\./.test(w[0]) && /^Three months on, the stone asks\. For example: “You named this stone surrender\. What has the LORD done in you since\?” — “He keeps showing me/.test(d.querySelector(".sas-return-ex").textContent) && /\.sas-where:empty\{display:none\}/.test(page); })());
    t("build 7: the The-LORD-has help line — the marker on the path, then in or back, each with where he was", d.querySelectorAll(".ew-slot-prompt")[1].textContent === "A stone is a marker on the path. Did God bring you in — from a place you could not leave on your own, into a life you did not have? Say what you crossed and how he brought you over. Or did God bring you back — from wandering, to what you had and lost? Say where you were, and how he helped you.");
    t("build 7: two taps under the LORD line start his line — in or back — and show their context; the line keeps growing after the tap", (() => { const ws = [...d.querySelectorAll('.ew-words[data-for="text"] .ew-word')]; if (ws.length !== 2 || ws[0].textContent !== "brought me in from" || ws[1].textContent !== "brought me back from") return false; ws[1].click(); const v = d.getElementById("sas_text").value; const wh = d.getElementById("sasWhere_text").textContent; if (v !== "brought me back from " || !/^brought me back from — Back is the return\./.test(wh) || !ws[1].classList.contains("is-on")) return false; d.getElementById("sas_text").value = "brought me back from the far country."; d.getElementById("sas_text").dispatchEvent(new d.defaultView.Event("input", { bubbles: true })); const ok = ws[1].classList.contains("is-on") && /Back is the return/.test(d.getElementById("sasWhere_text").textContent) && d.querySelector(".sas-stone").textContent.indexOf("The LORD has brought me back from the far country.") >= 0; d.getElementById("sas_text").value = ""; d.getElementById("sas_text").dispatchEvent(new d.defaultView.Event("input", { bubbles: true })); return ok && d.querySelector('.ew-words[data-for="text"]').nextElementSibling.textContent === "Pick the one that is yours, or write your own."; })());
    t("the fixed first line", d.querySelector(".ew-safe").textContent === "Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.");
    const stems = [...d.querySelectorAll(".ew-stem")].map(s => s.textContent);
    t("three lines, the ruled stems in order", stems.join("|") === "This stone is for|The LORD has|What this stone means to me is");
    t("who it is for: the ruled pick list, roles only", [...d.querySelectorAll('.ew-words[data-for="stonefor"] .ew-word')].map(b => b.textContent).join("|") === "my son|my daughter|my wife|a friend|a man I walk with|my group|the man I was|myself, a year from now|someone who will ask one day");
    t("what it means: eight meanings — the two stones' own beside Samuel's", d.querySelectorAll('.ew-words[data-for="meaning"] .ew-word').length === 8 && [...d.querySelectorAll('.ew-words[data-for="meaning"] .ew-word')].map(b => b.textContent).join("|") === "a rescue|a crossing I could not make alone|help I did not earn|a new discipline|more hope|growth in faith|capacity to love|a sacrifice");
    t("John's example under each line", d.querySelectorAll(".sas-ex").length === 3 && [...d.querySelectorAll(".sas-ex b")].every(b => b.textContent === "For example"));
    t("no season, no stranger, no brother, no next man", !/\bseason\b|stranger|\bbrother\b|next man|men who come after/i.test(d.querySelector(".ew-root").textContent));
    t("no Google tag in the block", !/G-VKPN74MHRZ|googletagmanager/.test(page));
    t("Save is on the page, Copy and Print beside it", !!d.getElementById("apsSave") && !!d.getElementById("sasCopy") && !!d.getElementById("sasPrint"));
    t("the note before saving carries the sign-in words", /You will be asked to sign in — that is the only thing an account is for here\./.test(d.getElementById("apsNote").textContent));
  }
  // 2. the examples assemble to John's lines; the tap rows; where a meaning comes from
  { const { w, d } = await mount();
    type(w, d, "sas_stonefor", EX.stonefor); type(w, d, "sas_text", EX.text); type(w, d, "sas_meaning", EX.meaning);
    const stoneText = d.getElementById("sasStone").textContent.split("\n");
    t("the stone gathers as three lines with their stems", stoneText.length === 3 && stoneText[0] === "This stone is for those who chose the same path." && stoneText[1] === "The LORD has given me a new heart, one of flesh and not of stone. He has given me eyes to see and ears to hear the encouragement the community gives. All promises the Scriptures make, and I have the privilege of walking them out." && stoneText[2] === "What this stone means to me is surrender. The help was always there, as long as I surrendered the ego that said I needed to do it on my own.");
    t("the examples match John's lines as the page shows them", [...d.querySelectorAll(".sas-ex")].map(e => e.textContent.replace(/^For example/, "")).join("|") === stoneText.join("|"));
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
    t("build 5: nothing written: Save says what the stone needs and goes to that box; nothing sent", /The line that starts “The LORD has” is the stone\. Write it, then save\./.test(d.getElementById("apsNote").textContent) && log.patches.length === 0 && d.activeElement && d.activeElement.id === "sas_text");
    type(w, d, "sas_stonefor", "my son"); d.getElementById("apsSave").click(); await sleep(20);
    t("no stone line yet: still not a stone", log.patches.length === 0 && d.getElementById("sasStone").classList.contains("is-empty"));
  }
  // 4. a save IS the stone: one history entry in the stone shape, beside an Ending Well stone already there
  { const prior = [{ id: "ew9", when: "2026-10-02T10:00:00.000Z", text: "What God did was keep me.", answers: { text: "What God did was keep me.", from: "ending-well", piece: "p9", pieceTitle: "Ending Well" } }];
    const { w, d, log, latest } = await mount({ latest: { [SU]: { answers: { [SH]: JSON.stringify(prior) } } } });
    type(w, d, "sas_stonefor", EX.stonefor); type(w, d, "sas_text", EX.text); type(w, d, "sas_meaning", EX.meaning);
    d.getElementById("apsSave").click(); await sleep(60);
    if (log.patches.length !== 1) console.log("NOTE:", d.getElementById("apsNote").textContent, "| text:", d.getElementById("sas_text").value.slice(0,30));
    t("one save to the Stones form", log.patches.length === 1 && log.inits[0] === SU);
    const a = log.patches[0].answers;
    t("whole = the three lines", a[SW] === "This stone is for those who chose the same path.\nThe LORD has given me a new heart, one of flesh and not of stone. He has given me eyes to see and ears to hear the encouragement the community gives. All promises the Scriptures make, and I have the privilege of walking them out.\nWhat this stone means to me is surrender. The help was always there, as long as I surrendered the ego that said I needed to do it on my own.");
    const hist = JSON.parse(a[SH]);
    t("history: the Ending Well stone kept, the new stone added", hist.length === 2 && hist[0].id === "ew9" && hist[1].answers.from === "set-a-stone" && hist[1].answers.pieceTitle === "Set a Stone");
    t("the new entry is in the stone shape: the words as typed, return date, no returns, not offered", hist[1].text === a[SW] && hist[1].answers.text === EX.text && hist[1].answers.stonefor === EX.stonefor && /^\d{4}-\d{2}-\d{2}$/.test(hist[1].answers.returnAt) && hist[1].answers.returns === "[]" && hist[1].answers.rid === "" && !("meta" in hist[1].answers));
    t("Saved: the engine's words", /Saved to your page/.test(d.getElementById("apsNote").textContent) && /Finished\. It is on your page\./.test(d.getElementById("apsNote").textContent));
    await sleep(60);
    t("build 5, after Save: the dates stand under the stone — set on today, ask yourself three months on", /^Set on [A-Z][a-z]+ \d{1,2}, \d{4}\.\nOn [A-Z][a-z]+ \d{1,2}, \d{4}, ask yourself what it means to you\.$/.test(d.getElementById("sasDates").textContent) && d.getElementById("sasDates").style.display === "" && d.getElementById("sasAfter").textContent === "It is on your page.");
    { const r = new Date(d.getElementById("sas_returnAt").value + "T12:00:00"); const want = r.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); t("build 5: the return date shown is the record's return date", d.getElementById("sasDates").textContent.indexOf("On " + want + ",") > 0); }
    { let copied = ""; w.navigator.clipboard = { writeText: (t) => { copied = t; return Promise.resolve(); } }; d.getElementById("sasCopy").click(); await sleep(20);
      t("build 5: Copy carries the three lines and then the two dates", copied.indexOf(a[SW]) === 0 && /\n\nSet on [A-Z][a-z]+ \d{1,2}, \d{4}\.\nOn /.test(copied)); }
    { const v = await mount({ voice: true }); await sleep(80); const n = v.d.querySelector(".sas-slot .aps-voice-note");
      t("build 5: the voice note sits under the first writing box, not inside it", !!n && !n.closest(".ew-line") && n.previousElementSibling && n.previousElementSibling.classList.contains("ew-line") && v.d.querySelectorAll(".aps-voice-note").length === 1); }
    t("build 5: one-sentence help lines; the second sentence sits under its pick list", d.querySelectorAll(".sas-slot")[0].querySelector(".ew-slot-prompt").textContent === "Who will find this one day and ask?" && /Naming well is a skill/.test(d.querySelectorAll(".sas-slot")[0].querySelector(".sas-row-note").textContent) && d.querySelectorAll(".sas-slot")[2].querySelector(".sas-row-note").textContent === "Pick a name to see where it comes from, or give your own.");
    t("build 5: the lede, as ruled", d.querySelector(".ew-lede").textContent === "In three lines, mark what God has done and name the stone. It is kept on your page, and three months from now it asks you to look again: what has the LORD done since?");
    t("after Save: the offer line, the ruled words, No name the default", d.querySelector("#sasOffer .ap-stone-offer-open") && d.querySelector("#sasOffer .ap-stone-offer-open").textContent === "Set it where others can see it" && d.querySelector('#sasOffer input[value="none"]').checked);
    // his page reads both stones, newest first
    const pile = d.createElement("div"); d.body.appendChild(pile);
    const l = await w.APStone.render(pile, { offer: false });
    t("his page: both stones, newest first, each with its date and where from", l.length === 2 && l[0].from === "set-a-stone" && l[1].id === "ew9" && pile.querySelectorAll(".ap-stone").length === 2 && /from Set a Stone/.test(pile.querySelectorAll(".ap-stone-meta")[0].textContent) && /from Ending Well/.test(pile.querySelectorAll(".ap-stone-meta")[1].textContent));
    t("his page: the Set a Stone lines read back with their opening words", l[0].text.indexOf("The LORD has ") === 0 && l[0].stonefor.indexOf("This stone is for ") === 0 && l[0].meaning.indexOf("What this stone means to me is ") === 0 && pile.querySelectorAll(".ap-stone")[0].querySelectorAll(".ap-stone-text").length === 3);
    t("his page: the v1 Ending Well stone drawn whole, one line", pile.querySelectorAll(".ap-stone")[1].querySelectorAll(".ap-stone-text").length === 1);
    // the offer goes to the sheet with the three lines
    d.querySelector("#sasOffer .ap-stone-offer-open").click();
    d.querySelector('#sasOffer input[value="name"]').click();
    d.querySelector("#sasOffer .ap-stone-offer-go").click(); await sleep(60);
    t("offer: the three lines, first name, its own unit, from Set a Stone", log.posts.length === 1 && log.posts[0].testimony === a[SW] && log.posts[0].attribution === "Full name" && /^stone/.test(log.posts[0].unit) && log.posts[0].from === "Set a Stone");
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
