// Your Story hub v12 (Playwright, the site mocked): a published stone reads as a stone in In Their Own Words — its name is the card title, its lines the quote; the reader heads it by name with a line per paragraph; "A stone" without a name; a story card and the reader for a story are untouched; v11 otherwise unchanged.
const { chromium } = require("playwright"); const fs = require("fs");
const html = fs.readFileSync(__dirname + "/pages/your-story-v12.html", "utf8"), v11 = fs.readFileSync(__dirname + "/pages/your-story-v11.html", "utf8");
const doc = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}</style></head><body>' + html + '</body></html>';
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const FEED = { pieces: [
  { id: "s1", name: "John", title: "Stone s1", from: "Set a Stone", piece: "Help\nThis stone is for my son.\nThe LORD has kept me through a year I did not think I would finish.\nWhat this stone means to me is help.", at: "2026-10-01T13:00:00Z" },
  { id: "s2", name: "", title: "Stone s2", from: "Ending Well", piece: "What God did was put me in a room with men.", at: "2026-12-20T13:00:00Z" },
  { id: "p3", name: "Jordan", title: "Learning to Trust", from: "Where I’m From", piece: "I am from a long road.\nAnd a longer one back.\n\nSecond paragraph here.", at: "2026-11-05T13:00:00Z" }
] };
(async () => {
  t("v12 marker, v11 history, no Google tag", /<!-- AP-YS-v12 \(v12, 5 Oct/.test(html) && /\(v11, 5 Oct,/.test(html) && !/G-VKPN74MHRZ/.test(html));
  t("only the marker and the stone rule differ from v11", (() => { const a = v11.split("\n"), b = html.split("\n"); const removed = a.filter(l => !b.includes(l)), added = b.filter(l => !a.includes(l)); return removed.length === 3 && /AP-YS-v11/.test(removed[0]) && /card\.innerHTML/.test(removed[1]) && /sec\.innerHTML/.test(removed[2]) && added.length === 23 && added.every(l => /AP-YS-v12|v12:|stoneOf|var title|^\s*if \(|var lines|var first|var named|return \{|var st =|card\.innerHTML|sec\.innerHTML/.test(l)); })());
  const b = await chromium.launch({ executablePath: "/opt/pw-browsers/chromium" }).catch(() => chromium.launch());
  const p = await b.newPage({ viewport: { width: 1200, height: 900 } });
  await p.route("**/*", (r) => { const u = r.request().url();
    if (/ancientpathcoaching\.com\/your-story/.test(u)) return r.fulfill({ contentType: "text/html", body: doc });
    const m = /callback=([A-Za-z0-9_]+)/.exec(u); if (m) return r.fulfill({ contentType: "application/javascript", body: m[1] + "(" + JSON.stringify(FEED) + ")" });
    return r.fulfill({ status: 204, body: "" }); });
  await p.goto("https://www.ancientpathcoaching.com/your-story"); await p.waitForTimeout(800);
  const cards = await p.evaluate(() => [...document.querySelectorAll(".itow-card")].slice(4).map(c => ({ k: c.querySelector(".aph-card-k").textContent.trim(), t: c.querySelector(".aph-card-t").textContent, q: c.querySelector("blockquote").textContent, href: c.getAttribute("href") })));
  t("the named stone's card: Set a Stone · John, titled Help, the three lines as the quote with the name not repeated", cards[0] && cards[0].k === "Set a Stone John" && cards[0].t === "Help" && cards[0].q === "This stone is for my son. The LORD has kept me through a year I did not think I would finish. What this stone means to me is help." && cards[0].href === "/your-story?p=s1");
  t("the Ending Well stone with no name: titled A stone, its one line the quote", cards[1] && cards[1].t === "A stone" && cards[1].q === "What God did was put me in a room with men." && /Shared anonymously/.test(cards[1].k));
  t("a story card is untouched: its own title and the words of its text", cards[2] && cards[2].t === "Learning to Trust" && /^I am from a long road\. And a longer one back\. Second paragraph here\./.test(cards[2].q));
  await p.goto("https://www.ancientpathcoaching.com/your-story?p=s1"); await p.waitForTimeout(800);
  const r1 = await p.evaluate(() => { const sec = [...document.querySelectorAll(".itow-piece")].find(s => !s.hidden); return { title: document.title, ps: sec ? [...sec.querySelectorAll(".itow-body p")].map(x => x.textContent) : [] }; });
  t("the reader for the named stone: headed Help, a line per paragraph, the name not among them", /^Help · In Their Own Words/.test(r1.title) && r1.ps.join("|") === "This stone is for my son.|The LORD has kept me through a year I did not think I would finish.|What this stone means to me is help.");
  await p.goto("https://www.ancientpathcoaching.com/your-story?p=p3"); await p.waitForTimeout(800);
  const r3 = await p.evaluate(() => { const sec = [...document.querySelectorAll(".itow-piece")].find(s => !s.hidden); return { title: document.title, ps: sec ? [...sec.querySelectorAll(".itow-body p")].map(x => x.textContent) : [] }; });
  t("the reader for a story is untouched: its title, paragraphs split on blank lines", /^Learning to Trust · In Their Own Words/.test(r3.title) && r3.ps.join("|") === "I am from a long road. And a longer one back.|Second paragraph here.");
  await p.goto("https://www.ancientpathcoaching.com/your-story"); await p.waitForTimeout(800);
  const sec = await p.$("#read-their-stories"); await sec.scrollIntoViewIfNeeded(); await sec.screenshot({ path: __dirname + "/ys-v12-read-desk.png" });
  await b.close();
  console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
})();
