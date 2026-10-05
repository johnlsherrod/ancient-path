#!/usr/bin/env python3
"""stone.js v2.9, second part (5 Oct 2026, John: "As a next step, set the next follow up."). Until now the engine set the
next return for him — a year on, said after Save. Now he sets it: two taps above Save, "three months" (on by default —
a season) or "a year". answer(id, text, months) takes the choice; nextReturn(fromISO, months) defaults to 12 as before.
Also the page line on Set a Stone (sas-body.html) — John's lead over the return example, edited down."""
import pathlib
root = pathlib.Path(__file__).parent

def sub1(old, new, where):
    assert where.count(old) == 1, (old[:70], where.count(old))
    return where.replace(old, new)

# --- stone.js
p = root / "stone.js"; s = p.read_text(encoding="utf-8")
s = sub1("     them\", which the text does say (Joshua 1:9, 3:7). Nothing else changes.\n",
         "     them\", which the text does say (Joshua 1:9, 3:7). And the next return is his to set (John, Oct 5: \"As a next step,\n"
         "     set the next follow up.\"): two taps above Save on a due stone — \"three months\" (on by default) or \"a year\" —\n"
         "     and answer(id, text, months) carries the choice; without one, a year on, as before.\n", s)
s = sub1("  function nextReturn(fromISO) { return dayISO(addMonths(fromISO, 12)); }",
         "  function nextReturn(fromISO, months) { return dayISO(addMonths(fromISO, months === 3 ? 3 : 12)); }", s)
s = sub1("  /* The return: his dated answer to \"What does it mean to you now?\" The\n     next return is a year on from today. */\n  function answer(id, text) {",
         "  /* The return: his dated answer to the stone's question. The next return is\n     his to set — three months or a year on from today (a year without a choice). */\n  function answer(id, text, months) {", s)
s = sub1("      st.returnAt = nextReturn(now);\n      return st;",
         "      st.returnAt = nextReturn(now, months);\n      return st;", s)
s = sub1('''      var row = el("div", "ap-stone-ask-row");
      var btn = el("button", (opts.buttonClass || "") + " ap-stone-ask-save", "Save"); btn.type = "button";
      var note = el("p", "ap-stone-ask-note", "");
      row.appendChild(btn);
      ask.appendChild(lab); ask.appendChild(ta); ask.appendChild(row); ask.appendChild(note);
      btn.addEventListener("click", function () {
        var t = clean(ta.value); if (!t) { note.textContent = "Say it in a few words, then Save."; return; }
        btn.disabled = true; note.textContent = "Saving…";
        answer(st.id, t).then(function (s) {''',
'''      /* v2.9 — the next return is his to set: three months (a season) or a year */
      var months = 3;
      var nxt = el("div", "ap-stone-ask-next");
      nxt.appendChild(el("span", "ap-stone-ask-next-lead", "Then set the next return:"));
      var taps = [[3, "three months"], [12, "a year"]].map(function (o) {
        var b = el("button", "ap-stone-ask-when" + (o[0] === months ? " is-on" : ""), o[1]); b.type = "button"; b.setAttribute("data-months", String(o[0]));
        b.addEventListener("click", function () { months = o[0]; taps.forEach(function (x) { x.classList.toggle("is-on", x === b); }); });
        nxt.appendChild(b); return b;
      });
      var row = el("div", "ap-stone-ask-row");
      var btn = el("button", (opts.buttonClass || "") + " ap-stone-ask-save", "Save"); btn.type = "button";
      var note = el("p", "ap-stone-ask-note", "");
      row.appendChild(btn);
      ask.appendChild(lab); ask.appendChild(ta); ask.appendChild(nxt); ask.appendChild(row); ask.appendChild(note);
      btn.addEventListener("click", function () {
        var t = clean(ta.value); if (!t) { note.textContent = "Say it in a few words, then Save."; return; }
        btn.disabled = true; note.textContent = "Saving…";
        answer(st.id, t, months).then(function (s) {''', s)
p.write_text(s, encoding="utf-8")

# --- Set a Stone: the lead over the return example (John's words, edited down)
p = root / "sas-body.html"; s = p.read_text(encoding="utf-8")
s = sub1('<p class="sas-return-ex">Three months on, the stone asks. For example: <i>&ldquo;You named this stone surrender. What has the LORD done in you since?&rdquo;</i> &mdash; <i>&ldquo;He keeps showing me the fight I pick back up, and he keeps taking it out of my&nbsp;hands.&rdquo;</i></p>',
         '<p class="sas-return-ex">Three months from now, this stone comes back to you. You named it. Write, or at least sit with, what you found on the path between that day and this one &mdash; as you grow with God and with the men walking beside you. For example: <i>&ldquo;You named this stone surrender. What has the LORD done in you since?&rdquo;</i> &mdash; <i>&ldquo;He keeps showing me the fight I pick back up, and he keeps taking it out of my&nbsp;hands.&rdquo;</i> Then set the next&nbsp;return.</p>', s)
s = sub1("<!-- AP-SAS-v1 · build 12 (", "<!-- AP-SAS-v1 · build 12 (John's lead over the return example — \"Three months from now, this stone comes back to you…\" — and the stone's next return is his to set, stone.js v2.9; ", s)
p.write_text(s, encoding="utf-8")

# --- tests
p = root / "test-sas-v1.js"; t = p.read_text(encoding="utf-8")
t = sub1('/^Three months on, the stone asks\\. For example: “You named this stone surrender\\. What has the LORD done in you since\\?” — “He keeps showing me/.test(d.querySelector(".sas-return-ex").textContent)',
         '/^Three months from now, this stone comes back to you\\. You named it\\. Write, or at least sit with, what you found on the path between that day and this one — as you grow with God and with the men walking beside you\\. For example: “You named this stone surrender\\. What has the LORD done in you since\\?” — “He keeps showing me the fight I pick back up, and he keeps taking it out of my\\u00a0hands\\.” Then set the next\\u00a0return\\.$/.test(d.querySelector(".sas-return-ex").textContent)', t)
p.write_text(t, encoding="utf-8")

p = root / "test-stone-v2.js"; t = p.read_text(encoding="utf-8")
t = sub1('''    const s = await w.APStone.answer("b1", "It means I am still here.");
    ok(s.returns.length === 1 && s.returns[0].text === "It means I am still here." && /^\\d{4}-\\d{2}-\\d{2}$/.test(s.returnAt), "answer kept with its date, next return set");
    const yr = new Date(s.returns[0].when); const exp = new Date(yr.getFullYear() + 1, yr.getMonth(), yr.getDate());
    ok(s.returnAt === exp.getFullYear() + "-" + ("0" + (exp.getMonth() + 1)).slice(-2) + "-" + ("0" + exp.getDate()).slice(-2), "next return is one year on (" + s.returnAt + ")");''',
'''    { const nxt = ask.querySelector(".ap-stone-ask-next"); const taps = nxt ? [...nxt.querySelectorAll(".ap-stone-ask-when")] : [];
      ok(nxt && nxt.previousElementSibling.className === "ap-stone-ask-box" && nxt.nextElementSibling.className === "ap-stone-ask-row" && nxt.querySelector(".ap-stone-ask-next-lead").textContent === "Then set the next return:" && taps.map(b => b.textContent).join("|") === "three months|a year" && taps[0].classList.contains("is-on") && !taps[1].classList.contains("is-on"), "v2.9 due: above Save, the next return is his to set — three months (on) or a year");
      taps[1].click(); ok(taps[1].classList.contains("is-on") && !taps[0].classList.contains("is-on"), "v2.9: tapping a year moves the mark"); taps[0].click(); }
    const s = await w.APStone.answer("b1", "It means I am still here.");
    ok(s.returns.length === 1 && s.returns[0].text === "It means I am still here." && /^\\d{4}-\\d{2}-\\d{2}$/.test(s.returnAt), "answer kept with its date, next return set");
    const yr = new Date(s.returns[0].when); const exp = new Date(yr.getFullYear() + 1, yr.getMonth(), yr.getDate());
    ok(s.returnAt === exp.getFullYear() + "-" + ("0" + (exp.getMonth() + 1)).slice(-2) + "-" + ("0" + exp.getDate()).slice(-2), "next return is one year on without a choice (" + s.returnAt + ")");
    { const s3 = await w.APStone.answer("b1", "Still here, still his.", 3); const d3 = new Date(s3.returns[1].when); const e3 = new Date(d3.getFullYear(), d3.getMonth() + 3, d3.getDate());
      ok(s3.returns.length === 2 && s3.returnAt === e3.getFullYear() + "-" + ("0" + (e3.getMonth() + 1)).slice(-2) + "-" + ("0" + e3.getDate()).slice(-2) && w.APStone.nextReturn("2026-10-05T12:00:00", 3) === "2027-01-05" && w.APStone.nextReturn("2026-10-05T12:00:00") === "2027-10-05", "v2.9: answer(id, text, 3) sets the return three months on (" + s3.returnAt + ")"); }''', t)
p.write_text(t, encoding="utf-8")
t = sub1('ok(JSON.parse(stored.answers.returns).length === 1 && stored.answers.stonefor', 'ok(JSON.parse(stored.answers.returns).length === 2 && stored.answers.stonefor', t)
p.write_text(t, encoding="utf-8")
print("stone.js v2.9 part two; Set a Stone lead; tests moved")
