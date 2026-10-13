/* AP-ROAD-BAND patch — Your Page v33 → v34. A pure string function: applyRoadBand(text, partText) → new text.
   Runs in Node (tests) and, pasted whole, in the page's code editor. Every anchor must occur exactly once (whitespace-insensitive:
   the editor re-indents); a page that already carries the band is refused; the result must be longer, carry no literal double curly
   brace, and keep the Google tag count it started with. Nothing else in the page is touched. */
(function (root) {
  var VERSION_NOTE = "v34, 13 Oct: the course road — a band above the chronicle for a man enrolled in a course (AP-ROAD-BAND build 1): the course by name, then its story work in order, the current week's card lit, each card carrying his state; the road is read from the Front Desk Weeks tab; nothing locked except a piece the course holds until a date. Three hand-offs added to the page's own reads: ap:courses, ap:states, ap:stones) (";
  function esc(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
  /* tokens: runs of word characters, or one other character; whitespace may fall anywhere between tokens, but two words that had a space between them keep at least one */
  function rx(anchor) {
    var toks = anchor.match(/\s+|\w+|[^\w\s]/g) || [], out = "", prev = null, gap = false;
    toks.forEach(function (tk) {
      if (/^\s+$/.test(tk)) { gap = true; return; }
      if (prev !== null) { out += (gap && /\w$/.test(prev) && /^\w/.test(tk)) ? "\\s+" : "\\s*"; }
      out += esc(tk); prev = tk; gap = false;
    });
    return new RegExp(out, "g");
  }
  function count(text, anchor) { var m = text.match(rx(anchor)); return m ? m.length : 0; }
  var OPS = [
    { name: "version note", find: "AP-HOME-v33 (", after: false, put: "AP-HOME-v34 (" + VERSION_NOTE },
    { name: "courses hand-off", find: "paint(mine);", after: true,
      put: "\n                    window.apMine = mine;\n                    try { document.dispatchEvent(new CustomEvent(\"ap:courses\", { detail: mine })); } catch (e) {}" },
    { name: "stones hand-off", find: "card.querySelector(\".ap-card-state\").textContent = list.length === 1 ? \"One stone set\" : list.length + \" stones set\";", after: true,
      put: "\n                        window.apStones = list;\n                        try { document.dispatchEvent(new CustomEvent(\"ap:stones\", { detail: list })); } catch (e) {}" },
    { name: "states hand-off", find: "paint(r[10]);", after: true,
      put: "\n                window.apStates = r; window.apSurfaces = SURFACES;\n                try { document.dispatchEvent(new CustomEvent(\"ap:states\", { detail: r })); } catch (e) {}" },
    { name: "the band", find: "<!-- AP-OFFER-v2.3", after: false, partFirst: true }
  ];
  function applyRoadBand(text, part) {
    if (/AP-ROAD-BAND/.test(text)) { throw new Error("refused: the page already carries AP-ROAD-BAND"); }
    if (/\{\{/.test(part)) { throw new Error("refused: the band carries a literal double curly brace"); }
    var tag0 = (text.match(/G-VKPN74MHRZ/g) || []).length;
    var out = text;
    OPS.forEach(function (op) {
      var n = count(out, op.find);
      if (n !== 1) { throw new Error("refused: anchor '" + op.name + "' occurs " + n + " times, not once"); }
      var re = rx(op.find);
      out = out.replace(re, function (m) {
        if (op.partFirst) { return part.replace(/\s+$/, "") + "\n    " + m; }
        return op.after ? m + op.put : op.put;
      });
    });
    if (out.length <= text.length) { throw new Error("refused: the result is not longer"); }
    if (/\{\{/.test(out) && !/\{\{/.test(text)) { throw new Error("refused: the result carries a literal double curly brace"); }
    if ((out.match(/G-VKPN74MHRZ/g) || []).length !== tag0) { throw new Error("refused: the Google tag count changed"); }
    if ((out.match(/AP-ROAD-BAND/g) || []).length < 2) { throw new Error("refused: the band is not in the result"); }
    return out;
  }
  var api = { applyRoadBand: applyRoadBand, count: count, OPS: OPS };
  if (typeof module !== "undefined" && module.exports) { module.exports = api; } else { root.APRoadBandPatch = api; }
})(typeof window !== "undefined" ? window : this);
