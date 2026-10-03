// Screenshots of Ending Well v1: the door (desk), Set a stone with lines to tap (phone), the finished view (desk).
const { chromium } = require("playwright"); const fs = require("fs");
let page = fs.readFileSync(__dirname + "/ending-well-v1.html", "utf8");
const IDS = { EW_UNIT: "EWU", EW_WHOLE: "EW_W", EW_JSON: "EW_J", EW_HISTORY: "EW_H", STONES_UNIT: "STU", STONES_WHOLE: "ST_W", STONES_JSON: "ST_J", STONES_HISTORY: "ST_H", STORY_COMMIT: "c", STORY_SRI: "sha384-x", STONE_COMMIT: "c", STONE_SRI: "sha384-y" };
for (const k in IDS) page = page.split("{{" + k + "}}").join(IDS[k]);
const scripts = [...page.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const markup = page.replace(/<script>[\s\S]*?<\/script>/g, "");
const cfg = scripts[1].replace(/var s = document\.createElement\("script"\);[\s\S]*?document\.head\.appendChild\(s\);\s*/, "start();\n");
const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="csrf-token" content="x">
<link href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,wght@0,400;0,600;1,400&family=Source+Sans+3:wght@400;600&display=swap" rel="stylesheet">
<style>body{margin:0;background:#fff}</style></head><body><div id="pageContent">${markup}</div>
<script>window.getUserToken=function(){return "tok"};window.AP_READER=false;</script>
<script>${scripts[0]}</script><script src="/story.js"></script><script src="/stone.js"></script><script>${cfg}</script></body></html>`;
(async () => {
  const br = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' }); const out = [];
  for (const shot of [{ name: "ew-door-desk", w: 1100, h: 1400, step: 0 }, { name: "ew-stone-phone", w: 390, h: 1300, step: 5, fill: true, touch: true }, { name: "ew-finish-desk", w: 1100, h: 1900, step: 5, fill: true, finish: true }]) {
    const ctx = await br.newContext({ viewport: { width: shot.w, height: shot.h }, hasTouch: !!shot.touch, isMobile: !!shot.touch, deviceScaleFactor: 1 });
    const pg = await ctx.newPage();
    await pg.route("**/*", async (route) => {
      const u = route.request().url();
      if (u.startsWith("https://www.ancientpathcoaching.com/ebook/ending-well")) return route.fulfill({ status: 200, contentType: "text/html", body: html });
      if (u.endsWith("/story.js")) return route.fulfill({ status: 200, contentType: "application/javascript", body: fs.readFileSync(__dirname + "/story.js", "utf8") });
      if (u.endsWith("/stone.js")) return route.fulfill({ status: 200, contentType: "application/javascript", body: fs.readFileSync(__dirname + "/stone.js", "utf8") });
      if (/assessment\/state/.test(u)) return route.fulfill({ status: 200, contentType: "application/json", body: '{"success":true,"latestSubmission":null}' });
      if (/user_stats/.test(u)) return route.fulfill({ status: 200, contentType: "application/json", body: '{"me":{"first_name":"Test","last_name":"Learner"}}' });
      if (/fonts\.g/.test(u)) return route.continue();
      return route.fulfill({ status: 200, contentType: "application/json", body: '{"success":true,"submitted":true,"submission":{"status":"submitted","id":"s1"}}' });
    });
    await pg.goto("https://www.ancientpathcoaching.com/ebook/ending-well"); await pg.waitForTimeout(600);
    if (shot.fill) await pg.evaluate(() => {
      const EX = { iam: "tired and grateful. You heard the worst of it and you kept showing up.", sawme: "on the Wednesday I almost didn’t log on.", started: "sitting in the truck in the driveway, not ready to go in the house.", toldmyself: "that I had it handled.", nobodyknew: "how long it had been going on.", camein: "a screen at midnight and voices telling me I was the only one.", takein: "a walk before the house wakes up and a chapter of John read out loud.", renewed: "the word “father” — it used to mean absence.", growing: "hope. I expect him to show up now.", asked: "it to stop.", goddid: "put me in a room with men willing to walk with me.", smallstep: "showing up next Wednesday, whatever this week was.", hope: "to be a man my kids can tell the truth to.", ask: "to keep asking me the question, even when I’m fine.", forward: "say goodbye. Thank you. I am taking this with me.", remember: "a call on the first of the month." };
      for (const k in EX) { const n = document.getElementById("ew_" + k); n.value = EX[k]; n.dispatchEvent(new Event("input", { bubbles: true })); }
    });
    if (shot.step) await pg.evaluate((s) => window.ewShow(s, true), shot.step);
    await pg.waitForTimeout(100);
    if (shot.fill) await pg.evaluate(() => { document.querySelectorAll(".ew-stone-line")[1].click(); });
    if (shot.finish) { await pg.evaluate(() => window.ewFinish(false)); await pg.waitForTimeout(400); }
    await pg.waitForTimeout(300);
    const file = __dirname + "/pictures/" + shot.name + ".png"; fs.mkdirSync(__dirname + "/pictures", { recursive: true });
    await pg.screenshot({ path: file, fullPage: true }); out.push(file);
    await ctx.close();
  }
  await br.close(); console.log(out.join("\n"));
})().catch(e => { console.error(e); process.exit(1); });
