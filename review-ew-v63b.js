// AP-REVIEW checks for Ending Well v6.3: the four minors, both doors.
const { chromium } = require("playwright"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8");
let pass = 0, total = 0; const res = [];
const chk = (n, c, d) => { total++; if (c) pass++; res.push((c ? "ok   " : "FAIL ") + n + (d ? " — " + d : "")); };
(async () => {
  const b = await chromium.launch({ executablePath: process.env.CHROME_BIN || "/opt/pw-browsers/chromium-1243/chrome-linux64/chrome" });
  for (const [door, file] of [["course", "ending-well-v6.3.html"], ["public", "ending-well-v6.3-public.html"]]) for (const [name, w, h] of [["phone", 390, 800], ["desk", 1440, 900]]) {
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
    const setAll = async keys => { await p.evaluate(keys => { document.querySelectorAll(".ew-root textarea.ew-rest").forEach(t => { const k = t.id.replace(/^ew_/, ""); if (!keys || keys.includes(k)) { t.value = "A real line"; t.dispatchEvent(new Event("input", { bubbles: true })); } }); }, keys); };
    // m4: nothing shown before Finish; after Finish it names the lines and the parts; going back clears it
    await p.evaluate(() => window.ewShow(7, true)); await p.waitForTimeout(150);
    const g0 = await p.evaluate(() => document.getElementById("ewGate").textContent.trim());
    chk(tag + "the gate line is quiet until Finish is pressed", g0 === "", JSON.stringify(g0));
    await p.click("#ewNext"); await p.waitForTimeout(250);
    const g1 = await p.evaluate(() => document.getElementById("ewGate").textContent.trim());
    chk(tag + "Finish with the two lines empty explains kindly and names the parts", /^Almost there\. Two lines still need their words: What is being renewed in me \(in What changed\) and What God did\. Go back to write them, then Finish\.$/.test(g1), g1);
    chk(tag + "the gate line has no 'Use Back to'", !/Use Back/.test(g1));
    await p.evaluate(() => window.ewShow(6, true)); await p.evaluate(() => window.ewShow(7, true)); await p.waitForTimeout(150);
    const g2 = await p.evaluate(() => document.getElementById("ewGate").textContent.trim());
    chk(tag + "going back and returning clears the gate line", g2 === "", JSON.stringify(g2));
    await setAll(["renewed"]); await p.click("#ewNext"); await p.waitForTimeout(250);
    const g3 = await p.evaluate(() => document.getElementById("ewGate").textContent.trim());
    chk(tag + "one line missing reads in the singular", /^Almost there\. One line still needs its words: What God did\. Go back to write it, then Finish\.$/.test(g3), g3);
    await setAll(null); await p.click("#ewNext"); await p.waitForTimeout(600);
    const fin = await p.evaluate(() => ({ shown: getComputedStyle(document.getElementById("ewFinish")).display !== "none" && document.getElementById("ewFinish").classList.contains("is-active"), doc: typeof window.ewDocument === "function" ? window.ewDocument() : "", note: document.getElementById("ewFinishNote").textContent, final: document.getElementById("ewFinal").innerText, gate: document.getElementById("ewGate").textContent }));
    chk(tag + "all lines written: Finish works", fin.shown && fin.final.length > 50, fin.final.slice(0, 80));
    chk(tag + "the saved document carries the title, the lines and no stone", /^ENDING WELL/.test(fin.doc) && !/stone/i.test(fin.doc.replace(/Set a stone/g, "")), fin.doc.slice(0, 60));
    chk(tag + "no stone code is left on the page", !/stonePick|paintStonePick|APStone|ewStoneNote|ew-stone/.test(html));
    if (door === "public") {
      const top = await p.evaluate(() => ({ eb: document.getElementById("ewEyebrow").textContent.trim(), h1: document.querySelector(".ew-h1").textContent.trim() }));
      chk(tag + "the eyebrow does not repeat the title", top.eb !== top.h1 && top.eb === "Your Story", JSON.stringify(top));
      chk(tag + "the finish note is true signed in or out", /yours to keep on your page, and other people can read it only when you offer it/.test(fin.note) && !/other men/.test(fin.note), fin.note);
      chk(tag + "the static finish note has no 'other men'", !/other men can read/.test(html));
    }
    chk(tag + "no page errors", errs.length === 0, errs.join("|"));
    await ctx.close();
  }
  await b.close(); console.log(res.join("\n")); console.log("\n" + pass + " of " + total + " passed"); process.exit(pass === total ? 0 : 1);
})();
