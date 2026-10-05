// story.js v18.7 (expectations moved to v18.8): the voice pick — natural first, then online, then Google/Apple premium, then any English voice; the oldest Microsoft voice last; the pick is kept until the voice list changes.
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
t("v18.7 header", /AP-STORY-MODULE-v18\.8/.test(src.slice(0, 120)));
{ const { w, spoken } = world([V("Microsoft David - English (United States)", "en-US", true), V("Microsoft Zira - English (United States)", "en-US"), V("Microsoft Aria Online (Natural) - English (United States)", "en-US"), V("Google US English", "en-US")]);
  w.APStory.voice.say("hello"); t("Windows with a natural voice: the natural one is picked over the default David", spoken[0].voice && /Aria Online \(Natural\)/.test(spoken[0].voice.name)); }
{ const { w, spoken } = world([V("Microsoft David - English (United States)", "en-US", true), V("Google US English", "en-US"), V("Google UK English Male", "en-GB")]);
  w.APStory.voice.say("hello"); t("Chrome without a natural voice: Google UK English Male over Google US English and David (v18.8)", spoken[0].voice && spoken[0].voice.name === "Google UK English Male"); }
{ const { w, spoken } = world([V("Microsoft David - English (United States)", "en-US", true)]);
  w.APStory.voice.say("hello"); t("only David: David", spoken[0].voice && /David/.test(spoken[0].voice.name)); }
{ const { w, spoken } = world([V("Samantha", "en-US", true), V("Alex", "en-US"), V("Amélie", "fr-FR")]);
  w.APStory.voice.say("hello"); t("Apple: Alex over Samantha (v18.8); a French voice never", spoken[0].voice && spoken[0].voice.name === "Alex"); }
{ const { w, spoken } = world([]);
  w.APStory.voice.say("hello"); t("no voice list: speaks with the device default (no voice set)", spoken.length === 1 && !spoken[0].voice); }
console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
