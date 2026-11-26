// AP-REVIEW checks for Ending Well v6.2: the review's Majors and cheap minors, both doors, phone and desk.
const { chromium } = require("playwright"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8");
let pass = 0, total = 0; const res = [];
const chk = (n, c, d) => { total++; if (c) pass++; res.push((c ? "ok   " : "FAIL ") + n + (d ? " — " + d : "")); };
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_BIN || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome" });
  for (const [door, file] of [["course", "ending-well-v6.2.html"], ["public", "ending-well-v6.2-public.html"]]) for (const [name, w, h] of [["phone", 390, 800], ["desk", 1440, 900]]) {
    const tag = door + "/" + name + ": ";
    const html = fs.readFileSync(__dirname + "/" + file, "utf8");
    const ctx = await b.newContext({ viewport: { width: w, height: h }, hasTouch: name === "phone", isMobile: name === "phone" }); const p = await ctx.newPage();
    const errs = []; p.on("pageerror", e => errs.push(e.message));
    await p.route("**/*", r => { const u = r.request().url();
      if (/story\.js/.test(u)) return r.fulfill({ contentType: "application/javascript", body: story, headers: { "access-control-allow-origin": "*" } });
      if (/ancientpathcoaching\.com\/ending-well/.test(u)) return r.fulfill({ contentType: "text/html; charset=utf-8", body: "<!doctype html><html><head><meta charset=utf-8><meta name=viewport content='width=device-width,initial-scale=1'></head><body style='background:#fff'>" + html + "</body></html>" });
      if (/api|assessment|submission|user_stats/.test(u)) return r.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, me: { first_name: "Test", last_name: "Learner" } }) });
      return r.fulfill({ status: 204, body: "" }); });
    await p.goto("https://www.ancientpathcoaching.com/ending-well" + (door === "public" ? "?with=group" : "")); await p.waitForTimeout(1500);
    const first = await p.evaluate(() => {
      const vis = e => e.offsetParent !== null && getComputedStyle(e).visibility !== "hidden";
      const navy = [...document.querySelectorAll(".ew-root button,.ew-root a")].filter(vis).filter(e => { const c = getComputedStyle(e).backgroundColor.match(/\d+/g).map(Number); return c[0] < 60 && c[1] < 70 && c[2] > 40 && c[2] < 120 && (c[3] === undefined || c[3] > 0); }).map(e => e.textContent.trim().slice(0, 24));
      return { navy, scrollX: document.documentElement.scrollWidth - document.documentElement.clientWidth, oneOf: /\b1 of \d+\b/.test(document.body.innerText), partLbl: (document.getElementById("ewPartLabel") || {}).textContent, text: document.body.innerText };
    });
    chk(tag + "one filled button on the first screen", first.navy.length <= 1, JSON.stringify(first.navy));
    chk(tag + "no sideways scroll", first.scrollX <= 1, first.scrollX);
    chk(tag + "no 'N of M' question count", !first.oneOf);
    chk(tag + "Part N of 7", /of 7/.test(first.partLbl || ""), first.partLbl);
    // every part: words a reader sees
    let all = "";
    for (let i = 0; i < 7; i++) { await p.evaluate(i => window.ewShow(i, true), i); await p.waitForTimeout(120); all += "\n" + await p.evaluate(() => document.querySelector(".ew-root").innerText); }
    chk(tag + "no lowercase pronoun for God in what he reads", !/asked him|what he did|expect him|followed him/.test(all), (all.match(/asked him|what he did|expect him|followed him/g) || []).join("|"));
    chk(tag + "John 1:38 frame is accurate and plain", /first words in John’s Gospel are a question, asked of two who followed Him/.test(all) && !/first question to the men/.test(all));
    if (door === "public") chk(tag + "the public door never says men or Breaking Free", !/\bmen\b|Breaking Free|Week \d+|twelve weeks/i.test(all.replace(/\bmen\b(?=[^.]*the Bible)/g, "")), (all.match(/.{20}\b(men|Breaking Free|twelve weeks)\b.{10}/gi) || []).slice(0, 3).join(" || "));
    chk(tag + "the choice 'keep walking on my own for now' is gone", !/keep walking on my own for now/.test(all));
    // foot
    const foot = await p.evaluate(() => document.querySelector(".ew-root").innerText + "\n" + document.body.innerText);
    chk(tag + "the foot promises no deletion", !/delete any of it/.test(foot));
    chk(tag + "the foot is the ruled pair", /Everything you write here is kept as you write it, so nothing is lost\.\s*It’s yours: no one sees it unless you share it\./.test(foot.replace(/\s+/g, " ")));
    chk(tag + "988 once", (foot.match(/988/g) || []).length <= 2, (foot.match(/988/g) || []).length);
    // m2: the door a record was first written at
    const door2 = await p.evaluate((d) => { const m = document.getElementById("ew_meta"); m.value = JSON.stringify({ step: 2, finished: false, door: d === "public" ? "course" : "public", with: "group" }); window.ewShow(2, true); const x = document.getElementById("ew_iam") || document.querySelector(".ew-root textarea"); x.value = "a few words"; x.dispatchEvent(new Event("input", { bubbles: true })); try { return JSON.parse(m.value).door; } catch (e) { return "none:" + m.value; } }, door);
    await p.waitForTimeout(400);
    const keptDoor = await p.evaluate(() => { try { return JSON.parse(document.getElementById("ew_meta").value).door; } catch (e) { return "?"; } });
    chk(tag + "a record keeps the door it was first written at", keptDoor === (door === "public" ? "course" : "public"), keptDoor);
    if (door === "public") {
      await p.evaluate(() => window.ewShow(0, true)); await p.waitForTimeout(200);
      const hasChange = await p.evaluate(() => { const a = document.querySelector(".ew-with-now a"); return !!a; });
      chk(tag + "Change is there", hasChange);
      const stub = await p.evaluate(() => { window.__went = ""; window.ewChooseWith = function (w) { window.__went = w; }; return true; });
      // nothing written: goes straight
      await p.evaluate(() => { document.querySelectorAll(".ew-root textarea,.ew-root input[type=text]").forEach(x => { x.value = ""; x.dispatchEvent(new Event("input", { bubbles: true })); }); });
      // rebuild the link handler path: click Change with a line written
      await p.evaluate(() => { const x = document.getElementById("ew_iam") || document.querySelector(".ew-root textarea"); x.value = "I am tired and grateful."; x.dispatchEvent(new Event("input", { bubbles: true })); });
      await p.evaluate(() => document.querySelector(".ew-with-now a").click());
      const t1 = await p.evaluate(() => ({ went: window.__went, label: document.querySelector(".ew-with-now a").textContent, note: document.querySelector(".ew-with-now").innerText }));
      chk(tag + "Change with a line written asks first", t1.went === "" && /Change anyway/.test(t1.label) && /rewrites the opening words/.test(t1.note), JSON.stringify(t1));
      await p.evaluate(() => document.querySelector(".ew-with-now a").click());
      const t2 = await p.evaluate(() => window.__went); chk(tag + "the second press changes", t2 === "ask", t2);
      const lede = html.match(/id="ewLede">(.*?)<\/p>/)[1]; chk(tag + "static lede has no Breaking Free", !/Breaking Free/.test(lede));
    }
    chk(tag + "no page errors", errs.length === 0, errs.slice(0, 2).join(" | "));
    await ctx.close();
  }
  await b.close(); console.log(res.join("\n")); console.log("\n" + pass + " of " + total + " passed"); process.exit(pass === total ? 0 : 1);
})().catch(e => { console.error(e); process.exit(1); });
