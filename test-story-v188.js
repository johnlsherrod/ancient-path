// story.js v18.8: a man's voice first — a man's natural voice, then Google UK English Male, then Apple's men, then any man's voice, then the natural voices of either kind, then the rest. One pick for every page.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const src = fs.readFileSync(__dirname + "/story.js", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
function world(voices) {
  const dom = new JSDOM("<!doctype html><html lang='en'><body></body></html>", { runScripts: "outside-only", url: "https://www.ancientpathcoaching.com/x" });
  const w = dom.window; w.getUserToken = () => "tok"; w.matchMedia = () => ({ matches: false });
  const spoken = [];
  w.SpeechSynthesisUtterance = function (t) { this.text = t; };
  w.speechSynthesis = { speak(u) { spoken.push(u); }, cancel() {}, getVoices: () => voices, addEventListener() {} };
  w.eval(src); return { w, spoken };
}
const V = (name, lang, def) => ({ name, lang, default: !!def });
const pick = voices => { const { w, spoken } = world(voices); w.APStory.voice.say("hello"); return spoken[0].voice && spoken[0].voice.name; };
t("v18.8 header", /AP-STORY-MODULE-v18\.8/.test(src.slice(0, 120)));
t("Edge on Windows: Guy Online (Natural) over Aria Online (Natural), Jenny, Zira and the default David",
  pick([V("Microsoft David - English (United States)", "en-US", true), V("Microsoft Zira - English (United States)", "en-US"), V("Microsoft Aria Online (Natural) - English (United States)", "en-US"), V("Microsoft Jenny Online (Natural) - English (United States)", "en-US"), V("Microsoft Guy Online (Natural) - English (United States)", "en-US")]) === "Microsoft Guy Online (Natural) - English (United States)");
t("a man's natural voice in another English: Ryan (en-GB) over Aria (en-US)",
  pick([V("Microsoft Aria Online (Natural) - English (United States)", "en-US", true), V("Microsoft Ryan Online (Natural) - English (United Kingdom)", "en-GB")]) === "Microsoft Ryan Online (Natural) - English (United Kingdom)");
t("Chrome on Windows without natural voices: Google UK English Male over Google US English and David",
  pick([V("Microsoft David - English (United States)", "en-US", true), V("Google US English", "en-US"), V("Google UK English Female", "en-GB"), V("Google UK English Male", "en-GB")]) === "Google UK English Male");
t("Android Chrome: Google UK English Male over Google US English",
  pick([V("Google US English", "en-US", true), V("Google UK English Male", "en-GB")]) === "Google UK English Male");
t("Mac: Alex (US) over Daniel (UK), Samantha and Karen; iPhone without Alex: Daniel over Samantha",
  pick([V("Samantha", "en-US", true), V("Alex", "en-US"), V("Daniel", "en-GB"), V("Karen", "en-AU")]) === "Alex" && pick([V("Samantha", "en-US", true), V("Daniel", "en-GB"), V("Karen", "en-AU")]) === "Daniel");
t("Mac without Daniel: Alex over Samantha",
  pick([V("Samantha", "en-US", true), V("Alex", "en-US")]) === "Alex");
t("only women's natural voices: Aria Online (Natural) still over the old David",
  pick([V("Microsoft David - English (United States)", "en-US", true), V("Microsoft Aria Online (Natural) - English (United States)", "en-US")]) === "Microsoft Aria Online (Natural) - English (United States)");
t("the old Microsoft Mark (not Online) is a man's voice but the oldest kind: Aria Natural over it; Mark over Zira",
  pick([V("Microsoft Mark - English (United States)", "en-US"), V("Microsoft Aria Online (Natural) - English (United States)", "en-US")]) === "Microsoft Aria Online (Natural) - English (United States)" && pick([V("Microsoft Zira - English (United States)", "en-US", true), V("Microsoft Mark - English (United States)", "en-US")]) === "Microsoft Mark - English (United States)");
t("only David: David", /David/.test(pick([V("Microsoft David - English (United States)", "en-US", true)])));
t("a French man never: Thomas (fr-FR) loses to Samantha (en-US)",
  pick([V("Thomas", "fr-FR", true), V("Samantha", "en-US")]) === "Samantha");
t("no voice list: speaks with the device default", (() => { const { w, spoken } = world([]); w.APStory.voice.say("hello"); return spoken.length === 1 && !spoken[0].voice; })());
t("the pick is kept and exposed: APStory.voice.bestVoice() returns the same voice twice", (() => { const { w } = world([V("Samantha", "en-US", true), V("Daniel", "en-GB")]); const a = w.APStory.voice.bestVoice(), b = w.APStory.voice.bestVoice(); return a === b && a.name === "Daniel"; })());
console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
