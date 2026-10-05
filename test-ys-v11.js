// Your Story hub v11: one stones card — Set a Stone — and no What These Stones Mean card; the marker says v11; nothing else moved from v10.
const { JSDOM } = require("jsdom"); const fs = require("fs");
const html = fs.readFileSync(__dirname + "/pages/your-story-v11.html", "utf8"), v10 = fs.readFileSync(__dirname + "/pages/your-story-v10.html", "utf8");
const d = new JSDOM(html).window.document;
let fails = 0; const t = (n, c) => { console.log((c ? "ok   " : "FAIL ") + n); if (!c) fails++; };
const cards = [...d.querySelectorAll(".aph-card")].map(a => a.getAttribute("href"));
t("v11 marker, v10 history kept", /<!-- AP-YS-v11 \(v11, 5 Oct/.test(html) && /\(v10, 5 Oct:/.test(html));
t("the six doors in order, Set a Stone last among them; no /stones card anywhere", cards.filter(h => /^\/(where-i-am-from|write-a-lament|asked-of-me|what-kind-of-light|where-are-you|set-a-stone|stones)$/.test(h)).join("|") === "/where-i-am-from|/write-a-lament|/asked-of-me|/what-kind-of-light|/where-are-you|/set-a-stone" && !cards.includes("/stones") && !/href="\/stones"/.test(html));
t("the Set a Stone card unchanged from v10", d.querySelector('.aph-card[href="/set-a-stone"]').textContent.replace(/\s+/g, " ").trim() === new JSDOM(v10).window.document.querySelector('.aph-card[href="/set-a-stone"]').textContent.replace(/\s+/g, " ").trim());
t("only the one card and the marker differ from v10", (() => { const a = v10.split("\n"), b = html.split("\n"); const removed = a.filter(l => !b.includes(l)), added = b.filter(l => !a.includes(l)); return removed.length === 7 && removed.every(l => /aph-card|What These Stones Mean|those stones mean|his name or none|Read them|AP-YS-v10/.test(l)) && added.length === 1 && /AP-YS-v11/.test(added[0]); })());
t("no Google tag inside the block", !/G-VKPN74MHRZ/.test(html));
console.log(fails ? "\n" + fails + " FAILED" : "\nall passed"); process.exit(fails ? 1 : 0);
