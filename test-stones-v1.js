// What These Stones Mean v1: the ruled lede, the stones from the Published list (stones only, newest first, three lines, month, first name or none), the empty line, the band setting with its limit and "All the stones".
const { JSDOM } = require("jsdom"); const fs = require("fs");
const stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
const page = fs.readFileSync(__dirname + "/stones.html", "utf8");
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const sleep = ms => new Promise(r => setTimeout(r, ms));
const scripts = [...page.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const markup = page.replace(/<script>[\s\S]*?<\/script>/g, "");
const FEED = { pieces: [
  { id: "1", name: "John", title: "Stone a", from: "Set a Stone", piece: "This stone is for my son.\nThe LORD has kept me.\nWhat this stone means to me is a new discipline.", at: "2026-10-01T13:00:00Z" },
  { id: "2", name: "Jason", title: "Where I’m From", from: "Where I’m From", piece: "I am from…", at: "2026-10-02T13:00:00Z" },
  { id: "3", name: "", title: "Stone b", from: "Ending Well", piece: "What God did was put me in a room with men.", at: "2026-12-20T13:00:00Z" },
  { id: "4", name: "Mike", title: "Stone c", from: "Set a Stone", piece: "This stone is for a friend.\nThe LORD has given me a year.\nWhat this stone means to me is more hope.", at: "2026-11-05T13:00:00Z" },
  { id: "5", name: "Al", title: "Stone d", from: "Set a Stone", piece: "The LORD has.", at: "2026-09-05T13:00:00Z" }
] };
async function mount(o) {
  o = o || {};
  let m = markup; if (o.band) m = m.replace('data-limit="" data-band=""', 'data-limit="3" data-band="1"');
  const dom = new JSDOM('<!doctype html><html><head></head><body>' + m + '</body></html>', { runScripts: "outside-only", url: "https://www.ancientpathcoaching.com/stones" });
  const w = dom.window, d = w.document;
  w.eval(stone);
  /* the feed arrives as JSONP: the page adds a script tag with a callback name; here the callback is answered with the fixture */
  const origAppend = d.head.appendChild.bind(d.head);
  d.head.appendChild = (n) => { const m = n && n.src && /callback=([A-Za-z0-9_]+)/.exec(n.src); if (m) { setTimeout(() => w[m[1]](o.feed || FEED), 1); return n; } return origAppend(n); };
  const cfg = scripts[0].replace(/var s = document\.createElement\("script"\);[\s\S]*?document\.head\.appendChild\(s\);\s*/, "show();\n");
  if (!/show\(\);\n\}\)\(\);\s*$/.test(cfg)) throw new Error("loader not replaced");
  w.eval(cfg); await sleep(10);
  return { w, d };
}
(async () => {
  { const { d } = await mount();
    t("build 5: the Set-your-own box is one line and one button, the foot says his name or none; build 4: the box asks \"What has the LORD done?\" and no \"till now\" stands in our own words; build 3: Joshua 4:24 under the lede, its reference never breaking, the old quote gone, stone.js pinned to John's commit", /\.aps-quote b\{[^}]*white-space:nowrap\}/.test(page) && /What has the LORD done\? Set a stone of your own\.<\/p>/.test(page) && /AP-STONES-v1 · build 5/.test(page) && page.split('class="aps-you-').length === 3 && !/aps-you-k/.test(page) && /with his name or none\./.test(page) && !/first name or none\./.test(page) && !/till now\?/.test(page) && /so that all the peoples of the earth may know that the hand of the LORD is mighty\. <b>Joshua 4:24<\/b>/.test(page) && page.indexOf("Joshua 4:6") < 0 && page.split("ancient-path@d6ec7e1e8492099453ccf350529b94f2bdcc25d1/stone.js").length === 2 && page.indexOf("0ad7e1c54b10ea5446cc6bc6a145e25ed91eab7a") < 0);
    t("the ruled lede, word for word", d.querySelector(".aps-lede").textContent === "Men who walked this path set these stones. Each one says what God did, in the man’s own words. They were set so the question would be asked. Read them. When you are ready, set your own.");
    const st = d.querySelectorAll("#apStonesList .ap-stone");
    t("stones only, newest first", st.length === 4 && st[0].querySelector(".ap-stone-main").textContent === "What God did was put me in a room with men." && st[3].querySelector(".ap-stone-main").textContent === "The LORD has.");
    t("an Ending Well stone is shown as written: his own line, no Till-now words put on it", st[0].querySelector(".ap-stone-main").textContent === "What God did was put me in a room with men." && !/Till now/.test(st[0].textContent));
    t("each: the lines, the month, first name or none — nothing else", st[1].querySelectorAll(".ap-stone-text").length === 3 && st[1].querySelector(".ap-stone-meta").textContent === "November 2026 · Mike" && st[0].querySelector(".ap-stone-meta").textContent === "December 2026" && !/Ending Well|Set a Stone|Stone b/.test(st[0].textContent));
    t("the way to set your own", d.querySelector(".aps-you .aps-you-go").getAttribute("href") === "/set-a-stone" && d.querySelector(".aps-you .aps-you-go").textContent === "Set a stone" && d.getElementById("apStonesAll").style.display === "none");
    t("no stranger, no brother, no next man, no season", !/stranger|\bbrother\b|next man|men who come after|\bseason\b/i.test(d.body.textContent));
    t("no Google tag in the block", !/G-VKPN74MHRZ|googletagmanager/.test(page));
  }
  { const { d } = await mount({ feed: { pieces: [] } });
    t("nothing set yet: the one line", d.querySelector("#apStonesList .ap-stone-empty").textContent === "No stones are set where others can see them yet. Yours can be the first.");
  }
  { const { d } = await mount({ band: true, feed: { pieces: [] } });
    t("the band with no published stones: nothing at all — no box, no heading", d.getElementById("apStonesRoot").style.display === "none" && !d.querySelector("#apStonesList .ap-stone-empty"));
  }
  { const { d } = await mount({ band: true });
    t("the band: three newest and All the stones", d.querySelectorAll("#apStonesList .ap-stone").length === 3 && d.getElementById("apStonesAll").style.display === "" && d.getElementById("apStonesAll").getAttribute("href") === "/stones");
  }
  console.log(fails ? fails + " FAILED" : "all passed"); process.exit(fails ? 1 : 0);
})();
