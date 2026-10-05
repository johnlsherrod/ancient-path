// John's walk of build 9 (5 Oct): a second stone on a page that already holds one. Does Save make a second entry or overwrite the first? Do the dates show? What does ?open=1 (the phone handoff) open afterwards?
const fs = require("fs"); const src = fs.readFileSync(__dirname + "/test-sas-v1.js", "utf8");
const head = src.slice(0, src.indexOf("const EX = "));
eval(head.replace(/const \{ JSDOM \}/, "var { JSDOM }").replace(/const (story|stone|page|scripts|markup|ids|SU|SW|SJ|SH|sleep|t|type) =/g, "var $1 =").replace(/let fails/, "var fails").replace(/async function mount/, "mount = async function"));
(async () => {
  const first = [{ id: "e1", when: "2026-10-04T14:00:00.000Z", text: "The LORD has given me a new heart.", answers: { stonefor: "This stone is for my son.", text: "The LORD has given me a new heart.", meaning: "What this stone means to me is surrender.", from: "set-a-stone", piece: "sas", pieceTitle: "Set a Stone", returnAt: "2027-01-04", returns: "[]", rid: "", shown: "" } }];
  const latest = {}; latest[SU] = { answers: {} }; latest[SU].answers[SW] = "This stone is for my son.\nThe LORD has given me a new heart.\nWhat this stone means to me is surrender."; latest[SU].answers[SJ] = JSON.stringify({ stonefor: "my son.", text: "given me a new heart.", meaning: "surrender.", meta: JSON.stringify({ step: 3, finished: true }) }); latest[SU].answers[SH] = JSON.stringify(first);
  for (const query of ["", "?open=1"]) {
    const { w, d, log } = await mount({ latest: JSON.parse(JSON.stringify(latest)), query });
    await sleep(300);
    const before = { stonefor: d.getElementById("sas_stonefor").value, text: d.getElementById("sas_text").value };
    type(w, d, "sas_stonefor", "a man I walk with"); type(w, d, "sas_text", "brought me back from the upside-down world"); type(w, d, "sas_meaning", "a crossing I could not make alone");
    const save = [...d.querySelectorAll("button")].find(b => /^Save/.test(b.textContent.trim())); save.click();
    await sleep(700);
    const hist = JSON.parse(log.patches[log.patches.length - 1].answers[SH]);
    console.log("arrival " + (query || "(plain)") + ": boxes on arrival =", JSON.stringify(before), "\n  after Save: history entries =", hist.length, "· texts =", hist.map(e => e.answers.text), "\n  dates line shown =", d.getElementById("sasDates").style.display !== "none" ? JSON.stringify(d.getElementById("sasDates").textContent) : "NO", "· after line =", d.getElementById("sasAfter").textContent);
  }
})();
