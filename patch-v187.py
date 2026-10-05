#!/usr/bin/env python3
"""story.js v18.7 — a better voice (John, Oct 5, after Hear it on Windows: "the voice is awful. machine not human"). The
device's own voices are what we have; Windows's default is the old robotic one, but Edge and Chrome on Windows ship
natural voices beside it. say() now picks the best English voice the device offers — a "Natural" or "Online" voice
first, then Google's or Apple's premium voices, then any English voice that is not the oldest Microsoft one — and keeps
the pick for the session. Nothing else changes."""
import os, hashlib
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'story.js'); s = open(p, encoding='utf-8').read()
def rep(a, b):
    global s
    assert s.count(a) == 1, (a[:70], s.count(a))
    s = s.replace(a, b)
rep('''   AP-STORY-MODULE-v18.6

''', '''   AP-STORY-MODULE-v18.7

   v18.7 (5 Oct 2026) — a better voice for Read it to me and Hear it. The device's default voice on Windows is the old
     robotic one; Edge and Chrome there ship natural voices beside it. say() now picks the best English voice the
     device offers (a "Natural" or "Online" voice, then Google's or Apple's premium voices, then any other English
     voice) and keeps the pick. Nothing else changes.

''')
rep('''    function say(text, onEnd) {
      var s = TTS(); if (!s) { return false; }
      stop();
      var u = new window.SpeechSynthesisUtterance(String(text || ""));
      u.lang = document.documentElement.lang || "en-US"; u.rate = 0.95;''',
'''    /* v18.7 — the best voice the device has: natural first, then premium, then any English voice that is not the oldest one */
    var pickedVoice = null, pickedFor = 0;
    function bestVoice() {
      var s = TTS(); if (!s || typeof s.getVoices !== "function") { return null; }
      var vs = []; try { vs = s.getVoices() || []; } catch (e) { vs = []; }
      if (!vs.length) { return null; }
      if (pickedVoice && pickedFor === vs.length) { return pickedVoice; }
      var en = vs.filter(function (v) { return /^en[-_]/i.test(v.lang || ""); });
      if (!en.length) { en = vs; }
      var score = function (v) {
        var n = String(v.name || "");
        if (/natural/i.test(n)) { return 6; }
        if (/online/i.test(n)) { return 5; }
        if (/google (us|uk) english|google english/i.test(n)) { return 4; }
        if (/samantha|ava|allison|zoe|evan|tom|daniel|karen|moira|serena/i.test(n)) { return 3; }
        if (/microsoft (david|zira|mark)(?! online)/i.test(n)) { return 1; }
        return 2;
      };
      var pick = null, best = -1;
      en.forEach(function (v) { var sc = score(v) + (/^en[-_]US/i.test(v.lang || "") ? 0.5 : 0) + (v.default ? 0.1 : 0); if (sc > best) { best = sc; pick = v; } });
      pickedVoice = pick; pickedFor = vs.length;
      return pick;
    }
    try { var s0 = TTS(); if (s0 && typeof s0.addEventListener === "function") { s0.addEventListener("voiceschanged", function () { pickedVoice = null; }); } } catch (e) {}
    function say(text, onEnd) {
      var s = TTS(); if (!s) { return false; }
      stop();
      var u = new window.SpeechSynthesisUtterance(String(text || ""));
      u.lang = document.documentElement.lang || "en-US"; u.rate = 0.95;
      var v = bestVoice(); if (v) { try { u.voice = v; if (v.lang) { u.lang = v.lang; } } catch (e) {} }''')
rep('''    return { SR: SR, TTS: TTS, touch: touch, phone: phone, say: say, stop: stop,''',
    '''    return { SR: SR, TTS: TTS, touch: touch, phone: phone, say: say, stop: stop, bestVoice: bestVoice,''')
open(p, 'w', encoding='utf-8').write(s)
b = s.encode('utf-8'); print('story.js', len(b), 'bytes · sha256', hashlib.sha256(b).hexdigest())
