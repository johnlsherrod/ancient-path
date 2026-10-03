#!/usr/bin/env python3
"""AP-EW v1: the solo setting (the self-directed course). data-mode="solo" on the root switches eleven lines; nothing else moves. Ruled Oct 2, 2026."""
import os
here = os.path.dirname(os.path.abspath(__file__))
p = os.path.join(here, 'ew-body.html')
s = open(p, encoding='utf-8').read()
def u(t):
    return t.replace('\\u2019', '’').replace('\\u201C', '“').replace('\\u201D', '”').replace('\\u2014', '—')
def rep(old, new, n=1):
    global s
    old, new = u(old), u(new)
    assert s.count(old) == n, (s.count(old), old[:90])
    s = s.replace(old, new)

rep('<div class="ew-root" id="ewRoot">', '<div class="ew-root" id="ewRoot" data-mode="cohort">')
rep('<!-- AP-EW-v1 (v1, 2 Oct 2026: the first cut', '<!-- AP-EW-v1 (v1, 2 Oct 2026: two settings in one file \\u2014 data-mode="cohort" (the men he walked with) or data-mode="solo" (the self-directed course: the men he will walk with) on the root, eleven lines differ, ruled Oct 2; the first cut')
rep('<p class="ew-lede">Twelve weeks, and the men who walked them with you. This is where you tell them where you started, what changed, what God did, and what you hope for &mdash; in your own words, one line at a time. Each line starts for you; you finish it.</p>',
    '<p class="ew-lede" id="ewLede" data-solo="Twelve weeks, on your own. This is where you tell the men you will walk with where you started, what changed, what God did, and what you hope for \\u2014 in your own words, one line at a time. Each line starts for you; you finish it.">Twelve weeks, and the men who walked them with you. This is where you tell them where you started, what changed, what God did, and what you hope for &mdash; in your own words, one line at a time. Each line starts for you; you finish it.</p>')
rep('''    { title: "The Doorway", frame: "The course\\u2019s last charge was \\u201Cstay with the men you walked with.\\u201D This is where you say it to them.",
      slots: [
        { key: "iam", stem: "To the men I walked with, I am", prompt: "Twelve weeks. Say the first true word. The row of words is there if you need it. Then say why, in a few words.", ex: "To the men I walked with, I am tired and grateful. You heard the worst of it and you kept showing up.", words: FEELINGS },
        { key: "sawme", stem: "You saw me", prompt: "What did they see that nobody else did? One picture.", ex: "You saw me on the Wednesday I almost didn\\u2019t log on." }
      ] },''',
'''    { title: "The Doorway", frame: "The course\\u2019s last charge was \\u201Cstay with the men you walked with.\\u201D This is where you say it to them.",
      solo: { frame: "Week 12 says \\u201Clook for, pray for, and actively seek relationship and community with other men.\\u201D This is written to them, before you have met them." },
      slots: [
        { key: "iam", stem: "To the men I walked with, I am", prompt: "Twelve weeks. Say the first true word. The row of words is there if you need it. Then say why, in a few words.", ex: "To the men I walked with, I am tired and grateful. You heard the worst of it and you kept showing up.", words: FEELINGS,
          solo: { stem: "To the men I will walk with, I am", ex: "To the men I will walk with, I am tired and hopeful. You haven\\u2019t heard any of this yet. Here it is." } },
        { key: "sawme", stem: "You saw me", prompt: "What did they see that nobody else did? One picture.", ex: "You saw me on the Wednesday I almost didn\\u2019t log on.",
          solo: { stem: "What you will see in me is", prompt: "What will they see when they meet you? One picture.", ex: "What you will see in me is a man who did twelve weeks of this with nobody watching." } }
      ] },''')
rep('''        { key: "goddid", stem: "What God did was", prompt: "One true sentence. For some men it is this: there are men willing to walk with me. That is God offering relationship.", ex: "What God did was put me in a room with men willing to walk with me." },
        { key: "smallstep", stem: "The small step I can grow by is", prompt: "Years, not weeks. One step you can take this month.", ex: "The small step I can grow by is showing up next Wednesday, whatever this week was." }''',
'''        { key: "goddid", stem: "What God did was", prompt: "One true sentence. For some men it is this: there are men willing to walk with me. That is God offering relationship.", ex: "What God did was put me in a room with men willing to walk with me.",
          solo: { prompt: "One true sentence. For some men it is this: there are men out there willing to walk with me, and I am going to find them. That is God offering relationship.", ex: "What God did was keep me at it for twelve weeks with nobody watching." } },
        { key: "smallstep", stem: "The small step I can grow by is", prompt: "Years, not weeks. One step you can take this month.", ex: "The small step I can grow by is showing up next Wednesday, whatever this week was.",
          solo: { ex: "The small step I can grow by is finding one man and telling him I did this." } }''')
rep('''        { key: "ask", stem: "What I ask of you is", prompt: "The Wednesdays are done. What do you need from these men now?", ex: "What I ask of you is to keep asking me the question, even when I say I\\u2019m fine." },
        { key: "forward", stem: "Going forward, with this group, I will", prompt: "Yes or no \\u2014 say it plainly and own it. Both are honorable. A goodbye said well is an ending done right.", ex: "Going forward, with this group, I will say goodbye. Thank you. I am taking this with me.", words: ["stay", "say goodbye"], wordsFirst: true },
        { key: "remember", stem: "When the gaps get longer and voices fade, I will remember by", prompt: "Week 12: \\u201CThe days are not the achievement. Whatever you did that made the days is the achievement. Find it, name it out loud in the room, and do it again.\\u201D Pick one, or write your own.", ex: "When the gaps get longer and voices fade, I will remember by a call on the first of the month.", words: ["a call", "a text", "coffee", "an online meeting"] }''',
'''        { key: "ask", stem: "What I ask of you is", prompt: "The Wednesdays are done. What do you need from these men now?", ex: "What I ask of you is to keep asking me the question, even when I say I\\u2019m fine.",
          solo: { stem: "What I will ask of you is", prompt: "The course is done. What will you need from the men you find?", ex: "What I will ask of you is to ask me the question, even when I say I\\u2019m fine." } },
        { key: "forward", stem: "Going forward, with this group, I will", prompt: "Yes or no \\u2014 say it plainly and own it. Both are honorable. A goodbye said well is an ending done right.", ex: "Going forward, with this group, I will say goodbye. Thank you. I am taking this with me.", words: ["stay", "say goodbye"], wordsFirst: true,
          solo: { stem: "Going forward, I will", prompt: "Say it plainly and own it. Both are honorable.", ex: "Going forward, I will find a group of men and tell them what I wrote here.", words: ["find men", "keep walking on my own for now"] } },
        { key: "remember", stem: "When the gaps get longer and voices fade, I will remember by", prompt: "Week 12: \\u201CThe days are not the achievement. Whatever you did that made the days is the achievement. Find it, name it out loud in the room, and do it again.\\u201D Pick one, or write your own.", ex: "When the gaps get longer and voices fade, I will remember by a call on the first of the month.", words: ["a call", "a text", "coffee", "an online meeting"],
          solo: { stem: "When the gaps get longer, I will remember by", ex: "When the gaps get longer, I will remember by reading this again on the first of the month.", words: ["reading this again", "a text to one man", "coffee with one man", "a meeting"] } }''')
rep('''  var TAIL = "Written at the end of Breaking Free.";''', '''  /* The setting: data-mode="cohort" (the men he walked with) or "solo" (the self-directed course: the men he will walk with). Eleven lines differ; the parts, the stone and the save do not. */
  var MODE = ($("ewRoot") && $("ewRoot").getAttribute("data-mode")) === "solo" ? "solo" : "cohort";
  if (MODE === "solo") {
    var lede = $("ewLede"); if (lede && lede.getAttribute("data-solo")) lede.textContent = lede.getAttribute("data-solo");
    PARTS.forEach(function (p) {
      if (p.solo) { for (var k in p.solo) { if (Object.prototype.hasOwnProperty.call(p.solo, k)) p[k] = p.solo[k]; } }
      p.slots.forEach(function (s) { if (s.solo) { for (var k2 in s.solo) { if (Object.prototype.hasOwnProperty.call(s.solo, k2)) s[k2] = s.solo[k2]; } } });
    });
  }
  window.ewMode = MODE;
  var TAIL = "Written at the end of Breaking Free.";''')
open(p, 'w', encoding='utf-8').write(s)
print('solo setting in; lines:', s.count('solo: {'))
