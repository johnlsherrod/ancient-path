#!/usr/bin/env python3
"""story.js v18.6 and stone.js v2.1 (4 Oct 2026): LearnWorlds drops "}}" from a stored open-ended answer.
Measured 3 Oct on the Stones form: every history list came back exactly two characters short — the two closing braces
at its end — while the answers JSON (which ends in a single brace) came back whole. So every JSON value the engines
store is written with a space between two braces in a row (JSON allows whitespace between tokens), and a list already
cut short is mended on read by putting the missing braces back before the closing bracket. Every needle matches once."""
import os
here = os.path.dirname(os.path.abspath(__file__))
def patch(name, pairs):
    p = os.path.join(here, name); s = open(p, encoding='utf-8').read()
    for old, new in pairs:
        assert s.count(old) == 1, (name, s.count(old), old[:90]); s = s.replace(old, new)
    open(p, 'w', encoding='utf-8').write(s); print('patched', name, len(s.encode('utf-8')), 'bytes')

HELPERS = '''  /* v18.6: LearnWorlds drops "}}" from a stored open-ended answer (measured 3 Oct 2026 on the Stones form: every
     history list came back exactly two characters short — the two closing braces at its end — while the answers
     JSON, which ends in one brace, came back whole). JSON allows whitespace between tokens, so every value stored
     from here is written with a space between two braces in a row; nothing of a man's own text changes unless he
     typed two braces together, and then a space goes between them. */
  function lwJSON(v) { return JSON.stringify(v).replace(/\\}(?=\\})/g, "} ").replace(/\\{(?=\\{)/g, "{ "); }
  /* a list stored before v18.6 and cut short: the missing closing braces go back before the final bracket */
  function mendList(raw) {
    var s = String(raw || "").trim();
    if (!s || s.charAt(0) !== "[" || s.charAt(s.length - 1) !== "]") { return null; }
    var opens = (s.match(/\\{/g) || []).length, closes = (s.match(/\\}/g) || []).length;
    if (opens <= closes) { return null; }
    var fixed = s.slice(0, -1); while (opens-- > closes) { fixed += "}"; } fixed += "]";
    try { var v = JSON.parse(fixed); return Array.isArray(v) ? v : null; } catch (e) { return null; }
  }
'''

patch('story.js', [
  ('   AP-STORY-MODULE-v18.5\n\n   v18.5 (3 Oct 2026)',
   '   AP-STORY-MODULE-v18.6\n\n   v18.6 (4 Oct 2026) — the record kept whole. LearnWorlds drops "}}" from a stored open-ended answer (measured 3 Oct\n     on the Stones form: every history list came back exactly two characters short, the two closing braces at its\n     end, while the answers JSON, which ends in one brace, came back whole). Every JSON value the engine stores is now\n     written with a space between two braces in a row (lwJSON), and a list already cut short is mended on read\n     (mendList). Nothing else changes.\n   v18.5 (3 Oct 2026)'),
  ('  function parseHistoryList(raw) {\n    if (!raw) { return []; }\n    var v;\n    try { v = JSON.parse(raw); } catch (e) { return []; }',
   HELPERS + '  function parseHistoryList(raw) {\n    if (!raw) { return []; }\n    var v;\n    try { v = JSON.parse(raw); } catch (e) { v = mendList(raw); if (!v) { return []; } }'),
  ('    if (lw.blocks.json) { out.push({ blockId: lw.blocks.json, value: JSON.stringify(answers) }); }',
   '    if (lw.blocks.json) { out.push({ blockId: lw.blocks.json, value: lwJSON(answers) }); }'),
  ('            extraBlock = { blockId: historyBlock, value: JSON.stringify(merged.list) };',
   '            extraBlock = { blockId: historyBlock, value: lwJSON(merged.list) };'),
  ('            extraBlock = { blockId: historyBlock, value: rawByBlockId[historyBlock] || JSON.stringify([]) };',
   '            extraBlock = { blockId: historyBlock, value: lwJSON(parseHistoryList(rawByBlockId[historyBlock])) };'),
  ('    version: "18.4",', '    version: "18.6",'),
])
patch('stone.js', [
  ('   AP-STONE-v2 (3 Oct 2026) — the stone, kept whole.\n',
   '   AP-STONE-v2.1 (4 Oct 2026) — the stone, kept whole.\n\n   v2.1 — the record survives LearnWorlds: a stored answer loses "}}" (measured 3 Oct, see story.js v18.6), so every\n     value written here puts a space between two braces in a row, and a list already cut short is mended on read.\n'),
  ('  function parseList(raw) {\n    if (!raw) { return []; }\n    var v; try { v = JSON.parse(raw); } catch (e) { return []; }\n    return Array.isArray(v) ? v.filter(function (e) { return e && typeof e === "object"; }) : [];\n  }',
   '  function lwJSON(v) { return JSON.stringify(v).replace(/\\}(?=\\})/g, "} ").replace(/\\{(?=\\{)/g, "{ "); }\n  function mendList(raw) {\n    var s = String(raw || "").trim();\n    if (!s || s.charAt(0) !== "[" || s.charAt(s.length - 1) !== "]") { return null; }\n    var opens = (s.match(/\\{/g) || []).length, closes = (s.match(/\\}/g) || []).length;\n    if (opens <= closes) { return null; }\n    var fixed = s.slice(0, -1); while (opens-- > closes) { fixed += "}"; } fixed += "]";\n    try { var v = JSON.parse(fixed); return Array.isArray(v) ? v : null; } catch (e) { return null; }\n  }\n  function parseList(raw) {\n    if (!raw) { return []; }\n    var v; try { v = JSON.parse(raw); } catch (e) { v = mendList(raw); if (!v) { return []; } }\n    return Array.isArray(v) ? v.filter(function (e) { return e && typeof e === "object"; }) : [];\n  }'),
  ('      { blockId: CFG.blocks.json, value: JSON.stringify(toEntry(latestSt).answers) },\n      { blockId: CFG.blocks.history, value: JSON.stringify(entries) }',
   '      { blockId: CFG.blocks.json, value: lwJSON(toEntry(latestSt).answers) },\n      { blockId: CFG.blocks.history, value: lwJSON(entries) }'),
  ('    version: "2",', '    version: "2.1",'),
])
