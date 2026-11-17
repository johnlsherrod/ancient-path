const { JSDOM } = require("jsdom"); const fs = require("fs");
for (const f of ["ending-well-v4.8.html", "ending-well-v5.html", "ending-well-v5-public.html"]) {
  const h = fs.readFileSync(f, "utf8");
  const dom = new JSDOM(h); const d = dom.window.document;
  const css = d.querySelector("style").textContent;
  const sheet = d.styleSheets[0]; let rules = 0; const count = (list) => { for (const r of list) { rules++; if (r.cssRules && r.type === 4) count(r.cssRules); } }; count(sheet.cssRules);
  const bal = (css.match(/\{/g) || []).length === (css.match(/\}/g) || []).length;
  const scripts = [...h.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m => m[1]); let parses = true; try { scripts.forEach(s => new Function(s)); } catch (e) { parses = false; console.log("PARSE", e.message); }
  const ids = [...h.matchAll(/ id="([^"]+)"/g)].map(m => m[1]); const dup = ids.filter((x, i) => ids.indexOf(x) !== i);
  const sri = (h.match(/var SRI = "([^"]+)"/) || [])[1], src = (h.match(/story\.js";/) ? h.match(/ancient-path@([0-9a-f]{40})\/story\.js/)[1] : "");
  console.log(f, "| bytes", Buffer.byteLength(h), "| css rules", rules, "| braces balanced", bal, "| scripts parse", parses, "| duplicate ids", dup.join(",") || "none", "| story pin", src.slice(0, 7), sri ? sri.slice(0, 20) : "");
}
