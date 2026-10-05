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
    t("title and the two Scriptures, ESV, short — Joshua 4:21–24 (the crossing on dry ground, why others should see it) then 1 Samuel 7:12", d.querySelector(".sas-band-t").textContent === "Set a Stone" && /Joshua 4:21–24/.test(d.querySelectorAll(".ew-quote")[0].textContent) && /passed over this Jordan on dry ground/.test(d.querySelectorAll(".ew-quote")[0].textContent) && /all the peoples of the earth may know/.test(d.querySelectorAll(".ew-quote")[0].textContent) && !/Joshua 4:6/.test(d.body.textContent) && /Till now the LORD has helped us/.test(d.querySelectorAll(".ew-quote")[1].textContent));
    t("build 4: the meaning help line is the answer to the children's question; the page pins stone.js to John's commit", /^The answer you give when someone asks what this stone means\.$/.test(d.querySelectorAll(".ew-slot-prompt")[2].textContent) && /Pick one to see where it comes from, or write your own\./.test(page) && page.split("ancient-path@816b4b08e04c568ee77b2d492c4980532803db3d/stone.js").length === 2 && page.indexOf("0ad7e1c54b10ea5446cc6bc6a145e25ed91eab7a") < 0);
    t("build 9: the Rock · Jesus after the two stones, the frame split around it; build 7: under each scene, what the stone was — set to be asked, the stone of help on the ground of the loss; the frame line says why three lines and why it asks him", (() => { const w = [...d.querySelectorAll(".sas-what")].map(e => e.textContent); return w.length === 3 && /^The stones point past themselves\. The Rock that gave Israel water in the wilderness/.test(w[2]) && /The stone does not change you; it reminds you who does\.$/.test(w[2]) && [...d.querySelectorAll(".sas-scene-k")].map(e => e.textContent)[2] === "The Rock · Jesus" && /the Rock was Christ\. <b>1 Corinthians 10:4<\/b>/.test(page) && d.querySelectorAll(".sas-frame").length === 2 && /^God promised Abraham a land and a people\. Generations later Israel stood at the river, and the promise needed God himself to keep it/.test(w[0]) && /^Israel had the land and broke the covenant\. For twenty years they chased other gods, and they lost the Ark at a place already called Ebenezer\./.test(w[1]) && /gave it the same name: Ebenezer, stone of help — help they had not earned\. The name of the loss became the name of the help\. That is the work we do together in story: the hurt is named, and the name becomes testimony\. God brought them back: from twenty years of idols, to the LORD they had left\.$/.test(w[1]) && d.querySelector(".sas-what").previousElementSibling.classList.contains("ew-quote") && d.querySelectorAll(".sas-frame")[0].textContent === "Two stones, and one circle around them: as the mountains surround Jerusalem, the LORD surrounds his people — going in, and coming back. Neither stone was set from a place of strength, and both were set to be asked about." && d.querySelectorAll(".sas-frame")[1].textContent === "What about you? Can you stand on his promises and accept that, at times, he will step in for you? That is why your stone has three lines and a name — and why, three months from now, it asks you to look again." && [...d.querySelectorAll(".sas-scene-k")].map(e => e.textContent).join("|") === "Possession of the promise · In|Divine intervention · Back|The Rock · Jesus" && /Gilgal means a circle\. The LORD was with his people — with them as they went in, with them when they would need him to step in\. Immanuel, God with us\./.test(w[0]) && !/ring|midst/.test(w[0]) && !/Both were named/.test(d.querySelectorAll(".sas-frame")[0].textContent) && /^Three months from now, this stone comes back to you\. You named it\. Write, or at least sit with, what you found on the path between that day and this one — as you grow with God and with the men walking beside you\. For example: “You named this stone surrender\. What has the LORD done in you since\?” — “He keeps showing me the fight I pick back up, and he keeps taking it out of my\u00a0hands\.” Then set the next\u00a0return\.$/.test(d.querySelector(".sas-return-ex").textContent) && /\.sas-where:empty\{display:none\}/.test(page); })());
    t("build 7: the The-LORD-has help line — the marker on the path, then in or back, each with where he was", d.querySelectorAll(".ew-slot-prompt")[1].textContent === "A stone is a marker on the path. Did God bring you in — from a place you could not leave on your own, into a life you did not have? Say what you crossed and how he brought you over. Or did God bring you back — from wandering, to what you had and lost? Say where you were, and how he helped you.");
    t("build 7: two taps under the LORD line start his line — in or back — and show their context; the line keeps growing after the tap", (() => { const ws = [...d.querySelectorAll('.ew-words[data-for="text"] .ew-word')]; if (ws.length !== 2 || ws[0].textContent !== "brought me in from" || ws[1].textContent !== "brought me back from") return false; ws[1].click(); const v = d.getElementById("sas_text").value; const wh = d.getElementById("sasWhere_text").textContent; if (v !== "brought me back from " || !/^brought me back from — Back is the return\./.test(wh) || !ws[1].classList.contains("is-on")) return false; d.getElementById("sas_text").value = "brought me back from the far country."; d.getElementById("sas_text").dispatchEvent(new d.defaultView.Event("input", { bubbles: true })); const ok = ws[1].classList.contains("is-on") && /Back is the return/.test(d.getElementById("sasWhere_text").textContent) && d.querySelector(".sas-stone").textContent.indexOf("The LORD has brought me back from the far country.") >= 0; d.getElementById("sas_text").value = ""; d.getElementById("sas_text").dispatchEvent(new d.defaultView.Event("input", { bubbles: true })); return ok && d.querySelector('.ew-words[data-for="text"]').nextElementSibling.textContent === "Pick the one that is yours, or write your own."; })());
    t("build 10: the safety line sits at the foot, under Save, before the foot line", d.querySelector(".sas-safe") && !d.querySelector(".ew-safe") && d.querySelector(".sas-safe").nextElementSibling.classList.contains("sas-back") && d.querySelector(".sas-back").nextElementSibling.classList.contains("ew-foot") && d.querySelector(".sas-safe").textContent === "Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.");
    t("build 13: the foot leads to the reading room — ← Your Story, then What These Stones Mean → (/stones); the two apart", (() => { const as = [...d.querySelectorAll(".sas-back a")]; return as.length === 2 && as[0].getAttribute("href") === "/your-story" && as[1].getAttribute("href") === "/stones" && as[1].textContent === "What These Stones Mean →" && /\.ew-root \.sas-back a\+a\{margin-left:18px\}/.test(page) && /AP-SAS-v1 · build 13 \(/.test(page); })());
    const stems = [...d.querySelectorAll(".ew-stem")].map(s => s.textContent);
    t("three lines, the ruled stems in order", stems.join("|") === "This stone is for|The LORD has|What this stone means to me is");
    t("who it is for: the ruled pick list, roles only", [...d.querySelectorAll('.ew-words[data-for="stonefor"] .ew-word')].map(b => b.textContent).join("|") === "my son|my daughter|my wife|a friend|a man I walk with|my group|the man I was|myself, a year from now|someone who will ask one day");
    t("what it means: eight meanings — the two stones' own beside Samuel's", d.querySelectorAll('.ew-words[data-for="meaning"] .ew-word').length === 8 && [...d.querySelectorAll('.ew-words[data-for="meaning"] .ew-word')].map(b => b.textContent).join("|") === "a rescue|a crossing I could not make alone|help I did not earn|a new discipline|more hope|growth in faith|capacity to love|a sacrifice");
    t("John's example under each line, and under the name box", d.querySelectorAll(".sas-ex").length === 4 && d.querySelectorAll(".sas-ex")[3].textContent === "For exampleCrossing" && [...d.querySelectorAll(".sas-ex b")].every(b => b.textContent === "For example"));
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
    t("the examples match John's lines as the page shows them", [...d.querySelectorAll(".sas-ex")].slice(0, 3).map(e => e.textContent.replace(/^For example/, "")).join("|") === stoneText.join("|"));
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
    t("build 5, after Save: the dates stand under the stone — set on today, ask yourself three months on", /^Set on [A-Z][a-z]+ \d{1,2}, \d{4} · asks you on [A-Z][a-z]+ \d{1,2}, \d{4}\.$/.test(d.getElementById("sasDates").textContent) && d.getElementById("sasDates").style.display === "" && d.getElementById("sasAfter").textContent === "It is on your page.");
    { const r = new Date(d.getElementById("sas_returnAt").value + "T12:00:00"); const want = r.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }); t("build 5: the return date shown is the record's return date", d.getElementById("sasDates").textContent.indexOf("asks you on " + want + ".") > 0); }
    { let copied = ""; w.navigator.clipboard = { writeText: (t) => { copied = t; return Promise.resolve(); } }; d.getElementById("sasCopy").click(); await sleep(20);
      t("build 10: Copy carries the three lines and then the dates (no name was given)", copied.indexOf(a[SW]) === 0 && /\n\nSet on [A-Z][a-z]+ \d{1,2}, \d{4} · asks you on /.test(copied)); }
    { /* build 10: the name box — fourth, its own list, nothing guessed; the name heads the finished stone, travels in the record, and Copy and the printed sheet carry it */
      const nb = d.querySelectorAll(".sas-slot")[3];
      t("build 10: the name box stands fourth — 'Name this stone', one word or two, Samuel's Help; ten names to tap; no grey stem", nb.classList.contains("sas-slot-name") && nb.querySelector(".ew-slot-name").textContent === "Name this stone" && nb.querySelector(".ew-slot-prompt").textContent === "One word, or two. Samuel named his Help." && [...nb.querySelectorAll(".ew-word")].map(b => b.textContent).join("|") === "Help|Crossing|Surrender|Rescue|Hope|Faith|Discipline|Love|Sacrifice|Home" && nb.querySelector(".sas-row-note").textContent === "Tap one, or write your own." && !nb.querySelector(".ew-stem") && d.getElementById("sas_name").value === "");
      [...nb.querySelectorAll(".ew-word")].find(b => b.textContent === "Crossing").click(); await sleep(10);
      t("build 10: tapping Crossing names the stone — the name stands over the three lines in Your stone and is not a fourth line", d.getElementById("sas_name").value === "Crossing" && d.getElementById("sasStoneName").textContent === "Crossing" && d.getElementById("sasStoneName").style.display === "" && d.getElementById("sasStone").textContent.split("\n").length === 3);
      d.getElementById("apsSave").click(); await sleep(80);
      const a2 = log.patches[log.patches.length - 1].answers; const h2 = JSON.parse(a2[SH]);
      t("build 10: the record carries the name; whole stays the three lines", h2[h2.length - 1].answers.name === "Crossing" && a2[SW] === a[SW] && JSON.parse(a2[SJ]).name === "Crossing");
      let copied2 = ""; w.navigator.clipboard = { writeText: (t) => { copied2 = t; return Promise.resolve(); } }; d.getElementById("sasCopy").click(); await sleep(20);
      t("build 10: Copy = the name, the three lines, the dates", copied2.indexOf("Crossing\n" + a[SW] + "\n\nSet on ") === 0);
      let printed = null; const fake = { document: { open() {}, write(h) { printed = h; }, close() {} }, focus() {}, print() { fake.printed = true; } }; w.open = () => fake; d.getElementById("sasPrint").click(); await sleep(300);
      t("build 10: Print is a clean sheet of the stone alone — name, lines, dates, the Ancient Path line, no site", !!printed && /<p class="n">Crossing<\/p>/.test(printed) && printed.split('<p class="l">').length === 4 && /Set on /.test(printed) && /ancientpathcoaching\.com\/set-a-stone/.test(printed) && !/G-VKPN74MHRZ|sectionsWrapper/.test(printed) && fake.printed === true);
    }
    { /* build 10: a stone page always starts empty — ?open=1 is dropped before the engine looks */
      const prior = [{ id: "s1", when: "2026-10-04T14:00:00.000Z", text: "The LORD has given me a new heart.", answers: { stonefor: "This stone is for my son.", text: "The LORD has given me a new heart.", meaning: "What this stone means to me is surrender.", from: "set-a-stone", piece: "sas", pieceTitle: "Set a Stone", returnAt: "2027-01-04", returns: "[]", rid: "", shown: "" } }];
      const o = await mount({ query: "?open=1", latest: { [SU]: { answers: { [SW]: "x", [SJ]: JSON.stringify({ stonefor: "my son.", text: "given me a new heart.", meaning: "surrender.", meta: JSON.stringify({ step: 3, finished: true }) }), [SH]: JSON.stringify(prior) } } } }); await sleep(300);
      type(o.w, o.d, "sas_text", "brought me back from the far country."); o.d.getElementById("apsSave").click(); await sleep(80);
      const hh = JSON.parse(o.log.patches[o.log.patches.length - 1].answers[SH]);
      t("build 10: arriving by the handoff link, the boxes are empty, the address no longer says open, and Save adds a second stone instead of overwriting the first", o.d.getElementById("sas_text").value === "brought me back from the far country." && !/open=/.test(o.w.location.search) && hh.length === 2 && hh[0].id === "s1" && /far country/.test(hh[1].answers.text));
      /* build 11: Edit — ?open=<id> loads that stone, name included, and Save updates it */
      const prior2 = JSON.parse(JSON.stringify(prior)); prior2[0].answers.name = "Surrender";
      const e = await mount({ query: "?open=s1", latest: { [SU]: { answers: { [SW]: "x", [SJ]: JSON.stringify({ stonefor: "my son.", text: "given me a new heart.", meaning: "surrender.", meta: JSON.stringify({ step: 3, finished: true }) }), [SH]: JSON.stringify(prior2) } } } }); await sleep(300);
      const loaded = { text: e.d.getElementById("sas_text").value, name: e.d.getElementById("sas_name").value, head: e.d.getElementById("sasStoneName").textContent };
      type(e.w, e.d, "sas_text", "given me a new heart, and kept it."); e.d.getElementById("apsSave").click(); await sleep(80);
      const he = JSON.parse(e.log.patches[e.log.patches.length - 1].answers[SH]);
      t("build 11: Edit — ?open=s1 loads that stone (its lines and its name) and Save updates it, one stone, same id", /open=s1/.test(e.w.location.search) && /given me a new heart\.$/.test(loaded.text) && loaded.name === "Surrender" && loaded.head === "Surrender" && he.length === 1 && he[0].id === "s1" && /kept it\./.test(he[0].answers.text) && he[0].answers.name === "Surrender");
    }
    { const v = await mount({ voice: true }); await sleep(80); const n = v.d.querySelector(".sas-slot .aps-voice-note");
      t("build 5: the voice note sits under the first writing box, not inside it", !!n && !n.closest(".ew-line") && n.previousElementSibling && n.previousElementSibling.classList.contains("ew-line") && v.d.querySelectorAll(".aps-voice-note").length === 1); }
    t("build 5: one-sentence help lines; the second sentence sits under its pick list", d.querySelectorAll(".sas-slot")[0].querySelector(".ew-slot-prompt").textContent === "Who will find this one day and ask?" && /Naming well is a skill/.test(d.querySelectorAll(".sas-slot")[0].querySelector(".sas-row-note").textContent) && d.querySelectorAll(".sas-slot")[2].querySelector(".sas-row-note").textContent === "Pick one to see where it comes from, or write your own.");
    t("build 11: the lede, as ruled, in the navy band under Before you begin; no Your Page link at the top; the foot leads to Your Story and Report a bug", d.querySelector(".sas-band-eyebrow").textContent === "Before you begin" && d.querySelector(".ew-root > .sas-band") && d.querySelector(".ew-root > .sas-band").previousElementSibling.tagName === "STYLE" && !d.querySelector(".ew-top-nav") && d.querySelector(".sas-back a").getAttribute("href") === "/your-story" && d.querySelector(".sas-back a").textContent === "← Your Story" && /Report a bug/.test(d.querySelector(".ew-foot").textContent) && d.querySelector(".sas-band-lede").textContent === "Three months from now you will be asked one question: what has the LORD done since? Set the stone today — who it is for, what he has done, its name — and the question will be waiting with your own words under it. That is the work: seeing the ground you have covered, and who covered it with you.");
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
    t("offer: the name over the three lines (v2.7), his name, its own unit, from Set a Stone", log.posts.length === 1 && log.posts[0].testimony === "Crossing\n" + a[SW] && l[0].name === "Crossing" && pile.querySelector(".ap-stone .ap-stone-name").textContent === "Crossing" && log.posts[0].attribution === "Full name" && /^stone/.test(log.posts[0].unit) && log.posts[0].from === "Set a Stone");
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
