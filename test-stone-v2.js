/* stone.js v2 — the record, the return, the offer, the public list. Run: node test-stone-v2.js */
const { JSDOM } = require("jsdom");
const fs = require("fs");
const src = fs.readFileSync(__dirname + "/stone.js", "utf8");
let pass = 0, fail = 0;
function ok(c, m) { if (c) { pass++; } else { fail++; console.log("FAIL " + m); } }

function world(opts) {
  opts = opts || {};
  const dom = new JSDOM("<!doctype html><html><body><div id='pile'></div></body></html>", { runScripts: "outside-only", url: "https://www.ancientpathcoaching.com/start" });
  const w = dom.window;
  const store = { history: opts.history || "[]", whole: "", json: "" };
  const submits = [];
  w.APStory = {
    signedIn: () => opts.signedIn !== false,
    track: () => true,
    latest: (unit) => Promise.resolve({ when: new Date().toISOString(), answers: { H: store.history, W: store.whole, J: store.json } }),
    _submit: (unit, answers) => { submits.push(answers); answers.forEach(a => { if (a.blockId === "H") store.history = a.value; if (a.blockId === "W") store.whole = a.value; if (a.blockId === "J") store.json = a.value; }); return Promise.resolve({ status: "submitted" }); }
  };
  const posts = [];
  w.fetch = (url, init) => {
    if (/\/api\/user_stats/.test(url)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ me: { id: "u123456789", first_name: "John", last_name: "Sherrod", email: "j@x.com" } }) });
    if (/status=/.test(url)) return Promise.resolve({ ok: true, json: () => Promise.resolve({ pieces: opts.status || [] }) });
    if (init && init.method === "POST") { const b = JSON.parse(init.body); posts.push(b); return Promise.resolve({ ok: true, json: () => Promise.resolve({ ok: true, rid: "RID1", state: b.op === "offer" ? "offered" : "kept" }) }); }
    return Promise.resolve({ ok: false, json: () => Promise.resolve(null) });
  };
  w.eval(src);
  w.APStone.config({ unit: "U", blocks: { whole: "W", json: "J", history: "H" }, script: "https://script.example/exec" });
  return { w, store, submits, posts };
}

(async () => {
  // 1. a v1-shaped stone reads as a whole stone, nothing invented
  {
    const v1 = [{ id: "a1", when: "2026-10-02T15:00:00.000Z", text: "Do the next right thing.", answers: { text: "Do the next right thing.", from: "ending-well", piece: "p1", pieceTitle: "Ending Well" } }];
    const { w } = world({ history: JSON.stringify(v1) });
    const l = await w.APStone.list();
    ok(l.length === 1, "v1 read: one stone");
    ok(l[0].text === "Do the next right thing." && l[0].stonefor === "" && l[0].meaning === "", "v1 read: line kept, other fields empty");
    ok(l[0].returns.length === 0 && l[0].rid === "", "v1 read: no returns, not offered");
    ok(l[0].returnAt === "2027-01-02", "v1 read: return three months on, computed (" + l[0].returnAt + ")");
    ok(w.APStone.lines(l[0]).length === 1, "v1 read: one line");
    ok(l[0].text === "Do the next right thing." && w.APStone.wholeText(l[0]) === "Do the next right thing.", "an Ending Well stone keeps his own line: no Till-now words put on it, offered as written");
    const host = w.document.getElementById("pile");
    await w.APStone.render(host, { offer: false, today: new Date("2026-10-03T12:00:00") });
    ok(host.querySelectorAll(".ap-stone").length === 1 && host.querySelector(".ap-stone-text").textContent === "Do the next right thing.", "v1 drawn on his page");
    ok(!host.querySelector(".ap-stone-ask"), "v1 not due yet: no question");
    ok(/October 2, 2026 · from Ending Well/.test(host.querySelector(".ap-stone-meta").textContent), "v1 meta line: date and where from");
  }
  // 2. set a v2 stone from Set a Stone, then one from Ending Well; both land in the one list, newest first
  {
    const { w, store, submits } = world();
    const st = await w.APStone.set({ text: "The LORD has kept me sober for a year.", stonefor: "This stone is for my son.", meaning: "What this stone means to me is a new discipline.", from: "set-a-stone", pieceTitle: "Set a Stone" });
    ok(st.id && st.returnAt && st.stonefor === "This stone is for my son.", "set: record carries the three lines and a return date");
    const list1 = JSON.parse(store.history);
    ok(list1.length === 1 && list1[0].answers.meaning === "What this stone means to me is a new discipline." && list1[0].answers.returns === "[]", "set: stored in the story.js entry shape, v2 fields in answers");
    ok(store.whole.split("\n").length === 3, "set: whole block holds the three lines");
    await new Promise(r => setTimeout(r, 2));
    const st2 = await w.APStone.set({ text: "What God did was put me in a room with men.", from: "ending-well", piece: "ew1", pieceTitle: "Ending Well", stonefor: "This stone is for my group." });
    const l = await w.APStone.list();
    ok(l.length === 2 && l[0].id === st2.id, "two stones, newest first");
    // a second set for the same Ending Well entry replaces, not adds
    await w.APStone.set({ text: "What God did was keep me.", from: "ending-well", piece: "ew1", pieceTitle: "Ending Well" });
    const l2 = await w.APStone.list();
    ok(l2.length === 2 && l2.filter(s => s.piece === "ew1").length === 1 && l2.filter(s => s.piece === "ew1")[0].text === "What God did was keep me.", "same piece set twice: one stone, the newer words");
    ok(submits.length === 3, "three writes");
  }
  // 3. the return: due on the day, the answer is kept dated, the next return is a year on
  {
    const v2 = [{ id: "b1", when: "2026-07-01T15:00:00.000Z", text: "Till now, the LORD has brought me back.", answers: { text: "Till now, the LORD has brought me back.", stonefor: "This stone is for my wife.", meaning: "What this stone means to me is more hope.", from: "set-a-stone", pieceTitle: "Set a Stone", returnAt: "2026-10-01", returns: "[]" } }];
    const { w, store } = world({ history: JSON.stringify(v2) });
    const l = await w.APStone.list();
    ok(w.APStone.isDue(l[0], new Date("2026-10-03T12:00:00")) && !w.APStone.isDue(l[0], new Date("2026-09-30T12:00:00")), "due on and after the day, not before");
    const host = w.document.getElementById("pile");
    await w.APStone.render(host, { offer: false, today: new Date("2026-10-03T12:00:00") });
    const ask = host.querySelector(".ap-stone-ask");
    ok(ask && ask.querySelector(".ap-stone-ask-q").textContent === "What does it mean to you now?", "due: the one question shows");
    ok(ask && ask.querySelector(".ap-stone-ask-lead") && ask.querySelector(".ap-stone-ask-lead").textContent === "Three months on. Come back to the\u00a0stone." && ask.querySelector(".ap-stone-ask-ground").textContent === "Gilgal means to roll. Joshua set the stones there the day Israel came in, and the LORD rolled their shame away on that ground. Samuel went back there to renew the kingdom. In and back meet on the same\u00a0ground." && ask.firstChild.className === "ap-stone-ask-lead" && ask.children[1].className === "ap-stone-ask-ground" && ask.children[2].className === "ap-stone-ask-q", "v2.4 due: the lead and the Gilgal ground stand above the question, in that order");
    const s = await w.APStone.answer("b1", "It means I am still here.");
    ok(s.returns.length === 1 && s.returns[0].text === "It means I am still here." && /^\d{4}-\d{2}-\d{2}$/.test(s.returnAt), "answer kept with its date, next return set");
    const yr = new Date(s.returns[0].when); const exp = new Date(yr.getFullYear() + 1, yr.getMonth(), yr.getDate());
    ok(s.returnAt === exp.getFullYear() + "-" + ("0" + (exp.getMonth() + 1)).slice(-2) + "-" + ("0" + exp.getDate()).slice(-2), "next return is one year on (" + s.returnAt + ")");
    const stored = JSON.parse(store.history)[0];
    ok(JSON.parse(stored.answers.returns).length === 1 && stored.answers.stonefor === "This stone is for my wife.", "the answer is in the record; the three lines untouched");
    host.innerHTML = "";
    await w.APStone.render(host, { offer: false, today: new Date("2026-10-03T12:00:00") });
    ok(host.querySelector(".ap-stone-return-text").textContent === "It means I am still here." && !host.querySelector(".ap-stone-ask"), "after the answer: shown under the stone, no question until next year");
  }
  // 4. the offer: three lines to the sheet, name choice, unit per stone; take it back
  {
    const v2 = [{ id: "c1", when: "2026-10-03T15:00:00.000Z", text: "The LORD has given me a year.", answers: { text: "The LORD has given me a year.", stonefor: "This stone is for a friend.", meaning: "What this stone means to me is growth in faith.", from: "set-a-stone", pieceTitle: "Set a Stone", returnAt: "2027-01-03", returns: "[]" } }];
    const { w, store, posts } = world({ history: JSON.stringify(v2) });
    const l = await w.APStone.list();
    const s = await w.APStone.offer(l[0], { shown: "name" });
    ok(posts.length === 1 && posts[0].op === "offer" && posts[0].unit === "stonec1" && posts[0].title === "Stone c1", "offer: one row, its own unit and title");
    ok(posts[0].testimony === "This stone is for a friend.\nThe LORD has given me a year.\nWhat this stone means to me is growth in faith.", "offer: the three lines, nothing else");
    ok(posts[0].attribution === "Full name" && posts[0].consent === "yes" && posts[0].from === "Set a Stone", "v2.3 offer: his name (first and last), consent, where from");
    ok(s.rid === "RID1" && s.shown === "name" && JSON.parse(store.history)[0].answers.rid === "RID1", "offer: rid and name choice kept on the record");
    const host = w.document.getElementById("pile");
    await w.APStone.render(host, { today: new Date("2026-10-03T12:00:00") });
    ok(/Offered\./.test(host.querySelector(".ap-stone-offer-state").textContent) && host.querySelector(".ap-stone-offer-back").textContent === "Take it back", "drawn as offered with Take it back");
    const back = await w.APStone.withdraw(s);
    ok(posts[1].op === "withdraw" && posts[1].rid === "RID1" && back.rid === "", "take it back: withdrawn, record forgets the rid");
  }
  // 5. the offer line before any offer: default No name, the ruled words
  {
    const v2 = [{ id: "d1", when: "2026-10-03T15:00:00.000Z", text: "The LORD has.", answers: { text: "The LORD has.", returnAt: "2027-01-03", returns: "[]" } }];
    const { w } = world({ history: JSON.stringify(v2) });
    const host = w.document.getElementById("pile");
    await w.APStone.render(host, { today: new Date("2026-10-03T12:00:00") });
    ok(host.querySelector(".ap-stone-offer-open").textContent === "Set it where others can see it", "offer line: the ruled words");
    ok(host.querySelector(".ap-stone-offer-what").textContent === "Your three lines, your name or no name, and the month. Nothing else. You can take it back any time.", "offer line: the ruled explanation");
    ok([...host.querySelectorAll(".ap-stone-offer-radio")].map(l => l.textContent.trim()).join("|") === "Your name|No name" && host.querySelector(".ap-stone-offer-radio input[value=none]").checked, "v2.3: the two choices are his name or no name, no name the default");
    ok(host.querySelector("#apStoneNoned1").checked && !host.querySelector("#apStoneFirstd1").checked, "offer line: No name is the default");
    ok(host.querySelector(".ap-stone-offer-panel").style.display === "none", "offer panel closed until he opens it");
  }
  // 6. the public list: only stones, newest first, a re-offered stone shown once, lines split
  {
    const { w } = world();
    const l = w.APStone._parseFeed({ pieces: [
      { id: "1", name: "John", title: "Stone a", from: "Set a Stone", piece: "This stone is for my son.\nThe LORD has.\nWhat this stone means to me is hope.", at: "2026-10-01T00:00:00Z" },
      { id: "2", name: "", title: "Where I’m From", from: "Where I’m From", piece: "I am from…", at: "2026-10-02T00:00:00Z" },
      { id: "3", name: "John", title: "Stone a", from: "Set a Stone", piece: "This stone is for my son.\nThe LORD has.\nWhat this stone means to me is hope.\nJanuary 1, 2027 · What it means to me now: still true.", at: "2027-01-01T00:00:00Z" },
      { id: "4", name: "", title: "Stone b", from: "Ending Well", piece: "What God did was keep me.", at: "2026-12-20T00:00:00Z" }
    ] });
    ok(l.length === 2 && l[0].title === "Stone a" && l[0].lines.length === 4 && l[1].title === "Stone b" && l[1].lines.length === 1, "feed: stones only, newest wins, newest first");
    ok(l[0].name === "John" && l[1].name === "", "feed: first name or none");
  }
  // 7. not signed in: nothing read, set refused
  {
    const { w } = world({ signedIn: false, history: JSON.stringify([{ id: "z", when: "2026-10-01T00:00:00Z", text: "x" }]) });
    ok((await w.APStone.list()).length === 0, "signed out: no list");
    let refused = false; try { await w.APStone.set({ text: "x" }); } catch (e) { refused = true; }
    ok(refused, "signed out: set refused");
  }
  console.log(pass + " passed, " + fail + " failed" + (fail ? "" : " — all passed"));
  process.exit(fail ? 1 : 0);
})();
