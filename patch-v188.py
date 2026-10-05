#!/usr/bin/env python3
"""story.js v18.7 -> v18.8 (5 Oct 2026, John: "female voice. do you think this is the right one for a men's site?
is the voice consistent across AP tools as a standard part of the engine?").
bestVoice() now prefers a man's voice: a man's natural voice first (Guy, Andrew, Brian, Christopher, Eric, Roger,
Ryan, Steffan — the Online Natural voices Edge and Windows ship), then Google UK English Male, then Apple's men
(Daniel, Alex, Evan, Tom, Oliver, Aaron, Arthur, Fred), then any man's voice, then the natural voices of either kind,
then the rest as before. One pick for every page that loads story.js — Read it to me, Hear it, the Road, the stones —
so the voice is the same across the engine. Nothing else changes."""
import pathlib, shutil
root = pathlib.Path(__file__).parent
src = root / "story.js"
shutil.copy(src, root / "story-v18.7.js")
s = src.read_text(encoding="utf-8")

def sub1(old, new, where):
    assert where.count(old) == 1, (old[:70], where.count(old))
    return where.replace(old, new)

s = sub1("   AP-STORY-MODULE-v18.7\n\n",
         "   AP-STORY-MODULE-v18.8\n\n"
         "   v18.8 (5 Oct 2026) — a man's voice (John, Oct 5: a woman's voice is not the right one for a men's site; one voice\n"
         "     across the engine). bestVoice() now puts a man's voice first: a man's natural voice (Guy, Andrew, Brian,\n"
         "     Christopher, Eric, Roger, Ryan, Steffan), then Google UK English Male, then Apple's men (Daniel, Alex, Evan, Tom,\n"
         "     Oliver, Aaron, Arthur, Fred), then any other man's voice, then the natural voices of either kind, then the rest.\n"
         "     Every page that loads story.js speaks with the same pick — Read it to me, Hear it, the Road, the stones.\n\n", s)

old_score = '''      var score = function (v) {
        var n = String(v.name || "");
        if (/natural/i.test(n)) { return 6; }
        if (/online/i.test(n)) { return 5; }
        if (/google (us|uk) english|google english/i.test(n)) { return 4; }
        if (/samantha|ava|allison|zoe|evan|tom|daniel|karen|moira|serena/i.test(n)) { return 3; }
        if (/microsoft (david|zira|mark)(?! online)/i.test(n)) { return 1; }
        return 2;
      };'''
new_score = '''      /* v18.8 — a man's voice first, the same one on every page */
      var MAN = /\\b(guy|andrew|brian|christopher|eric|roger|ryan|steffan|davis|jason|tony|william|liam|connor|daniel|alex|evan|tom|oliver|aaron|arthur|fred|lee|rishi|gordon|james|david|mark|male)\\b/i;
      var score = function (v) {
        var n = String(v.name || "");
        var man = MAN.test(n);
        if (man && /natural/i.test(n)) { return 10; }
        if (man && /online/i.test(n)) { return 9; }
        if (/google uk english male/i.test(n)) { return 8; }
        if (man && /daniel|alex|evan|tom|oliver|aaron|arthur|fred/i.test(n)) { return 7.5; }
        if (man && !/microsoft (david|mark)(?! online)/i.test(n)) { return 7; }
        if (/natural/i.test(n)) { return 6; }
        if (/online/i.test(n)) { return 5; }
        if (/google (us|uk) english|google english/i.test(n)) { return 4; }
        if (/samantha|ava|allison|zoe|karen|moira|serena/i.test(n)) { return 3; }
        if (/microsoft (david|zira|mark)(?! online)/i.test(n)) { return man ? 1.5 : 1; }
        return 2;
      };'''
s = sub1(old_score, new_score, s)
s = sub1("/* v18.7 — the best voice the device has: natural first, then premium, then any English voice that is not the oldest one */",
         "/* v18.7 — the best voice the device has: natural first, then premium, then any English voice that is not the oldest one; v18.8 — a man's voice before any of them */", s)
src.write_text(s, encoding="utf-8")

for name in ("test-story-v186.js", "test-story-v187.js"):
    p = root / name; t = p.read_text(encoding="utf-8")
    t = t.replace("AP-STORY-MODULE-v18\\.7", "AP-STORY-MODULE-v18\\.8").replace("story.js says v18.7", "story.js says v18.8")
    p.write_text(t, encoding="utf-8")
print("story.js v18.8 cut")

# v18.7's two mixed-list cases now expect the man's voice
p = root / "test-story-v187.js"; t = p.read_text(encoding="utf-8")
if "(v18.8)" not in t:
  t = sub1('t("Chrome without a natural voice: Google US English over David", spoken[0].voice && spoken[0].voice.name === "Google US English")',
         't("Chrome without a natural voice: Google UK English Male over Google US English and David (v18.8)", spoken[0].voice && spoken[0].voice.name === "Google UK English Male")', t)
  t = sub1('t("Apple: Samantha; a French voice never", spoken[0].voice && spoken[0].voice.name === "Samantha")',
         't("Apple: Alex over Samantha (v18.8); a French voice never", spoken[0].voice && spoken[0].voice.name === "Alex")', t)
  t = t.replace("// story.js v18.7: the voice pick", "// story.js v18.7 (expectations moved to v18.8): the voice pick")
  p.write_text(t, encoding="utf-8")
print("test-story-v187.js moved to the v18.8 picks")
