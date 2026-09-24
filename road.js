/* AP-ROAD-v1 (v22: chapters read as a story with bridges, Continue, the saved-to-your-page line, Part One prompts) · The Road I Walked · Walk With Me. One file: styles, the ten chapters, the story, the save. Built from the walk-through modules. */
(function(){

if(!window.AP_ROAD||window.__apRoadStarted)return;window.__apRoadStarted=1;
var host=document.getElementById("ap-road");if(!host)return;
var st=document.createElement("style");st.id="ap-road-css";st.textContent="#ap-road,#ap-road *{text-align:left;text-transform:none;letter-spacing:normal;box-sizing:border-box;float:none}#ap-road button{text-align:center;border-radius:0;box-shadow:none;text-shadow:none;min-width:0;min-height:0;height:auto;width:auto;line-height:1.3;margin:0;text-decoration:none}#ap-road p{margin:1em 0;padding:0}#ap-road ul,#ap-road ol{margin:1em 0;padding-left:1.4em}#ap-road li{margin:0;padding:0}#ap-road label{display:block;margin:0}#ap-road a{color:inherit}#ap-road svg{max-width:100%;height:auto}#ap-road{--navy:#1F2A44;--bronze:#8C6A3F;--gold:#C9A227;--cream:#FBF7EF;--paper:#FFFFFF;--sand:#F1EADB;--line:#E5DCC8;--ink:#2A2723;--soft:#6B6358;\n  --serif:\"Source Serif 4\",Georgia,\"Times New Roman\",serif;--sans:\"Source Sans 3\",\"Helvetica Neue\",Arial,sans-serif}#ap-road, #ap-road *{box-sizing:border-box}#ap-road{background:var(--cream);color:var(--ink);font-family:var(--serif);font-size:17px;line-height:1.55;padding-inline:16px;padding-block:0 80px}#ap-road .top{max-width:720px;margin:0 auto;padding-block:18px 14px;display:flex;flex-direction:column;gap:10px;border-bottom:1px solid var(--line)}#ap-road .top .what{font-family:var(--sans);font-size:13.5px;color:var(--soft);margin:0}#ap-road .top .what b{color:var(--ink)}#ap-road .switch{display:flex;flex-wrap:wrap;gap:8px}#ap-road .switch button{font-family:var(--sans);font-size:14px;font-weight:600;padding:8px 14px;border:1.5px solid var(--navy);background:#fff;color:var(--navy);cursor:pointer}#ap-road .switch button[aria-pressed=\"true\"]{background:var(--navy);color:#fff}#ap-road #ap-road-app{max-width:720px;margin:28px auto 0}#ap-road .sheet{background:var(--paper);border:1px solid var(--line);box-shadow:0 1px 0 var(--line),0 18px 40px -28px rgba(31,42,68,.35);padding:clamp(20px,5vw,44px)}#ap-road .eyebrow{font-family:var(--sans);font-size:12px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--bronze)}#ap-road h1{font-size:clamp(26px,5vw,34px);line-height:1.15;color:var(--navy);margin:6px 0 10px;font-weight:600;text-wrap:balance}#ap-road h2{font-size:22px;line-height:1.2;color:var(--navy);margin:4px 0 6px;font-weight:600}#ap-road .fixed{margin:0 0 22px;max-width:60ch}#ap-road .cards{display:flex;flex-direction:column;gap:14px}#ap-road .card{border:1px solid var(--line);padding:18px 20px;background:var(--cream)}#ap-road .card.main{background:#fff;border:1.5px solid var(--navy)}#ap-road .card.dim{opacity:.62}#ap-road .state{margin:0;font-family:var(--sans);font-size:15px;color:var(--ink)}#ap-road .quiet{margin:2px 0 0;font-family:var(--sans);font-size:14px;color:var(--soft)}#ap-road .row{display:flex;flex-wrap:wrap;gap:10px;margin-top:14px}#ap-road .row.bar{margin-top:22px}#ap-road .btn{font-family:var(--sans);font-size:15px;font-weight:600;padding:11px 18px;border:1.5px solid var(--navy);color:var(--navy);background:#fff;cursor:pointer}#ap-road .btn.main{background:var(--navy);color:#fff}#ap-road .btn:focus-visible,#ap-road .switch button:focus-visible,#ap-road .link:focus-visible,#ap-road .toggle:focus-visible,#ap-road input:focus-visible,#ap-road textarea:focus-visible{outline:3px solid var(--gold);outline-offset:2px}#ap-road .links{margin:14px 0 0;display:flex;flex-wrap:wrap;gap:6px 22px}#ap-road .link{font-family:var(--sans);font-size:14px;color:var(--soft);background:none;border:0;padding:0;text-decoration:underline;cursor:pointer}#ap-road .say{font-family:var(--sans);font-size:14.5px;color:var(--navy);background:var(--sand);padding:10px 14px;margin:16px 0 0}#ap-road .ch-head{text-align:center;margin-bottom:22px}#ap-road .ch-head .t{font-size:clamp(28px,6vw,38px);color:var(--navy);font-weight:600;line-height:1.12;margin:6px 0 4px;text-wrap:balance}#ap-road .ch-head .by{font-family:var(--sans);font-size:14px;color:var(--soft)}#ap-road .rule{width:64px;height:3px;background:var(--gold);margin:16px auto 0}#ap-road .ours{font-style:italic;color:var(--bronze);font-size:16px;line-height:1.5;margin:18px 0;text-align:center;text-wrap:balance}#ap-road .ours.left{text-align:left;font-size:15px;margin:2px 0 6px}#ap-road .ours cite{display:block;font-style:normal;font-family:var(--sans);font-size:12px;letter-spacing:.08em;text-transform:uppercase;margin-top:4px}#ap-road .his{font-size:20px;line-height:1.45;margin:10px 0}#ap-road .his .lead{font-family:var(--sans);font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--soft);display:block;margin-bottom:2px}#ap-road .stage{font-style:italic;color:var(--navy);font-size:17px;margin:6px 0 0}#ap-road .then-now{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);margin:8px 0}#ap-road .then-now>div{padding:18px}#ap-road .then-now>div+div{border-left:1px solid var(--line);background:var(--cream)}#ap-road .then-now .when{font-family:var(--sans);font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--bronze);margin-bottom:6px}#ap-road .then-now p{margin:0;font-size:18px;line-height:1.4}#ap-road .road svg{width:100%;height:auto;display:block}#ap-road .road .cap{font-size:17px;color:var(--navy);margin:8px 0 4px;text-align:center;text-wrap:balance}#ap-road .road .sub{font-family:var(--sans);font-size:14px;color:var(--soft);text-align:center;margin:0 0 14px}#ap-road .divide{height:1px;background:var(--line);margin:26px 0}#ap-road .thread{font-size:18px;color:var(--navy);text-align:center;margin:0;text-wrap:balance}#ap-road .thread b{font-weight:600;border-bottom:2px solid var(--gold)}#ap-road .chap{padding:16px 0;border-bottom:1px solid var(--line)}#ap-road .part{font-family:var(--sans);font-size:12.5px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--bronze);margin-bottom:4px}#ap-road .movement{display:flex;align-items:center;gap:14px;margin:34px 0 6px;font-family:var(--sans);font-size:13px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--navy)}#ap-road .movement::before,#ap-road .movement::after{content:\"\";flex:1;height:1px;background:var(--gold)}#ap-road .recall{color:var(--soft);margin:6px 0 12px;padding:2px 0 2px 14px;border-left:3px solid var(--gold)}#ap-road .recall span{display:block;font-family:var(--sans);font-size:14.5px;line-height:1.45}#ap-road .recall p{font-style:italic;font-size:17.5px;line-height:1.45;color:var(--ink);margin:4px 0}#ap-road .prose{font-size:18.5px;line-height:1.6;padding:14px 16px}#ap-road .prose-p{font-size:19px;line-height:1.65;margin:0 0 16px}#ap-road .tellpart{margin-bottom:10px}#ap-road .note{border:1px solid var(--line);border-left:3px solid var(--gold);background:var(--cream);padding:16px 18px;margin:16px 0}#ap-road .note .his.quoted{margin-top:4px}#ap-road .note textarea{margin-top:4px}#ap-road .his.bridge{color:var(--navy);margin:6px 0 6px 14px;padding-left:12px;border-left:2px solid var(--gold);font-size:18.5px}#ap-road .his.bridge .link{font-size:13px;margin-left:6px}#ap-road .gaprow{margin:2px 0 2px 14px}#ap-road .gaprow .link{color:var(--bronze)}#ap-road select{font-family:var(--serif);font-size:16px;color:var(--ink);padding:10px 12px;border:1px solid var(--bronze);background:#fff;width:100%;border-radius:0}#ap-road .field .words{margin:4px 0 6px}#ap-road .field .help{margin:4px 0 0}#ap-road .gap{border-left:2px dashed var(--bronze);margin:4px 0 4px 10px;padding:10px 0 10px 16px}#ap-road .gap .ask.small{color:var(--navy);margin:0 0 8px}#ap-road .gap .links{margin:6px 0 0}#ap-road .his.mine{margin:12px 0}#ap-road .ask.small{font-size:16.5px;font-weight:400;margin:0 0 12px}#ap-road .carebox{max-width:720px;margin:18px auto 0;border-left:4px solid var(--navy)}#ap-road .his .gloss{display:block;font-family:var(--sans);font-size:14px;font-style:italic;color:var(--soft);margin-bottom:3px}#ap-road .where{list-style:none;padding:0;margin:14px auto 0;max-width:54ch;display:flex;flex-direction:column;gap:12px}#ap-road .where li{font-size:17.5px;line-height:1.45}#ap-road .where li span{display:block;font-family:var(--sans);font-size:12px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--bronze);margin-bottom:1px}#ap-road .where li b{font-weight:600;border-bottom:2px solid var(--gold)}#ap-road .ours.closing{margin-top:34px}#ap-road .straight .movement{margin-top:26px}#ap-road .tail{font-size:22px;font-weight:600;color:var(--navy);text-align:center;margin:30px 0 8px;text-wrap:balance}#ap-road .refs{text-align:center;margin-top:28px}#ap-road .refs p{font-family:var(--sans);font-size:13.5px;color:var(--soft);margin:4px 0 0}#ap-road .copybox{width:100%;min-height:180px;margin-top:12px;font-family:var(--sans);font-size:14px;padding:10px;border:1px solid var(--bronze)}#ap-road .field{display:flex;flex-direction:column;gap:4px;margin:0 0 14px}#ap-road .field label,#ap-road .edit-top label{font-family:var(--sans);font-size:13px;font-weight:700;color:var(--soft);letter-spacing:.04em}#ap-road input,#ap-road textarea{font-family:var(--serif);font-size:17px;line-height:1.4;color:var(--ink);padding:10px 12px;border:1px solid var(--bronze);background:#fff;width:100%;border-radius:0}#ap-road textarea{resize:vertical}#ap-road .edit-ch{border-top:1px solid var(--line);padding:18px 0 6px}#ap-road .edit-line{margin:0 0 14px}#ap-road .edit-line.off textarea{color:var(--soft);background:var(--cream);border-color:var(--line)}#ap-road .edit-top{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:4px;flex-wrap:wrap}#ap-road .toggle{font-family:var(--sans);font-size:13px;font-weight:700;padding:5px 12px;border:1.5px solid var(--navy);background:#fff;color:var(--navy);cursor:pointer}#ap-road .toggle[aria-pressed=\"true\"]{background:var(--navy);color:#fff}#ap-road .pair{display:grid;grid-template-columns:1fr 1fr;gap:12px}#ap-road .wq{margin:0 0 8px}#ap-road .q{font-size:20px;line-height:1.4;color:var(--navy);margin:8px 0 12px}#ap-road .scale{display:flex;gap:10px;align-items:center;margin:6px 0}#ap-road .dot{width:44px;height:44px;border-radius:50%;border:1.5px solid var(--bronze);background:#fff;font-family:var(--sans);font-size:16px;color:var(--bronze);cursor:pointer}#ap-road .dot.on{background:var(--navy);border-color:var(--navy);color:#fff;font-weight:700}#ap-road .ends{display:flex;justify-content:space-between;max-width:260px;font-family:var(--sans);font-size:12px;color:var(--soft);margin-bottom:18px}#ap-road .beneath{border-top:1px solid var(--line);padding-top:16px;margin-bottom:10px}#ap-road .ask{font-size:19px;color:var(--navy);margin:0 0 4px;font-weight:600}#ap-road .help{font-family:var(--sans);font-size:14.5px;color:var(--soft);margin:0 0 12px}#ap-road .words{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 14px}#ap-road .word{font-family:var(--sans);font-size:14.5px;padding:8px 13px;border:1px solid var(--line);background:var(--cream);color:var(--ink);cursor:pointer}#ap-road .word.pick{background:var(--navy);border-color:var(--navy);color:#fff;font-weight:600}#ap-road .word:focus-visible,#ap-road .dot:focus-visible,#ap-road .pickline:focus-visible{outline:3px solid var(--gold);outline-offset:2px}#ap-road .verse{font-size:17px;margin:0 0 6px}#ap-road .ref{font-style:normal;font-family:var(--sans);font-size:12px;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap}#ap-road .care{font-size:15.5px;color:var(--ink);background:var(--sand);padding:10px 12px;margin:6px 0 12px}#ap-road .ex{font-family:var(--sans);font-size:14px;color:var(--soft);margin:6px 0 0}#ap-road .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}#ap-road .pickline{font:inherit;color:inherit;text-align:left;background:none;border:0;padding:2px 6px;margin:0 -6px;cursor:pointer;display:block;width:calc(100% + 12px)}#ap-road .pickline.on{background:var(--sand)}#ap-road .his.quoted{border-left:3px solid var(--gold);padding-left:12px;color:var(--soft);font-size:18px}#ap-road .stage.big{font-size:20px;text-align:center}#ap-road .center{text-align:center}#ap-road .orig{font-family:var(--sans);font-size:13.5px;color:var(--soft);margin:6px 0 0}#ap-road .straight .part,#ap-road .straight .ours.left{display:none}#ap-road .straight .chap{border:0;padding:8px 0}#ap-road .straight .chap .stage{margin-bottom:6px}@media (max-width:620px){#ap-road .then-now,#ap-road .pair{grid-template-columns:minmax(0,1fr)}#ap-road .then-now>div+div{border-left:0;border-top:1px solid var(--line)}#ap-road .his{font-size:18.5px}}@media print{#ap-road{background:#fff;padding:0}#ap-road .top,#ap-road .row,#ap-road .say,#ap-road .copybox{display:none!important}#ap-road .sheet{border:0;box-shadow:none;padding:0}#ap-road #ap-road-app{margin:0;max-width:none}}\n#ap-road .prose-p .bridge{color:var(--navy)}#ap-road .prose-p .pickline{display:inline;width:auto;margin:0;padding:1px 4px;border-radius:3px}#ap-road .prose-p .stage{display:inline;font:inherit;margin:0;padding:0}#ap-road .map{max-width:520px;margin:12px auto}#ap-road .map.small{max-width:360px}#ap-road .byline{font-family:var(--sans);font-size:13px;color:var(--soft);margin:0 0 14px}#ap-road .line{font-size:19px;line-height:1.5;margin:10px 0}#ap-road .line .his{display:block;font-family:var(--sans);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--soft);margin-bottom:2px}#ap-road .agency{border-left:3px solid var(--gold);padding-left:12px;color:var(--navy)}#ap-road input[type=text]{font:inherit;font-size:17px;padding:8px 10px;border:1px solid var(--line);background:#fff;width:100%;max-width:360px;margin:0 0 14px}#ap-road label.ask{display:block}#ap-road{display:block;text-align:left;max-width:100%;padding-block:0 40px;border-radius:0}#ap-road .top{display:none}#ap-road .savebar{max-width:720px;margin:18px auto 0}#ap-road [hidden]{display:none!important}@media print{body *{visibility:hidden!important}#ap-road,#ap-road *{visibility:visible!important}#ap-road{position:absolute;left:0;top:0;width:100%}#ap-road .savebar{display:none!important}}";document.head.appendChild(st);
if(!document.getElementById("ap-road-fonts")){var lk=document.createElement("link");lk.id="ap-road-fonts";lk.rel="stylesheet";lk.href="https://fonts.googleapis.com/css2?family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400;1,8..60,600&family=Source+Sans+3:wght@400;600;700&display=swap";document.head.appendChild(lk);}
host.innerHTML="<div id=\"ap-road-care\" class=\"care carebox\" role=\"alert\" hidden><b>If you or anyone else is in danger right now, stop here.</b> Call 911, or call or text 988. Then tell one man you trust today. What you have written is still here when you come back.</div><div id=\"ap-road-app\"></div>";
/* ---- road_data.js ---- */
/* Sample man. Every sentence in his voice is made up for the walk-through. */
var ROAD_DATA = {
  title: "The Road I Walked",
  movements: ["", "The Walk", "The Companion", "The Sending"],
  opens: "Two disciples are leaving Jerusalem for Emmaus \u2014 about seven miles, a half-day's journey, plenty of time to talk.",
  closes: "The road away becomes the road back the moment you know who was walking it with you.",
  byline: "Daniel R.",
  when: "September 2026",
  tail: "being known by three men, and not finished.",
  chapters: [
    { part: "Part One", nums: [5,4,4,2,3], name: "The First Walk", mv: 1,
      ours: "Mercy was already moving toward us before we ever moved toward Him.",
      lines: [
        { label: "Where I have been hiding", text: "I've been hiding from God in my work since the twins were born.", on: true },
        { label: "The men who know where I am", text: "Nobody. My wife knows some of it.", on: false }
      ], setOut: "telling myself I'm fine", camped: "admitting I'm not" },
    { part: "Part Two", nums: [3,4,3,4,2], name: "Stand at the Crossroads", mv: 1, ours: "",
      lines: [
        { label: "What I keep hold of", text: "I keep control of the money so nobody can ask me about it.", on: true, between: 'At home I hid somewhere else. My wife stopped asking about the accounts years ago, because I made it unpleasant to ask.' },
        { label: "Where I put my X", text: "I put my X further up the road than I should have.", on: false },
        { label: "This week", text: "Ten minutes of quiet before work, every morning.", on: false }
      ], setOut: "guessing where I stand", camped: "an honest X" },
    { part: "Part Three", nums: [4,1,4,2,3], name: "Pruned and Rooted", mv: 1,
      ours: "Pruning is not punishment — it's what the Vinedresser does to branches He intends to keep.",
      lines: [
        { label: "The root I can name", text: "Unforgiveness. I still replay what my father said to me at the funeral.", on: true, between: 'When the course asked what was underneath all that, I expected to write pride. What came up was my father.' },
        { label: "When I am cut back", text: "When I lost the Henderson account, my first thought was that God was done with me.", on: true, between: 'I did not connect that to anything until the week I lost my biggest account.' },
        { label: "The men who would know", text: "Mark and David.", on: false },
        { label: "This week", text: "Thursday after group, I will tell Mark.", on: false }
      ], setOut: "needing my father to say he was wrong", camped: "one man knows, and that is enough for this week" },
    { part: "Part Four", nums: [3,4,3,4,3], name: "The Mature Orchard", mv: 1, ours: "",
      lines: [
        { label: "Where my faith went to work", text: "My son asked why I was at the pantry. I didn't have a good answer yet.", on: true, between: 'The discipline I picked was service, because it was the one I could do without talking to anyone. Saturdays at the food pantry, and I brought my son.' },
        { label: "The discipline I chose", text: "Service. Saturday mornings at the food pantry with my son.", on: false, ev: true }
      ], setOut: "study as a hiding place", camped: "a Saturday with my son" },
    { part: "Part Five", nums: [4,4,4,2,3], name: "Justice, Justice You Shall Pursue", mv: 2,
      ours: "Before you ask what justice is, ask who it is.",
      lines: [
        { label: "Where I pressed on being right", text: "I was right about the contract and wrong about my partner.", on: true, between: 'My partner and I had been arguing over a contract for most of a year.' },
        { label: "What I did about it", text: "I called him. It took four days to pick up the phone.", on: false, ev: true }
      ], setOut: "being right", camped: "a phone call I didn't want to make" },
    { part: "Part Six", nums: [5,3,4,3,3], name: "The Thirteen Attributes", mv: 2, ours: "",
      recall: { from: 2, lead: "Back in Part Three \u00b7 Pruned and Rooted, I was asked to name the hidden root that was quietly turning my heart. I wrote:",
                bridge: "Part Six asked which of God's mercies I believe for other men and quietly disbelieve for myself." },
      lines: [
        { label: "The one I can't fake", text: "Slow to anger is the one I can't fake. I lose control in the car.", on: true, between: 'When I finally called him, he told me I was the angriest calm man he knew.' }
      ], setOut: "pretending I'm patient", camped: "telling my wife what happens in the car" },
    { part: "Part Seven", nums: [4,3,4,3,3], name: "The Names Tell a Story", mv: 2, ours: "",
      lines: [
        { label: "The name I have prayed to", text: "I have only ever prayed to the God who judges.", on: true, between: 'I prayed about the anger the way I pray about everything: like a man reporting to a judge.' }
      ], setOut: "a God I manage by staying busy", camped: "ten quiet minutes before the house wakes up" },
    { part: "Part Eight", nums: [3,3,4,4,4], name: "The Courts of Elohim", mv: 2, ours: "",
      lines: [
        { label: "What I brought into the light", text: "I told Mark about my father. He didn't flinch.", on: true, ev: true, between: 'Mark is in my Tuesday group. One night after group I asked him to stay.' }
      ], setOut: "carrying it alone", camped: "two men who know" },
    { part: "Part Nine", nums: [3,2,4,4,4], name: "Where Justice and Mercy Kiss", mv: 2, ours: "",
      recall: { from: 0, lead: "At the start, in Part One \u00b7 The First Walk, I was asked where I was hiding from God. I wrote:",
                bridge: "Part Nine asked what that hidden thing could become for someone else." },
      lines: [
        { label: "Where mercy met me", text: "Giving up control of the story was the mercy.", on: true, between: "For years I had managed who knew what about me. Telling Mark was the first time I didn't manage it." },
        { label: "What is still open", text: "I wrote my father a letter. I haven't sent it.", on: false, ev: true }
      ], setOut: "needing the apology", camped: "a letter in the drawer" },
    { part: "Part Ten", nums: [3,5,4,5,4], name: "The Fruit Is for Your Community, and for You", mv: 3, ours: "",
      lines: [
        { label: "Where I am", text: "Three men know my whole story now, and I am still standing.", on: true, ev: true, between: 'David was next. Then Paul, who leads our group.' }
      ], setOut: "the man who hid in his work", camped: "being known" }
  ],
  /* one mark a section, in map units (600 x 500) */
  trail: [[130,398],[176,370],[192,305],[212,238],[268,258],[335,292],[384,300],[412,258],[398,212],[436,172]],
  /* Statements in different parts that measure a related thing. "said" is the statement in plain words, second person. */
  threads: [
    { name: "the men who know", steps: [
      { at: 2, s: 1, said: "there are people who would know within a week if you were being cut back hard" },
      { at: 6, s: 3, said: "you are willing to let someone else see you wrestling" },
      { at: 7, s: 4, said: "there is a place where you could let another man hear what you carry" },
      { at: 9, s: 3, said: "you are willing to tell one man your plan by name" } ] },
    { name: "what I hid", steps: [
      { at: 0, s: 0, said: "hiding feels safer to you than walking openly with God" },
      { at: 8, s: 1, said: "there is a chapter of your story that you have kept hidden" } ] },
    { name: "mercy for myself", steps: [
      { at: 5, s: 0, said: "there is a mercy of God you believe for other people and quietly disbelieve for yourself" },
      { at: 7, s: 1, said: "your gut pictures the Judge as against you" } ] },
    { name: "making it right", steps: [
      { at: 4, s: 1, said: "there is a wrong in your life that has not been made right" },
      { at: 9, s: 4, said: "you can name one act that will cost you something" } ] }
  ],
  sides: { "Aging Fruit": "a deep inner life with thin community", "Limited Fruit": "busy hands with a thin interior" },
  bends: [
    { at: 3, side: "Aging Fruit", text: "I was reading more than I ever had, and not one man knew me.", between: "The honest one was that serving was easier than being known." },
    { at: 6, side: "Limited Fruit", text: "I said yes to everything at church so I would never have to sit still.", between: "So I stayed busy." }
  ],
  refs: ["Luke 24:13\u201333", "Numbers 33:2", "Genesis 3:9", "Deuteronomy 29:18", "John 15:1–2", "James 5:16"]
};
if (typeof module !== "undefined") module.exports = ROAD_DATA;

/* ---- road_core.js ---- */
/* AP-ROAD-WALKTHROUGH core: shared by the page and the node proof. No DOM in here. */
var ROAD = (function () {
  var STOP = ("the and that this with from have been what when where who will would could should about there their them then than " +
    "into over more much very just still even ever never only some every because before after again while which whose " +
    "myself know knows thing things something anything nothing being doing didn't don't can't haven't wasn't since " +
    "first thought story whole three").split(" ");

  function chapters(d, stage) { return stage === "me" ? d.chapters.slice(0, d.meCount || 0) : stage === "walking" ? d.chapters.slice(0, 6) : stage === "three" ? d.chapters.slice(0, d.threeDone ? 3 : 2) : d.chapters; }

  function onLines(ch) { return ch.lines.filter(function (l) { return l.on && l.text.trim(); }); }
  /* the closing of a finished story: what a strong man wrote when a statement was not his struggle, so another man can hear it */
  var HANDED = "What I could hand another man";
  /* a story is finished on the walk-through's "finished" stage, and on the site once a man has written all ten chapters */
  function finished(d, stage) { return stage === "finished" || (stage === "me" && (d.meCount || 0) >= (typeof ROAD_PARTS !== "undefined" ? ROAD_PARTS.length : 10)); }
  function handed(d, stage) { var out = []; if (!finished(d, stage)) return out; chapters(d, stage).forEach(function (ch) { ch.lines.forEach(function (l) { if (l.grew && l.text && l.text.trim()) out.push({ part: fullPart(ch), label: l.label, text: l.text.trim() }); }); }); return out; }

  function stageLine(ch) {
    var a = (ch.setOut || "").trim(), b = (ch.camped || "").trim();
    if (!a && !b) return "";
    var out = [];
    if (a) out.push("I set out from " + a.replace(/[.\s]+$/, "") + ".");
    if (b) out.push("I camped at " + b.replace(/[.\s]+$/, "") + ".");
    return out.join(" ");
  }

  /* A word he keeps using: appears in the most chapters (at least three), counted over every line he wrote. */
  function thread(d, stage) {
    var seen = {};
    chapters(d, stage).forEach(function (ch, i) {
      var words = {};
      onLines(ch).forEach(function (l) {
        (l.text.toLowerCase().match(/[a-z']{5,}/g) || []).forEach(function (w) {
          if (STOP.indexOf(w) < 0) words[w] = 1;
        });
      });
      Object.keys(words).forEach(function (w) { (seen[w] = seen[w] || []).push(i); });
    });
    var best = null;
    Object.keys(seen).forEach(function (w) {
      if (seen[w].length >= 3 && (!best || seen[w].length > seen[best].length)) best = w;
    });
    if (!best) return null;
    /* every place the word appears comes with the sentence it is in and the part it came from */
    var chs = chapters(d, stage), where = [];
    seen[best].forEach(function (i) {
      onLines(chs[i]).forEach(function (l) {
        if (l.text.toLowerCase().match(/[a-z']{5,}/g).indexOf(best) >= 0) where.push({ part: fullPart(chs[i]), text: l.text.trim() });
      });
    });
    return { word: best, at: seen[best], where: where };
  }

  function fullPart(ch) { return ch.part + (ch.name ? " · " + ch.name : ""); }

  /* A bend names its corner in plain words and the part it happened in. */
  function bendLabel(d, b) {
    return "Where the road bent toward " + b.side + " · " + fullPart(d.chapters[b.at]);
  }
  function bendGloss(d, b) {
    var g = d.sides && d.sides[b.side];
    return g ? b.side + " is the corner of the map for " + g + "." : "";
  }

  /* A line too short to stand alone carries its label with it. */
  function shown(l) {
    var t = l.text.trim();
    return t.split(/\s+/).length <= 4 && l.label ? l.label + ": " + t : t;
  }

  function listParts(d, idx) {
    var n = idx.map(function (i) { return d.chapters[i].part.replace("Part ", "").toLowerCase(); });
    return n.length > 1 ? n.slice(0, -1).join(", ") + " and " + n[n.length - 1] : n[0];
  }

  /* Catmull-Rom through the marks, as cubic segments [c1x,c1y,c2x,c2y,x,y]. */
  function segments(p) {
    var s = [];
    for (var i = 0; i < p.length - 1; i++) {
      var p0 = p[i > 0 ? i - 1 : i], p1 = p[i], p2 = p[i + 1], p3 = p[i + 2 < p.length ? i + 2 : i + 1];
      s.push([p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6,
              p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6, p2[0], p2[1]]);
    }
    return s;
  }
  function pathD(p) {
    return "M" + p[0][0] + "," + p[0][1] + segments(p).map(function (s) {
      var r = s.map(function (v) { return Math.round(v); });
      return " C" + r[0] + "," + r[1] + " " + r[2] + "," + r[3] + " " + r[4] + "," + r[5];
    }).join("");
  }

  /* Where his answers moved. Only the instrument knows this: two related statements, parts apart, answered differently.
     He never sees a number again; the page says it back in words and asks what happened between the two. */
  function saidAs(n, said) { return n >= 4 ? "you said it was true that " + said : n <= 2 ? "you said it was not true that " + said : "you were in the middle on whether " + said; }
  function moves(d, stage) {
    var chs = chapters(d, stage), out = [];
    (d.threads || []).forEach(function (th) {
      var st = th.steps.filter(function (x) { return x.at < chs.length && chs[x.at].nums && chs[x.at].nums[x.s] != null; }), best = null;
      for (var i = 0; i < st.length; i++) for (var j = i + 1; j < st.length; j++) {
        var a = chs[st[i].at].nums[st[i].s], b = chs[st[j].at].nums[st[j].s], gap = Math.abs(a - b);
        if (gap >= 2 && (a <= 2 || a >= 4 || b <= 2 || b >= 4) && (!best || gap > best.gap)) best = { gap: gap, from: st[i], to: st[j], a: a, b: b };
      }
      if (best) out.push({ thread: th.name, at: best.to.at, gap: best.gap,
        question: "In " + fullPart(chs[best.from.at]) + ", " + saidAs(best.a, best.from.said) + ". In " + fullPart(chs[best.to.at]) + ", " + saidAs(best.b, best.to.said) + ". What happened between those two?" });
    });
    return out.sort(function (x, y) { return y.gap - x.gap; }).slice(0, 4);
  }

  /* Evidence: his journal (what he wrote), his life with other men (what he did), his testimony (what he gives). All of it his words.
     Gathered from every chapter before part `upto`, whether or not the line is in his story. No count, no praise, nothing of ours. */
  function evidence(d, stage, upto) {
    var out = { charge: null, seen: [] };
    chapters(d, stage).forEach(function (ch, i, arr) {
      if (upto != null && i >= upto) return;
      ch.lines.forEach(function (l) {
        if (!l.text || !l.text.trim()) return;
        if (l.charge) out.charge = { part: fullPart(ch), label: l.label, text: l.text.trim() };
        /* a commitment he is answering was SAID in the part before the one that holds his answer */
        if (l.ev) out.seen.push({ part: fullPart(ch), saidPart: i > 0 ? fullPart(arr[i - 1]) : fullPart(ch), label: l.label, text: l.text.trim(), said: l.ctx && l.ctx.quote ? l.ctx.quote : "" });
      });
    });
    return out;
  }

  /* A later chapter shows him his own earlier line: the job line of the chapter it recalls. */
  function recallLine(d, ch) {
    if (!ch.recall) return null;
    var src = d.chapters[ch.recall.from], l = src && onLines(src)[0];
    return l ? { lead: ch.recall.lead, text: l.text.trim(), bridge: ch.recall.bridge || "" } : null;
  }

  function thenNow(d, stage) {
    var chs = chapters(d, stage), first = null, last = null;
    chs.forEach(function (ch) { var l = onLines(ch)[0]; if (l) { if (!first) first = { ch: ch, l: l }; last = { ch: ch, l: l }; } });
    return first && last && first !== last && first.ch !== last.ch ? { first: first, last: last } : null;
  }

  function text(d, stage) {
    var out = [d.title, d.byline + " · " + d.when, "", d.opens, ""], lastMv = 0;
    chapters(d, stage).forEach(function (ch) {
      var ls = onLines(ch), st = stageLine(ch), rc = recallLine(d, ch);
      if (!ls.length && !st) return;
      if (ch.mv !== lastMv) { lastMv = ch.mv; out.push("— " + d.movements[ch.mv].toUpperCase() + " —", ""); }
      out.push((ch.part + (ch.name ? " · " + ch.name : "")).toUpperCase());
      if (rc) out.push(rc.lead + " “" + rc.text + "” " + rc.bridge);
      ls.forEach(function (l) { if (l.ctx) out.push(l.ctx.lead + " “" + l.ctx.quote + "”"); out.push(shown(l)); });
      if (st) out.push(st);
      out.push("");
    });
    d.bends.forEach(function (b) { if (b.at < chapters(d, stage).length && b.text.trim()) out.push(bendLabel(d, b) + ". " + bendGloss(d, b), b.text.trim()); });
    var th = thread(d, stage);
    if (th) { out.push("", "A word I keep using: " + th.word); th.where.forEach(function (w) { out.push(w.part + ": " + w.text); }); }
    var hd = handed(d, stage);
    if (hd.length) { out.push("", HANDED); hd.forEach(function (l) { out.push(l.part + " · " + l.label, l.text); }); }
    if (finished(d, stage)) out.push("", d.closes);
    if (finished(d, stage) && d.tail.trim()) out.push("", "Today I am camped at " + d.tail.trim());
    out.push("", "Written in Walk With Me · Ancient Path Biblical Coaching");
    return out.join("\n");
  }

  /* The keepsake. Letter page, points. */
  function pdf(JsPDF, d, stage, story) {
    var doc = new JsPDF({ unit: "pt", format: "letter" }), W = 612, H = 792, M = 72, y = M;
    var NAVY = [31, 42, 68], BRONZE = [140, 106, 63], GOLD = [201, 162, 39], INK = [42, 39, 35], SOFT = [107, 99, 88];
    function room(h) { if (y + h > H - 64) { foot(); doc.addPage(); y = M; } }
    function foot() {
      doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(SOFT[0], SOFT[1], SOFT[2]);
      doc.text("Walk With Me · Ancient Path Biblical Coaching · ancientpathcoaching.com", W / 2, H - 40, { align: "center" });
    }
    function para(t, o) {
      doc.setFont(o.font || "times", o.style || "normal"); doc.setFontSize(o.size); doc.setTextColor(o.color[0], o.color[1], o.color[2]);
      var lines = doc.splitTextToSize(t, o.width || (W - 2 * M)), lh = o.size * (o.lead || 1.4);
      room(lines.length * lh + (o.after || 0));
      var asc = o.size * 0.82;
      lines.forEach(function (ln) { doc.text(ln, o.center ? W / 2 : M, y + asc, o.center ? { align: "center" } : undefined); y += lh; });
      y += (o.after || 0);
    }
    para("WALK WITH ME", { font: "helvetica", style: "bold", size: 9, color: BRONZE, center: true, after: 6 });
    para(d.title, { style: "bold", size: 28, color: NAVY, center: true, lead: 1.15, after: 2 });
    para(d.byline + " · " + d.when, { size: 11, color: SOFT, center: true, after: 8 });
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]); doc.setLineWidth(2); doc.line(W / 2 - 24, y, W / 2 + 24, y); y += 26;
    para(d.opens, { style: "italic", size: 11.5, color: BRONZE, center: true, width: 380, after: 18 });

    /* the map */
    var chs = chapters(d, stage), pts = d.trail.slice(0, chs.length), k = 0.52, ox = (W - 600 * k) / 2, oy = y;
    room(500 * k + 30); oy = y;
    function X(v) { return ox + v * k; } function Y(v) { return oy + v * k; }
    doc.setDrawColor(NAVY[0], NAVY[1], NAVY[2]); doc.setLineWidth(1);
    doc.line(X(70), Y(440), X(572), Y(440)); doc.line(X(70), Y(440), X(70), Y(44));
    doc.setFont("times", "italic"); doc.setFontSize(9.5); doc.setTextColor(BRONZE[0], BRONZE[1], BRONZE[2]);
    doc.text("Aging Fruit", X(88), Y(76)); doc.text("Tree Planted", X(150), Y(432));
    doc.text("Limited Fruit", X(560), Y(424), { align: "right" }); doc.text("Mature Orchard", X(560), Y(62), { align: "right" });
    doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
    doc.text("DISCIPLESHIP", X(321), Y(472), { align: "center", charSpace: 1 });
    doc.text("FORMATION", X(46), Y(242), { align: "center", angle: 90, charSpace: 1 });
    function curve(start, segs) {
      var cx = start[0], cy = start[1];
      doc.lines(segs.map(function (s) {
        var r = [(s[0] - cx) * k, (s[1] - cy) * k, (s[2] - cx) * k, (s[3] - cy) * k, (s[4] - cx) * k, (s[5] - cy) * k];
        cx = s[4]; cy = s[5]; return r;
      }), X(start[0]), Y(start[1]), [1, 1], "S", false);
    }
    doc.setDrawColor(190, 190, 196); doc.setLineWidth(0.8); doc.setLineDashPattern([3, 3], 0);
    curve([120, 405], [[250, 400, 370, 140, 525, 95]]);
    doc.setLineDashPattern([], 0);
    if (pts.length > 1) {
      doc.setLineCap("round");
      doc.setDrawColor(228, 208, 147); doc.setLineWidth(8); curve(pts[0], segments(pts));
      doc.setDrawColor(NAVY[0], NAVY[1], NAVY[2]); doc.setLineWidth(1.3); curve(pts[0], segments(pts));
    }
    pts.forEach(function (p, i) {
      var lastOne = i === pts.length - 1;
      doc.setFillColor.apply(doc, lastOne ? GOLD : NAVY); doc.setDrawColor(NAVY[0], NAVY[1], NAVY[2]); doc.setLineWidth(1);
      doc.circle(X(p[0]), Y(p[1]), lastOne ? 4.2 : 2.4, lastOne ? "FD" : "F");
    });
    y = oy + 500 * k + 6;
    para("This is the road I walked, one mark for each section. The faint line is the road on the map. It shows direction, never rank.", { font: "helvetica", size: 8.5, color: SOFT, center: true, after: 6 });
    para("“Moses wrote down their starting places, stage by stage, by command of the LORD.”  Numbers 33:2", { style: "italic", size: 10, color: BRONZE, center: true, width: 400, after: 10 });
    if (story) {
      y += 8;
      story.forEach(function (part) {
        var paras = part.text.split(/\n\s*\n/).map(function (p) { return p.replace(/\s+/g, " ").trim(); }).filter(Boolean);
        if (!paras.length) return;
        room(110); y += 6;
        para(part.name.toUpperCase(), { font: "helvetica", style: "bold", size: 10, color: NAVY, center: true, after: 4 });
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]); doc.setLineWidth(1.5); doc.line(W / 2 - 18, y, W / 2 + 18, y); y += 16;
        paras.forEach(function (p) { para(p, { size: 12.5, color: INK, lead: 1.5, after: 10 }); });
      });
    }
    if (!story) d.bends.forEach(function (b) {
      if (b.at >= chs.length || !b.text.trim()) return;
      para(bendLabel(d, b).toUpperCase(), { font: "helvetica", style: "bold", size: 7.5, color: SOFT, after: 0 });
      if (bendGloss(d, b)) para(bendGloss(d, b), { style: "italic", size: 9.5, color: SOFT, after: 1 });
      para(b.text.trim(), { size: 12.5, color: INK, after: 8 });
    });
    var th = story ? null : thread(d, stage);
    if (th) {
      room(30 + 26 * th.where.length); y += 4;
      para("A word I keep using: " + th.word, { size: 12.5, color: NAVY, center: true, after: 5 });
      th.where.forEach(function (w) {
        para(w.part.toUpperCase(), { font: "helvetica", style: "bold", size: 7, color: SOFT, center: true, after: 0 });
        para(w.text, { style: "italic", size: 10.5, color: INK, center: true, width: 400, after: 4 });
      });
    }
    y += 8;

    var lastMv = 0;
    (story ? [] : chs).forEach(function (ch) {
      var ls = onLines(ch), st = stageLine(ch), rc = recallLine(d, ch);
      if (!ls.length && !st) return;
      if (ch.mv !== lastMv) {
        lastMv = ch.mv; room(110); y += 6;
        para(d.movements[ch.mv].toUpperCase(), { font: "helvetica", style: "bold", size: 10, color: NAVY, center: true, after: 4 });
        doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]); doc.setLineWidth(1.5); doc.line(W / 2 - 18, y, W / 2 + 18, y); y += 16;
      }
      room(70);
      para((ch.part + (ch.name ? " · " + ch.name : "")).toUpperCase(), { font: "helvetica", style: "bold", size: 8, color: BRONZE, after: 2 });
      if (ch.ours) para(ch.ours, { style: "italic", size: 10.5, color: BRONZE, after: 3 });
      if (rc) { para(rc.lead + " “" + rc.text + "”", { style: "italic", size: 10.5, color: SOFT, after: 1 }); if (rc.bridge) para(rc.bridge, { style: "italic", size: 10.5, color: SOFT, after: 4 }); }
      ls.forEach(function (l) {
        if (l.ctx) para(l.ctx.lead + " “" + l.ctx.quote + "”", { style: "italic", size: 10.5, color: SOFT, after: 1 });
        para(shown(l), { size: 13, color: INK, after: 2 });
      });
      if (st) para(st, { style: "italic", size: 11.5, color: NAVY, after: 0 });
      y += 14;
    });
    var hd = handed(d, stage);
    if (hd.length && !story) { room(70); para(HANDED, { style: "bold", size: 14, color: NAVY, after: 6 }); hd.forEach(function (l) { room(40); para(l.part + " · " + l.label, { style: "italic", size: 10.5, color: BRONZE, after: 1 }); para(l.text, { size: 13, color: INK, after: 6 }); }); y += 8; }
    if (finished(d, stage)) { room(60); para(d.closes, { style: "italic", size: 11.5, color: BRONZE, center: true, width: 380, after: 12 }); }
    if (finished(d, stage) && d.tail.trim() && !story) { room(50); para("Today I am camped at " + d.tail.trim(), { style: "bold", size: 14, color: NAVY, center: true, width: 400, after: 10 }); }
    room(40);
    para("WHERE THESE WORDS COME FROM", { font: "helvetica", style: "bold", size: 7.5, color: SOFT, center: true, after: 1 });
    para(d.refs.join(" · "), { font: "helvetica", size: 8.5, color: SOFT, center: true, after: 0 });
    foot();
    return doc;
  }

  /* The map is Formation (up) by Discipleship (across), so a mark is simply where his two averages meet. */
  var RP = [[120, 405], [250, 400], [370, 140], [525, 95]];
  function roadPt(t) { var a = Math.pow(1 - t, 3), b = 3 * Math.pow(1 - t, 2) * t, c = 3 * (1 - t) * t * t, e = t * t * t;
    return [a * RP[0][0] + b * RP[1][0] + c * RP[2][0] + e * RP[3][0], a * RP[0][1] + b * RP[1][1] + c * RP[2][1] + e * RP[3][1]]; }
  /* the four stops on the line, in the course's own words (planted, forming, growing, the mature orchard) */
  var STOPS = ["planted", "forming", "growing", "the mature orchard"];
  /* nums: {root, known, cut, letin, week}, each 1-5 or null. Direction, never rank. */
  function avg(a) { a = a.filter(function (v) { return v != null; }); return a.length ? a.reduce(function (x, y) { return x + y; }, 0) / a.length : null; }
  /* any part: qs carry side ("F", "D" or null for a belief statement, which is left out) and back; ns are his five numbers */
  function markPart(qs, ns) {
    var f = [], dd = [];
    qs.forEach(function (q, i) { var v = ns[i]; if (v == null || !q.side) return; v = q.back ? 6 - v : v; (q.side === "F" ? f : dd).push(v); });
    return markFD(avg(f), avg(dd));
  }
  function mark(nums) { return markFD(avg([nums.root]), avg([nums.known, nums.letin, nums.week])); }
  /* the paper worksheet (The Road I Walked, PDF): WORKSHEET_URL is the address compiled into this build; AP_ROAD.worksheet = a string overrides it, false hides the line */
  var WORKSHEET_URL = "https://lwfiles.mycourse.app/69ff74fa031fcc8033475300-public/publicFiles/The_Road_I_Walked_worksheet_v2.pdf";
  function worksheetURL() { var c = window.AP_ROAD; if (!c) return ""; if (c.worksheet === false) return ""; if (typeof c.worksheet === "string" && c.worksheet) return c.worksheet; return WORKSHEET_URL; }
  function paperLine() { var u = worksheetURL(); return u ? '<p class="quiet">Prefer paper? <a href="' + u.replace(/"/g, "&quot;") + '" target="_blank" rel="noopener" style="text-decoration:underline">Print the worksheet</a> — the same ten chapters, on paper.</p>' : ""; }
  function markFD(F, Dn) {
    if (F == null || Dn == null) return null;
    var x = 100 + (Dn - 1) / 4 * 440, y = 420 - (F - 1) / 4 * 350, best = 0, bd = 1e9;
    for (var i = 0; i <= 200; i++) { var p = roadPt(i / 200), dd = (p[0] - x) * (p[0] - x) + (p[1] - y) * (p[1] - y); if (dd < bd) { bd = dd; best = i / 200; } }
    var rp = roadPt(best), r2 = roadPt(Math.min(1, best + 0.01)), r1 = roadPt(Math.max(0, best - 0.01));
    var cross = (r2[0] - r1[0]) * (y - rp[1]) - (r2[1] - r1[1]) * (x - rp[0]), far = Math.sqrt(bd) > 26 && best > 0.02 && best < 0.98;
    var lean = !far ? "road" : cross < 0 ? "formation" : "discipleship";
    var k = Math.round(best * 3), near = Math.abs(best * 3 - k) < 0.24;
    var lo = Math.min(2, Math.floor(best * 3));
    return { x: Math.round(x), y: Math.round(y), F: F, D: Dn, t: best, lean: lean,
      where: near ? "near " + STOPS[k] : "between " + STOPS[lo] + " and " + STOPS[lo + 1] };
  }

  /* ---------- v22: the chapter as a story. His lines in order, each led in by a bridge in the course's voice (road_bridge.js), then the stage line and the feeling.
     Returns paragraphs; each paragraph is a list of pieces {kind: "bridge" | "his" | "ours" | "cite", text, li (index into ch.lines for a his line)}.
     Old saved chapters carry no k/side on their lines, so both are read back from the label. ---------- */
  function lineKind(l, i) {
    if (l.k) return { k: l.k, side: l.side || null };
    var lab = l.label || "";
    if (lab === "The word for what this stirred") return { k: "feel", side: null };
    if (lab.indexOf("What I said in ") === 0) return { k: "did", side: null };
    if (lab === "The discipline I chose") return { k: "disc", side: null };
    var pt = typeof ROAD_PARTS !== "undefined" && ROAD_PARTS[i], j;
    if (pt) for (j = 0; j < pt.Q.length; j++) { if (pt.Q[j].hi && pt.Q[j].hi.label === lab) return { k: "q" + j, side: "hi" }; if (pt.Q[j].lo && pt.Q[j].lo.label === lab) return { k: "q" + j, side: "lo" }; }
    return { k: "other", side: null };
  }
  function bridgeFor(i, qk, side) {
    var B = typeof ROAD_BRIDGE !== "undefined" && ROAD_BRIDGE[i]; if (!B) return "";
    var row = B.q[qk]; if (!row) return "";
    return side === "lo" ? row[1] : row[0];
  }
  function chapterProse(d, i, ch, opts) {
    opts = opts || {};
    var B = typeof ROAD_BRIDGE !== "undefined" && ROAD_BRIDGE[i], pt = typeof ROAD_PARTS !== "undefined" && ROAD_PARTS[i], lines = ch.lines || [], paras = [], byK = {}, qs = [];
    lines.forEach(function (l, li) { var kd = lineKind(l, i); if (kd.k.charAt(0) === "q" && kd.k.length <= 3) qs.push({ l: l, li: li, j: +kd.k.slice(1), side: kd.side }); else byK[kd.k] = { l: l, li: li }; });
    var open = [];
    if (B) {
      if (byK.did && byK.did.l.ctx && byK.did.l.ctx.quote) open.push({ kind: "bridge", text: B.again.replace("{step}", String(byK.did.l.ctx.quote).trim().replace(/[.\s]+$/, "") + ".") });
      else open.push({ kind: "bridge", text: B.open });
    }
    if (byK.did) open.push({ kind: "his", text: byK.did.l.text, li: byK.did.li });
    if (byK.wit) open.push({ kind: "bridge", text: (byK.wit.l.label || "") + ":" }, { kind: "his", text: byK.wit.l.text, li: byK.wit.li });
    if (open.length) paras.push(open);
    var body = [];
    qs.sort(function (a, b) { return a.j - b.j; }).forEach(function (q) {
      var before = pt && pt.oursBefore && pt.oursBefore[q.j];
      if (before && opts.passages) { if (body.length) paras.push(body); paras.push([{ kind: "ours", text: before.text }, { kind: "cite", text: before.ref }]); body = []; }
      var br = bridgeFor(i, q.j, q.side); if (br) body.push({ kind: "bridge", text: br });
      body.push({ kind: "his", text: q.l.text, li: q.li });
    });
    if (byK.disc) body.push({ kind: "bridge", text: "The discipline I chose:" }, { kind: "his", text: byK.disc.l.text, li: byK.disc.li });
    if (byK.other) body.push({ kind: "bridge", text: (byK.other.l.label || "") + ":" }, { kind: "his", text: byK.other.l.text, li: byK.other.li });
    if (body.length) paras.push(body);
    var st = stageLine(ch);
    if (st) paras.push([{ kind: "bridge", text: (B && B.stage) || "Where I set out from, and where I camped:" }, { kind: "his", text: st, li: -1 }]);
    if (byK.feel) paras.push([{ kind: "bridge", text: (B && B.feel) || "What this stirred in me:" }, { kind: "his", text: byK.feel.l.text, li: byK.feel.li }]);
    return paras;
  }
  function proseText(paras) { return paras.map(function (p) { return p.filter(function (x) { return x.kind !== "cite"; }).map(function (x) { return x.text; }).join(" "); }).join("\n\n"); }

  return { chapterProse: chapterProse, proseText: proseText, bridgeFor: bridgeFor, lineKind: lineKind, evidence: evidence, markPart: markPart, markFD: markFD, worksheetURL: worksheetURL, paperLine: paperLine, moves: moves, fullPart: fullPart, bendLabel: bendLabel, bendGloss: bendGloss, shown: shown, recallLine: recallLine, mark: mark, roadPt: roadPt, chapters: chapters, onLines: onLines, stageLine: stageLine, thread: thread, listParts: listParts,
           segments: segments, pathD: pathD, thenNow: thenNow, text: text, pdf: pdf, handed: handed, HANDED: HANDED, finished: finished };
})();
if (typeof module !== "undefined") module.exports = ROAD;

/* ---- road_parts.js ---- */
/* AP-ROAD-PARTS-v1 · Walk With Me, the ten weekly chapters as data.
   "say" is the statement as it stands in the live course (read Sept 19, 2026), with two ruled fixes only: "a brother" → "another man", "one brother" → "one man".
   Part Three carries the wording John ruled or has in draft on the Question Sheet. Everything under hi / lo (the line beneath, its label, its example) is a draft for John's wording.
   side: "F" formation, "D" discipleship, null = left out of the arithmetic (belief statements). back: a high number means the struggle is present. */
var ROAD_PARTS = (function () {
  var LO = {
    know: { ask: "What would help you see it more clearly?", label: "What would help me see it", ex: "Asking my wife what she sees that I don't." },
    there: { ask: "What would help you tell the difference?", label: "What would help me tell the difference", ex: "Asking the men in my group where they have seen it in me." },
    believe: { ask: "What do you believe about it today?", label: "What I believe about it today", ex: "Most days I believe it for other men and not for me." },
    willing: { ask: "Have you already done this, or are you not ready to yet? Say which, and one sentence about it.", help: "Both are honest answers.", label: "My honest reason", ex: "I did this work two years ago, with a counselor. Or: I am not ready, and I know it." },
    name: { ask: "Is there none, or none you can name yet?", help: "If there is none, say what is already in place. If you can't name one yet, say what would help you find it.", label: "Where I stand on this", ex: "None left that I know of. I made the last one right in March." }
  };
  var TITLE = "A title only you would understand. Never the story.";
  function q(say, side, back, hi, lo, extra) { var o = { say: say, side: side, back: !!back, hi: hi, lo: LO[lo] }; if (extra) for (var k in extra) o[k] = extra[k]; return o; }

  var PARTS = [
    { part: "Part One", name: "The First Walk", job: 0, week: 4,
      ours: "Mercy was already moving toward us before we ever moved toward Him.",
      Q: [
        q("Hiding feels safer to me than walking openly with God, even when I know He already sees me.", "F", true, { ask: "What are you hiding in?", label: "Where I have been hiding", ex: "My work. It's the one place nobody asks how I am." }, "know", { lo: { ask: "What does walking openly with Him look like in your week?", label: "How I walk openly with God", grew: true, ex: "I tell Him the truth out loud on the drive in, before I tell anyone else." } }),
        q("There's a place in my life right now that feels more like the trees I'm hiding among than the road I'm walking with Him.", "F", true, { ask: "Where is it? One sentence a man could picture.", label: "The place I am hiding", ex: "The garage, after everyone is asleep." }, "there", { lo: { ask: "Where did you used to hide, and what brought you out?", label: "Where I used to hide", grew: true, ex: "My work, for ten years. A friend asked me one honest question." } }),
        q("I believe the same God who walked toward Adam and Eve in the garden is walking toward me today, wherever I'm hiding.", null, false, { ask: "When did you last live as if He were walking toward you?", label: "When I lived as if He were walking toward me", ex: "Last winter, the week my mother was in the hospital." }, "believe"),
        q("I'm willing to talk to God this week about the place where I am hiding, not just think about it.", "F", false, { ask: "Pick a time and a place this week to talk to Him about it. When, and where?", help: "Only the time and the place. What you say to Him stays between you and Him.", label: "When I will talk to God about where I hide", ex: "Tomorrow at six, on the walk to the train." }, "willing", { lo: { ask: "Do you already talk to Him about it, or are you not ready to yet? Say which, and one sentence about it.", help: "Both are honest answers. So is \"I don't know what I would say.\"", label: "Where I stand on talking to God about where I hide", ex: "I already do, most mornings on the drive in. Or: not yet. I don't know what I would say." } }),
        q("I can name one concrete step this week, as simple as a walk with God, that would move me from hiding toward walking with Him.", "F", false, { ask: "Pick one, or write your own. Then say when.", help: "A walk is enough. So is any one of the practices Christians have used for centuries to put themselves where God can reach them.", ops: ["A walk with Him", "Prayer", "Time in Scripture", "Solitude", "Fasting", "Simplicity", "Service", "Confession", "Worship", "Meditation on a verse", "Asking a wise man for guidance", "Celebration"], label: "This week", ex: "A walk with Him: around the block after dinner tonight." }, "name")
      ] },
    { part: "Part Two", name: "Stand at the Crossroads", job: 0, week: 3, ours: "The map only works if you're honest about where you're standing on it.",
      Q: [
        q("I know honestly which way I lean: a full inner life with too little community, or a lot of activity with a thin inner life.", "F", false, { ask: "Which corner, and what does it look like in your week?", label: "The corner I lean toward", ex: "A full inner life with too little community. I read for an hour and talk to no one." }, "know", { lo: { ask: "Think of last week. How much of it was alone with God, and how much with other people?", label: "My last week", ex: "An hour a day alone with Him. One conversation with a man, on Sunday." } }),
        q("There's a \"no more\" I know I need to say this week, even though I haven't said it yet.", "F", true, { ask: "What is the “no more”?", label: "The “no more” I need to say", ex: "No more checking email after the kids are in bed." }, "there", { lo: { ask: "What is a “no more” you have already said, and kept?", label: "A “no more” I have kept", grew: true, ex: "No more phone in the bedroom. Two years now." } }),
        q("Some men have walked away sad from something Jesus asked of them, like the rich young ruler. If that is me, I believe the road is not closed behind me: I can still come back.", null, false, { ask: "What did He ask of you? A title is enough.", help: TITLE, label: "What I walked away from", ex: "The trip in 2015." }, "believe"),
        q("I'm willing to pick one spiritual discipline this week — not to earn anything, but to put myself where God's action can find me.", "F", false, { ask: "Which one, and when?", label: "This week", ex: "Ten minutes of quiet before work, every morning." }, "willing"),
        q("I can name one ancient path — one road I used to walk with God — that I want to ask for again this week.", "F", false, { ask: "Name the road, and when you last walked it.", label: "The road I want to ask for again", ex: "Praying out loud in the truck. I stopped three years ago." }, "name")
      ] },
    { part: "Part Three", name: "Pruned and Rooted", job: 0, week: 4, picker: true,
      ours: "Pruning is not punishment — it's what the Vinedresser does to branches He intends to keep.",
      oursAfter: { 0: "Two roots run through your life every day of it: the hidden root that bears bitterness, and the Root that bears the fruit of the Spirit.", 1: "They stand because the grove holds on to itself." },
      oursBefore: { 4: { text: "…that you may be healed.", ref: "James 5:16" } },
      stage: { text: "They set out from Marah and camped at Elim.", ref: "Numbers 33:9", help: "Every stage of Israel's road is written the same way: where they set out from, and where they camped. Marah means bitter. Close your chapter the same way." },
      Q: [
        q("I can name a hidden root in me right now — something quietly turning my heart that nobody else can see yet.", "F", false, { ask: "Name it.", help: "What Scripture says comes between a man and God. Pick one, or use your own word.", label: "The root I can name", roots: true, ex: "I still replay what my father said to me at the funeral." }, "know", { lo: { ask: "When did you last find one, and what did you do with it?", label: "The last root I found", grew: true, ex: "Envy, last spring. I told Mark the same week." } }),
        q("If I were being pruned hard right now, there are people in my life who would know within a week.", "D", false, { ask: "Who are they? First names.", label: "The men who would know", ex: "Mark and David." }, "there", { lo: { ask: "Who is one man you could tell?", label: "One man I could tell", ex: "Mark, from the Tuesday group." } }),
        q("I believe pruning from the Vinedresser is not punishment but a sign He intends to keep me.", null, false, { ask: "When were you last cut back, and what was your first thought?", label: "When I am cut back", ex: "When I lost the Henderson account, my first thought was that God was done with me." }, "believe", { lo: { ask: "What do you believe about it today?", label: "What I believe about being cut back", ex: "Most days it still feels like He is angry with me." } }),
        q("I'm willing to be rooted with other men in the Word of God, known well enough that we hold each other up.", "D", false, { ask: "Which men, and what would you let them see?", label: "The men I would be rooted with, and what they would see", ex: "David and Mark. How close I came to quitting last spring." }, "willing"),
        q("There is one honest thing I need to bring into the light this week, to another man or on paper before God.", "D", false, { ask: "Which will it be, and when?", help: "Don't write the thing itself here. It belongs with that man, or in your own journal.", label: "This week", ex: "Thursday after group, I will tell Mark. Or: Saturday morning, in my journal, before anyone is up." }, "name", { lo: { ask: "What is already in the light that used to be hidden?", label: "What is already in the light", grew: true, ex: "My wife knows about the debt now." } })
      ] },
    { part: "Part Four", name: "The Mature Orchard", job: 1, week: 3, ours: "Fruit is never for the tree — it carries seed for someone else.",
      Q: [
        q("I can honestly sort which truths I have learned about God are still head-knowledge for me, and which ones have become heart — things I live without deciding to.", "F", false, { ask: "Name one truth that has moved from head to heart.", label: "A truth that has moved from head to heart", ex: "That He walks toward me. I noticed I stopped bracing when I pray." }, "know", { lo: { ask: "Name one truth from this course you are still carrying in your head.", label: "A truth still in my head", ex: "That pruning is not punishment. I can say it. I don't feel it yet." } }),
        q("I recognize the difference between fruit that withers because I never hand it to anyone, and fruit that actually feeds someone else.", "D", false, { ask: "Where did fruit of yours last feed someone, or stay with you?", label: "Where my faith went to work", ex: "My son asked why I was at the pantry. I didn't have a good answer yet." }, "there"),
        q("I believe the fruit God grows in my life is meant for other people, not for me to keep.", null, false, { ask: "What did He ask of you? A title is enough.", help: TITLE, label: "What I can walk out of", ex: "The offer to lead the Tuesday group." }, "believe"),
        q("I'm willing to choose one spiritual practice I have avoided — the one that makes me slightly nervous, not the one I'm already comfortable with — and start it this week.", "F", false, { ask: "Which one makes you nervous, and why?", label: "This week", ex: "Service. Saturday mornings at the food pantry. It means other people see me." }, "willing"),
        q("I can name one relationship or place where my fruit needs to feed someone else, not just stay filed away as private knowledge.", "D", false, { ask: "Who, and what will you hand them?", label: "Who my fruit is for", ex: "My neighbor. I will offer to help him with the resume on Saturday." }, "name")
      ] },
    { part: "Part Five", name: "Justice, Justice You Shall Pursue", job: 0, week: 3,
      ours: "Before you ask what justice is, ask who it is.",
      Q: [
        q("I know honestly whether I lean toward pressing to be right (din) or yielding for peace (pesharah) in most conflicts.", "F", false, { ask: "Which way, and where did it last show?", label: "Where I pressed on being right", ex: "I was right about the contract and wrong about my partner." }, "know", { lo: { ask: "Think of your last conflict. What did you do?", label: "My last conflict", ex: "I went quiet for two days, then acted like nothing happened." } }),
        q("There's a wrong in my life right now that hasn't been made right, and I've been avoiding it.", "D", true, { ask: "Give it a title.", help: TITLE, label: "A wrong not yet made right", ex: "The Henderson invoice." }, "there", { lo: { ask: "What is the last wrong you made right?", label: "A wrong I made right", grew: true, ex: "I paid my old partner what I owed him, with a letter." } }),
        q("I believe pursuing justice and mercy together — not one at the expense of the other — is what it means to walk the way (derek) of the Lord.", null, false, { ask: "Where did you last have to hold both?", label: "Where I had to hold justice and mercy together", ex: "Deciding whether to let my foreman go." }, "believe"),
        q("I'm willing to let go of being fully right in one relationship this week, so the relationship can move forward.", "D", false, { ask: "Which relationship, and what would you let go of?", label: "This week", ex: "My partner. I will let go of being right about the timeline." }, "willing"),
        q("I can name one place where my honest weights — my follow-through on money, time, or promises — wouldn't survive an audit, and I can start making it right.", "D", false, { ask: "Name it, and the first thing you will make right.", label: "Where my weights are off", ex: "I owe my neighbor four hundred dollars. I will pay it Friday." }, "name")
      ] },
    { part: "Part Six", name: "The Thirteen Attributes", job: 0, week: 3, ours: "The same mercy, the same Name, on both sides of your worst moment.",
      Q: [
        q("There's an attribute of God's mercy — like \"slow to anger\" or \"bearing iniquity\" — that I believe for other people but quietly disbelieve for myself.", "F", true, { ask: "Which attribute?", label: "The mercy I can't believe for myself", ex: "Slow to anger is the one I can't fake." }, "there", { lo: { ask: "Which of His mercies did you once find hardest to believe for yourself?", label: "A mercy I came to believe for myself", grew: true, ex: "Slow to anger. I stopped flinching when I pray." } }),
        q("There's a person or group I'd secretly rather see get justice than mercy.", "D", true, { ask: "First name or a title. No more than that.", help: TITLE, label: "Who I would rather see get justice", ex: "My old boss." }, "there", { lo: { ask: "Who did you once feel that way about? A first name or a title.", label: "Someone I came to want mercy for", grew: true, ex: "My old boss." } }),
        q("I believe God is the same toward me before I sin and after I sin and repent — He doesn't have two faces.", null, false, { ask: "When did you last act as if He had two faces?", label: "When I acted as if God had two faces", ex: "I skipped prayer for three days after I blew up at my son." }, "believe"),
        q("I'm willing to bring an honest confession to God this week, trusting His character rather than how good my confession sounds.", "F", false, { ask: "When and where. Never what.", help: "Don't write the confession here. It belongs with God.", label: "This week", ex: "Friday morning, in the truck, before I go in." }, "willing"),
        q("I can name one person I've been treating with less mercy than God has shown me, and take a step toward them this week.", "D", false, { ask: "Who, and what is the step?", label: "The person I owe mercy", ex: "My sister. I will call her back." }, "name")
      ] },
    { part: "Part Seven", name: "The Names Tell a Story", job: 0, week: 4, ours: "Jacob needed three names to become himself: the habit-name, the struggle-name, the destiny-name.",
      Q: [
        q("I can name the \"habit-name\" — the name my worst patterns call me — that I still answer to fastest.", "F", false, { ask: "The name itself.", charge: true, label: "The name I still answer to", ex: "Failure." }, "know", { lo: { ask: "What name do you answer to now?", label: "The name I answer to now", grew: true, ex: "Beloved. It took years." } }),
        q("There's a \"you meant evil\" chapter in my story (Joseph's words to his brothers) that I haven't yet been able to finish with \"God meant it for good.\"", "F", true, { ask: "Give it a title.", help: TITLE, label: "A chapter where someone meant evil", ex: "Eighth grade." }, "there", { lo: { ask: "Give that chapter a title, and say what good came of it.", label: "A chapter God meant for good", grew: true, ex: "Eighth grade. It is why I notice the quiet kid." } }),
        q("I believe God is growing me into a new name — a destiny-name — even while I'm still in the middle of wrestling.", null, false, { ask: "What name do you hope it is?", label: "The name I hope for", ex: "Faithful." }, "believe"),
        q("I'm willing to let someone else see me wrestling, instead of hiding it until I have a tidy resolution.", "D", false, { ask: "Who, and when?", label: "Who will see me wrestling", ex: "David. Breakfast on Thursday." }, "willing"),
        q("I can name one place this week where I'll choose to trust that both God's justice and His mercy are true over my situation, even if I can't reconcile them yet.", "F", false, { ask: "Name the place.", label: "This week", ex: "The layoff list. I will trust Him with it on Monday." }, "name")
      ] },
    { part: "Part Eight", name: "The Courts of Elohim", job: 3, week: 4,
      ours: "When God's servants stand in the courtroom, they appeal to the mercy-name — and the court allows it.",
      /* every line of ours here is word for word from Part Eight (read in the player Sept 19, 2026); the opening line of ours in Parts Two, Four and Nine is the line under each part's title; Parts Six, Seven and Ten use a sentence from the section's body because the title line leans on a scene the man is not looking at (John, Sept 19: "we can't use this as written. it's confusing") */
      evidence: { head: "In the court: what you have seen",
        ours: "Witnesses don't argue the case; they report what they saw.",
        charge: "The Enemy's case against you, in your own words",
        answer: { text: "The LORD rebuke you, O Satan! ... Is not this a brand plucked from the fire?", ref: "Zechariah 3:2" },
        seen: "What you have seen, in your own words",
        close: { text: "We do not present our pleas before You because of our righteousness, but because of Your great mercy.", ref: "Daniel 9:18" },
        ruling: { text: "Who shall bring any charge against God's elect? It is God who justifies.", ref: "Romans 8:33" },
        ask: "Tell one specific thing you have seen God do.", help: "Not a sermon. Testimony. One sentence a man could picture.", label: "What I have seen God do", ex: "I told my wife the truth about the money, and she stayed at the table." },
      Q: [
        q("I know honestly which of the five prayer postures — plea, lament, intercession, \"You know,\" confession — is missing from my own prayer life.", "F", false, { ask: "Which one, and how long has it been missing?", label: "The prayer I don't pray", ex: "Lament. I don't think I have ever done it." }, "know", { lo: { ask: "Which of the five comes most easily to you?", label: "The prayer that comes easily", ex: "Intercession. I pray for my kids without thinking." } }),
        q("If I answer with my gut and not my doctrine, there's a part of me that pictures the Judge as against me rather than for me.", "F", true, { ask: "Where did that picture come from? A title is enough.", help: TITLE, label: "Where my picture of the Judge came from", ex: "My father's study." }, "there", { lo: { ask: "What is your gut picture of Him now?", label: "How I picture the Judge", grew: true, ex: "Leaning forward, on my side of the table." } }),
        q("I believe I can approach God on the grounds of His mercy, not on the grounds of my recent performance or usefulness.", null, false, { ask: "When did you last come on the grounds of your performance?", label: "When I came on my performance", ex: "After a good month at work, I prayed like I had earned it." }, "believe"),
        q("I'm willing to bring an unpolished, unresolved lament to God this week instead of waiting until I have it figured out.", "F", false, { ask: "What is it about? One line.", label: "My lament", ex: "Why my marriage got quiet." }, "willing"),
        q("I can name one place where I could let another man hear my honest \"Lord, why?\" instead of only my polished version.", "D", false, { ask: "Who, and where?", label: "This week", ex: "Mark. After group on Tuesday, in the parking lot." }, "name")
      ] },
    { part: "Part Nine", name: "Where Justice and Mercy Kiss", job: 4, week: 3, ours: "The space between justice and mercy is not empty — it's a Person.",
      Q: [
        q("I know honestly which half I flinch from more — being fully told the truth about myself, or being freely and fully offered mercy.", "F", false, { ask: "Which half, and what does the flinch look like?", label: "The half I flinch from", ex: "Mercy. I change the subject when someone is kind to me." }, "know", { lo: { ask: "Which half have you learned to receive?", label: "The half I have learned to receive", grew: true, ex: "The truth. I ask for it now." } }),
        q("Like the woman at the well, there's an \"all that I ever did\" chapter of my story that I've kept hidden rather than let it become a witness.", "D", true, { ask: "Give it a title.", help: TITLE, label: "The chapter I have kept hidden", ex: "The summer of 2009." }, "there", { lo: { ask: "Which chapter have you already let become a witness? A title is enough.", label: "A chapter I have let be told", grew: true, ex: "The summer of 2009. I told it at the men's breakfast." } }),
        q("I believe justice and mercy are not in tension in God — they meet fully in Jesus, and I don't have to choose between them.", null, false, { ask: "Where do they still feel in tension in your own life?", label: "Where justice and mercy still pull apart", ex: "With my father. I want him to pay and I want him back." }, "believe"),
        q("I'm willing to sit still and let God tell me the truth about myself this week, without defending or leaving the conversation.", "F", false, { ask: "When and where will you sit?", label: "This week", ex: "Saturday at dawn, on the back step." }, "willing"),
        q("I can name one place where the very thing I've hidden could become someone else's good news if I let it be told and transfigured.", "D", false, { ask: "Who might need to hear it?", label: "Who my hidden thing could help", ex: "The young man at work whose father just left." }, "name")
      ] },
    { part: "Part Ten", name: "The Fruit Is for Your Community, and for You", job: 4, week: 4, ours: "Hebrew never agreed to split your job, your service, and your worship into separate rooms.",
      evidence: { head: "Before you are sent: what you have already come through",
        seen: "Your own evidence, in your own words",
        ask: "Reading these, what are you ready for now?", help: "One sentence is enough.", label: "What I am ready for", ex: "To say it out loud to the young man at work." },
      Q: [
        q("Of the commitments I have made to God this season, I know honestly which one I'm already tempted to negotiate down.", "F", false, { ask: "Which one, and what is the bargain you are tempted to make?", label: "The commitment I want to bargain down", ex: "The witness. I tell myself I will tell someone next month." }, "know", { lo: { ask: "What is helping you keep all three?", label: "What helps me keep my commitments", grew: true, ex: "Mark asks me every Tuesday." } }),
        q("I can name the first three people who come to mind when I ask \"who is the fruit of my life for\" — without arguing with the list.", "D", false, { ask: "Their first names.", label: "Who the fruit of my life is for", ex: "Anna, Ben and my neighbor Carl." }, "name", { lo: { ask: "Who is one person?", label: "One person the fruit of my life is for", ex: "My daughter." } }),
        q("I believe my ordinary work, whatever it is, can be worship and not just labor.", null, false, { ask: "What did that look like at work this week?", label: "Where my work was worship", ex: "I stayed late to fix another man's mistake and didn't mention it." }, "believe"),
        q("I'm willing to tell one man my plan for one spiritual practice this week, so someone has permission to ask me about it.", "D", false, { ask: "Who, and when?", label: "Who will know my plan", ex: "Mark, on Tuesday." }, "willing"),
        q("I can name one concrete act — time, money, presence, a meal, a repair — that will cost me something to serve one of those three people this week.", "D", false, { ask: "The act, the person, the day.", label: "This week", ex: "Saturday I will fix Carl's fence with him." }, "name")
      ] }
  ];
  /* Bench of Sept 19, 2026 (three reads: 45, 10, then 5 lines failed; all fixed): all hundred lines were read by a fresh reviewer as five made-up men (the mature man, the man in struggle, the man of three words, the man who tells too much, the literal man). These are the fields that failed and what replaced them. Key: part.statement.hi|lo, counted from zero. Drafts for John's wording. */
  var FIX = {
   "0.2.lo": {
    "label": "What I believe about God walking toward me"
   },
   "1.2.lo": {
    "label": "What I believe about the road back",
    "ask": "What do you believe today about the road back?"
   },
   "3.2.lo": {
    "label": "What I believe about who my fruit is for",
    "ex": "Most days I treat what I learn as mine. I have not thought of it as meant for anyone else."
   },
   "4.2.lo": {
    "label": "What I believe about justice and mercy together",
    "ex": "I believe in justice. Mercy still feels like letting people off."
   },
   "5.2.lo": {
    "label": "What I believe about how God sees me after I sin"
   },
   "6.2.lo": {
    "label": "What I believe about a new name"
   },
   "7.2.lo": {
    "label": "What I believe about coming to God on His mercy"
   },
   "8.2.lo": {
    "label": "What I believe about justice and mercy in God",
    "ex": "They still feel like two different Gods to me."
   },
   "9.2.lo": {
    "label": "What I believe about my work"
   },
   "0.3.lo": {
    "label": "Where I stand on talking to God about where I hide",
    "ask": "Do you already talk to Him about it, is there nothing you are keeping back, or are you not ready yet? Say which, and one sentence about it.",
    "help": "All three are honest answers. So is \"I don't know what I would say.\""
   },
   "1.3.lo": {
    "label": "Where I stand on choosing a discipline",
    "ex": "I already keep a morning hour and it is holding. Or: I am not ready, and I know it."
   },
   "2.3.lo": {
    "ask": "Have you already done this, are you not ready to yet, or have you tried it before and been hurt by it? Say which, and one sentence about it.",
    "help": "All three are honest answers.",
    "label": "Where I stand on being known by other men",
    "ex": "I don't know any men that well yet. Or: I told a group once and it was used against me. I am not ready, and I know why."
   },
   "3.3.lo": {
    "label": "Where I stand on the practice that makes me nervous",
    "ex": "I took on the hard one in the spring and I am still in it. Or: I am not ready, and I know it."
   },
   "4.3.lo": {
    "label": "Where I stand on letting go of being right",
    "ex": "There is no standoff in my life right now that I know of. Or: I am not ready, and I know it.",
    "ask": "Have you already done this, is there no such standoff in your life right now, or are you not ready to yet? Say which, and one sentence about it.",
    "help": "All three are honest answers."
   },
   "5.3.lo": {
    "label": "Where I stand on confessing to God",
    "ex": "I confessed on Sunday and have nothing new. Or: I still think He is tired of hearing it."
   },
   "6.3.lo": {
    "label": "Where I stand on being seen wrestling",
    "ex": "Mark already sees it, every Tuesday. Or: I am not ready, and I know it."
   },
   "7.3.lo": {
    "label": "Where I stand on bringing a lament",
    "ex": "Nothing is heavy on me this week. Or: I am not ready, and I know it."
   },
   "8.3.lo": {
    "label": "Where I stand on sitting still with God",
    "ex": "I already sit with Him most mornings. Or: I am afraid of what He will say."
   },
   "9.3.lo": {
    "label": "Where I stand on telling a man my plan",
    "ex": "Mark already knows my plan. Or: I am not ready, and I know it."
   },
   "0.4.lo": {
    "label": "Where I stand on a next step",
    "ex": "None that I know of. I already walk with Him most mornings."
   },
   "1.4.lo": {
    "label": "Where I stand on an old road",
    "ex": "None I can name yet. It would help to look back at when prayer was easy."
   },
   "3.4.lo": {
    "label": "Where I stand on handing on what I have",
    "ex": "None I can name yet. It would help to ask my wife who she sees."
   },
   "4.4.lo": {
    "label": "Where I stand on my honest weights"
   },
   "5.4.lo": {
    "label": "Where I stand on owing mercy",
    "ex": "None that I know of. I called my sister back in March and we are talking again."
   },
   "6.4.lo": {
    "label": "Where I stand on trusting both",
    "ex": "None. Nothing in my life is pulling them apart right now.",
    "help": "If there is none, say so in your own words. If you can't name one yet, say what would help you find it."
   },
   "8.4.lo": {
    "label": "Where I stand on telling what I hid",
    "ex": "None left. I told it at the men's breakfast last year."
   },
   "9.4.lo": {
    "label": "Where I stand on a costly act",
    "ex": "None I can name yet. I need to ask Carl what he actually needs."
   },
   "7.4.lo": {
    "ask": "Is there a man you might trust with it one day? A first name, or “not yet”.",
    "help": "Either answer is an honest one.",
    "label": "A man who might hear my honest “why”",
    "ex": "Not yet. Maybe David, in time."
   },
   "1.2.hi": {
    "ask": "Is there something you walked away from? If so, give it a title. If not, say so.",
    "label": "Something I walked away from and can come back to"
   },
   "3.2.hi": {
    "ask": "Who was the last person fed by something God grew in you?",
    "label": "Who my fruit last fed",
    "ex": "My neighbor. What God taught me about patience is why I spent Saturday on his fence.",
    "help": "A first name or a role is enough, and one line on what it was. If no one comes to mind, say so."
   },
   "5.2.hi": {
    "ask": "Tell one time you came back to Him after you had sinned and found Him the same.",
    "help": "A title is enough for what you had done. The moment is what matters.",
    "label": "A time I found Him the same",
    "ex": "After the worst argument of our marriage. I expected distance, and the prayer felt like the day before."
   },
   "7.2.hi": {
    "ask": "Tell one time you came to Him with nothing to show, and what happened.",
    "help": "One moment a man could picture.",
    "label": "A time I came on His mercy",
    "ex": "The week I lost the account. I had nothing to report, and I prayed anyway."
   },
   "8.2.hi": {
    "ask": "Where did you last see justice and mercy meet in your own life?",
    "label": "Where I saw justice and mercy meet",
    "ex": "I owned what I did to my partner, and he forgave the debt anyway."
   },
   "2.0.hi": {
    "ex": "Bitterness. It has been there since the funeral.",
    "help": "These are things Scripture says come between a man and God. Pick one, or use your own word."
   },
   "2.1.hi": {
    "label": "The people who would know"
   },
   "2.3.say": "I'm willing to let two or three trusted men know the truth about my life and ask me about it, even though it means I no longer get the last word on how I'm doing.",
   "2.3.note": "You choose the men, and you choose the pace. Being known is not being exposed, and no one here gets to run your life. Confession and accountability belong where there is no shaming.",
   "2.3.hi": {
    "ask": "Which men? First names. What makes them safe to tell?",
    "label": "The men I would let know me",
    "ex": "David and Mark. They have told me hard things about themselves, and neither one has ever used mine against me."
   },
   "2.4.lo": {
    "ask": "What is already in the light that used to be hidden? A title is enough.",
    "help": "A title only you would understand. Never the story.",
    "ex": "The debt. My wife knows now."
   },
   "3.1.hi": {
    "ask": "When did something you have learned last help another person?",
    "label": "When what I learned helped someone",
    "ex": "I told my son what I had learned about anger, one night when he asked how I had changed."
   },
   "4.0.hi": {
    "label": "The way I lean in conflict",
    "ex": "Pressing to be right. Last month, over the contract."
   },
   "6.0.lo": {
    "ask": "What does God call you that you can believe today? One word is enough.",
    "label": "What God calls me that I can believe today"
   },
   "6.1.lo": {
    "ask": "Is there a hard chapter that God has since turned to good? Give it a title, and say the good that came. If there is none, say so.",
    "help": "A title only you would understand. Never the story."
   },
   "8.0.lo": {
    "ask": "Which is easier for you to hear: the hard truth about yourself, or that you are forgiven?",
    "label": "What is easier for me to hear",
    "ex": "The hard truth. I expect that one.",
    "grew": false
   },
   "9.0.lo": {
    "ask": "Which commitment to God feels most solid right now, and why? If you have made none yet, say so.",
    "label": "The commitment that feels most solid",
    "ex": "My morning hour. It is on my calendar and Mark asks about it."
   },
   "0.3.hi": {
    "label": "When I will talk to God about where I hide"
   },
   "2.1.lo": {
    "ask": "Is there one man you could tell? A first name, or “no one yet”."
   },
   "5.0.hi": {
    "ex": "Slow to anger. I expect Him to be short with me."
   },
   "5.1.lo": {
    "ask": "Was there someone you once felt that way about? A first name or a title. If no one, say so."
   },
   "9.1.lo": {
    "ask": "Who is one person the fruit of your life is for?"
   },
   "3.3.hi": {
    "ask": "Which one makes you nervous, and when will you start?",
    "ex": "Service. Saturday morning at the food pantry, where other people will see me."
   },
   "3.1.lo": {
    "ask": "What is the last thing you learned about God, and who else has heard it from you?",
    "label": "The last thing I learned, and who has heard it",
    "ex": "That pruning is not punishment. So far only my journal has heard it."
   },
   "4.1.lo": {
    "ask": "What is the last wrong you made right? A title is enough."
   },
   "7.3.hi": {
    "ask": "What is it about? A title is enough.",
    "help": "A title only you would understand. Never the story.",
    "label": "What my lament is about"
   },
   "3.0.lo": {
    "ask": "Name one truth about God you are still carrying in your head."
   },
   "9.0.hi": {
    "ex": "The one about telling someone. I tell myself I will do it next month."
   },
   "1.0.hi": {
    "ask": "Which way do you lean, and what does it look like in your week?",
    "label": "The way I lean"
   },
   "3.1.say": "I recognize the difference between what God has taught me that withers because I never pass it on to anyone, and what actually feeds someone else.",
   "8.1.lo": {
    "ask": "Is there a chapter you have already let become a witness? A title is enough. If there is none, say so."
   },
   "9.0.say": "Of the commitments I have made to God, such as a set time to pray or a habit to lay down, I know honestly which one I'm already tempted to negotiate down.",
   "0.2.hi": {
    "ask": "Tell one time you were hiding and He came toward you anyway.",
    "help": "Not when you last prayed. One moment a man could picture.",
    "label": "A time He came toward me",
    "ex": "The winter I stopped praying. A friend I had not called in a year showed up with coffee and would not leave."
   }
  };
  /* v17 · Part Five, John's rulings of Sept 21, 2026 (statement 2: "good", unchanged). Drafts of the wording are Claude's except the two practice lines under statement 1, which are John's notes. */
  var V17_P5 = {
   "4.0.hi": {
    "ask": "Which way do you lean? Tap one, then say where it last showed.",
    "ops": ["Pressing to be right (din)", "Yielding for peace (pesharah)"],
    "opn": ["When I face a conflict I lean toward pressing to be right. ", "When I face a conflict I lean toward yielding for peace. "],
    "then": [
     "If you lean toward din: practice tzimtzum (restriction). Pause, let time pass, and ask: “Even if I am 100% factually correct, will speaking this truth right now build up this person's soul, or am I just gratifying my ego?”",
     "If you lean toward pesharah: remember that holding a firm, righteous boundary with love is an act of gevurah (strength) that protects the relationship from silent resentment."
    ],
    "label": "How I lean in conflict",
    "ex": "When I face a conflict I lean toward pressing to be right. Last month, over the contract."
   },
   "4.2.hi": {
    "ask": "Where did you last have to hold justice and mercy together?",
    "help": "Say what happened, then name what you felt while you held them both. One word for the feeling is enough.",
    "label": "Holding both at once",
    "ex": "Deciding whether to let my foreman go. I felt torn, and afraid of being the bad guy."
   },
   "4.2.lo": {
    "ask": "Which do you trust more today, justice or mercy? Say why in one sentence.",
    "ops": ["Justice", "Mercy"], "opn": ["Today I trust justice more, because ", "Today I trust mercy more, because "],
    "label": "The one I trust more today",
    "ex": "Today I trust justice more, because mercy still feels like letting people off."
   },
   "4.3.lo": {
    "ask": "Think of the last time you let go of being right, or could not. What did it show you about yourself?",
    "help": "If there is no standoff in your life right now, say how you got there. If you are not ready yet, say so. Either is an honest answer.",
    "label": "What letting go showed me",
    "ex": "Last spring I dropped the argument with my sister over Dad's house. It showed me I would rather win than be close."
   },
   "4.4.lo": {
    "ask": "Suppose you could keep only one of the three fully honest this month: money, time, or promises. Which one, and why?",
    "ops": ["Money", "Time", "Promises"], "opn": ["The one I would keep honest first is money. ", "The one I would keep honest first is time. ", "The one I would keep honest first is promises. "],
    "help": "We are being transformed from one degree of glory to another (2 Corinthians 3:18). A man who is strong here still has a next step. Add the habit that keeps it honest; another man may need it.",
    "label": "What I guard first",
    "grew": true,
    "ex": "The one I would keep honest first is promises. I write every one down the day I make it, and I check the list on Fridays."
   }
  };
  Object.keys(V17_P5).forEach(function (k) { var o = FIX[k] || (FIX[k] = {}), f = V17_P5[k], x; for (x in f) o[x] = f[x]; });
  /* v17 · NO NAMES (John, Sept 21, 2026: "yes"). Never a name on these pages; a role at most, picked from buttons; on a line about someone he holds something against or has wronged, nothing about the other person at all. Plus Part Six as ruled the same day. */
  var R5 = ["A man in my group", "My group", "A friend", "A family member", "Someone at work", "A neighbor"], R5N = R5.concat(["No one yet."]);
  var ATTR = ["Compassionate", "Gracious", "Slow to anger", "Abounding in kindness", "Truth", "Bearing iniquity", "Cleansing"];
  var NONAME = "No names. A role is enough.";
  var V17_NAMES = {
   "2.0.lo": { "ex": "Envy, last spring. I told a man in my group the same week." },
   "2.1.hi": { "ask": "Who would know? No names. Tap one, then say how they would know.", "ops": R5, "ex": "A man in my group. He asks me every Tuesday, and I can't fake it with him." },
   "2.1.lo": { "ask": "Is there one man you could tell? No names.", "help": NONAME, "ops": R5N, "ex": "A man in my group. He has been honest with me first." },
   "2.2.hi": { "ex": "When I lost my biggest account, my first thought was that God was done with me." },
   "2.3.hi": { "ask": "Which men? No names. Tap one, then say what makes them safe to tell.", "ops": R5, "ex": "A man in my group. He has told me hard things about himself, and he has never used mine against me." },
   "2.4.hi": { "help": "No names, and don't write the thing itself here. It belongs with that man, or in your own journal.", "ops": ["A man in my group", "My group", "A friend", "A family member", "On paper before God"], "opn": ["I will bring it to a man in my group, ", "I will bring it to my group, ", "I will bring it to a friend, ", "I will bring it to a family member, ", "I will bring it on paper before God, "], "ex": "I will bring it to a man in my group, Thursday after we meet. Or: I will bring it on paper before God, Saturday morning, before anyone is up." },
   "2.4.lo": { "ex": "The debt. It is no longer a secret at home." },
   "3.2.hi": { "ask": "Who was the last person fed by something God grew in you? No names.", "help": "A role is enough, and one line on what it was. If no one comes to mind, say so.", "ops": R5, "ex": "A neighbor. What God taught me about patience is why I spent Saturday on his fence." },
   "3.4.hi": { "ask": "Who is it for, and what will you hand them? No names.", "help": NONAME, "ops": R5, "ex": "A neighbor. I will offer to help him with his resume on Saturday." },
   "4.1.hi": { "help": "A title only you would understand, with no names in it. Never the story.", "ex": "The invoice from March." },
   "4.1.lo": { "help": "No names.", "ex": "I paid back what I owed, with a letter." },
   "4.2.hi": { "ex": "A hard decision about a man who works for me. I felt torn, and afraid of being the bad guy." },
   "4.3.hi": { "ask": "Don't name them. What would you let go of?", "ex": "Being right about the timeline. I will say so on Monday." },
   "4.3.lo": { "ex": "Last spring I dropped an argument in my family over an inheritance. It showed me I would rather win than be close." },
   "4.4.hi": { "ask": "Name the place, not the person, and the first thing you will make right.", "ex": "A debt I have let slide. I will pay it Friday." },
   "5.0.hi": { "ops": ATTR, "opn": ATTR.map(function (a) { return "The one I can't believe for myself is " + a.toLowerCase() + ". "; }), "ex": "The one I can't believe for myself is slow to anger. I expect Him to be short with me." },
   "5.0.lo": { "ask": "Suppose only one of these could be read over you this season. Which one, and why?", "ops": ATTR, "opn": ATTR.map(function (a) { return "The one I most need read over me is " + a.toLowerCase() + ", because "; }), "label": "The mercy I most need", "grew": false, "ex": "The one I most need read over me is bearing iniquity, because I have carried my own long enough to know I can't." },
   "5.1.hi": { "ask": "Don't name them here. What would it cost you to want mercy for them?", "help": "No names and nothing that could identify anyone. You know who it is. That is between you and God, and you can deal with it away from this page.", "label": "What mercy for them would cost", "ex": "I would have to stop telling the story where I am the one who was wronged." },
   "5.1.lo": { "ask": "Don't name anyone. If you once felt that way about someone, what changed in you?", "help": "If there was never anyone, say so.", "label": "How I came to want mercy", "ex": "I started praying for him because I was told to, and one day I meant it." },
   "5.2.say": "I believe God is compassionate, gracious and slow to anger toward me before I sin, and the same after I sin and repent. He doesn't have two faces.",
   "5.2.hi": { "ask": "When you come back to Him after you have sinned, what do you find?", "help": "If you have found Him the same, say when. If you are new to this and still sense distance, say that. It is an honest place to be.", "label": "What I find coming back", "ex": "After the worst argument of our marriage I expected distance, and the prayer felt like the day before." },
   "5.2.lo": { "ask": "After you sin, what do you expect God's face toward you to look like?", "ex": "Tired of me. Most days I believe His mercy for other men and not for myself." },
   "5.3.note": "Confession is a return, not a trial. Jesus' first message was “Repent, for the kingdom of heaven is at hand” (Matthew 4:17): turn around and walk with Me. Shame tells a man to stay away. Confession is the weapon the Enemy most wants out of your hands.",
   "5.3.lo": { "ask": "If shame is keeping you away, what does it tell you will happen if you come? If you have already come, what did you find?", "help": "Never what you confessed. Both are honest answers.", "label": "Coming back to Him", "ex": "It tells me He is tired of hearing it. Or: I came on Sunday, and I found Him the same." },
   "5.4.say": "I can name, to myself, one person or group I've been treating with less mercy than God has shown me, and take a step toward them this week.",
   "5.4.hi": { "ask": "Don't name them here. What is the step, and when?", "label": "My step toward someone I owe", "ex": "A phone call I have put off since March. Saturday morning." },
   "5.4.lo": { "ask": "How did you learn to show mercy to someone who had no claim on it? No names.", "help": "We are being transformed from one degree of glory to another (2 Corinthians 3:18). Say what changed in you; another man may need to hear how it happened.", "label": "How I learned mercy", "grew": true, "ex": "I prayed for someone in my family for a year before I could be kind to them. The praying changed me first." },
   "6.3.hi": { "ask": "Who, and when? No names.", "help": NONAME, "ops": R5, "ex": "A man in my group. Breakfast on Thursday." },
   "6.3.lo": { "ex": "A man in my group already sees it, every Tuesday. Or: I am not ready, and I know it." },
   "7.4.hi": { "ask": "Who, and where? No names.", "help": NONAME, "ops": R5, "ex": "A man in my group. After we meet on Tuesday, in the parking lot." },
   "7.4.lo": { "ask": "Is there a man you might trust with it one day? No names.", "ops": R5N, "ex": "No one yet. Maybe a man in my group, in time." },
   "8.2.hi": { "ex": "I owned what I had done to a man I worked with, and he forgave the debt anyway." },
   "8.4.hi": { "ask": "Who might need to hear it? No names.", "help": NONAME, "ops": R5, "ex": "Someone at work: a young man whose father just left." },
   "9.0.lo": { "ex": "My morning hour. It is on my calendar and a man in my group asks about it." },
   "9.1.hi": { "ask": "Who are they? No names. Roles are enough.", "ex": "My daughter, a neighbor, and a young man at work." },
   "9.1.lo": { "ask": "Who is one person the fruit of your life is for? A role is enough." },
   "9.3.hi": { "ask": "Who, and when? No names.", "help": NONAME, "ops": R5, "ex": "A man in my group. On Tuesday." },
   "9.3.lo": { "ex": "A man in my group already knows my plan. Or: I am not ready, and I know it." },
   "9.4.hi": { "ask": "The act, who it is for, and the day. No names.", "ex": "Saturday I will fix a neighbor's fence with him." },
   "9.4.lo": { "ex": "None I can name yet. I need to ask my neighbor what he actually needs." }
  };
  Object.keys(V17_NAMES).forEach(function (k) { var f = V17_NAMES[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  /* v17 · Part Seven, John's rulings of Sept 21, 2026 ("go"): the first statement in plain words with a line beneath and a word row; "why them", not "when", where the line is not his this-week commitment; "My group" joins the role row everywhere; the forced choice on Jacob's three names; the Part Eight evidence page explains itself. */
  var V17_P7 = {
   "6.0.say": "I can name what my worst patterns call me — a name like Failure, Fraud or Not Enough — and I still answer to it faster than to anything God calls me.",
   "6.0.note": "Jacob's first name meant heel-grabber, deceiver: the name of his worst habits. Later God gave him another (Genesis 32:28). Most men carry a first name like that.",
   "6.0.hi": { "ask": "What is the name? One or two words.", "ops": ["Failure", "Fraud", "Not enough", "Too much", "Coward", "Alone"], "opn": ["My worst patterns call me Failure. ", "My worst patterns call me Fraud. ", "My worst patterns call me Not Enough. ", "My worst patterns call me Too Much. ", "My worst patterns call me Coward. ", "My worst patterns call me Alone. "], "ex": "My worst patterns call me Failure. I hear it every time a deal falls through." },
   "6.1.hi": { "help": "A title only you would understand, with no names in it. Never the story." },
   "6.1.lo": { "help": "A title only you would understand, with no names in it. Never the story." },
   "6.2.lo": { "ask": "Jacob had three names: the name of his worst habits (Jacob), the name of his struggle (Israel), and the name of his destiny (Yeshurun, the upright one). Which kind do you answer to fastest today? Say why in one sentence.", "ops": ["The name of my worst habits", "The name of my struggle", "The name God is growing me into"], "opn": ["Today I answer fastest to the name of my worst habits, because ", "Today I answer fastest to the name of my struggle, because ", "Today I answer fastest to the name God is growing me into, because "], "label": "The name I answer to", "ex": "Today I answer fastest to the name of my struggle, because I am in the middle of it, and that is most of what I hear." },
   "6.3.hi": { "ask": "Who will you let see you wrestling? No names. Tap one, then say why them.", "help": "What is it about them that makes them safe? Naming that tells you what to look for in other men.", "ops": ["A man in my group", "My group", "A friend", "A family member", "A counselor or pastor"], "label": "Who will see me wrestling", "ex": "My group, because they have heard worse from each other and nobody left the room." },
   "6.3.lo": { "ask": "What do you do to keep anyone from seeing you wrestle?", "help": "If someone already sees it, say how that came about. If you are not ready yet, say what you think would happen if they saw. Either is an honest answer.", "label": "How I hide the wrestling", "ex": "I stay busy and I stay funny. Or: a man in my group sees it every Tuesday, because he asked twice." },
   "6.4.lo": { "ask": "When did you last have to trust both His justice and His mercy at once, and what got you through?", "help": "We are being transformed from one degree of glory to another (2 Corinthians 3:18). Say what you learned; another man may need to hear it.", "label": "How I learned to trust both", "grew": true, "ex": "When the business closed. I stopped asking which one He was being and started asking what He was making of me." },
   "9.3.hi": { "ask": "Who will you tell, and why them? No names.", "help": "No names. A role is enough. What makes them the right one to ask you about it?", "label": "Who will know my plan", "ex": "A man in my group, because he will actually ask, and he will not let me change the subject." }
  };
  Object.keys(V17_P7).forEach(function (k) { var f = V17_P7[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  var V17_P9 = {
   "8.0.say": "At the well, Jesus did two things in one conversation: He told the woman the truth about her life, and He offered her living water. I know which of those two is harder for me to receive.",
   "8.0.hi": { "ask": "Which is harder for you to receive? Tap one, then say what you do when it comes.", "ops": ["The truth about myself", "Mercy I did not earn"], "opn": ["The harder one for me to receive is the truth about myself. ", "The harder one for me to receive is mercy I did not earn. "], "label": "The one I flinch from", "ex": "The harder one for me to receive is mercy I did not earn. I change the subject when someone is kind to me." },
   "8.0.lo": { "ask": "Think of the last time someone told you a hard truth about yourself, and the last time someone was kind to you for no reason. Which one did you want to end sooner?", "help": "That is the one you flinch from. Now you know.", "label": "The one I wanted to end", "grew": false, "ex": "The kindness. I made a joke and left the room." },
   "8.1.say": "The woman at the well told her whole town, \"Come, see a man who told me all that I ever did.\" The part of her life she had hidden became the first thing she said. There is a part of my story I still keep hidden rather than let it be told.",
   "8.1.hi": { "ask": "Give it a title, the way a chapter has a title. Only you need to understand it. No names, never the story. Then tap what keeps it hidden, and say one sentence about that.", "help": "A title only you would understand, with no names in it. Never the story.", "ops": ["Shame", "Who it would hurt", "I'm not finished with it yet", "No one has ever asked"], "opn": ["What keeps it hidden is shame. ", "What keeps it hidden is who it would hurt. ", "What keeps it hidden is that I am not finished with it yet. ", "What keeps it hidden is that no one has ever asked. "], "label": "The chapter I keep hidden", "ex": "The summer of 2009. What keeps it hidden is shame. I still think it makes me a different kind of man." },
   "8.1.lo": { "ask": "Which part of your story have you already let be told? A title is enough, and one line on what happened when you told it.", "help": "A title only you would understand, with no names in it. Never the story.", "label": "A chapter I let be told", "grew": true, "ex": "The summer of 2009. I told it at the men's breakfast, and two men stayed after." },
   "8.2.say": "I believe justice and mercy meet in Jesus without either one giving way. In my own life I still have to choose which one to lead with. When I do, I bring the choice to Him first, and I lead with one in a way that honors the other.",
   "8.2.hi": { "ask": "Think of the last time you had to choose between holding the line and letting it go. A role, not a name. Which did you lead with, and how did you honor the other?", "label": "The last time I chose", "ex": "With my son. I held the line on the car, and I told him why, and that I was not going anywhere." },
   "8.2.lo": { "ask": "Where are you choosing between them right now? A role, not a name. Which way are you leaning, and what would it look like to honor the other one?", "label": "Where I am choosing now", "ex": "With my father. I lean toward making him pay. Honoring mercy would mean I stop rehearsing the speech." },
   "8.3.lo": { "ask": "What makes sitting still under the truth hard for you right now? Tap one, then one sentence.", "help": "Naming which one you do is most of the way to not doing it.", "ops": ["I defend", "I leave", "I explain it away", "I'm not ready to hear it"], "opn": ["When the truth comes, I defend. ", "When the truth comes, I leave. ", "When the truth comes, I explain it away. ", "When the truth comes, I am not ready to hear it. "], "label": "What makes sitting still hard", "ex": "When the truth comes, I explain it away. By the time He is done I have three reasons it was not my fault." },
   "8.4.hi": { "ask": "Who might need to hear it? No names. Tap one, then say why them.", "help": "What is it about them that tells you they need it?", "ops": R5, "label": "Who my hidden thing could help", "ex": "Someone at work, because his father just left, and he thinks he is the only one." },
   "8.4.lo": { "ask": "Has a hidden thing of yours already become someone's good news? Say what it cost and what it gave. If not yet, say what would have to be true first.", "help": "We are being transformed from one degree of glory to another (2 Corinthians 3:18). Say what you learned; another man may need to hear it.", "label": "What my hidden thing has given", "grew": true, "ex": "Yes. It cost me a friendship for a year, and it gave a younger man a way to say his out loud." }
  };
  Object.keys(V17_P9).forEach(function (k) { var f = V17_P9[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  /* v17 · PART EIGHT statements (John, Sept 21: "go") */
  var POST = ["Plea", "Lament", "Intercession", "\u201cYou know\u201d", "Confession"];
  var V17_P8 = {
   "7.0.hi": { "ask": "Which one is missing? Tap one, then say how long it has been missing.", "ops": POST, "opn": ["The one missing from my prayers is the plea. ", "The one missing from my prayers is lament. ", "The one missing from my prayers is intercession. ", "The one missing from my prayers is \u201cYou know.\u201d ", "The one missing from my prayers is confession. "], "label": "The prayer I don't pray", "ex": "The one missing from my prayers is lament. I don't think I have ever done it." },
   "7.0.lo": { "ask": "Which of the five comes most easily to you? Tap one, then say why.", "ops": POST, "opn": ["The one that comes easily is the plea, because ", "The one that comes easily is lament, because ", "The one that comes easily is intercession, because ", "The one that comes easily is \u201cYou know,\u201d because ", "The one that comes easily is confession, because "], "label": "The prayer that comes easily", "ex": "The one that comes easily is intercession, because I pray for my kids without thinking." },
   "7.1.lo": { "ask": "What is your gut picture of Him now, and what changed it?", "help": "Say what changed it; another man may need the how.", "label": "How I picture the Judge now", "grew": true, "ex": "Leaning forward, on my side of the table. What changed it was a year of being met instead of measured." },
   "7.2.lo": { "ask": "What do you find yourself bringing to Him first, a result or a need? Tap one, then say why.", "ops": ["A result", "A need"], "opn": ["I bring Him a result first, because ", "I bring Him a need first, because "], "label": "What I bring Him first", "ex": "I bring Him a result first, because I want to arrive with something in my hands." },
   "7.3.lo": { "ask": "What keeps your prayers polished? Tap one, then one sentence.", "help": "Naming which one it is gets you most of the way past it.", "ops": ["I don't want to complain", "I don't think He wants to hear it", "I don't know how", "I am not ready"], "opn": ["What keeps my prayers polished is that I don't want to complain. ", "What keeps my prayers polished is that I don't think He wants to hear it. ", "What keeps my prayers polished is that I don't know how. ", "What keeps my prayers polished is that I am not ready. "], "label": "What keeps my prayers polished", "ex": "What keeps my prayers polished is that I don't know how. Nobody ever showed me a man praying like that." },
   "7.4.lo": { "ask": "Has a man already heard your honest \u201cLord, why?\u201d Say what it did for him, or for you. If no one yet, tap it and say what would have to be true first. No names.", "help": "We are being transformed from one degree of glory to another (2 Corinthians 3:18). Say what you learned; another man may need to hear it.", "ops": R5N, "label": "Who has heard my honest why", "grew": true, "ex": "A man in my group. He told me his the next week. Or: No one yet. I would need to trust that he would not fix it." }
  };
  Object.keys(V17_P8).forEach(function (k) { var f = V17_P8[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  var FEEL7 = ["Relief", "Dread", "Embarrassment", "Hope", "Fear of being checked on", "I'd rather do it alone", "Nothing much"];
  var FEEL7_OPN = ["Telling him brings up relief. ", "Telling him brings up dread. ", "Telling him brings up embarrassment. ", "Telling him brings up hope. ", "Telling him brings up the fear of being checked on. ", "Telling him brings up that I would rather do it alone. ", "Telling him brings up nothing much. "];
  var V17_P10 = {
   "9.0.say": "This part asks you for three things: a rhythm, a stretch and a witness. I know honestly which of the three I'm already tempted to negotiate down.",
   "9.0.hi": { "ask": "Which one? Tap it, then say the bargain you are tempted to make.", "ops": ["The rhythm", "The stretch", "The witness"], "opn": ["The one I am negotiating down is the rhythm. ", "The one I am negotiating down is the stretch. ", "The one I am negotiating down is the witness. "], "label": "The one I bargain down", "ex": "The one I am negotiating down is the witness. I tell myself I will tell someone next month." },
   "9.0.lo": { "ask": "If the three are not written yet, which one will you write first? If all three feel solid, say what is holding them, so another man can borrow it.", "help": "We are being transformed from one degree of glory to another (2 Corinthians 3:18). What holds for you may hold for him.", "label": "Where my three things stand", "grew": true, "ex": "The rhythm is holding because it is stacked on my drive to work. Or: I have not written them yet; the rhythm comes first." },
   "9.1.hi": { "ask": "Who came to mind first, and why? Tap a role, then the other two as roles.", "help": "Your journal holds the names. Here a role is enough.", "ops": R5, "opn": ["The first who came to mind is a man in my group, because ", "The first who came to mind is my group, because ", "The first who came to mind is a friend, because ", "The first who came to mind is a family member, because ", "The first who came to mind is someone at work, because ", "The first who came to mind is a neighbor, because "], "label": "Who my fruit is for", "ex": "The first who came to mind is a neighbor, because his wife just left and I have not knocked. Then my daughter, and a young man at work." },
   "9.1.lo": { "ask": "What is in the way of naming them? Tap one, then one sentence.", "help": "Naming what is in the way is most of the way past it.", "ops": ["I don't look up from my own life", "I keep to myself", "Work fills the week", "I don't think my fruit is for anyone"], "opn": ["What is in the way is that I don't look up from my own life. ", "What is in the way is that I keep to myself. ", "What is in the way is that work fills the week. ", "What is in the way is that I don't think my fruit is for anyone. "], "label": "What is in the way", "ex": "What is in the way is that I keep to myself. I could not tell you my neighbor's last name." },
   "9.2.hi": { "ask": "What did that look like at work this week?", "label": "Where my work was worship", "ex": "I stayed late to fix another man's mistake and didn't mention it." },
   "9.2.lo": { "ask": "What is your work to you right now, if not worship? Say it plainly, then what would have to change for it to be offered.", "label": "What my work is now", "ex": "A paycheck. I would have to believe God is in the building." },
   "9.3.hi": { "ask": "Who will you tell? Tap a role, then tap what comes up when you picture telling him, and finish the sentence.", "help": NONAME, "ops": R5, "ask2": "What comes up when you picture telling him:", "ops2": FEEL7, "opn2": FEEL7_OPN, "label": "Who will know my plan", "ex": "A man in my group. Telling him brings up dread. He will actually ask, and I will not be able to change the subject." },
   "9.3.lo": { "ask": "Is your plan already known to a man, or are you not ready to tell one? Tap a role, or “No one yet.” Then tap what comes up, and say what makes it hard.", "help": NONAME, "ops": R5N, "opn": ["A man in my group already knows my plan. ", "My group already knows my plan. ", "A friend already knows my plan. ", "A family member already knows my plan. ", "Someone at work already knows my plan. ", "A neighbor already knows my plan. ", "No one yet. "], "ask2": "What comes up when you picture telling a man:", "ops2": FEEL7, "opn2": FEEL7_OPN, "label": "Telling a man my plan", "ex": "No one yet. Telling him brings up embarrassment. I have announced plans before and dropped them." },
   "9.4.say": "I can name one act of kindness or generosity — my time, my money, my presence, a meal, a repair — that will cost me something and serve one of those three people this week.",
   "9.4.hi": { "ask": "Who is it for? Tap one. Then the act, what you give and what it costs you, and the day.", "help": NONAME, "ops": R5, "opn": ["It is for a man in my group. ", "It is for my group. ", "It is for a friend. ", "It is for a family member. ", "It is for someone at work. ", "It is for a neighbor. "], "label": "This week", "ex": "It is for a neighbor. Saturday I will fix his fence with him; it costs me the morning I wanted for myself." },
   "9.4.lo": { "ask": "If you already serve one of them regularly, say what it costs you and what it gives. If nothing comes to mind, say what you would need to ask them.", "help": "We are being transformed from one degree of glory to another (2 Corinthians 3:18). Say what you learned; another man may need to hear it.", "label": "Where I stand on a costly act", "grew": true, "ex": "I drive my father to his appointments every Thursday. It costs me the afternoon; it gives us the only hour we talk. Or: nothing yet. I need to ask my neighbor what he actually needs." }
  };
  Object.keys(V17_P10).forEach(function (k) { var f = V17_P10[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  var PRAC = ["A walk with Him", "Prayer", "Time in Scripture", "Solitude", "Fasting", "Simplicity", "Service", "Confession", "Worship", "Meditation on a verse", "Asking a wise man for guidance", "Celebration"];
  var PRAC_DO = ["take a walk with Him", "set a time to pray", "open the Scriptures", "get alone with Him", "fast", "let go of something", "serve someone", "confess to a man", "worship", "sit with one verse", "ask a wise man for guidance", "celebrate"];
  var PRAC_IS = ["a walk with Him", "prayer", "time in Scripture", "solitude", "fasting", "simplicity", "service", "confession", "worship", "meditation on a verse", "asking a wise man for guidance", "celebration"];
  function opnOf(list, pre, post) { return list.map(function (w) { return pre + w + post; }); }
  var HIDE = ["My work", "Staying busy", "My phone", "“I’m fine”", "Anger", "Silence"];
  var HIDE_OPN = ["I hide in my work, because ", "I hide in staying busy, because ", "I hide in my phone, because ", "I hide in “I’m fine,” because ", "I hide in anger, because ", "I hide in silence, because "];
  var V17_P1 = {
   "0.0.hi": { "ask": "What do you hide in? Tap one, then say what it protects you from.", "ops": HIDE, "opn": HIDE_OPN, "label": "Where I hide", "ex": "I hide in my work, because nobody there asks how I am." },
   "0.0.lo": { "ask": "What does walking openly with Him look like in your week? Say it so another man could try it.", "help": "We are being transformed from one degree of glory to another (2 Corinthians 3:18). What holds for you may hold for him.", "label": "How I walk openly with God", "grew": true, "ex": "I tell Him the truth out loud on the drive in, before I tell anyone else." },
   "0.1.hi": { "label": "The place I hide" },
   "0.2.hi": { "ask": "Think of a time you were avoiding God and something happened that could only have been Him coming after you. What did He use to reach you? Tap one, then tell that one time.", "help": "Not when you last prayed. One moment a man could picture.", "ops": ["A person who showed up", "A verse that would not leave me alone", "A prayer answered", "A door that opened", "A door that closed", "A hard thing He guided me through"], "opn": ["He came toward me through a person who showed up. ", "He came toward me through a verse that would not leave me alone. ", "He came toward me through a prayer answered. ", "He came toward me through a door that opened. ", "He came toward me through a door that closed. ", "He came toward me through a hard thing He guided me through. "], "label": "A time He came toward me", "ex": "He came toward me through a person who showed up. The winter I stopped praying, a friend I had not called in a year showed up with coffee and would not leave." },
   "0.2.lo": { "ask": "When you picture God and your hiding place, which is closer to what you actually believe? Tap one, then say where you learned it: a father, a church, a failure.", "ops": ["He is waiting for me to come to Him", "He is done with me", "He is angry with me", "He comes for other men, not me", "I don’t think about it"], "opn": ["Most days I believe He is waiting for me to come to Him. ", "Most days I believe He is done with me. ", "Most days I believe He is angry with me. ", "Most days I believe He comes for other men, not me. ", "Most days I don’t think about it. "], "label": "What I believe about Him", "ex": "Most days I believe He comes for other men, not me. I learned it from a father who only came when I had done something right." },
   "0.3.hi": { "ask": "This week, how will you bring the thing you hide in to God? Tap one, then say what you will bring.", "help": "Only how, and what. What you say to Him stays between you and Him.", "ops": ["Out loud, alone", "In a journal", "With a man beside me", "In prayer", "In worship", "I’m not sure yet"], "opn": ["I will bring it to Him out loud, alone. ", "I will bring it to Him in a journal. ", "I will bring it to Him with a man beside me. ", "I will bring it to Him in prayer. ", "I will bring it to Him in worship. ", "I am not sure yet how I will bring it to Him. "], "label": "How I’ll bring it to Him", "ex": "I will bring it to Him out loud, alone. On the drive in, the fact that I stay late so I don’t have to be at home." },
   "0.3.lo": { "ask": "The first statement asked what you hide in. Do you already talk to God about that? Tap the honest one, then one sentence.", "help": "All four are honest answers.", "ops": ["I already talk to Him about it", "There is nothing I keep back from Him", "I’m not ready yet", "I don’t know what I would say"], "opn": ["I already talk to Him about it. ", "There is nothing I keep back from Him. ", "I’m not ready yet. ", "I don’t know what I would say. "], "label": "Talking to Him about hiding", "ex": "I’m not ready yet. I know what it is. I am not ready to say it to Him or anyone." },
   "0.4.hi": { "ask": "Pick one, or write your own. Then say when.", "help": "A walk is enough. So is any one of the practices Christians have used for centuries to put themselves where God can reach them.", "ops": PRAC, "opn": opnOf(PRAC_DO, "This week I will ", ", "), "label": "This week", "ex": "This week I will take a walk with Him, around the block after dinner tonight." },
   "0.4.lo": { "ask": "If you can’t name a step yet, tap the practice that would be easiest for you to try, and say what makes it easiest. If you already have a rhythm with Him, tap it and say what it is.", "ops": PRAC.concat(["Nothing yet."]), "opn": opnOf(PRAC_IS, "The one I could try is ", ", because ").concat(["Nothing yet. "]), "label": "A next step: where I stand", "ex": "The one I could try is a walk with Him, because I already walk the dog at night, and I could leave the phone at home." }
  };
  Object.keys(V17_P1).forEach(function (k) { var f = V17_P1[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  var ROADS = ["A prayer habit", "A Sunday table", "A psalm or a book", "A man I used to meet", "A walk alone with Him", "Serving somewhere", "Singing"];
  var ROADS_IS = ["a prayer habit", "a Sunday table", "a psalm or a book", "a man I used to meet", "a walk alone with Him", "serving somewhere", "singing"];
  var V17_P2 = {
   "1.0.hi": { "ask": "Which way do you lean? Tap one, then tap who knows you, and say what that looks like in your week.", "ops": ["A full inner life, too little community", "A lot of activity, a thin inner life"], "opn": ["I lean toward a full inner life with too little community. ", "I lean toward a lot of activity with a thin inner life. "], "ask2": "Who knows you:", "ops2": ["My family knows me, my group doesn’t", "My group knows me, my family doesn’t", "Both know me", "Neither does, yet"], "opn2": ["My family knows me, my group doesn’t. ", "My group knows me, my family doesn’t. ", "Both know me. ", "Neither does, yet. "], "label": "The way I lean", "ex": "I lean toward a full inner life with too little community. My family knows me, my group doesn’t. I read for an hour and talk to no one." },
   "1.0.lo": { "ask": "Think of last week. What did you fill the hours with? Tap what took most of them, then one sentence.", "ops": ["Work", "Screens", "Chores and errands", "Time with God", "People who know me", "People who don’t"], "opn": ["Most of last week went to work. ", "Most of last week went to screens. ", "Most of last week went to chores and errands. ", "Most of last week went to time with God. ", "Most of last week went to people who know me. ", "Most of last week went to people who don’t know me. "], "label": "My last week", "ex": "Most of last week went to work. I was home by seven and on my laptop by eight." },
   "1.1.note": "A “no more” is an ending you say out loud: one thing you stop so a new beginning can start. It sits beside a “yes, Lord”: the rich young man in Mark 10 could not say it about his money.",
   "1.2.hi": { "label": "What I walked away from" },
   "1.2.lo": { "ask": "What do you believe today about the road back? Then the first time you believed it: one moment, a title is enough.", "help": "The first time, not the whole story. Naming where it began is enough.", "label": "The road back: what I believe", "ex": "Most days I believe it for other men and not for me. The first time: the summer I came home from college and nobody at church would look at me." },
   "1.3.hi": { "ask": "Which one, and when? Tap one, or write your own.", "ops": PRAC, "opn": opnOf(PRAC_IS, "This week I will pick ", ", "), "label": "This week", "ex": "This week I will pick prayer, ten minutes of quiet before work, every morning." },
   "1.3.lo": { "ask": "If you already keep a discipline, tap what you will add to it this season: something to learn, to understand, to do, or to serve. If you are not ready for one at all, say what you would need.", "help": "Faith without works is dead (James 2:17). From glory to glory (2 Corinthians 3:18) still has a next step.", "ops": ["Learn", "Understand", "Do", "Serve", "Not ready yet"], "opn": ["The next thing I will add is something to learn: ", "The next thing I will add is something to understand: ", "The next thing I will add is something to do: ", "The next thing I will add is something to serve: ", "I am not ready for one yet. "], "label": "The next thing I could add", "grew": true, "ex": "The next thing I will add is something to serve: the Saturday food pantry my son has been asking about." },
   "1.4.note": "An ancient path is a road you once walked with God and left: praying out loud in the truck, a Sunday table, a psalm you used to read, a man you used to meet with, a walk you took alone.",
   "1.4.hi": { "ask": "Which road? Tap one, or write your own, then what took you off it.", "ops": ROADS, "opn": opnOf(ROADS_IS, "The road I want back is ", ", "), "label": "The road I want back", "ex": "The road I want back is a prayer habit, praying out loud in the truck. A new job with a long commute and a radio took me off it." },
   "1.4.lo": { "ask": "Is there none, or none you can name yet? Tap a road that was once yours, or “None yet.”, then one sentence.", "help": "If there is none, say what is already in place. If you can’t name one yet, say what would help you find it.", "ops": ROADS.concat(["None yet."]), "opn": opnOf(ROADS_IS, "One that was once mine is ", ", ").concat(["None yet. "]), "label": "An old road: where I stand", "ex": "None yet. It would help to look back at when prayer was easy." }
  };
  Object.keys(V17_P2).forEach(function (k) { var f = V17_P2[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  var V17_P3 = {
   "2.0.say": "There is a root growing in me right now that nobody else can see yet, something like bitterness, envy or pride, quietly turning my heart. I can name it.",
   "2.0.note": "Your first chapter asked where you hide. This asks what is growing in you while you hide there: not the place, the root.",
   "2.1.say": "When God is pruning me, cutting something out of my life to make room for better fruit, there are people in my life who would know within a week.",
   "2.1.note": "Pruning is what a vinedresser does to a vine he intends to keep: he cuts back good growth so it bears more. God prunes through a relationship taken away, a sickness, a test, a sorrow. It is never punishment, and it is always painful, and He is never nearer than when He is doing it (John 15:2).",
   "2.1.lo": { "ask": "Is there one man you could tell? No names. Tap one, then say why him.", "help": NONAME, "ops": R5N, "label": "One man I could tell", "ex": "A man in my group, because he has been honest with me first." },
   "2.2.say": "I believe pruning is not punishment. It comes in seasons to a man who walks in the Spirit, and it is the Vinedresser\u2019s way of growing more fruit through me for others.",
   "2.2.hi": { "ask": "Pruning comes in seasons. Which one are you in? Tap one, then say what He cut, or is cutting, and what it is making room for.", "ops": ["Being prepared", "Being cut back", "Bearing fruit from a cut", "Between seasons"], "opn": ["Right now I am being prepared. ", "Right now I am being cut back. ", "Right now I am bearing fruit from a cut. ", "Right now I am between seasons. "], "label": "The season I am in", "ex": "Right now I am being cut back. He took the second job, and the evenings it made room for are the ones my son now talks in." },
   "2.2.lo": { "ask": "What does being cut back feel like to you today, if not the Vinedresser at work? Then the first time it felt that way: one moment, a title is enough.", "help": "The first time, not the whole story. Naming where it began is enough.", "label": "Being cut back: what I believe", "ex": "Like He is angry with me. The first time: the year my father pruned me with silence." },
   "2.3.say": "I\u2019m willing to let two or three trusted men know the truth about my life and ask me about it.",
   "2.3.hi": { "label": "The men I\u2019d let know me" },
   "2.3.lo": { "label": "Being known: where I stand" },
   "2.4.hi": { "ask": "Which will it be, and when?", "opn": ["I will bring it to a man in my group, ", "I will bring it to my group, ", "I will bring it to a friend, ", "I will bring it to a family member, ", "I will bring it on paper before God, "], "ex": "I will bring it to a man in my group, Thursday after we meet. Or: I will bring it on paper before God, Saturday morning, before anyone is up." }
  };
  Object.keys(V17_P3).forEach(function (k) { var f = V17_P3[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  var V17_P4 = {
   "3.0.note": "Head to heart is what Paul calls transformation, the renewing of your mind (Romans 12:2). It is how love works. A man says \u201cI love you\u201d to a bride on one day, and years later the same word holds children and grandchildren. The word did not change; the man did.",
   "3.0.hi": { "label": "A truth that has moved" },
   "3.0.lo": { "ask": "Name one truth about God you can say but do not yet live. Tap one, or use your own, then say what it would look like if it moved: one thing you would stop bracing for, or start doing.", "ops": ["He is for me", "He forgives me", "He walks toward me", "Pruning is not punishment", "My fruit is for others"], "opn": ["I can say that He is for me. ", "I can say that He forgives me. ", "I can say that He walks toward me. ", "I can say that pruning is not punishment. ", "I can say that my fruit is for others. "], "label": "A truth still in my head", "ex": "I can say that He is for me. If it moved, I would stop rehearsing my defense on the drive home." },
   "3.1.lo": { "ask": "What is the last thing you learned about God? Say it. Then tap how you could hand it on, and say it that way in one line.", "help": "A truth you can only say lives in half your brain. Give it a picture, a feeling and a person, and it moves to the half that lives it. That is how God wired you.", "ask2": "Hand it on as:", "ops2": ["A picture", "A story from my week", "A line to my son", "A prayer", "Something I make"], "opn2": ["I could hand it on as a picture: ", "I could hand it on as a story from my week: ", "I could hand it on as a line to my son: ", "I could hand it on as a prayer: ", "I could hand it on as something I make: "], "label": "A truth, handed on", "ex": "That pruning is not punishment. I could hand it on as a picture: the rose bush my father cut to the ground every February, and what it did in June." },
   "3.2.lo": { "ask": "What do you believe about your fruit instead? Tap the honest one, then the first time you believed it: a title is enough.", "help": "The first time, not the whole story. Naming where it began is enough.", "ops": ["It is mine, I earned it", "It is for my family only", "I don\u2019t have any fruit to give", "Nobody would want it", "I never thought about it"], "opn": ["Most days I believe it is mine, I earned it. ", "Most days I believe it is for my family only. ", "Most days I believe I don\u2019t have any fruit to give. ", "Most days I believe nobody would want it. ", "Most days I never think about it. "], "label": "My fruit: what I believe", "ex": "Most days I believe I don\u2019t have any fruit to give. The first time: the men\u2019s retreat where I had nothing to say." },
   "3.3.hi": { "ask": "Which one makes you nervous, and when will you start? Tap one, or write your own.", "ops": PRAC, "opn": opnOf(PRAC_IS, "The one that makes me nervous is ", ", "), "label": "This week", "ex": "The one that makes me nervous is service, Saturday morning at the food pantry, where other people will see me." },
   "3.3.lo": { "label": "The practice I avoid" },
   "3.4.hi": { "ask": "Who is it for? Tap a role, then what you will hand them, then say why them. No names.", "help": NONAME, "ops": R5, "opn": R5.map(function (r) { return r + ". "; }), "ask2": "What you will hand them:", "ops2": ["A meal", "My time", "A skill I have", "Something I learned about God", "A listening ear", "Money", "A door I can open"], "opn2": ["What I will hand them is a meal. ", "What I will hand them is my time. ", "What I will hand them is a skill I have. ", "What I will hand them is something I learned about God. ", "What I will hand them is a listening ear. ", "What I will hand them is money. ", "What I will hand them is a door I can open. "], "label": "Who my fruit is for", "ex": "A neighbor. What I will hand them is a skill I have. He just lost his job, and I have hired forty people." },
   "3.4.lo": { "label": "Handing on what I have" }
  };
  Object.keys(V17_P4).forEach(function (k) { var f = V17_P4[k], o, x; if (typeof f === "string") { FIX[k] = f; return; } o = FIX[k] || (FIX[k] = {}); for (x in f) o[x] = f[x]; });
  Object.keys(FIX).forEach(function (k) { var a = k.split("."), q = PARTS[+a[0]].Q[+a[1]], o = {}, src = q[a[2]], f = FIX[k], x; if (a[2] === "say" || a[2] === "note") { q[a[2]] = f; return; } for (x in src) o[x] = src[x]; for (x in f) o[x] = f[x]; q[a[2]] = o; });
  /* v17: the Part Eight evidence page explains itself to a man who has not read the section */
  PARTS[7].evidence.frame = "Scripture pictures a courtroom. The Enemy is the accuser, who accuses God's people day and night (Revelation 12:10), and he builds his case from real material: the name you still answer to. Here is that name, and here is what God says back.";
  PARTS.roleWords = R5N.concat(["A counselor or pastor"]);
  return PARTS;
})();
if (typeof module !== "undefined") module.exports = ROAD_PARTS;

/* ---- road_bridge.js ---- */
/* AP-ROAD-BRIDGE-v1 · The connective tissue that turns a chapter's lines into a story (John, Sept 24, 2026: "for this to work the person needs to see almost immediate value —
   how their effort is starting to build in a story they can offer"). One opening line per chapter (from chapter two on it quotes the step he committed to last time),
   one bridge before each of his lines — hi for a man who marked the statement 4–5, lo for 1–3 — then the stage line and the feeling. His words are never changed; these sit before them. */
var ROAD_BRIDGE = (function () {
  var B = [
    { open: "This is where my road begins.", again: "This is where my road begins.",
      q: [["There is a place I go to not be seen.", "This is where my road begins."],
          ["If you asked where, I could point to it.", "I used to hide somewhere else."],
          ["He did not wait for me to come out.", "And what I believe about Him, if I am honest:"],
          ["So this week I am not going to keep it from Him.", "Do I already talk to Him about it?"],
          ["And one step, small enough to take.", "As for a step, here is where I stand."]],
      stage: "Moses wrote down their starting places, stage by stage. Here is mine.", feel: "If I had to name what this stirred in me:" },
    { open: "Here is where I am standing now.", again: "Last time I said: “{step}” Here is where I am standing now.",
      q: [["I know which way I lean.", "I am not sure which way I lean, so I looked at last week."],
          ["There is a “no more” I have not said yet.", "There is a “no more” I have already said, and kept."],
          ["Did I ever walk away from something He asked?", "About the road back, here is what I believe today, and when I first believed it."],
          ["So I am putting myself where His action can find me.", "About a discipline, here is where I stand."],
          ["And there is an old road I want to ask for again.", "An old road? Here is where I stand."]],
      stage: "Where I set out from this time, and where I camped.", feel: "What this stirred in me:" },
    { open: "The Vinedresser has been at work.", again: "Last time I said: “{step}” The Vinedresser has been at work since.",
      q: [["There is a root in me nobody else can see yet. I can name it.", "I have found roots before."],
          ["When He is pruning me, someone would know within a week.", "When He is pruning me, nobody would know within a week. If I told one man:"],
          ["Pruning comes in seasons.", "I don’t yet believe the cutting is the Vinedresser. Here is what it feels like instead:"],
          ["I am willing to be known.", "About being known, here is where I stand."],
          ["And one honest thing goes into the light this week.", "What is already in the light, that used to be hidden:"]],
      stage: "They set out from Marah and camped at Elim. Marah means bitter. My stage:", feel: "What this stirred in me:" },
    { open: "Here is what has become fruit, and what is still in my head.", again: "Last time I said: “{step}” Here is what has become fruit, and what is still in my head.",
      q: [["Some of what I know about God has moved from my head to my heart.", "Some of what I know about God is still in my head."],
          ["What I have learned has fed someone.", "Here is the last thing I learned about Him, and how I could hand it on."],
          ["Fruit is not for the tree.", "About my fruit, here is what I believe, if I am honest."],
          ["There is a practice I have avoided, and I am starting it.", "About the practice I avoid, here is where I stand."],
          ["And I know who my fruit is for.", "Who my fruit is for, I cannot say yet."]],
      stage: "Stage by stage, Moses wrote. This one:", feel: "What this stirred in me:" },
    { open: "Now the harder question: how I handle a wrong.", again: "Last time I said: “{step}” Now the harder question: how I handle a wrong.",
      q: [["In a conflict I know which way I lean.", "I am not sure which way I lean in a conflict, so here is my last one."],
          ["There is a wrong in my life that has not been made right, and I have been avoiding it.", "The last wrong I made right:"],
          ["Justice and mercy have to be held together. The last time I had to:", "Between justice and mercy, here is the one I trust more today."],
          ["This week I will let go of being right in one place.", "The last time I let go of being right, or could not, it showed me something."],
          ["And my honest weights: where they would not survive an audit, and the first thing I will make right.", "If I could keep only one of my weights honest this month, money, time or promises:"]],
      stage: "The next stage:", feel: "What this stirred in me:" },
    { open: "This chapter is about mercy, and where I still doubt it.", again: "Last time I said: “{step}” This chapter is about mercy, and where I still doubt it.",
      q: [["There is a mercy of God I believe for other men and not for myself.", "If only one mercy could be read over me this season:"],
          ["There is someone I would rather see get justice than mercy.", "I once wanted justice for someone more than mercy. What changed:"],
          ["He does not have two faces. When I come back to Him after I have sinned:", "After I sin, here is the face I expect from Him."],
          ["This week I will bring Him an honest confession.", "About coming back to Him, here is where I stand."],
          ["And there is someone I have shown less mercy than He has shown me. My step toward them:", "How I learned to show mercy to someone who had no claim on it:"]],
      stage: "Where I set out from, and where I camped:", feel: "What this stirred in me:" },
    { open: "This chapter is about names: the one I answer to, and the one He is giving me.", again: "Last time I said: “{step}” This chapter is about names: the one I answer to, and the one He is giving me.",
      q: [["There is a name my worst patterns call me, and I still answer to it.", "There is a name God calls me that I can believe today."],
          ["There is a chapter where someone meant evil, and I have not been able to finish it with “God meant it for good.”", "There is a chapter someone meant for evil that God has turned to good."],
          ["He is growing me into a new name. The one I hope it is:", "Of Jacob’s three names, here is the one I answer to fastest."],
          ["I will let someone see me wrestling.", "Here is how I keep anyone from seeing me wrestle."],
          ["And one place this week where I will trust His justice and His mercy at once:", "When I last had to trust both at once, this is what got me through."]],
      stage: "Stage by stage:", feel: "What this stirred in me:" },
    { open: "This chapter is about how I pray, and how I picture the Judge.", again: "Last time I said: “{step}” This chapter is about how I pray, and how I picture the Judge.",
      q: [["Of the five ways to pray, one is missing from mine.", "Of the five ways to pray, one comes easily to me."],
          ["If I answer with my gut, part of me pictures the Judge as against me. Where that picture came from:", "My gut picture of the Judge now, and what changed it:"],
          ["I can come to Him on His mercy, not my performance. One time I came with nothing to show:", "What I bring Him first, if I am honest:"],
          ["This week I will bring Him a lament I have not figured out. It is about:", "Here is what keeps my prayers polished."],
          ["And one man will hear my honest “Lord, why?”", "Who has heard my honest “Lord, why?”:"]],
      stage: "This stage:", feel: "What this stirred in me:" },
    { open: "At the well, Jesus told the truth and offered living water in one conversation. Here is how I take both.", again: "Last time I said: “{step}” At the well, Jesus told the truth and offered living water in one conversation. Here is how I take both.",
      q: [["Of the two, one is harder for me to receive.", "The last hard truth I was told, and the last kindness I was shown: here is the one I wanted to end."],
          ["There is a chapter of my story I still keep hidden.", "There is a chapter of my story I have already let be told."],
          ["Justice and mercy meet in Him without either giving way. The last time I had to choose which to lead with:", "Where I am choosing between them right now:"],
          ["This week I will sit still and let Him tell me the truth about myself.", "Here is what makes sitting still under the truth hard for me."],
          ["And the thing I have hidden could be someone else’s good news.", "Has a hidden thing of mine already become someone’s good news?"]],
      stage: "Where I set out from this time, and where I camped:", feel: "What this stirred in me:" },
    { open: "This chapter asks for three things: a rhythm, a stretch and a witness.", again: "Last time I said: “{step}” This chapter asks for three things: a rhythm, a stretch and a witness.",
      q: [["Of the three, I know which one I am tempted to bargain down.", "Here is where my three things stand."],
          ["I know who my fruit is for.", "I cannot name them yet, and here is what is in the way."],
          ["My ordinary work can be worship. This week it looked like this:", "My work, right now, if I am honest:"],
          ["One man will know my plan.", "About telling a man my plan, here is where I stand."],
          ["And one act that will cost me something this week:", "Where I stand on a costly act:"]],
      stage: "The last stage of the road:", feel: "What this stirred in me:" }
  ];
  return B;
})();
if (typeof module !== "undefined") module.exports = ROAD_BRIDGE;

/* ---- road_write.js ---- */
/* AP-ROAD-WRITER-v2 · the weekly chapter writer, for any of the ten parts. Starts empty: the words are whatever he types.
   Every part runs the same steps: what happened since last time, five statements with a line beneath, between your chapters, one word, set out / camped. */
var WRITER = (function () {
  var ROOTS = [
    { w: "unforgiveness", says: "Forgive while you stand praying.", ref: "Mark 11:25", care: "Some wrongs are heavy, and forgiving is a road. Naming it is the first step, and it is enough for today." },
    { w: "bitterness", says: "A bitter root springs up and troubles many.", ref: "Hebrews 12:15" },
    { w: "pride", says: "God stands against the proud and gives grace to the humble.", ref: "James 4:6" },
    { w: "a sin I keep hidden", says: "Had I held on to sin in my heart, the Lord would not have listened.", ref: "Psalm 66:18" },
    { w: "an idol", says: "They set up idols in their hearts, and then came to ask of God.", ref: "Ezekiel 14:3", more: "a false god · a golden calf · an idol of the heart" },
    { w: "dishonor at home", says: "Honor her, so that nothing hinders your prayers.", ref: "1 Peter 3:7" },
    { w: "something a man has against me", says: "Leave your gift at the altar. First go and be reconciled.", ref: "Matthew 5:23–24" },
    { w: "envy", says: "You want and do not have.", ref: "James 4:2" },
    { w: "lust", says: "It starts in the heart long before it reaches the hands.", ref: "Matthew 5:28" }
  ];
  var FEEL = ["exposed", "relieved", "afraid", "angry", "sad", "ashamed", "hopeful", "grateful", "numb"];
  var STAGE = { text: "Moses wrote down their starting places, stage by stage, by command of the LORD.", ref: "Numbers 33:2", help: "Every stage of Israel's road is written the same way: where they set out from, and where they camped. Close your chapter the same way." };
  var BETWEEN_OPS = ["What happened next was…", "While that was going on, …", "Around the same time, …"];
  var NUMS = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"];

  var P = 2, ALL = {};
  function blank() { return { follow: "", step: 1, all: false, view: "steps", n: [null, null, null, null, null], mid: [null, null, null, null, null], t: ["", "", "", "", ""], o: [null, null, null, null, null], o2: [null, null, null, null, null], root: "", feel: "", feelOwn: "", setOut: "", camped: "", aloud: -1, disc: "", discText: "", between: "", witness: "" }; }
  function W() { var w = ALL[P] || (ALL[P] = blank()); if (!w.o) w.o = [null, null, null, null, null]; if (!w.o2) w.o2 = [null, null, null, null, null]; return w; }
  /* the words a tapped choice puts in the box: a sentence opening in his voice, never a label with a colon */
  function opening(sd, k) { var op = sd.ops && sd.ops[k]; if (op == null) return ""; if (sd.opn && sd.opn[k]) return sd.opn[k]; if (ROAD_PARTS.roleWords && ROAD_PARTS.roleWords.indexOf(op) >= 0) return /\.$/.test(op) ? op + " " : op + (/\bwhy\b/i.test(sd.ask || "") ? ", because " : ". "); return op.replace(/…\s*$/, "") + (/\.$/.test(op) ? " " : ": "); }
  /* a second row of words (ops2): the tap ADDS a sentence to the box instead of replacing its opening, so a man can say who and then what he feels */
  function opening2(sd, k) { var op = sd.ops2 && sd.ops2[k]; if (op == null) return ""; if (sd.opn2 && sd.opn2[k]) return sd.opn2[k]; return op.replace(/…\s*$/, "") + (/\.$/.test(op) ? " " : ". "); }
  function pick2Of(i) { var w = W(), q = Q()[i], sd = q && (q[band(i)] || q.hi); if (!sd || !sd.ops2 || w.o2[i] == null) return null; var op = opening2(sd, w.o2[i]); return op && (w.t[i] || "").indexOf(op.trim()) >= 0 ? w.o2[i] : null; }
  function pickOf(i) { var w = W(), q = Q()[i], sd = q && (q[band(i)] || q.hi); if (!sd || !sd.ops || w.o[i] == null) return null; var op = opening(sd, w.o[i]); return op && (w.t[i] || "").indexOf(op) === 0 ? w.o[i] : null; }
  /* v18 · where his answers put him on the map. When a part has no discipleship statement (Parts One and Two), the forced choice
     on the first statement of Part Two ("which way do you lean") places the mark instead: the man put his X on the map in words, so the map shows it. */
  function markFor() {
    var w = W(), m = ROAD.markPart(Q(), w.n);
    if (m) return m;
    var lean = leanPick();
    if (lean === 0) return ROAD.markFD(4, 2);
    if (lean === 1) return ROAD.markFD(2, 4);
    return null;
  }
  function leanPick() {
    var w = W(), q = Q()[0], ops = q && q.hi && q.hi.ops;
    if (!ops || ops.length !== 2 || !/lean/i.test(q.say || "") || band(0) !== "hi") return null;
    var k = pickOf(0); if (k == null) return null;
    return k;
  }
  function part() { return ROAD_PARTS[P]; }
  function Q() { return part().Q; }
  function steps() { var s = ["intro"]; if (lastWeek()) s.push("follow"); if (part().evidence) s.push("witness"); Q().forEach(function (q, i) { s.push("q" + i); }); if (P > 0) s.push("between"); s.push("feel", "stage"); return s; }
  function esc(s) { return APP.esc(s); }
  /* 1 or 2 opens one line, 4 or 5 the other. A 3 is some of each, so he chooses which line is truer for him. */
  function band(i) { var w = W(), v = w.n[i]; return v == null ? null : v >= 4 ? "hi" : v <= 2 ? "lo" : ((w.mid || [])[i] || null); }
  function prevCh() { return P > 0 ? APP.D.chapters[P - 1] : null; }
  function lastWeek() { var ch = prevCh(); if (!ch) return ""; var l = ch.lines.filter(function (x) { return x.label === "This week" && x.text.trim(); })[0]; return l ? l.text.trim() : ""; }
  function leadYou() { var ch = prevCh(); return "In " + ROAD.fullPart(ch) + ", you said what you would do that week. You wrote:"; }
  function leadMe() { var ch = prevCh(); return "In " + ROAD.fullPart(ch) + ", I said what I would do that week. I wrote:"; }

  function qHTML(i) {
    var w = W(), q = Q()[i], b = band(i), side = b ? q[b] : null, h = '<section class="wq"><p class="q">' + esc(q.say) + '</p>' + (q.note ? '<p class="help">' + esc(q.note) + '</p>' : "") + '<div class="scale" role="group" aria-label="One to five">';
    for (var v = 1; v <= 5; v++) h += '<button class="dot' + (w.n[i] === v ? " on" : "") + '" data-n="' + i + "-" + v + '" aria-pressed="' + (w.n[i] === v) + '">' + v + '</button>';
    h += '</div><div class="ends"><span>Strongly disagree</span><span>Strongly agree</span></div>';
    if (w.n[i] === 3) h += '<div class="beneath"><p class="help">Some of each. Answer whichever is truer for you.</p><div class="words">' +
      '<button class="word' + (b === "hi" ? " pick" : "") + '" data-mid="' + i + '-hi" aria-pressed="' + (b === "hi") + '">' + esc(q.hi.ask) + '</button>' +
      '<button class="word' + (b === "lo" ? " pick" : "") + '" data-mid="' + i + '-lo" aria-pressed="' + (b === "lo") + '">' + esc(q.lo.ask) + '</button></div></div>';
    if (side) {
      h += '<div class="beneath"><p class="ask">' + esc(side.ask) + '</p>' + (side.help ? '<p class="help">' + esc(side.help) + '</p>' : "");
      if (side.roots) {
        h += '<div class="words">' + ROOTS.map(function (r) { return '<button class="word' + (w.root === r.w ? " pick" : "") + '" data-root="' + esc(r.w) + '" aria-pressed="' + (w.root === r.w) + '">' + esc(r.w) + '</button>'; }).join("") + '</div>';
        var r = ROOTS.filter(function (x) { return x.w === w.root; })[0];
        if (r) h += '<p class="ours left verse">' + esc(r.says) + ' <span class="ref">' + esc(r.ref) + '</span></p>' + (r.more ? '<p class="quiet">' + esc(r.more) + '</p>' : "") + (r.care ? '<p class="care">' + esc(r.care) + '</p>' : "");
      }
      /* before the next hard thing, the hard things he has already done: his last two kept commitments, in his words */
      if (i === part().week && b === "hi") {
        var kept = ROAD.evidence(APP.D, APP.stage, P).seen.filter(function (x) { return x.said; });
        if (w.follow.trim() && lastWeek()) kept.push({ part: ROAD.fullPart(prevCh()), said: lastWeek(), text: w.follow.trim() });
        kept = kept.slice(-2);
        if (kept.length) h += '<p class="help">You have done hard things. In your own words:</p>' + kept.map(function (x) { return '<div class="recall"><span>In ' + esc(x.saidPart || x.part) + ', you had said: “' + esc(x.said) + '” Then you wrote:</span><p>“' + esc(x.text) + '”</p></div>'; }).join("") + '<p class="help">Now the next one.</p>';
      }
      if (side.ops) h += '<div class="words">' + side.ops.map(function (o, k) { return '<button class="word" data-qop="' + i + "-" + k + '">' + esc(o) + '</button>'; }).join("") + '</div>';
      /* a tapped option may carry a line of ours (Part Five, the way he leans): shown while his sentence still opens with that option */
      if (side.ops && side.then) side.ops.forEach(function (o, k) { if (side.then[k] && (w.t[i] || "").indexOf(opening(side, k)) === 0) h += '<p class="ours left">' + esc(side.then[k]) + '</p>'; });
      if (side.ops2) h += (side.ask2 ? '<p class="help">' + esc(side.ask2) + '</p>' : "") + '<div class="words">' + side.ops2.map(function (o, k) { return '<button class="word" data-qop2="' + i + "-" + k + '">' + esc(o) + '</button>'; }).join("") + '</div>';
      h += '<label class="sr" for="t-' + i + '">' + esc(side.ask) + '</label><textarea id="t-' + i + '" data-t="' + i + '" rows="2" placeholder="One sentence is enough.">' + esc(w.t[i] || "") + '</textarea>' +
        '<p class="ex">Something a man could picture. Like: <i>' + esc(side.ex) + '</i></p></div>';
    }
    return h + '</section>';
  }

  function followHTML() {
    var last = lastWeek(); if (!last) return "";
    return '<section class="wq"><p class="help">' + esc(leadYou()) + '</p><p class="his quoted">' + esc(last) + '</p>' +
      '<p class="ask">What happened?</p><label class="sr" for="t-follow">What happened?</label>' +
      '<textarea id="t-follow" data-w="follow" rows="2" placeholder="One sentence is enough.">' + esc(W().follow) + '</textarea>' +
      '<p class="ex">What you did counts, and so does what you didn\'t. Like: <i>Four mornings out of seven. The quiet was harder than I expected.</i></p></section>';
  }

  /* Five minutes after each section: last chapter's line, this chapter's line, and what happened in between. The story is gathered as he goes. */
  function jobNow() { var ls = lines(), j = ls.filter(function (x) { return x.k === "q" + part().job; })[0] || ls.filter(function (x) { return x.k.charAt(0) === "q"; })[0]; return j ? j.text : ""; }
  function betweenHTML() {
    var ch = prevCh(), on = ch ? ROAD.onLines(ch) : [], last = on.filter(function (l) { return !l.ctx; })[0] || on[0], now = jobNow();
    if (!last || !now) return '<section class="wq"><p class="q">Between your chapters</p><p class="help">Nothing to join yet. Write a sentence under one of the statements and this step will show you your last chapter’s line beside it.</p></section>';
    return '<section class="wq"><p class="q">Between your chapters</p><p class="help">Your story is more than your answers. It is what happened between them. This takes about five minutes.</p>' +
      '<p class="help">In ' + esc(ROAD.fullPart(ch)) + ' you wrote:</p><p class="his quoted">' + esc(last.text) + '</p>' +
      '<p class="help">In this part you have just written:</p><p class="his quoted">' + esc(now) + '</p>' +
      '<p class="ask">What happened between these two?</p><p class="help">Write what a reader needs to hear before your new line. If the two are separate things, leave this empty; your story will start a new paragraph there.</p>' +
      '<div class="words">' + BETWEEN_OPS.map(function (o, x) { return '<button class="word" data-bop="' + x + '">' + esc(o) + '</button>'; }).join("") + '</div>' +
      '<label class="sr" for="t-between">What happened between these two</label><textarea id="t-between" data-w="between" rows="3" placeholder="Something that happened: a day, a place, something said or done.">' + esc(W().between) + '</textarea>' +
      '<p class="help">On a phone you can press the microphone on your keyboard and say it.</p></section>';
  }

  function feelHTML() {
    var w = W();
    return '<section class="wq"><p class="q">One word for what answering these stirred in you.</p><p class="help">What did you feel, and where did it sit? Pick a word, or use your own.</p>' +
      '<div class="words">' + FEEL.map(function (f) { return '<button class="word' + (w.feel === f ? " pick" : "") + '" data-feel="' + f + '" aria-pressed="' + (w.feel === f) + '">' + f + '</button>'; }).join("") + '</div>' +
      '<div class="field"><label for="t-feel">Your own word</label><input id="t-feel" data-feelown value="' + esc(w.feelOwn) + '"></div></section>';
  }

  function stageHTML() {
    var s = part().stage || STAGE, w = W();
    return '<section class="wq"><p class="ours left">' + esc(s.text) + ' <span class="ref">' + esc(s.ref) + '</span></p><p class="help">' + esc(s.help) + '</p>' +
      '<div class="field"><label for="t-out">I set out from…</label><input id="t-out" data-w="setOut" value="' + esc(w.setOut) + '" placeholder="needing my father to say he was wrong"></div>' +
      '<div class="field"><label for="t-camp">I camped at…</label><input id="t-camp" data-w="camped" value="' + esc(w.camped) + '" placeholder="one man knows, and that is enough for this week"></div></section>';
  }

  /* His own evidence, set before him: what he has done and what he has come through, in his words, with where each came from.
     Nothing is counted and nothing is praised. In Part Eight the charge sits beside it, and the grounds of appeal close it. */
  function witnessHTML() {
    var ev = part().evidence, e = ROAD.evidence(APP.D, APP.stage, P), h = '<section class="wq"><p class="q">' + esc(ev.head) + '</p>';
    if (ev.ours) h += '<p class="ours left">' + esc(ev.ours) + '</p>';
    if (ev.charge && e.charge) h += (ev.frame ? '<p class="fixed">' + esc(ev.frame) + '</p>' : '') + '<p class="help">' + esc(ev.charge) + '</p><div class="recall"><span>In ' + esc(e.charge.part) + ', under “' + esc(e.charge.label) + '”, you wrote:</span><p>“' + esc(e.charge.text) + '”</p></div>';
    if (ev.charge && e.charge && ev.answer) h += '<p class="ours left">' + esc(ev.answer.text) + ' <span class="ref">' + esc(ev.answer.ref) + '</span></p>';
    h += '<p class="help">' + esc(ev.seen) + '</p>';
    if (!e.seen.length) h += '<p class="quiet">Nothing gathered yet. This fills from what you write in your chapters: what you did, and what you have come through.</p>';
    e.seen.forEach(function (x) {
      h += '<div class="recall"><span>In ' + esc(x.said ? (x.saidPart || x.part) : x.part) + (x.said ? ', you had said: “' + esc(x.said) + '” Then you wrote:' : ', under “' + esc(x.label) + '”, you wrote:') + '</span><p>“' + esc(x.text) + '”</p></div>';
    });
    if (ev.close) h += '<p class="ours left">' + esc(ev.close.text) + ' <span class="ref">' + esc(ev.close.ref) + '</span></p>';
    if (ev.ruling) h += '<p class="ours left">' + esc(ev.ruling.text) + ' <span class="ref">' + esc(ev.ruling.ref) + '</span></p>';
    return h + '<div class="beneath"><p class="ask">' + esc(ev.ask) + '</p><p class="help">' + esc(ev.help) + '</p>' +
      '<label class="sr" for="t-witness">' + esc(ev.ask) + '</label><textarea id="t-witness" data-w="witness" rows="2" placeholder="One sentence is enough.">' + esc(W().witness || "") + '</textarea>' +
      '<p class="ex">Something a man could picture. Like: <i>' + esc(ev.ex) + '</i></p></div></section>';
  }

  function stepHTML(kind) { return kind === "witness" ? witnessHTML() : kind === "follow" ? followHTML() : kind === "between" ? betweenHTML() : kind === "feel" ? feelHTML() : kind === "stage" ? stageHTML() : qHTML(+kind.slice(1)); }

  function stepsHTML() {
    var w = W(), st = steps(), h = '<div class="sheet" id="writer"><div class="eyebrow">Walk With Me · ' + esc(part().part) + '</div><h1>' + esc(part().name) + '</h1>';
    if (w.all) return h + '<p class="fixed">Every step is open. Change anything, then go back to your chapter.</p>' + st.slice(1).map(stepHTML).join("") + '<div class="row bar"><button class="btn main" data-wgo="chapter">Done</button></div></div>';
    if (w.step >= st.length) w.step = st.length - 1;
    if (w.step < 1) w.step = 1;
    if (w.step === 1) h += '<p class="fixed">Chapter ' + NUMS[P] + ' of your story. Five to ten minutes. Five honest statements, and one sentence of your own under each. There are no grades here.</p>' +
      '<p class="fixed"><b>When you press Save, this chapter is saved to your page — yours to read, change or delete. Ancient Path reads only what you choose to publish.</b></p>';
    h += '<p class="quiet">Step ' + w.step + ' of ' + (st.length - 1) + '</p>' + stepHTML(st[w.step]);
    return h + '<div class="row bar">' + (w.step > 1 ? '<button class="btn" data-wstep="' + (w.step - 1) + '">Back</button>' : "") +
      (w.step < st.length - 1 ? '<button class="btn main" data-wstep="' + (w.step + 1) + '">Next</button>' : '<button class="btn main" data-wgo="chapter">Finish</button>') + '</div></div>';
  }

  /* his lines, in chapter order; a blank line drops out */
  function lines() {
    var w = W(), out = [];
    if (w.follow.trim() && lastWeek()) out.push({ k: "did", ev: true, label: "What I said in " + prevCh().part + ", and what happened", text: w.follow.trim(), ctx: { lead: leadMe(), quote: lastWeek() } });
    if (part().evidence && (w.witness || "").trim()) out.push({ k: "wit", ev: true, label: part().evidence.label, text: w.witness.trim() });
    Q().forEach(function (q, i) {
      var b = band(i), txt = (w.t[i] || "").trim();
      if (b === "hi" && q.hi.roots && w.root) txt = w.root.charAt(0).toUpperCase() + w.root.slice(1) + "." + (txt ? " " + txt : "");
      if (b && txt) out.push({ k: "q" + i, side: b, label: q[b].label, text: txt, ev: !!q[b].grew, grew: !!q[b].grew, pick: pickOf(i), pick2: pick2Of(i), charge: !!q[b].charge });
    });
    var f = (w.feelOwn.trim() || w.feel);
    if (f) out.push({ k: "feel", label: "The word for what this stirred", text: f.charAt(0).toUpperCase() + f.slice(1) + "." });
    return out;
  }

  function trailSoFar() { var D = APP.D; return APP.stage === "me" ? (D.marks || []).filter(function (m, i) { return m && i < P; }) : D.trail.slice(0, P); }
  function markSVG(m) {
    var F = 'font-family="Source Sans 3, Arial, sans-serif"', FS = 'font-family="Source Serif 4, Georgia, serif" font-size="19" font-style="italic" fill="#8C6A3F"';
    var prev = trailSoFar(), pts = prev.concat([[m.x, m.y]]), d = pts.length > 1 ? ROAD.pathD(pts) : "";
    return '<svg viewBox="0 0 600 500" role="img" aria-label="The map. A wide gold mark shows which way his answers lean in this part.">' +
      '<rect width="600" height="500" fill="#FFFFFF"/><line x1="70" y1="440" x2="572" y2="440" stroke="#1F2A44" stroke-width="2"/><line x1="70" y1="440" x2="70" y2="44" stroke="#1F2A44" stroke-width="2"/>' +
      '<text x="321" y="478" text-anchor="middle" ' + F + ' font-size="17" font-weight="700" letter-spacing="2" fill="#1F2A44">DISCIPLESHIP</text>' +
      '<text transform="translate(40,242) rotate(-90)" text-anchor="middle" ' + F + ' font-size="17" font-weight="700" letter-spacing="2" fill="#1F2A44">FORMATION</text>' +
      '<text x="88" y="76" ' + FS + '>Aging Fruit</text><text x="560" y="424" text-anchor="end" ' + FS + '>Limited Fruit</text><text x="150" y="432" ' + FS + '>Tree Planted</text><text x="560" y="62" text-anchor="end" ' + FS + '>Mature Orchard</text>' +
      '<path d="M120,405 C250,400 370,140 525,95" fill="none" stroke="#1F2A44" stroke-opacity=".28" stroke-width="2" stroke-dasharray="6 7"/>' +
      '<circle cx="' + m.x + '" cy="' + m.y + '" r="52" fill="#C9A227" fill-opacity=".28"/>' +
      (d ? '<path d="' + d + '" fill="none" stroke="#1F2A44" stroke-width="2.5" stroke-linecap="round"/>' : "") +
      prev.map(function (p) { return '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#1F2A44"/>'; }).join("") +
      '<circle cx="' + m.x + '" cy="' + m.y + '" r="9" fill="#C9A227" stroke="#1F2A44" stroke-width="2.5"/>' +
      '<text x="' + (m.x + 16) + '" y="' + (m.y + 6) + '" ' + F + ' font-size="15.5" font-weight="700" fill="#1F2A44">today</text></svg>';
  }

  function chapterHTML() {
    var w = W(), pt = part(), ls = lines(), m = markFor(), byK = {}, st = ROAD.stageLine({ setOut: w.setOut, camped: w.camped }), sv = pt.stage || STAGE;
    ls.forEach(function (l, i) { l.i = i; byK[l.k] = l; });
    function his(k) { var l = byK[k]; return l ? (l.ctx ? '<div class="recall"><span>' + esc(l.ctx.lead) + '</span><p>“' + esc(l.ctx.quote) + '”</p></div>' : "") + '<p class="his"><span class="lead">' + esc(l.label) + '</span><button class="pickline' + (w.aloud === l.i ? " on" : "") + '" data-aloud="' + l.i + '" aria-pressed="' + (w.aloud === l.i) + '">' + esc(l.text) + '</button></p>' : ""; }
    var h = '<div class="sheet" id="writer"><div class="ch-head"><div class="eyebrow">Walk With Me · chapter ' + NUMS[P] + '</div><div class="t">' + esc(pt.name) + '</div><div class="rule"></div></div>';
    if (!ls.length && !st) h += '<p class="fixed">Nothing written yet. Press Edit to go back in.</p>';
    if (pt.ours) h += '<p class="ours">' + esc(pt.ours) + '</p>';
    /* v22: the chapter reads as a story — his lines in order, each led in by a bridge in the course's voice; every line of his is still the read-aloud tap */
    var tmp = { lines: ls.map(function (l) { return { k: l.k, side: l.side || null, label: l.label, text: l.text, ctx: l.ctx }; }), setOut: w.setOut, camped: w.camped };
    ROAD.chapterProse(APP.D, P, tmp, { passages: true }).forEach(function (para) {
      if (para[0] && para[0].kind === "ours") { h += '<p class="ours">' + esc(para[0].text) + (para[1] ? '<cite>' + esc(para[1].text) + '</cite>' : "") + '</p>'; return; }
      h += '<p class="his prose-p">' + para.map(function (x) {
        if (x.kind === "bridge") return '<span class="bridge">' + esc(x.text) + '</span>';
        if (x.li == null || x.li < 0) return '<span class="stage">' + esc(x.text) + '</span>';
        return '<button class="pickline' + (w.aloud === x.li ? " on" : "") + '" data-aloud="' + x.li + '" aria-pressed="' + (w.aloud === x.li) + '">' + esc(x.text) + '</button>';
      }).join(" ") + '</p>';
    });
    if (ls.length) h += '<p class="quiet center">Tap one line to mark it as the one you will read aloud at group.</p>';
    if (m) {
      var leanTxt = m.lean === "formation" ? "Your answers lean toward the formation side of the road. The road opens next toward other men."
        : m.lean === "discipleship" ? "Your answers lean toward the discipleship side of the road. The road opens next toward time alone with God."
        : "Your answers sit close to the road on both sides. Keep walking.";
      h += '<div class="divide"></div><div class="road">' + markSVG(m) + '<p class="cap">' + leanTxt + '</p>' +
        '<p class="sub">This shows direction, never rank. We move from glory to glory, and the road is not straight.</p></div>';
      if (pt.picker) {
        var set = m.lean === "formation" ? ["service", "confession", "guidance", "celebration"] : m.lean === "discipleship" ? ["meditation", "prayer", "fasting", "study"] : ["prayer", "study", "confession", "service"];
        var lead = m.lean === "formation" ? "Disciplines that put a rooted faith to work:" : m.lean === "discipleship" ? "Disciplines that send roots down:" : "One discipline for each side of the road:";
        h += '<p class="ours left">' + lead + '</p><div class="words">' + set.map(function (s) { return '<button class="word' + (w.disc === s ? " pick" : "") + '" data-disc="' + s + '" aria-pressed="' + (w.disc === s) + '">' + s + '</button>'; }).join("") + '</div>' +
          (w.disc ? '<div class="field"><label for="t-disc">How will you practice ' + esc(w.disc) + ' before the next chapter?</label><input id="t-disc" data-w="discText" value="' + esc(w.discText) + '" placeholder="Saturday mornings at the food pantry with my son."></div>' : "");
      }
    } else h += '<p class="quiet center">' + (P < 1 ? "The map begins in your next chapter, once you say which way you lean." : P < 2 ? "The map appears once you say which way you lean, under the first statement." : "The map appears once there is a number on both sides of it.") + '</p>';
    return h + '<div class="row bar"><button class="btn main" data-wgo="story">Save</button><button class="btn" data-wgo="print">Print</button><button class="btn" data-wgo="all">Edit</button></div>' +
      '<p class="quiet">' + (window.AP_ROAD && window.AP_ROAD.course ? "Save puts this chapter on your page — yours to read, change or delete. Ancient Path reads only what you choose to publish." : window.AP_ROAD ? "Save puts this chapter on your page — yours to read, change or delete. Ancient Path reads only what you choose to publish. You’ll be asked to sign in the first time." : APP.stage === "me" ? "Save keeps this chapter with your Claude account, private to you, and adds it to your story." : "In this walk-through nothing is saved. Save puts the chapter into the sample story. In the course it puts the chapter on his page.") + '</p></div>';
  }

  function intoStory() {
    var D = APP.D, w = W(), pt = part(), ls = lines(), story = ls.slice();
    if (w.disc) story.push({ k: "disc", label: "The discipline I chose", text: w.disc.charAt(0).toUpperCase() + w.disc.slice(1) + "." + (w.discText.trim() ? " " + w.discText.trim() : "") });
    /* What goes into the story by default is the line that does this chapter's job, plus what he did. */
    var jobK = "q" + pt.job, job = story.some(function (l) { return l.k === jobK; }) ? jobK : (story.filter(function (l) { return l.k.charAt(0) === "q"; })[0] || {}).k;
    var ch = D.chapters[P];
    ch.lines = story.map(function (l) { return { k: l.k, side: l.side || null, label: l.label, text: l.text, first: l.text, ctx: l.ctx, ev: !!l.ev, grew: !!l.grew, pick: l.pick, pick2: l.pick2, charge: !!l.charge, on: l.k !== "feel" && l.k === job || l.k === "did" || l.k === "wit", between: l.k === job ? w.between.trim() : "" }; });
    ch.setOut = w.setOut; ch.camped = w.camped; ch.nums = w.n.slice(); ch.picks = Q().map(function (q, i) { return pickOf(i); });
    var m = markFor();
    if (APP.stage === "me") {
      D.marks = D.marks || []; D.marks[P] = m ? [m.x, m.y] : null; D.meCount = Math.max(D.meCount || 0, P + 1); D.trail = D.marks.filter(Boolean);
    } else { D.threeMark = m ? [m.x, m.y] : null; D.threeDone = true; }
    /* he sees the story grow: straight to the story so far, with this section in it */
    TELL.reset(); TELL.show(D, APP.stage, "read"); APP.go("tell"); APP.keep(); if (window.AP_ROAD_SITE) window.AP_ROAD_SITE.save();
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b || !document.getElementById("writer")) return;
    var a, w = W();
    if ((a = b.getAttribute("data-n"))) { a = a.split("-"); w.n[+a[0]] = w.n[+a[0]] === +a[1] ? null : +a[1]; if (w.mid) w.mid[+a[0]] = null; APP.render(true); }
    else if ((a = b.getAttribute("data-mid"))) { a = a.split("-"); w.mid = w.mid || []; w.mid[+a[0]] = a[1]; APP.render(true); }
    else if ((a = b.getAttribute("data-qop"))) { a = a.split("-"); var qq = part().Q[+a[0]], sd = qq[band(+a[0])] || qq.hi, op = sd.ops && sd.ops[+a[1]]; if (op) { w.t[+a[0]] = opening(sd, +a[1]); w.o[+a[0]] = +a[1]; APP.render(true); APP.keep(); var tq = document.getElementById("t-" + a[0]); if (tq) { tq.focus(); tq.setSelectionRange(tq.value.length, tq.value.length); } } }
    else if ((a = b.getAttribute("data-qop2"))) { a = a.split("-"); var q2 = part().Q[+a[0]], s2 = q2[band(+a[0])] || q2.hi, o2 = s2.ops2 && s2.ops2[+a[1]]; if (o2) { var cur = (w.t[+a[0]] || ""), prevOp = w.o2[+a[0]] != null ? opening2(s2, w.o2[+a[0]]) : ""; if (prevOp && cur.indexOf(prevOp) >= 0) w.t[+a[0]] = cur.replace(prevOp, opening2(s2, +a[1])); else { cur = cur.replace(/\s+$/, ""); w.t[+a[0]] = (cur ? cur + " " : "") + opening2(s2, +a[1]); } w.o2[+a[0]] = +a[1]; APP.render(true); APP.keep(); var t2 = document.getElementById("t-" + a[0]); if (t2) { t2.focus(); t2.setSelectionRange(t2.value.length, t2.value.length); } } }
    else if ((a = b.getAttribute("data-root"))) { w.root = w.root === a ? "" : a; APP.render(true); }
    else if ((a = b.getAttribute("data-feel"))) { w.feel = w.feel === a ? "" : a; w.feelOwn = ""; APP.render(true); }
    else if ((a = b.getAttribute("data-bop"))) { w.between = BETWEEN_OPS[+a].replace(/…\s*$/, ""); APP.render(true); var tb = document.getElementById("t-between"); if (tb) { tb.focus(); tb.setSelectionRange(tb.value.length, tb.value.length); } }
    else if ((a = b.getAttribute("data-disc"))) { w.disc = w.disc === a ? "" : a; APP.render(true); }
    else if ((a = b.getAttribute("data-aloud"))) { w.aloud = w.aloud === +a ? -1 : +a; APP.render(true); }
    else if ((a = b.getAttribute("data-wstep"))) { w.step = Math.max(0, +a); APP.render(); APP.keep(); }
    else if ((a = b.getAttribute("data-wgo"))) {
      if (a === "chapter") { w.view = "chapter"; w.all = false; APP.render(); APP.keep(); }
      else if (a === "all") { w.view = "steps"; w.all = true; APP.render(); }
      else if (a === "print") window.print();
      else if (a === "story") intoStory();
    }
  });
  document.addEventListener("input", function (e) {
    var t = e.target, w = W(); if (!document.getElementById("writer")) return;
    if (t.hasAttribute("data-t")) w.t[+t.getAttribute("data-t")] = t.value;
    else if (t.hasAttribute("data-w")) w[t.getAttribute("data-w")] = t.value;
    else if (t.hasAttribute("data-feelown")) { w.feelOwn = t.value; if (t.value) w.feel = ""; }
  });

  return { html: function () { return W().view === "chapter" ? chapterHTML() : stepsHTML(); }, open: function (p) { P = p; var w = W(); if (w.view === "chapter") { w.view = "steps"; w.all = true; } },
           get state() { return W(); }, get part() { return P; }, begun: function (p) { var x = ALL[p]; if (!x) return false; return (x.n || []).some(function (v) { return v; }) || (x.t || []).some(function (v) { return v && String(v).trim(); }) || !!(x.follow && x.follow.trim()); }, dump: function () { return ALL; }, load: function (o) { ALL = o || {}; }, clear: function () { ALL = {}; } };
})();

/* ---- road_tell.js ---- */
/* AP-ROAD-TELL-v1 · the story in prose, and a first reader. State lives in memory only.
   Two passes on everything the reader proposes: one reads and proposes, a second sees only the result and tries to break it.
   Page code then enforces what no instruction can be trusted to: quotes are his exact words, and no suggestion adds a word he did not write. */
var TELL = (function () {
  var T = null, ctl = null, carry = null;

  /* ---------- the house document: what a first reader is, and what it may never do ---------- */
  var HOUSE = [
    "You are \"a first reader\" for Ancient Path Biblical Coaching. A man has finished a formation course and is turning his own short answers into a story he may one day offer as testimony. You read the way a good listener in a men's group listens: you say what you heard, you ask one curious question at a time, you give no advice, you do not interpret him, and you never tell him what he is or what he feels.",
    "",
    "THE STORY STAYS HIS. Every fact, name, time, place and event comes from him. You never supply one, not even a small one (\"that spring\", \"years later\", \"at thirty\").",
    "",
    "A JOINING WORD IS A CLAIM ABOUT HIS LIFE. \"So\", \"because\", \"the same way\", \"ever since\", \"then\", \"by then\" each say that one thing caused, resembled or followed another. Never propose or imply such a link unless his own words already state it. When two sentences sit side by side and you cannot tell whether they are connected, ask him. Never bridge them for him.",
    "",
    "THE CHECKS. Read the whole story for context, then run these on the part you are given:",
    "0. exposes: a real person other than the writer who can be recognized (a name, or a role plus details) AND who is said to have done wrong, or whose private matter is told (an affair, an illness, a debt, a sin, a diagnosis). A person who is only mentioned is not exposed. Quote the sentence, leave \"question\" as an empty string and give no options: the page asks him, in its own fixed words, whether to keep it, change how the person is described, or remove it.",
    "1. belongs: a sentence about something different from the sentences around it. To find these, first say to yourself in two or three words what EACH sentence is about (work, money, his father, his son…). A sentence whose subject appears nowhere else in the part is a candidate even when it sounds like it fits the mood. Ask whether it is connected, and how, or where it belongs. Do not invent the connection, and do not skip this check because the sentences share a feeling.",
    "2. link: a joining word or phrase in his text that claims a cause, a likeness or an order his words do not support.",
    "3. half-said: something pointed at but never said (\"what my father said\", \"what happens in the car\", \"the thing I hid\"). A reader is left outside. For this check give exactly ONE option: the sentence opening that would let him say it in his own voice (\"What he said was…\", \"What happens in the car is…\"). The page adds his other two choices itself (say what it cost without repeating it; take the sentence out) and writes the question, so leave \"question\" as an empty string for this check.",
    "4. disagree: two statements that cannot both be true as written: who knew, who said what to whom, what came first, how long, how many. For every sentence about saying, hearing, telling or knowing, work out who was there and who therefore already knows; a thing said TO him is a thing the speaker knows he heard.",
    "5. stranger: a person, place or event that a reader who was not there cannot follow at its first mention.",
    "6. gap: a place where cause, cost or change is missing: what happened, what it cost him, what he did, what changed. Ask about HIM: what he did, felt, wanted, feared or chose.",
    "",
    "LIMITS. Never ask for more about what another person did wrong, or how he found it out; the story is about him, so ask what he did, felt, wanted or chose. Never ask for the details of harm done to him. Never ask him to write out a sin he has confessed or means to confess; ask what he did with it, what it cost, or who knows. If the text suggests that he or anyone else is in danger now, return no notes and set \"stop\" to true.",
    "",
    "QUESTIONS. One sentence. Plain words, second person. No church language, and never the word \"brother\". A question that contains its own answer is not a question. When a question is the one the whole story turns on, ask it and offer NO options: it is his to find.",
    "OPTIONS. Up to three sentence openings in his voice that he finishes himself, each ending with \"…\". They carry no facts: no names, numbers, times, places or events that are not already in his text."
  ].join("\n");

  var ASK_NOTES = [
    "YOUR TASK NOW: read the part marked PART TO READ and return notes on it.",
    "Reply with only a JSON object of this shape:",
    "{\"stop\": false, \"subjects\": [{\"starts\": \"first three words of the sentence\", \"about\": \"two or three words\"}], \"notes\": [{\"check\": \"exposes|belongs|link|half-said|disagree|stranger|gap\", \"quote\": \"one sentence copied character for character from the part\", \"question\": \"…\", \"options\": [\"…\"]}]}",
    "List \"subjects\" for every sentence in the part first; it is your working, and the page does not show it. Then at most four notes, the most important first. Importance runs in this order: exposes, disagree, link, belongs, half-said, then stranger and gap. Report every \"exposes\" you find, up to four, before anything else. He can ask again after he has worked on these. If the part already reads well, return fewer, or none. Each \"quote\" must be one whole sentence copied exactly from PART TO READ, so the page can find it."
  ].join("\n");

  var ASK_CHECK_NOTES = [
    "You are the second reader. You did not write these notes. Your job is to try to break each one, using the rules above.",
    "Reject a note if: its quote is not in the part; it tells him something about himself instead of asking; it asserts or implies a connection he did not state; it asks for the details of harm done to him or for a confession to be written out; its question contains its own answer; any option carries a fact that is not in his text; it is advice; it uses church language or the word \"brother\"; it asks for more about another person's wrongdoing; it marks as \"exposes\" a person who is only mentioned and not accused or made private; or it is simply wrong about what the text says (for example, it claims a contradiction that is not one).",
    "Reply with only a JSON object: {\"verdicts\": [{\"i\": 0, \"keep\": true, \"why\": \"a few words\"}]} with one verdict per note, in order."
  ].join("\n");

  var ASK_SMOOTH = [
    "YOUR TASK NOW: smooth the part marked PART TO READ so it reads clearly and flows. This is for clarity and flow, nothing else.",
    "You may: fix grammar, tense agreement and punctuation; split or join sentences; remove a repeated word; move a sentence only if no meaning changes.",
    "You may not: add any fact, detail, name, time or feeling; add a joining word that claims cause, likeness or order unless his own words already state that connection; change what he means; make it sound like a writer instead of like him. Keep his words. If the part already reads well, return it unchanged.",
    "Keep his paragraph breaks.",
    "Reply with only a JSON object: {\"stop\": false, \"text\": \"the whole part, smoothed\", \"changed\": [\"a few words on each change you made\"]}. If the text suggests that he or anyone else is in danger now, set \"stop\" to true and return an empty \"text\"."
  ].join("\n");

  var ASK_CHECK_SMOOTH = [
    "You are the second reader. You did not write the smoothed version. Compare it with his original and try to break it.",
    "Reject it if: it adds any fact, detail, name, time or feeling he did not write; it adds or keeps a joining word that claims a cause, likeness or order his words do not support; two statements in it cannot both be true; his meaning changed anywhere; or it no longer sounds like the same man.",
    "Reply with only a JSON object: {\"ok\": true, \"problems\": [\"exact words at fault, and why\"]}"
  ].join("\n");

  var ASK_HEARD = [
    "YOUR TASK NOW: read the whole story and return three things.",
    "\"heard\": at most sixty words, beginning \"A reader will hear\". Do not retell the story sentence by sentence. Say what a stranger would take this story to be about, what is different between its first sentence and its last, and the one thing a stranger still could not tell. Report only what is on the page. No praise, no verdict, no advice, no interpretation, and nothing about what he is.",
    "\"open\": anything from the six checks that still stands anywhere in the story, at most four, each with the exact sentence and one question.",
    "\"people\": every real person or named business other than the writer who appears in the story (not groups like \"three men\"), each with the way the story names them and the first sentence they appear in, copied exactly.",
    "Reply with only a JSON object: {\"stop\": false, \"heard\": \"…\", \"open\": [{\"check\": \"…\", \"quote\": \"…\", \"question\": \"…\"}], \"people\": [{\"who\": \"…\", \"quote\": \"…\"}]}"
  ].join("\n");

  var ASK_CHECK_HEARD = [
    "You are the second reader. You did not write this read-back. Try to break it.",
    "Reject the \"heard\" text if it says anything that is not on the page, praises or judges him, gives advice, interprets him, or says what he is. Reject an \"open\" item on the same grounds as any note: a quote not in the story, a question that tells instead of asks, an implied connection he did not state, a request for details of harm or a written confession, or a plain misreading.",
    "Reply with only a JSON object: {\"heardOk\": true, \"heardWhy\": \"a few words\", \"verdicts\": [{\"i\": 0, \"keep\": true, \"why\": \"a few words\"}]}"
  ].join("\n");

  var ASK_GAPS = [
    "YOUR TASK NOW: his sentences below are set side by side. That is a list, not yet a story. A story lives in what happened BETWEEN the sentences. For each gap between one numbered sentence and the next, write the one question whose answer, in his words, would carry a reader across.",
    "A good gap question: names what each of the two sentences is about, using his own words; asks how he got from the one to the other; and leaves room for the honest answer that they are not connected. Prefer a question whose answer is something that HAPPENED (a day, a place, something said or done, how long it took) over a question whose answer is an idea or a feeling word. Never state or hint at the connection yourself. The LIMITS and the rules for QUESTIONS and OPTIONS above all apply.",
    "Where he has already written something between two sentences, read it: if it carries a reader across, ask what is still missing from it, or return an empty question for that gap.",
    "Give two or three openings for each gap. His answer will sit between the two sentences, so every opening must lead a reader INTO the second sentence. Do not offer an opening that says the two are separate: the page gives him his own button for that (\"They are separate. Start a new paragraph here\"), and a sentence that comments on both lines reads backwards when it sits between them.",
    "Reply with only a JSON object: {\"stop\": false, \"gaps\": [{\"before\": 1, \"question\": \"…\", \"openings\": [\"…\"]}]} where \"before\" is the number of the sentence the gap comes before. One entry for every gap, in order."
  ].join("\n");

  var ASK_CHECK_GAPS = [
    "You are the second reader. You did not write these gap questions. Try to break each one, using the rules above.",
    "Reject a question if: it states, hints at or assumes the connection between the two sentences; it tells him something about himself; it asks for the details of harm done to him or for a confession to be written out; it contains its own answer; it misreads either sentence; it is advice; it uses church language or the word \"brother\"; or any opening carries a fact that is not in his text.",
    "Reply with only a JSON object: {\"verdicts\": [{\"i\": 0, \"keep\": true, \"why\": \"a few words\"}]} with one verdict per question, in order."
  ].join("\n");

  var HOUSE_OPENINGS = ["What happened next was…", "While that was going on, …", "Around the same time, …"];
  function lc(s) { s = String(s || ""); s = s.charAt(0).toLowerCase() + s.slice(1);
    return s.replace(/\bI have\b/g, "you have").replace(/\bI am\b/g, "you are").replace(/\bI\b/g, "you").replace(/\bmy\b/g, "your").replace(/\bme\b/g, "you"); }
  /* the question every gap has before any reader is asked: built from the labels over his two lines */
  function houseQ() { return "What happened between these two? Or are they separate things?"; }
  var TURN_Q = "You said the story turned here. What happened right before?";

  var HALF_Q = "A reader is left outside here. You can say it, say what it cost you without repeating it, or remove the sentence.";
  var EXPOSE_Q = "This names a real person, and someone who knows them could recognize them here. They may read this one day. Keep it, change how they are described, or remove the sentence.";
  var KIND = {
    "exposes": "A real person is named", "belongs": "Does this belong here?", "link": "A joining word that claims something", "half-said": "Half-said",
    "disagree": "These don’t agree", "stranger": "A reader hasn’t met this yet", "gap": "Something is missing here"
  };

  /* ---------- the draft: his kept lines, in order, as plain paragraphs. No joining words of ours. ---------- */
  function draft(d, stage) {
    var chs = ROAD.chapters(d, stage), parts = [];
    chs.forEach(function (ch, i) {
      var p = parts[ch.mv - 1] = parts[ch.mv - 1] || { name: d.movements[ch.mv], bits: [] };
      ROAD.onLines(ch).forEach(function (l) {
        /* what he did only makes sense beside what he said he would do, so his own earlier sentence comes with it */
        if (l.ctx && l.ctx.quote) p.bits.push({ label: "What I said I would do", text: l.ctx.quote.trim(), ch: i, between: "" });
        p.bits.push({ label: l.label, text: l.text.trim(), ch: i, between: l.between || "" });
      });
      d.bends.forEach(function (b) { if (b.at === i && b.text.trim()) p.bits.push({ label: "Where the road bent toward " + b.side, text: b.text.trim(), ch: i, between: b.between || "" }); });
    });
    var hd = ROAD.handed(d, stage);
    if (hd.length) { var hp = { name: ROAD.HANDED, bits: [] }; hd.forEach(function (l) { hp.bits.push({ label: l.label, text: l.text, ch: chs.length - 1, between: "" }); }); parts.push(hp); }
    if (ROAD.finished(d, stage) && d.tail.trim() && parts.length) parts[parts.length - 1].bits.push({ label: "Where I am camped today", text: "Today I am camped at " + d.tail.trim(), ch: chs.length - 1, between: "" });
    return parts.filter(Boolean).map(function (p) {
      var lines = p.bits.map(function (b) { return { label: b.label, text: b.text, ch: b.ch, out: false, answer: b.between, weekly: !!b.between, para: false, q: "", openings: null }; });
      var part = { name: p.name, lines: lines, together: false, text: "", first: "", notes: [], busy: "", err: "", smooth: null, thrown: "" };
      part.first = compose(part);
      return part;
    });
  }

  /* his lines, with whatever he has written between them. Nothing of ours goes in. */
  function compose(p) {
    var out = "";
    p.lines.forEach(function (l) {
      if (l.out) return;
      var a = (l.answer || "").trim(); if (a && !/[.!?”"]$/.test(a)) a += ".";
      var turn = T && T.shape && T.shape.turn && T.shape.turn === l.id;
      if (!out) { out = (a ? a + " " : "") + l.text; return; }
      out += (l.para || turn ? "\n\n" : " ") + (a ? a + " " : "") + l.text;
    });
    return out;
  }
  function textOf(p) { return p.together ? p.text : compose(p); }
  /* the gap that is open is the first one he has not answered; one question at a time */
  function gapIds() { var ids = [], seen = false; T.parts.forEach(function (p) { if (p.together) { seen = true; return; } p.lines.forEach(function (l) { if (l.out) return; if (seen) ids.push(l.id); seen = true; }); }); return ids; }
  function lineById(id) { var q = String(id).split("-"); return T.parts[+q[0]] && T.parts[+q[0]].lines[+q[1]]; }
  function firstOpen() { var ids = gapIds(); for (var n = 0; n < ids.length; n++) { var l = lineById(ids[n]); if (!(l.answer || "").trim() && !l.para && !l.skip) return ids[n]; } return ""; }
  /* the whole story in order: where it starts, the movements, where God was */
  function storyParts() {
    var out = [];
    if (T.shape.start.trim()) out.push({ name: "", text: T.shape.start.trim() });
    T.parts.forEach(function (p) { if (textOf(p).trim()) out.push({ name: p.name, text: textOf(p).trim() }); });
    if (T.shape.god.trim()) out.push({ name: "", text: T.shape.god.trim() });
    return out;
  }
  function prevShown(p, k) { for (var j = k - 1; j >= 0; j--) if (!p.lines[j].out) return j; return -1; }

  function start(d, stage) {
    if (!T || T.stage !== stage) {
      T = { stage: stage, parts: null, aside: [], view: "work", heard: null, heardBusy: "", heardErr: "", open: "", shape: { start: "", about: "", turn: "", god: "" }, moves: [] };
      T.parts = draft(d, stage);
      /* a new chapter must never cost him work he has already done on his story: carry it across */
      if (carry && carry.stage === stage) {
        T.shape = carry.shape; T.aside = [];
        T.parts = T.parts.map(function (np, i) {
          var op = carry.parts[i]; if (!op) return np;
          var base = function (p) { return p.lines.filter(function (l) { return l.label !== "What changed"; }).map(function (l) { return l.text; }).join("\u0001"); };
          if (base(op) === base(np)) { op.notes = []; op.busy = ""; op.err = ""; op.smooth = null; op.thrown = ""; return op; }
          np.lines.forEach(function (l) { var o = op.lines.filter(function (x) { return x.text === l.text; })[0]; if (o) { if ((o.answer || "").trim()) l.answer = o.answer; l.para = o.para; l.skip = o.skip; l.out = o.out; } });
          op.lines.forEach(function (o) { if (o.label !== "What changed") return; var at = -1; np.lines.forEach(function (l, k) { if (l.ch <= o.ch && l.label !== "Where I am camped today") at = k; }); np.lines.splice(at + 1, 0, o); });
          return np;
        });
      }
      carry = null;
      T.parts.forEach(function (p, i) { p.lines.forEach(function (l, k) { l.id = i + "-" + k; }); if (!p.together) p.first = compose(p); });
      var placed = {}; T.parts.forEach(function (p) { p.lines.forEach(function (l) { if (l.label === "What changed" && l.moveQ) placed[l.moveQ] = 1; }); });
      T.moves = ROAD.moves(d, stage).filter(function (m) { return !placed[m.question]; }).map(function (m) { return { at: m.at, question: m.question, answer: "", placed: false }; });
      T.open = firstOpen();
    }
    return T;
  }

  /* ---------- page-side guards ---------- */
  var SMALL = ("a an and the but or nor so yet for of to in on at by with from as is was were be been being am are it its this that these those there here he him his she her they them their we us our you your i me my mine not no never ever still even only also just then than when while where who whom whose which what how why if because since until after before into onto over under up down out off about again more most less very too had has have having do does did done would could should will can may might must").split(" ");
  function words(s) { return (String(s).toLowerCase().match(/[a-z’']+/g) || []).map(function (w) { return w.replace(/[’']s$/, "").replace(/[’']/g, ""); }); }
  function stem(w) { return w.replace(/(ing|ed|es|s|ly)$/, ""); }
  /* every word in a suggestion must already be his, or be one of the small words of the language */
  function added(original, suggestion) {
    var have = {}; words(original).forEach(function (w) { have[w] = 1; have[stem(w)] = 1; });
    var out = [];
    words(suggestion).forEach(function (w) { if (!have[w] && !have[stem(w)] && SMALL.indexOf(w) < 0 && out.indexOf(w) < 0) out.push(w); });
    return out;
  }
  /* an option may not carry a name or a number that is not already in his text */
  function optionClean(opt, text) {
    var t = String(opt), body = t.replace(/^[^A-Za-z]*[A-Za-z’']+/, "");      /* skip the first word, which is capitalised anyway */
    var caps = body.match(/\b[A-Z][a-z]+/g) || [], ok = true;
    caps.forEach(function (c) { if (c !== "I" && c !== "God" && text.indexOf(c) < 0) ok = false; });
    if (/\d/.test(t)) ok = false;
    return ok;
  }
  function has(text, quote) { return quote && text.indexOf(quote) >= 0; }

  /* ---------- asking ---------- */
  function whole() { return bridgedParts(APP.D).map(function (p) { return (p.name ? "[" + p.name + "]\n" : "") + p.text; }).join("\n\n"); }
  /* v18 · the first reader on the site goes through a relay that holds the key (AP-READER-RELAY, an Apps Script web app).
     READER_URL is the relay address compiled into this build; AP_ROAD.reader = a string overrides it, false turns the reader off. */
  var READER_URL = "https://script.google.com/macros/s/AKfycbwhyhcluoAKYVxUoKW6UnoN8Iab80DHLq_2snfTKu9i1gwSCkvBcH41HtNKFdlvGgkp/exec";
  function relayURL() { var c = window.AP_ROAD; if (!c) return ""; if (c.reader === false) return ""; if (typeof c.reader === "string" && c.reader) return c.reader; return READER_URL; }
  function canRead() { return !window.AP_ROAD || !!relayURL(); }
  function relay(url) {
    return { json: function (input, opts) {
      var sig = opts && opts.signal, who = ""; try { who = localStorage.getItem("apStoryOwner") || ""; } catch (e) {}
      /* text/plain keeps this a simple request: Apps Script answers no preflight */
      return fetch(url, { method: "POST", headers: { "Content-Type": "text/plain;charset=utf-8" }, body: JSON.stringify({ input: String(input || "").slice(0, 60000), id: who }), signal: sig, credentials: "omit" })
        .then(function (r) { return r.json(); }, function () { throw { code: "network" }; })
        .then(function (r) { if (!r || r.ok !== true) throw { code: (r && r.error) || "network" }; return r.data; });
    } };
  }
  function reader() {
    if (window.claude && window.claude.use) return window.claude.use("sample");
    var u = relayURL(); return Promise.resolve(u ? relay(u) : null);
  }
  function copyFor(e) {
    var c = e && e.code;
    if (c === "cancelled") return "";
    if (c === "not_granted" || c === "sampling_disabled" || c === "not_declared" || c === "capability_disabled" || c === "capability_removed") return "Claude isn’t allowed in this view. Your story is still here, and still yours to work on.";
    if (c === "rate_limited") return "Claude is busy, or you have reached your limit for now. Try again later.";
    if (c === "session_expired") return "You have been signed out. Sign in again, then ask.";
    if (c === "refused") return "Claude would not read this part as it is written.";
    if (c === "invalid_json" || c === "empty_completion") return "The answer came back unreadable, so it was thrown away. You can ask again.";
    return "Claude could not be reached just now. You can ask again.";
  }
  function stopped() { return { stop: true }; }

  function askNotes(i) {
    var p = T.parts[i]; p.err = ""; p.notes = []; p.busy = "Reading…"; p.stopped = false; APP.render(true);
    ctl = new AbortController(); var sig = ctl.signal;
    reader().then(function (sample) {
      if (!sample) { p.busy = ""; p.err = "Claude can’t be reached in this view."; APP.render(true); return; }
      var input = HOUSE + "\n\nTHE WHOLE STORY SO FAR:\n" + whole() + "\n\nPART TO READ: [" + p.name + "]\n" + p.text + "\n\n" + ASK_NOTES;
      return sample.json(input, { signal: sig, cache: false }).then(function (r) {
        if (r && r.stop) return stopped();
        var notes = ((r && r.notes) || []).filter(function (n) { return n && KIND[n.check] && (n.question || n.check === "half-said" || n.check === "exposes") && has(p.text, n.quote); }).slice(0, 4);
        notes.forEach(function (n) { if (n.check === "exposes") { n.question = EXPOSE_Q; n.options = []; } });
        notes.forEach(function (n) { if (n.check === "half-said") { n.question = HALF_Q; n.options = [String((n.options || [])[0] || "What happened was…"), "I won’t repeat it here. What it cost me was…", "Remove this sentence"]; } });
        if (!notes.length) return { notes: [] };
        p.busy = "Checking its own notes…"; APP.render(true);
        var check = HOUSE + "\n\nTHE WHOLE STORY SO FAR:\n" + whole() + "\n\nPART THE NOTES ARE ABOUT: [" + p.name + "]\n" + p.text + "\n\nTHE NOTES:\n" + JSON.stringify(notes) + "\n\n" + ASK_CHECK_NOTES;
        return sample.json(check, { signal: sig, cache: false }).then(function (v) {
          var keep = {}; ((v && v.verdicts) || []).forEach(function (x) { if (x && x.keep === true) keep[x.i] = 1; });
          var dropped = 0;
          notes = notes.filter(function (n, k) { if (!keep[k]) { dropped++; return false; } return true; });
          notes.forEach(function (n) { n.options = (n.options || []).filter(function (o) { return n.check === "half-said" || optionClean(o, p.text); }).slice(0, 3); n.answer = ""; });
          return { notes: notes, dropped: dropped };
        });
      }).then(function (res) {
        p.busy = "";
        if (res.stop) { p.stopped = true; }
        else { p.notes = res.notes; p.asked = true; p.dropped = res.dropped || 0; }
        APP.render(true);
      });
    }).catch(function (e) { p.busy = ""; p.err = copyFor(e); APP.render(true); });
  }

  function askGaps(i) {
    var p = T.parts[i]; p.err = ""; p.busy = "Reading your lines…"; p.stopped = false; APP.render(true);
    ctl = new AbortController(); var sig = ctl.signal;
    var shown = []; var before = lastShownId(i), bl = before && before.indexOf("whole") < 0 ? lineById(before) : null;
    if (bl) shown.push(bl);
    p.lines.forEach(function (l) { if (!l.out) shown.push(l); });
    if (shown.length < 2) { p.busy = ""; APP.render(true); return; }
    var numbered = shown.map(function (l, n) { return (n + 1) + ". " + l.text + ((l.answer || "").trim() && n > 0 ? "   [between this and the one before, he has already written: " + l.answer.trim() + "]" : ""); }).join("\n");
    reader().then(function (sample) {
      if (!sample) { p.busy = ""; p.err = "Claude can’t be reached in this view. The questions already between your lines still work."; APP.render(true); return; }
      var input = HOUSE + "\n\nTHE WHOLE STORY SO FAR:\n" + whole() + "\n\nHIS SENTENCES IN [" + p.name + "], NUMBERED:\n" + numbered + "\n\n" + ASK_GAPS;
      return sample.json(input, { signal: sig, cache: false }).then(function (r) {
        if (r && r.stop) { p.busy = ""; p.stopped = true; APP.render(true); return; }
        var gaps = ((r && r.gaps) || []).filter(function (g) { return g && String(g.question || "").trim() && g.before >= 2 && g.before <= shown.length; });
        if (!gaps.length) { p.busy = ""; p.err = "The answer came back unreadable, so it was thrown away. You can ask again."; APP.render(true); return; }
        p.busy = "Checking its own questions…"; APP.render(true);
        var check = HOUSE + "\n\nHIS SENTENCES IN [" + p.name + "], NUMBERED:\n" + numbered + "\n\nTHE GAP QUESTIONS:\n" + JSON.stringify(gaps) + "\n\n" + ASK_CHECK_GAPS;
        return sample.json(check, { signal: sig, cache: false }).then(function (v) {
          var keep = {}, dropped = 0; ((v && v.verdicts) || []).forEach(function (x) { if (x && x.keep === true) keep[x.i] = 1; });
          gaps.forEach(function (g, n) {
            if (!keep[n]) { dropped++; return; }
            var l = shown[g.before - 1], all = whole();
            l.q = String(g.question); l.qFor = shown[g.before - 2].id;
            l.openings = (g.openings || []).filter(function (o) { return optionClean(o, all); }).slice(0, 3);
          });
          p.busy = ""; p.gapsAsked = true; p.gapsDropped = dropped; APP.render(true);
        });
      });
    }).catch(function (e) { p.busy = ""; p.err = copyFor(e); APP.render(true); });
  }

  function askSmooth(i) {
    var p = T.parts[i]; p.err = ""; p.smooth = null; p.thrown = ""; p.busy = "Reading…"; APP.render(true);
    ctl = new AbortController(); var sig = ctl.signal;
    reader().then(function (sample) {
      if (!sample) { p.busy = ""; p.err = "Claude can’t be reached in this view."; APP.render(true); return; }
      var input = HOUSE + "\n\nTHE WHOLE STORY SO FAR:\n" + whole() + "\n\nPART TO READ: [" + p.name + "]\n" + p.text + "\n\n" + ASK_SMOOTH;
      return sample.json(input, { signal: sig, cache: false }).then(function (r) {
        if (r && r.stop) { p.busy = ""; p.stopped = true; APP.render(true); return; }
        var text = r && typeof r.text === "string" ? r.text.trim() : "";
        if (!text) { p.busy = ""; p.thrown = "The answer came back unreadable, so it was thrown away."; APP.render(true); return; }
        if (text === p.text.trim()) { p.busy = ""; p.thrown = "Read. Not a word needs to change."; APP.render(true); return; }
        var extra = added(p.text, text);
        if (extra.length) { p.busy = ""; p.thrown = "The suggestion used words you did not write (" + extra.slice(0, 6).join(", ") + "), so it was thrown away. Nothing was changed."; APP.render(true); return; }
        p.busy = "Checking its own suggestion…"; APP.render(true);
        var check = HOUSE + "\n\nHIS ORIGINAL:\n" + p.text + "\n\nTHE SMOOTHED VERSION:\n" + text + "\n\n" + ASK_CHECK_SMOOTH;
        return sample.json(check, { signal: sig, cache: false }).then(function (v) {
          p.busy = "";
          if (v && v.ok === true) p.smooth = { text: text, changed: (r.changed || []).slice(0, 6) };
          else p.thrown = "A second read found a problem with the suggestion" + (v && v.problems && v.problems[0] ? " (" + String(v.problems[0]).slice(0, 160) + ")" : "") + ", so it was thrown away. Nothing was changed.";
          APP.render(true);
        });
      });
    }).catch(function (e) { p.busy = ""; p.err = copyFor(e); APP.render(true); });
  }

  function askHeard() {
    T.heard = null; T.heardErr = ""; T.heardBusy = "Reading the whole story…"; APP.render(true);
    ctl = new AbortController(); var sig = ctl.signal, story = whole();
    reader().then(function (sample) {
      if (!sample) { T.heardBusy = ""; T.heardErr = "Claude can’t be reached in this view."; APP.render(true); return; }
      var about = T.shape.about.trim();
      return sample.json(HOUSE + "\n\nTHE WHOLE STORY:\n" + story + (about ? "\n\nHE SAYS THE STORY IS ABOUT: " + about + "\nAdd a fourth key, \"beside\": one sentence that sets what he says it is about beside what a stranger would take it to be about, without judging either and without advice." : "") + "\n\n" + ASK_HEARD, { signal: sig, cache: false }).then(function (r) {
        if (r && r.stop) { T.heardBusy = ""; T.heard = { stop: true }; APP.render(true); return; }
        var open = ((r && r.open) || []).filter(function (n) { return n && n.question && has(story, n.quote); }).slice(0, 4);
        var people = ((r && r.people) || []).filter(function (n) { return n && n.who && has(story, n.quote); });
        T.heardBusy = "Checking its own reading…"; APP.render(true);
        var check = HOUSE + "\n\nTHE WHOLE STORY:\n" + story + "\n\nTHE READ-BACK:\n" + JSON.stringify({ heard: String(r.heard || "") + (about && r.beside ? " " + r.beside : ""), open: open }) + "\n\n" + ASK_CHECK_HEARD;
        return sample.json(check, { signal: sig, cache: false }).then(function (v) {
          var keep = {}; ((v && v.verdicts) || []).forEach(function (x) { if (x && x.keep === true) keep[x.i] = 1; });
          T.heardBusy = "";
          T.heard = { about: about, beside: v && v.heardOk === true && about ? String(r.beside || "") : "", text: v && v.heardOk === true ? String(r.heard || "") : "", open: open.filter(function (n, k) { return keep[k]; }), people: people };
          APP.render(true);
        });
      });
    }).catch(function (e) { T.heardBusy = ""; T.heardErr = copyFor(e); APP.render(true); });
  }

  /* ---------- what he does with a note ---------- */
  function putIn(i, k) {
    var p = T.parts[i], n = p.notes[k], a = (n.answer || "").trim(); if (!a) return;
    if (!/[.!?”"]$/.test(a)) a += ".";
    var at = p.text.indexOf(n.quote);
    p.text = at < 0 ? p.text.trim() + " " + a : p.text.slice(0, at + n.quote.length) + " " + a + p.text.slice(at + n.quote.length);
    p.notes.splice(k, 1);
  }
  function takeOut(i, k) {
    var p = T.parts[i], n = p.notes[k], at = p.text.indexOf(n.quote);
    if (at >= 0) { p.text = (p.text.slice(0, at) + p.text.slice(at + n.quote.length)).replace(/ {2,}/g, " ").replace(/ +\n/g, "\n").trim(); T.aside.push({ from: i, text: n.quote }); }
    p.notes.splice(k, 1);
  }

  /* ---------- screens ---------- */
  function esc(s) { return APP.esc(s); }
  function rows(t) { return Math.max(6, Math.ceil(t.length / 62) + (t.match(/\n/g) || []).length + 1); }

  function noteHTML(n, i, k) {
    var id = i + "-" + k, half = n.check === "half-said";
    var h = '<article class="note"><div class="part">' + esc(KIND[n.check]) + '</div><p class="his quoted">' + esc(n.quote) + '</p><p class="ask">' + esc(n.question) + '</p>';
    if (n.check === "exposes") return h + '<p class="help">To change how they are described, edit the sentence in your writing space above.</p><div class="row"><button class="btn main" data-tell="leave" data-id="' + id + '">Keep</button><button class="btn" data-tell="out" data-id="' + id + '">Remove</button></div></article>';
    if (n.options && n.options.length) {
      h += '<div class="words">' + n.options.map(function (o, x) {
        var out = half && x === 2;
        return '<button class="word" ' + (out ? 'data-tell="out" data-id="' + id + '"' : 'data-tell="opt" data-id="' + id + '" data-x="' + x + '"') + '>' + esc(o) + '</button>';
      }).join("") + '</div>';
    } else h += '<p class="help">No openings offered for this one. It is yours to find.</p>';
    h += '<label class="sr" for="ans-' + id + '">Your answer</label><textarea id="ans-' + id + '" data-ans="' + id + '" rows="2" placeholder="In your own words. One sentence is enough.">' + esc(n.answer || "") + '</textarea>' +
      '<div class="row"><button class="btn main" data-tell="put" data-id="' + id + '">Add</button>' +
      (n.check === "belongs" || n.check === "link" ? '<button class="btn" data-tell="out" data-id="' + id + '">Remove</button>' : "") +
      '<button class="btn" data-tell="leave" data-id="' + id + '">Skip</button></div></article>';
    return h;
  }

  /* his lines with the gaps showing. One question is open at a time; an answered gap reads as part of the story. */
  function openingsFor(l, pv) { return l.q && l.qFor === pv && l.openings && l.openings.length ? l.openings : HOUSE_OPENINGS; }
  function gapHTML(p, i, l, k, pvId) {
    var id = l.id, turn = T.shape.turn === id, q = turn ? TURN_Q : (l.q && l.qFor === pvId ? l.q : houseQ()), a = (l.answer || "").trim();
    if (T.open !== id) {
      if (a) return '<p class="his bridge">' + esc(a) + ' <button class="link" data-tell="gopen" data-id="' + id + '">Edit</button></p>';
      return '<p class="gaprow"><button class="link" data-tell="gopen" data-id="' + id + '">' + (l.para ? "New paragraph. " : l.skip ? "Skipped. " : "") + 'What happened between these two?</button></p>';
    }
    return '<div class="gap" id="open-gap"><p class="ask small">' + esc(q) + '</p>' + (l.weekly ? '<p class="help">You wrote this after that week’s section.</p>' : "") +
      '<div class="words">' + openingsFor(l, pvId).map(function (o, x) { return '<button class="word" data-tell="gopt" data-id="' + id + '" data-x="' + x + '">' + esc(o) + '</button>'; }).join("") + '</div>' +
      '<label class="sr" for="gap-' + id + '">What happened between these two lines</label><textarea id="gap-' + id + '" data-gap="' + id + '" rows="3" placeholder="In your own words. Something that happened: a day, a place, something said or done.">' + esc(l.answer) + '</textarea>' +
      '<p class="help">On a phone you can press the microphone on your keyboard and say it.</p>' +
      '<div class="row"><button class="btn main" data-tell="gnext" data-id="' + id + '">Next</button><button class="btn" data-tell="gskip" data-id="' + id + '">Skip</button></div>' +
      '<p class="links"><button class="link" data-tell="para" data-id="' + id + '" aria-pressed="' + l.para + '">' + (l.para ? "Undo new paragraph" : "New paragraph") + '</button>' +
      '<button class="link" data-tell="lineout" data-id="' + id + '">Remove the next line</button></p></div>';
  }
  function prevIdOf(i, k) { var p = T.parts[i]; for (var j = k - 1; j >= 0; j--) if (!p.lines[j].out) return p.lines[j].id; return lastShownId(i); }
  function lastShownId(i) { for (var pi = i - 1; pi >= 0; pi--) { if (T.parts[pi].together) return "whole-" + pi; for (var k = T.parts[pi].lines.length - 1; k >= 0; k--) if (!T.parts[pi].lines[k].out) return T.parts[pi].lines[k].id; } return ""; }
  function betweenHTML(p, i) {
    var h = '<section class="tellpart"><div class="movement"><span>' + esc(p.name) + '</span></div>', pvId = lastShownId(i), open = 0, total = 0;
    p.lines.forEach(function (l, k) {
      if (l.out) return;
      if (pvId) { h += gapHTML(p, i, l, k, pvId); total++; if (!(l.answer || "").trim() && !l.para && !l.skip) open++; }
      pvId = l.id;
      h += '<p class="his mine"><span class="lead">' + esc(l.label) + '</span>' + esc(l.text) + '</p>';
    });
    if (p.busy) h += '<p class="say" role="status">' + esc(p.busy) + ' This can take up to a minute. <button class="link" data-tell="stop">Stop</button></p>';
    else h += '<p class="quiet">' + (open ? open + " of " + total + " still to answer in this part." : "Every gap in this part has an answer or a choice.") + '</p>' +
      '<div class="row"><button class="btn main" data-tell="together" data-id="' + i + '">Put it together</button>' + (canRead() ? '<button class="btn" data-tell="gaps" data-id="' + i + '">Better questions</button>' : "") + '</div>';
    if (p.err) h += '<p class="say">' + esc(p.err) + '</p>';
    if (p.stopped) h += '<p class="care">Claude stopped reading, because something here sounds like someone may be in danger now. If that is so, call 911, or call or text 988. Then tell one man you trust today.</p>';
    if (p.gapsAsked && !p.busy) h += '<p class="quiet">The questions between your lines are now about your own words.' + (p.gapsDropped ? " " + p.gapsDropped + " did not pass a second read and were thrown away. Those gaps keep the plain question." : "") + '</p>';
    return h + '</section>';
  }

  var MOVE_OPENINGS = ["What changed was…", "The day it shifted was…", "It did not happen all at once. …"];
  function movesHTML() {
    var live = T.moves.filter(function (m) { return !m.placed; }); if (!T.moves.length) return "";
    var h = '<div class="eyebrow" style="margin-top:26px">Where your answers moved</div><p class="fixed">Across the course you answered some statements differently than you had before. That is usually where the story is. You will not see numbers here, only what you said.</p>';
    T.moves.forEach(function (m, x) {
      if (m.placed) { h += '<p class="quiet">In your story, under ' + esc(T.parts[m.partIndex].name) + ': <i>' + esc(m.answer) + '</i></p>'; return; }
      h += '<article class="note"><p class="ask small">' + esc(m.question) + '</p><div class="words">' + MOVE_OPENINGS.map(function (o, y) { return '<button class="word" data-tell="mopt" data-id="' + x + '" data-x="' + y + '">' + esc(o) + '</button>'; }).join("") + '</div>' +
        '<label class="sr" for="mv-' + x + '">What happened between those two</label><textarea id="mv-' + x + '" data-mv="' + x + '" rows="3" placeholder="In your own words. Something that happened.">' + esc(m.answer) + '</textarea>' +
        '<div class="row"><button class="btn main" data-tell="mput" data-id="' + x + '">Add</button><button class="btn" data-tell="mleave" data-id="' + x + '">Skip</button></div></article>';
    });
    return h;
  }

  var SHAPE = [
    { k: "start", q: "Where does it start? A day and a place.", help: "This opens your story, before anything else.", ops: ["It starts on the day…", "It starts in…"] },
    { k: "about", q: "In one sentence, what is this story about?", help: (window.AP_ROAD && !window.AP_ROAD.reader) ? "This does not go in the story. It is for you, so you know what you are telling." : "This does not go in the story. When you press “Read it back”, you will see whether a stranger would say the same.", ops: ["This is the story of a man who…", "It is about the year I…"] },
    { k: "god", q: "Where was God in it, as you see it now?", help: "This closes your story.", ops: ["I did not see it then, but…", "Where I see Him now is…", "I still cannot say. What I know is…"] }
  ];
  function evidenceHTML() {
    var e = ROAD.evidence(APP.D, T.stage, null); if (!e.seen.length) return "";
    return '<p class="help" style="margin-top:12px">Your own evidence, from your chapters:</p>' + e.seen.map(function (x) { return '<div class="recall"><span>' + esc(x.part) + '</span><p>“' + esc(x.text) + '”</p></div>'; }).join("");
  }
  function shapeHTML() {
    var h = '<div class="divide"></div><h2>The shape of it</h2><p class="fixed">A testimony has a shape: where it starts, where it turned, where God was, and where you are now. Your last line already says where you are now.</p>';
    SHAPE.slice(0, 2).concat([null], SHAPE.slice(2)).forEach(function (f) {
      if (!f) {
        h += '<div class="field"><label for="sh-turn">Where did it turn? Pick the line.</label><select id="sh-turn" data-shturn="1"><option value="">Not chosen</option>';
        T.parts.forEach(function (p) { p.lines.forEach(function (l) { if (!l.out) h += '<option value="' + l.id + '"' + (T.shape.turn === l.id ? " selected" : "") + '>' + esc(l.text.length > 70 ? l.text.slice(0, 68) + "…" : l.text) + '</option>'; }); });
        h += '</select><p class="help">A new paragraph will start there, and the question before it will ask what happened right before.</p></div>'; return;
      }
      h += '<div class="field"><label for="sh-' + f.k + '">' + esc(f.q) + '</label><div class="words">' + f.ops.map(function (o, y) { return '<button class="word" data-tell="shopt" data-id="' + f.k + '" data-x="' + y + '">' + esc(o) + '</button>'; }).join("") + '</div>' +
        '<textarea id="sh-' + f.k + '" data-shape="' + f.k + '" rows="2">' + esc(T.shape[f.k]) + '</textarea><p class="help">' + esc(f.help) + '</p>' + (f.k === "god" ? evidenceHTML() : "") + '</div>';
    });
    return h;
  }

  function workHTML(d, stage) {
    start(d, stage);
    var h = '<div class="sheet" id="tell"><div class="eyebrow">Walk With Me · ' + esc(d.title) + '</div><h1>Your story</h1>' +
      '<p class="fixed">Your chapters are the record, and they stay as you wrote them. This is the story: one piece a stranger could read. Your kept lines set side by side are a list. The story is in what happened between them. So first, answer what sits between your lines. Then put it together and work on the whole.</p>' +
      (!canRead() ? "" : '<p class="care"><b>Four buttons send your story to Claude, an AI, to be read:</b> Better questions, Check it, Smooth it and Read it back. Nothing is sent until you press one. Claude asks; it does not write your story. Every fact in it stays yours. </p>');
    h += movesHTML();
    T.parts.forEach(function (p, i) {
      if (!p.together) { h += betweenHTML(p, i); return; }
      h += '<section class="tellpart"><div class="movement"><span>' + esc(p.name) + '</span></div>' +
        '<p class="quiet"><button class="link" data-tell="apart" data-id="' + i + '">Back to my lines</button></p>' +
        '<label class="sr" for="tp-' + i + '">' + esc(p.name) + '</label><textarea id="tp-' + i + '" class="prose" data-tp="' + i + '" rows="' + rows(p.text) + '">' + esc(p.text) + '</textarea>' +
        '<p class="orig" data-tfirst="' + i + '"' + (p.text !== p.first ? "" : " hidden") + '>You have changed this part. <button class="link" data-tell="reset" data-id="' + i + '">Undo changes</button></p>';
      if (p.text.trim().split(/\s+/).length < 60) h += '<p class="quiet">This part is short, and that is allowed. It grows in the questions between your lines.</p>';
      if (p.busy) h += '<p class="say" role="status">' + esc(p.busy) + ' This can take up to a minute. <button class="link" data-tell="stop">Stop</button></p>';
      else h += '<div class="row">' + (canRead() ? '<button class="btn main" data-tell="ask" data-id="' + i + '">Check it</button><button class="btn" data-tell="smooth" data-id="' + i + '">Smooth it</button>' : "") + '<button class="link" data-tell="clear" data-id="' + i + '">Clear</button></div>';
      if (p.err) h += '<p class="say">' + esc(p.err) + '</p>';
      if (p.stopped) h += '<p class="care">Claude stopped reading, because something here sounds like someone may be in danger now. If that is so, call 911, or call or text 988. Then tell one man you trust today.</p>';
      if (p.asked && !p.notes.length && !p.busy) h += '<p class="say">Nothing more to check in this part.' + (p.dropped ? " (" + p.dropped + " of the notes did not pass a second read and were thrown away.)" : "") + '</p>';
      else if (p.dropped && p.notes.length) h += '<p class="quiet">' + p.dropped + ' of the notes did not pass a second read and were thrown away.</p>';
      p.notes.forEach(function (n, k) { h += noteHTML(n, i, k); });
      if (p.thrown) h += '<p class="say">' + esc(p.thrown) + '</p>';
      if (p.smooth) h += '<article class="note"><div class="part">The same words, smoothed</div><p class="his">' + esc(p.smooth.text).replace(/\n\s*\n/g, "</p><p class=\"his\">") + '</p>' +
        (p.smooth.changed.length ? '<p class="help">What changed: ' + esc(p.smooth.changed.join(" · ")) + '</p>' : "") +
        '<div class="row"><button class="btn main" data-tell="use" data-id="' + i + '">Use this</button><button class="btn" data-tell="keep" data-id="' + i + '">Keep mine</button></div></article>';
      h += '</section>';
    });
    if (T.aside.length) {
      h += '<div class="divide"></div><div class="eyebrow">Set aside. Still yours.</div>';
      T.aside.forEach(function (a, x) { h += '<p class="orig"><i>' + esc(a.text) + '</i> <button class="link" data-tell="back" data-id="' + x + '">Undo</button></p>'; });
    }
    h += shapeHTML();
    h += '<div class="divide"></div><h2>Before you offer it</h2><p class="fixed">Hear what a stranger would hear, and see every person you have named.</p>';
    if (T.heardBusy) h += '<p class="say" role="status">' + esc(T.heardBusy) + ' This can take up to a minute. <button class="link" data-tell="stop">Stop</button></p>';
    else if (canRead()) h += '<div class="row"><button class="btn" data-tell="heard">Read it back</button></div>';
    if (T.heardErr) h += '<p class="say">' + esc(T.heardErr) + '</p>';
    if (T.heard && T.heard.stop) h += '<p class="care">Claude stopped reading, because something here sounds like someone may be in danger now. If that is so, call 911, or call or text 988. Then tell one man you trust today.</p>';
    else if (T.heard) {
      h += '<article class="note"><div class="part">What a reader will hear</div>' + (T.heard.text ? '<p class="his">' + esc(T.heard.text) + '</p>' : '<p class="help">The read-back did not pass a second read, so it was thrown away. You can ask again.</p>');
      if (T.heard.beside) h += '<p class="help">You said it is about: <i>' + esc(T.heard.about) + '</i></p><p class="his">' + esc(T.heard.beside) + '</p>';
      if (T.heard.open.length) { h += '<div class="part" style="margin-top:14px">Still open</div>'; T.heard.open.forEach(function (n) { h += '<p class="his quoted">' + esc(n.quote) + '</p><p class="ask small">' + esc(n.question) + '</p>'; }); }
      if (T.heard.people.length) {
        h += '<div class="part" style="margin-top:14px">The people you have named</div><p class="help">Each of them may read this one day. For each one: keep it, change how they are described, or take it out. You change it in the writing space above.</p>';
        T.heard.people.forEach(function (n) { h += '<p class="orig"><b>' + esc(n.who) + '</b> · <i>' + esc(n.quote) + '</i></p>'; });
      }
      h += '</article>';
    }
    h += '</div><div class="row bar"><button class="btn main" data-tell="read">Read</button><button class="btn" data-go="story">Chapters</button><button class="btn" data-go="page">Back</button></div><p id="say" class="say" hidden></p>';
    return h;
  }

  /* v22: the story reads chapter by chapter, each one his lines led in by the bridges (road_bridge.js); what he wrote between lines in the work view rides along */
  function betweenMap() { var m = {}; if (!T) return m; T.parts.forEach(function (p) { if (p.together) return; p.lines.forEach(function (l) { var a = (l.answer || "").trim(); if (a && !l.out) m[l.text] = a; }); }); return m; }
  function chapterBlocks(d) {
    var chs = ROAD.chapters(d, T.stage), between = betweenMap(), out = [];
    chs.forEach(function (ch, i) {
      var pt = typeof ROAD_PARTS !== "undefined" ? ROAD_PARTS[i] : null, paras = ROAD.chapterProse(d, i, ch, { passages: false });
      paras.forEach(function (para) { para.forEach(function (x) { if (x.kind === "his" && between[x.text]) { var a = between[x.text]; if (!/[.!?”"]$/.test(a)) a += "."; x.text = a + " " + x.text; } }); });
      d.bends.forEach(function (b) { if (b.at === i && b.text.trim()) paras.push([{ kind: "bridge", text: "Where the road bent toward " + b.side + ":" }, { kind: "his", text: b.text.trim(), li: -1 }]); });
      out.push({ i: i, mv: ch.mv, movement: d.movements[ch.mv], part: pt ? pt.part : ch.part, name: pt ? pt.name : ch.name, ours: pt ? pt.ours : "", paras: paras });
    });
    return out;
  }
  function bridgedParts(d) {
    var parts = chapterBlocks(d).map(function (c) { return { name: c.part + " · " + c.name, text: (c.ours ? c.ours + "\n\n" : "") + ROAD.proseText(c.paras) }; });
    var hd = ROAD.handed(d, T.stage);
    if (hd.length) parts.push({ name: ROAD.HANDED, text: hd.map(function (l) { return l.text; }).join("\n\n") });
    if (ROAD.finished(d, T.stage) && d.tail.trim()) parts.push({ name: "", text: "Today I am camped at " + d.tail.trim() });
    return parts;
  }
  function readHTML(d) {
    var h = '<div class="sheet" id="story-read"><div class="ch-head"><div class="eyebrow">Walk With Me</div><div class="t">' + esc(d.title) + '</div><div class="by">' + esc(d.byline) + " · " + esc(d.when) + '</div><div class="rule"></div></div>' +
      '<p class="ours">' + esc(d.opens) + '</p>';
    var written = ROAD.chapters(d, T.stage).length, all = d.chapters.length, lastMv = null;
    if (written < all) h += '<p class="quiet center">' + written + ' of ' + all + ' chapters written. Your story grows each time you finish one.</p>';
    chapterBlocks(d).forEach(function (c) {
      if (c.movement && c.movement !== lastMv) { h += '<div class="movement"><span>' + esc(c.movement) + '</span></div>'; lastMv = c.movement; }
      h += '<div class="part">' + esc(c.part + " · " + c.name) + '</div>' + (c.ours ? '<p class="ours">' + esc(c.ours) + '</p>' : "");
      c.paras.forEach(function (para) { h += '<p class="his prose-p">' + para.map(function (x) { return x.kind === "bridge" ? '<span class="bridge">' + esc(x.text) + '</span>' : esc(x.text); }).join(" ") + '</p>'; });
    });
    var hd = ROAD.handed(d, T.stage);
    if (hd.length) { h += '<div class="movement"><span>' + esc(ROAD.HANDED) + '</span></div>'; hd.forEach(function (l) { h += '<p class="his prose-p">' + esc(l.text) + '</p>'; }); }
    if (ROAD.finished(d, T.stage)) h += (d.tail.trim() ? '<p class="his prose-p">' + esc("Today I am camped at " + d.tail.trim()) + '</p>' : "") + '<p class="ours closing">' + esc(d.closes) + '</p>';
    var site = !!window.AP_ROAD, course = !!(window.AP_ROAD && window.AP_ROAD.course), next = written < all && typeof ROAD_PARTS !== "undefined" ? ROAD_PARTS[written] : null;
    h += '</div><div class="row bar">' +
      (next && site && !course && T.stage === "me" ? '<button class="btn main" data-do="pickup">Continue to ' + esc(next.part.toLowerCase().replace("part", "chapter")) + ' →</button>' : "") +
      '<button class="btn' + (next && site && !course && T.stage === "me" ? "" : " main") + '" data-tell="pdf">Download</button><button class="btn" data-tell="copy">Copy</button><button class="btn" data-tell="work">Edit</button><button class="btn" data-go="page">Back</button></div>' +
      (next && course ? '<p class="quiet">Your next chapter is ' + esc(next.part + " · " + next.name) + '. Go on to the next section with “next” at the top of this page.</p>' : "") +
      '<p id="say" class="say" hidden></p><textarea id="copybox" class="copybox" hidden readonly aria-label="The words of your story, to copy"></textarea>';
    return h;
  }

  function html(d, stage) { start(d, stage); return T.view === "read" ? readHTML(d) : workHTML(d, stage); }

  function storyText(d) {
    var out = [d.title, d.byline + " · " + d.when, ""];
    bridgedParts(d).forEach(function (p) { if (p.name) out.push("— " + p.name.toUpperCase() + " —", ""); out.push(p.text, ""); });
    out.push("Written in Walk With Me · Ancient Path Biblical Coaching");
    return out.join("\n");
  }

  function click(b) {
    var act = b.getAttribute("data-tell"); if (!act) return false;
    var id = b.getAttribute("data-id") || "", q = id.split("-"), i = +q[0], k = +q[1], p = T.parts[i], D = APP.D;
    if (act === "gaps") askGaps(i);
    else if (act === "together") { p.text = compose(p); p.first = p.text; p.together = true; p.notes = []; p.smooth = null; APP.render(true); var top = document.getElementById("tp-" + i); if (top) top.scrollIntoView({ block: "center" }); }
    else if (act === "apart") { p.together = false; p.notes = []; p.smooth = null; APP.render(true); }
    else if (act === "gopen") { T.open = id; APP.render(true); var og = document.getElementById("open-gap"); if (og) og.scrollIntoView({ block: "center" }); }
    else if (act === "gnext" || act === "gskip") { if (act === "gskip" && !(p.lines[k].answer || "").trim()) p.lines[k].skip = true; T.open = ""; T.open = firstOpen(); APP.render(true); var ng = document.getElementById("open-gap"); if (ng) ng.scrollIntoView({ block: "center" }); }
    else if (act === "mopt") { var mm = T.moves[i]; mm.answer = MOVE_OPENINGS[+b.getAttribute("data-x")].replace(/…\s*$/, ""); APP.render(true); var mb = document.getElementById("mv-" + i); if (mb) { mb.focus(); mb.setSelectionRange(mb.value.length, mb.value.length); } }
    else if (act === "mput") { placeMove(i); APP.render(true); }
    else if (act === "mleave") { T.moves.splice(i, 1); APP.render(true); }
    else if (act === "shopt") { var sf = SHAPE.filter(function (f) { return f.k === id; })[0]; T.shape[id] = sf.ops[+b.getAttribute("data-x")].replace(/…\s*$/, ""); APP.render(true); var sb = document.getElementById("sh-" + id); if (sb) { sb.focus(); sb.setSelectionRange(sb.value.length, sb.value.length); } }
    else if (act === "gopt") { var gl = p.lines[k], gops = openingsFor(gl, prevIdOf(i, k)), go = String(gops[+b.getAttribute("data-x")] || "").replace(/…\s*$/, "").replace(/\.\.\.\s*$/, ""); gl.answer = go + (/\s$/.test(go) ? "" : " "); APP.render(true); var gb = document.getElementById("gap-" + id); if (gb) { gb.focus(); gb.setSelectionRange(gb.value.length, gb.value.length); } }
    else if (act === "para") { p.lines[k].para = !p.lines[k].para; if (p.lines[k].para && T.open === id && !(p.lines[k].answer || "").trim()) T.open = firstOpen(); APP.render(true); }
    else if (act === "lineout") { p.lines[k].out = true; T.aside.push({ from: i, line: k, text: p.lines[k].text }); T.open = firstOpen(); APP.render(true); }
    else if (act === "ask") askNotes(i);
    else if (act === "smooth") askSmooth(i);
    else if (act === "heard") askHeard();
    else if (act === "stop") { if (ctl) ctl.abort(); T.parts.forEach(function (x) { x.busy = ""; }); T.heardBusy = ""; APP.render(true); }
    else if (act === "opt") { var n = p.notes[k], o = String(n.options[+b.getAttribute("data-x")] || "").replace(/…\s*$/, "").replace(/\.\.\.\s*$/, ""); n.answer = o + (/\s$/.test(o) ? "" : " "); APP.render(true); var box = document.getElementById("ans-" + id); if (box) { box.focus(); box.setSelectionRange(box.value.length, box.value.length); } }
    else if (act === "put") { putIn(i, k); APP.render(true); }
    else if (act === "out") { takeOut(i, k); APP.render(true); }
    else if (act === "leave") { p.notes.splice(k, 1); APP.render(true); }
    else if (act === "use") { p.text = p.smooth.text; p.smooth = null; APP.render(true); }
    else if (act === "keep") { p.smooth = null; APP.render(true); }
    else if (act === "reset") { p.text = p.first; p.notes = []; p.smooth = null; APP.render(true); }
    else if (act === "clear") { p.text = ""; p.notes = []; p.smooth = null; p.asked = false; APP.render(true); var ta = document.getElementById("tp-" + i); if (ta) ta.focus(); }
    else if (act === "back") { var a = T.aside.splice(i, 1)[0]; if (a) { if (a.line != null && !T.parts[a.from].together) T.parts[a.from].lines[a.line].out = false; else { if (a.line != null) T.parts[a.from].lines[a.line].out = false; T.parts[a.from].text = (T.parts[a.from].text.trim() + " " + a.text).trim(); } } APP.render(true); }
    else if (act === "read") { T.view = "read"; APP.render(); }
    else if (act === "work") { T.view = "work"; APP.render(); }
    else if (act === "copy") { var t = storyText(D), cb = document.getElementById("copybox");
      var fb = function () { cb.hidden = false; cb.value = t; cb.focus(); cb.select(); APP.say("Your words are selected below. Copy them from there."); };
      try { navigator.clipboard.writeText(t).then(function () { APP.say("Copied."); }, fb); } catch (e) { fb(); } }
    else if (act === "pdf") {
      APP.say("Preparing your PDF…");
      var use = window.claude && window.claude.use ? window.claude.use("downloads") : Promise.resolve(null);
      Promise.resolve(use).then(function (dl) {
        if (window.AP_ROAD && window.jspdf) { APP.saveFile(ROAD.pdf(window.jspdf.jsPDF, D, T.stage, bridgedParts(D)).output("blob"), "the-road-i-walked.pdf"); APP.say("Downloaded."); return; }
        if (!dl || !window.jspdf) { APP.say("Download is not available in this view."); return; }
        var blob = ROAD.pdf(window.jspdf.jsPDF, D, T.stage, bridgedParts(D)).output("blob");
        return dl.save({ filename: "the-road-i-walked.pdf", data: blob }).then(function () { APP.say("Downloaded."); });
      }).catch(function () { APP.say("The download did not work here."); });
    }
    return true;
  }

  /* his answer to a movement question becomes a line of his own, after the lines from the part it happened in */
  function placeMove(x) {
    var m = T.moves[x], a = (m.answer || "").trim(); if (!a) return;
    if (!/[.!?”"]$/.test(a)) a += ".";
    var pi = -1, at = -1;
    T.parts.forEach(function (p, i) { p.lines.forEach(function (l, k) { if (l.ch <= m.at && (l.label !== "Where I am camped today")) { pi = i; at = k; } }); });
    if (pi < 0) return;
    var p = T.parts[pi];
    if (p.together) p.text = p.text.trim() + " " + a;
    else { p.lines.splice(at + 1, 0, { label: "What changed", text: a, ch: m.at, moveQ: m.question, out: false, answer: "", para: false, skip: true, q: "", openings: null }); p.lines.forEach(function (l, k) { l.id = pi + "-" + k; }); }
    m.answer = a; m.placed = true; m.partIndex = pi; T.open = firstOpen();
  }

  function input(t) {
    if (t.hasAttribute("data-tp")) { var i = +t.getAttribute("data-tp"), p = T.parts[i]; p.text = t.value; var f = document.querySelector('[data-tfirst="' + i + '"]'); if (f) f.hidden = p.text === p.first; return true; }
    if (t.hasAttribute("data-mv")) { T.moves[+t.getAttribute("data-mv")].answer = t.value; return true; }
    if (t.hasAttribute("data-shape")) { T.shape[t.getAttribute("data-shape")] = t.value; return true; }
    if (t.hasAttribute("data-shturn")) { T.shape.turn = t.value; APP.render(true); return true; }
    if (t.hasAttribute("data-gap")) { var g = t.getAttribute("data-gap").split("-"); T.parts[+g[0]].lines[+g[1]].answer = t.value; return true; }
    if (t.hasAttribute("data-ans")) { var q = t.getAttribute("data-ans").split("-"); T.parts[+q[0]].notes[+q[1]].answer = t.value; return true; }
    return false;
  }

  return { html: html, click: click, input: input, draft: draft, compose: compose, houseQ: houseQ, added: added, optionClean: optionClean, reset: function () { carry = T; T = null; }, forget: function () { carry = null; T = null; }, dump: function () { return T; }, whole: function () { try { return T ? whole() : ""; } catch (e) { return ""; } }, load: function (o) { T = o || null; carry = null; if (T) { T.heardBusy = ""; T.parts.forEach(function (p) { p.busy = ""; }); } }, show: function (d, stage, view) { start(d, stage); T.view = view; },
           get state() { return T; }, prompts: { HOUSE: HOUSE, ASK_NOTES: ASK_NOTES, ASK_CHECK_NOTES: ASK_CHECK_NOTES, ASK_SMOOTH: ASK_SMOOTH, ASK_CHECK_SMOOTH: ASK_CHECK_SMOOTH, ASK_HEARD: ASK_HEARD, ASK_GAPS: ASK_GAPS, ASK_CHECK_GAPS: ASK_CHECK_GAPS, ASK_CHECK_HEARD: ASK_CHECK_HEARD } };
})();
if (typeof module !== "undefined") module.exports = TELL;

/* ---- road_site.js ---- */
/* AP-ROAD-SITE-v1 (v20: AP_ROAD_WHOLE / AP_ROAD_META hooks for a piece such as Where Are You?) · The Road I Walked on ancientpathcoaching.com.
   Only runs when the page sets window.AP_ROAD. Saves through the shared save (story.js: APStory._submit / latest / signedIn).
   Nothing is sent until he presses Save. The whole walk is one JSON document split evenly across the form's "walk" questions;
   the readable story goes in "whole"; where he is goes in "meta". */
(function () {
  var C = window.AP_ROAD; if (!C) return;
  var STASH = "apStoryPending:road", TTL = 30 * 60 * 1000;
  var lastSeen = "", blocked = false;
  var state = "idle", dirtyFlag = false, typed = false, savedOnce = false, note = "", t5 = null, bar = null;
  var W = {
    beneath: "Saving puts your story on your page, where you can read it, change it or delete it whenever you want. You will be asked to sign in — that is the only thing an account is for here.",
    beneathIn: "Saving puts your story on your page, where you can read it, change it or delete it whenever you want.",
    landed: "Saved to your page. Everything you write here will be waiting there.",
    unavailable: "Saving is not available right now. Your words are still on this page — use Copy and paste them somewhere safe before you close it.",
    owner: "You are signed in as a site owner. The site keeps an owner's answers only as a preview, so nothing was saved. Sign in as a learner to save.",
    ownerNote: "You are signed in as a site owner. You can write here, but the site keeps an owner's answers only as a preview, so Save will not keep anything. Sign in as a learner to save.",
    failed: function (why) { return "It did not save. " + why + " Your words are still here — nothing has been lost. Try again, or copy them before you close the page."; }
  };
  function api() { return window.APStory && window.APStory._submit && window.APStory.latest ? window.APStory : null; }
  /* a hint only: the site's own account record says when this is an owner or admin, whose form answers the site never keeps */
  function owner() { try { var m = window.me || (window.parent && window.parent.me); return !!(m && /admin/i.test(String(m.userRole || "") + String(m.parentRole || ""))); } catch (e) { return false; } }
  function signedIn() { try { return !!(api() && api().signedIn()); } catch (e) { return false; } }
  function stashSet(o) { try { window.localStorage.setItem(STASH, JSON.stringify({ t: Date.now(), a: o })); return true; } catch (e) { return false; } }
  function stashGet() { try { var r = JSON.parse(window.localStorage.getItem(STASH) || "null"); if (!r || !r.t || Date.now() - r.t > TTL) { stashClear(); return null; } return r.a || null; } catch (e) { return null; } }
  function stashClear() { try { window.localStorage.removeItem(STASH); } catch (e) {} }

  function pack(snap) {
    /* His walk travels as plain letters and digits only (base64url of the JSON), so nothing between here and the form can trim it,
       collapse its spaces, or read any of it as markup. First live failure, Sept 19: what came back did not match what was sent. */
    var json = "b64." + b64(JSON.stringify(snap));
    var ids = C.lw.blocks.walk, n = ids.length, size = Math.ceil(json.length / n) || 1, out = [], i, from = 0, to;
    for (i = 0; i < n; i++) {
      to = i === n - 1 ? json.length : Math.min(json.length, Math.max(from, (i + 1) * size));
      /* never cut beside a space: a form that trims an answer would lose it */
      while (to < json.length && (/\s/.test(json.charAt(to)) || /\s/.test(json.charAt(to - 1)))) to++;
      out.push({ blockId: ids[i], value: json.slice(from, to) || "-" }); from = to;
    }
    var done = (snap.me && snap.me.meCount) || 0, text = "";
    try { text = window.AP_ROAD_WHOLE ? window.AP_ROAD_WHOLE() : ((typeof TELL !== "undefined" && TELL.whole && TELL.whole()) || ROAD.text(APP.D, "me")); } catch (e) { text = ""; }
    /* his page shows the first two lines of "whole" and skips a short first paragraph in capitals: movement names go in that form */
    text = String(text || "").replace(/^\[([^\]\n]{1,60})\]\n/gm, function (m, name) { return name.toUpperCase() + "\n\n"; });
    if (C.lw.blocks.whole) out.push({ blockId: C.lw.blocks.whole, value: text || " " });
    if (C.lw.blocks.meta) out.push({ blockId: C.lw.blocks.meta, value: JSON.stringify(window.AP_ROAD_META ? window.AP_ROAD_META() : { step: Math.min(done, 9), part: done, of: 10, finished: done >= 10, when: new Date().toISOString() }) });
    return { answers: out, json: json };
  }
  function b64(str) { return window.btoa(unescape(encodeURIComponent(str))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); }
  function unb64(str) { str = str.replace(/-/g, "+").replace(/_/g, "/"); while (str.length % 4) str += "="; return decodeURIComponent(escape(window.atob(str))); }
  function joined(answers) { return C.lw.blocks.walk.map(function (id) { var v = answers[id] || ""; return v === "-" ? "" : v; }).join(""); }
  function unpack(answers) {
    var s = joined(answers);
    if (!s) return null;
    lastSeen = s;
    return JSON.parse(s.indexOf("b64.") === 0 ? unb64(s.slice(4)) : s);
  }

  function set(s, n) { state = s; if (n !== undefined) note = n; paint(); }
  function paint() {
    if (!bar) return;
    var label = state === "saving" ? "Saving" : state === "still" ? "Still saving" : (state === "saved" && !dirtyFlag) ? "Saved" : "Save";
    var onChapter = !!document.querySelector('#ap-road-app [data-wgo="story"]');
    var btn = bar.querySelector("button"), nt = bar.querySelector(".savenote"), be = bar.querySelector(".savebeneath");
    btn.textContent = label; btn.disabled = state === "saving" || state === "still"; btn.hidden = onChapter && state !== "saving" && state !== "still";
    nt.textContent = note || (typed && savedOnce ? "You have written something that is not saved yet." : ""); nt.hidden = !nt.textContent;
    be.hidden = savedOnce || onChapter;
    var link = bar.querySelector(".savelink"); link.hidden = !(state === "saved" && !dirtyFlag);
    /* inside a course section the card stands alone: no Save bar under it unless something is waiting to be saved or said */
    if (C.course) bar.hidden = !!document.querySelector("#ap-road-app .coursecard") && !dirtyFlag && !typed && !note;
  }
  function openSignIn() {
    try { if (window.l_settings && typeof window.l_settings === "object") window.l_settings.redirectUrl = window.location.pathname + window.location.search; } catch (e) {}
    var el = C.signInSelector ? document.querySelector(C.signInSelector) : null;
    if (el) { el.click(); set("idle", "Sign in, and you will come straight back here. Your words are held on this device for the next half hour."); }
    else set("idle", "Sign in from the top of this page, then come back here and press Save. Your words are held on this device for the next half hour.");
  }
  function save() {
    if (state === "saving" || state === "still") return;
    /* his saved words did not load: a save now would write an empty road over them */
    if (blocked) { set("idle", "Your saved words have not loaded yet, so nothing can be saved over them. Reload the page. What you have typed here is still on the screen: copy it first if you want to keep it."); return; }
    if (!api()) { set("idle", W.unavailable); return; }
    var snap = APP.snapshot();
    if (!signedIn()) { if (!stashSet(snap)) { set("idle", W.unavailable); return; } typed = false; /* his words are held on this device; no "leave this page?" box on the way to sign in */ openSignIn(); return; }
    var p = pack(snap);
    set("saving", ""); clearTimeout(t5); t5 = setTimeout(function () { if (state === "saving") set("still"); }, 5000);
    /* The site confirms the save itself (_submit rejects unless it answers "submitted"). Then read it back. The read can lag a moment
       behind the save, so look up to four times; an older save coming back is lag, not loss. Anything else is a real mismatch, and
       the message carries where it differed so it can be reported. */
    var before = lastSeen;
    function readBack(tries) {
      return api().latest(C.lw.unit).then(function (latest) {
        var back = latest && latest.answers ? joined(latest.answers) : "";
        if (back === p.json) return "match";
        if (tries > 0) return new Promise(function (ok) { setTimeout(ok, 1500); }).then(function () { return readBack(tries - 1); });
        if (!back) { var e0 = new Error(owner() ? W.owner : "The site accepted it but kept nothing."); e0.plain = true; throw e0; }
        if (back === before) { var e1 = new Error("The site took your save but has not shown it back yet, so it cannot be confirmed. Wait a minute, then press Save again."); e1.plain = true; throw e1; }
        var k = 0; while (k < back.length && k < p.json.length && back.charAt(k) === p.json.charAt(k)) k++;
        var e = new Error("What came back did not match what was sent (sent " + p.json.length + ", back " + back.length + ", differs at " + k + ")."); e.plain = true; throw e;
      });
    }
    api()._submit(C.lw.unit, p.answers).then(function () { return readBack(3); }).then(function () {
      clearTimeout(t5); stashClear(); lastSeen = p.json; savedOnce = true; dirtyFlag = false; typed = false; set("saved", W.landed);
    }).catch(function (e) {
      clearTimeout(t5);
      set("idle", W.failed(e && e.plain ? e.message : e && e.serviceError ? "The site did not confirm it." : "The connection dropped or the site did not answer."));
    });
  }
  function load(restore) {
    mountBar();
    var done = function () {
      var q = window.location.search, m = /[?&]part=(\d+)/.exec(q), n = (APP.D && APP.D.meCount) || 0;
      /* a link from a course section, or "Pick up" from his page, opens his NEXT unwritten chapter: never one already written, never one ahead */
      var under = typeof WRITER !== "undefined" && WRITER.begun && WRITER.begun(n);
      if (!C.piece && !C.course && (m || (/[?&]open=/.test(q) && (n || under)))) { if (n < 10) APP.openPart(n); else { try { TELL.show(APP.D, "me", "read"); APP.go("tell"); } catch (e) {} } }
      paint();
    };
    var pending = stashGet();
    if (!api()) { if (pending) restore(pending); set("idle", W.unavailable); done(); return; }
    if (!signedIn()) { if (pending) { restore(pending); dirtyFlag = true; } done(); return; }
    if (pending) { restore(pending); done(); save(); return; }
    if (owner()) note = W.ownerNote;
    api().latest(C.lw.unit).then(function (latest) {
      var snap = null;
      try { snap = latest && latest.answers ? unpack(latest.answers) : null; }
      catch (e) { note = "Your last save could not be read, so this page is starting fresh. If you save here, it replaces that save."; return; }
      if (snap) { restore(snap); savedOnce = true; state = "saved"; }
    }).catch(function () { blocked = true; note = "Your saved words could not be loaded just now. Reload the page before you write. Nothing can be saved until they load, so nothing is written over."; }).then(done);
  }
  function mountBar() {
    if (bar) return;
    var host = document.getElementById("ap-road"); if (!host) return;
    bar = document.createElement("div"); bar.className = "savebar";
    bar.innerHTML = '<div class="row"><button class="btn main" data-site="save">Save</button><a class="link savelink" hidden></a></div><p class="say savenote" role="status" hidden></p><p class="quiet savebeneath"></p>';
    bar.querySelector(".savebeneath").textContent = C.course && signedIn() ? W.beneathIn : W.beneath;
    var a = bar.querySelector(".savelink"); a.textContent = C.pageLabel || "Go to your page"; a.href = C.pagePath || "/start"; if (C.course) { a.target = "_blank"; a.rel = "noopener"; }
    host.appendChild(bar);
    bar.addEventListener("click", function (e) { var b = e.target.closest("[data-site=save]"); if (b) save(); });
    /* the browser's own "leave this page?" box only when he has typed words that are not saved; never for moving between steps */
    host.addEventListener("input", function (e) { var t = e.target; if (t && (t.tagName === "TEXTAREA" || t.tagName === "INPUT")) { typed = true; if (state === "saved") { note = ""; } paint(); } });
    window.addEventListener("beforeunload", function (e) { if (typed && state !== "saving" && state !== "still") { e.preventDefault(); e.returnValue = ""; } });
  }
  window.AP_ROAD_SITE = {
    load: load, save: save, paint: paint,
    dirty: function () { dirtyFlag = true; if (state === "saved") note = ""; paint(); },
    erased: function () { stashClear(); typed = false; if (savedOnce && signedIn()) save(); else { dirtyFlag = false; paint(); } },
    _pack: pack, _unpack: unpack
  };
})();

/* ---- road_where.js ---- */
/* AP-WHERE-v1 · Where Are You? · the free Story Path piece drawn from Walk With Me's map.
   Runs only when the page sets window.AP_ROAD.piece === "where". Everything a man reads about the map is the course's own wording.
   He places his own X: two marks, one to five, and the map draws where they meet. Nobody places it for him. */
var WHERE = (function () {
  var C = window.AP_ROAD || null;
  if (!C || C.piece !== "where") return null;
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
  var FEEL = ["exposed", "relieved", "afraid", "angry", "sad", "ashamed", "hopeful", "grateful", "numb"];
  var BODY = ["chest", "gut", "throat", "shoulders", "hands", "jaw", "nowhere yet"];
  var AWAY = ["a conversation I keep putting off", "a habit I have stopped fighting", "a man I owe an answer", "the quiet, honestly", "God, honestly"];
  var STEPS = ["one honest hour with one man this week", "time alone with Him before the day starts", "the conversation I have been avoiding", "asking somebody to stay for a meal"];
  /* the four stops on the line and the two corners, in the course's words */
  var STOP = [
    { name: "planted", gloss: "Planted is not a verdict, and it is not a rank. It is a place on the way.", who: "Abraham", line: "Abram left his father's house and the river behind on a word from God, the first Ivri." },
    { name: "forming", gloss: "There is a season for the shears and a season for the fruit, and the Vinedresser has never once confused them.", who: "Jacob at Peniel", line: "He wrestles all night, sees Elohim, the Judge, face to face, and walks away limping and alive with a new name: Israel." },
    { name: "growing", gloss: "Grow in one and you are growing in all of them.", who: "Joseph", line: "Joseph reads his own story in the names: you meant evil; Elohim meant it for good." },
    { name: "the mature orchard", gloss: "The mature orchard at the far end, where nobody is needy because the trees are laden.", who: "David", line: "He steps into the verdict himself: let Your hand be against me. Intercession is a king taking the blow." }
  ];
  var CORNER = {
    formation: { name: "Aging Fruit", gloss: "Aging Fruit is the man whose inner life grows while no one is fed by it.", lean: "people", why: "If your mark sits high on the left, rich inside and thin in company, the next step is toward people." },
    discipleship: { name: "Limited Fruit", gloss: "Limited Fruit is the man who is busy for God and thin inside.", lean: "time alone with Him", why: "If it sits low on the right, busy for God and thin inside, the next step is toward time alone with Him." }
  };
  var LEANS = ["people", "time alone with Him", "the next stop up the line"];
  var SCRIPT = {
    q: { t: "But the LORD God called to the man and said to him, “Where are you?”", ref: "Genesis 3:9" },
    walk: { t: "And they heard the sound of the LORD God walking in the garden in the cool of the day, and the man and his wife hid themselves from the presence of the LORD God among the trees of the garden.", ref: "Genesis 3:8" },
    near: { t: "While they were talking and discussing together, Jesus himself drew near and went with them.", ref: "Luke 24:15" },
    stand: { t: "Stand by the roads, and look, and ask for the ancient paths, where the good way is; and walk in it, and find rest for your souls.", ref: "Jeremiah 6:16" }
  };
  var MAP_WORDS = "Now I want to hand you a map. Not a program, not a performance review. A map. Two axes. The vertical one is spiritual formation, the inward work: is your mind being renewed, your heart being changed, your interior life deepening with God? The horizontal one is discipleship, the outward walk: are you growing in relationship, in community, in service, in sharing your faith with actual people?";
  var STAND_WORDS = "Do not read this as a chart. Stand in it. Where those two axes cross is not a data point; it is a crossroads, and you are the man standing at it. Nobody is grading this.";
  var PLACE_WORDS = "Low and honest beats high and flattering; the map only works if it is true.";

  function blank() { return { v: 1, piece: "where", step: 0, finished: false, away: "", awayPick: null, feel: "", feelOwn: "", body: "", F: null, D: null, watch: "", story: "", standing: "", lean: "", step1: "", stepPick: null, going: "", byline: "Your name", when: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }) }; }
  var A = blank(), screen = "steps", app = document.getElementById("ap-road-app"), sayText = "";
  var ORDER = ["intro", "away", "feel", "map", "standing", "step", "going"];

  /* ---------- the mark: the course's own placing, reused ---------- */
  function mark() { return (A.F && A.D) ? ROAD.markFD(A.F, A.D) : null; }
  function stopOf(m) { if (!m) return null; var k = Math.min(3, Math.max(0, Math.round(m.t * 3))); return STOP[k]; }
  function cornerOf(m) { return m && m.lean !== "road" ? CORNER[m.lean] : null; }
  function suggestedLean(m) { var c = cornerOf(m); if (c) return c.lean; return LEANS[2]; }
  function whereLine(m) {
    if (!m) return "";
    var s = stopOf(m), c = cornerOf(m);
    return c ? "near " + s.name + ", leaning into the " + c.name + " corner" : "near " + s.name + ", on the line";
  }
  function mapSVG(m) {
    var F = 'font-family="Source Sans 3, Arial, sans-serif"', FS = 'font-family="Source Serif 4, Georgia, serif" font-size="19" font-style="italic" fill="#8C6A3F"';
    var stops = [0, 1 / 3, 2 / 3, 1].map(function (t) { return ROAD.roadPt ? ROAD.roadPt(t) : null; });
    return '<svg viewBox="0 0 600 500" role="img" aria-label="The map: formation up the side, discipleship along the bottom, the road from planted to the mature orchard' + (m ? ", and your X " + esc(whereLine(m)) : "") + '.">' +
      '<rect width="600" height="500" fill="#FFFFFF"/><line x1="70" y1="440" x2="572" y2="440" stroke="#1F2A44" stroke-width="2"/><line x1="70" y1="440" x2="70" y2="44" stroke="#1F2A44" stroke-width="2"/>' +
      '<text x="321" y="478" text-anchor="middle" ' + F + ' font-size="17" font-weight="700" letter-spacing="2" fill="#1F2A44">DISCIPLESHIP</text>' +
      '<text transform="translate(40,242) rotate(-90)" text-anchor="middle" ' + F + ' font-size="17" font-weight="700" letter-spacing="2" fill="#1F2A44">FORMATION</text>' +
      '<text x="88" y="76" ' + FS + '>Aging Fruit</text><text x="560" y="424" text-anchor="end" ' + FS + '>Limited Fruit</text><text x="560" y="62" text-anchor="end" ' + FS + '>Mature Orchard</text>' +
      '<path d="M120,405 C250,400 370,140 525,95" fill="none" stroke="#1F2A44" stroke-opacity=".28" stroke-width="2" stroke-dasharray="6 7"/>' +
      stops.map(function (p, i) { return p && i < 3 ? '<circle cx="' + p[0].toFixed(1) + '" cy="' + p[1].toFixed(1) + '" r="4" fill="#1F2A44" fill-opacity=".5"/><text x="' + (p[0] + (i === 3 ? -10 : 10)).toFixed(1) + '" y="' + (p[1] + (i === 0 ? 24 : i === 3 ? 26 : -12)).toFixed(1) + '" ' + (i === 3 ? 'text-anchor="end" ' : "") + F + ' font-size="13" fill="#6B6358">' + esc(STOP[i].name.replace(/^the /, "")) + '</text>' : ""; }).join("") +
      (m ? '<circle cx="' + m.x + '" cy="' + m.y + '" r="52" fill="#C9A227" fill-opacity=".28"/><circle cx="' + m.x + '" cy="' + m.y + '" r="9" fill="#C9A227" stroke="#1F2A44" stroke-width="2.5"/><text x="' + (m.x + 16) + '" y="' + (m.y + 6) + '" ' + F + ' font-size="15.5" font-weight="700" fill="#1F2A44">today</text>' : "") +
      '</svg>';
  }

  /* ---------- the steps ---------- */
  function scale(key, label, ask, help) {
    var v = A[key], h = '<section class="wq"><p class="q">' + esc(label) + '</p><p class="help">' + esc(ask) + (help ? " " + esc(help) : "") + '</p><div class="scale" role="group" aria-label="' + esc(label) + '">';
    for (var i = 1; i <= 5; i++) h += '<button type="button" class="dot' + (v === i ? " on" : "") + '" data-scale="' + key + '" data-n="' + i + '" aria-pressed="' + (v === i) + '">' + i + '</button>';
    return h + '</div><div class="ends"><span>Not yet</span><span>True of me</span></div></section>';
  }
  function taps(key, words, cur) { return '<div class="words">' + words.map(function (w, i) { return '<button type="button" class="word' + (cur === i ? " pick" : "") + '" data-tap="' + key + '" data-i="' + i + '" aria-pressed="' + (cur === i) + '">' + esc(w) + '</button>'; }).join("") + '</div>'; }
  function box(key, stem, val, rows) { return '<label class="ask" for="w-' + key + '">' + esc(stem) + '</label><textarea id="w-' + key + '" data-w="' + key + '" rows="' + (rows || 3) + '">' + esc(val) + '</textarea>'; }
  function verse(v) { return '<p class="verse">' + esc(v.t) + ' <cite class="ref">' + esc(v.ref) + ' ESV</cite></p>'; }
  function keepLine() { return '<p class="fixed"><b>Nothing you write here reaches us unless you choose to save it with us. Everything else stays on your device.</b></p>'; }

  function intro() {
    return '<p class="fixed">The first question God ever asked a man was asked to a man hiding. It was not an accusation. He already knew where Adam was. He was asking him to come out of the trees, and He was already walking toward him when He asked.</p>' + verse(SCRIPT.walk) + verse(SCRIPT.q) +
      '<p class="fixed">This is that question, asked to you, today. Fifteen minutes. You will say what you are walking away from, put your own X on a map, and choose one step. Nobody places the X for you, and nobody grades it.</p>' + keepLine() +
      '<div class="row bar"><button class="btn main" data-go="1">Begin</button></div>';
  }
  function away() {
    return '<p class="fixed">Adam hid among the trees. Every man has a place he goes to not be seen. Name yours, plainly. Something a man could picture.</p>' +
      box("away", "What I am walking away from right now is", A.away, 3) + taps("away", AWAY, A.awayPick) +
      '<p class="quiet">Tap one to start the line, or write your own. Roles, never names, if another person is in it.</p>';
  }
  function feel() {
    return '<p class="fixed">Before you go on, one word for what that costs you, and where it sits. Not what you think about it. What you feel, and where in your body it lives right now.</p>' +
      '<p class="ask">The word for it is</p>' + taps("feel", FEEL, FEEL.indexOf(A.feel)) + '<input type="text" data-w="feelOwn" value="' + esc(A.feelOwn) + '" placeholder="or your own word" aria-label="Your own word">' +
      '<p class="ask">and it sits in my</p>' + taps("body", BODY, BODY.indexOf(A.body));
  }
  function map() {
    var m = mark(), s = stopOf(m), c = cornerOf(m);
    return '<p class="fixed">' + esc(MAP_WORDS) + '</p><p class="fixed">' + esc(STAND_WORDS) + '</p><p class="quiet">' + esc(PLACE_WORDS) + '</p>' +
      scale("F", "How is it, really, between you and Jesus when no one is watching?", "Formation, the inward walk. One is not yet; five is true of me.") +
      box("watch", "When no one is watching, it is really", A.watch, 2) +
      scale("D", "Who actually walks with you, who knows your story, who do you serve?", "Discipleship, the outward walk. One is not yet; five is true of me.") +
      box("story", "The men who know my story are", A.story, 2) +
      '<div class="map">' + mapSVG(m) + '</div>' +
      (m ? '<p class="fixed">Your X is ' + esc(whereLine(m)) + '. <i>' + esc(s.gloss) + '</i>' + (c ? ' <i>' + esc(c.gloss) + '</i>' : "") + '</p><p class="quiet">A man who stood here: ' + esc(s.who) + '. ' + esc(s.line) + '</p>' :
        '<p class="quiet">Mark both lines and the X appears. You can move it as many times as you like.</p>');
  }
  function standing() {
    var m = mark(), s = stopOf(m), c = cornerOf(m), sug = suggestedLean(m);
    if (!m) return '<p class="say">Go back and mark both lines first. The X is yours to place.</p>';
    return '<div class="map small">' + mapSVG(m) + '</div>' +
      '<p class="fixed">Say it in your own words. The map gave you a name; you say whether it is true.</p>' +
      box("standing", "Where I am standing today is " + whereLine(m) + ", and the honest reason is", A.standing, 3) +
      '<p class="fixed">' + esc(c ? c.why : "If it sits on the line, the next stop up the line is already named.") + ' The map suggests <b>' + esc(sug) + '</b>. You decide.</p>' +
      '<p class="ask">I lean toward</p>' + taps("lean", LEANS, LEANS.indexOf(A.lean || sug)) +
      '<p class="quiet">The map does not rank you as a believer at one end and a disciple at the other, and that is on purpose. A disciple is a learner who follows, and every stop on the line is one.</p>';
  }
  function step() {
    return '<p class="fixed">He was walking toward Adam before Adam moved. On the Emmaus road it happened again.</p>' + verse(SCRIPT.near) + verse(SCRIPT.stand) +
      '<p class="fixed">Stand, look, ask, walk. You have stood and looked. Now one step, small enough to take this week, in the direction you lean.</p>' +
      box("step1", "If He is already on my road, then the one step is", A.step1, 3) + taps("step", STEPS, A.stepPick);
  }
  function going() {
    return '<p class="fixed">Last line. Say where you are going, in one sentence, the way you would say it to a man who asked.</p>' +
      box("going", "So this is where I am going:", A.going, 3) +
      '<p class="quiet">When you finish, the page reads it back to you. Change anything you like before you keep it.</p>';
  }
  var TITLES = { intro: "Where are you?", away: "Out of the trees", feel: "The word for it", map: "Stand in it", standing: "Where I am standing", step: "He is already on your road", going: "Where I am going" };
  function gateOK(i) {
    var k = ORDER[i];
    if (k === "away") return !!A.away.trim();
    if (k === "map") return !!(A.F && A.D);
    if (k === "standing") return !!A.standing.trim();
    if (k === "step") return !!A.step1.trim();
    if (k === "going") return !!A.going.trim();
    return true;
  }
  function stepsHTML() {
    var i = Math.max(0, Math.min(ORDER.length - 1, A.step)), k = ORDER[i];
    var body = k === "intro" ? intro() : k === "away" ? away() : k === "feel" ? feel() : k === "map" ? map() : k === "standing" ? standing() : k === "step" ? step() : going();
    var h = '<div class="sheet" id="writer"><div class="eyebrow">Your Story · Where Are You?</div><h1>' + esc(TITLES[k]) + '</h1>' + (i ? '<p class="quiet">Step ' + i + ' of ' + (ORDER.length - 1) + '</p>' : "") + body;
    if (i) h += '<div class="row bar"><button class="btn" data-go="' + (i - 1) + '">Back</button>' + (i < ORDER.length - 1 ? '<button class="btn main" data-go="' + (i + 1) + '">Next</button>' : '<button class="btn main" data-finish="1">Finish</button>') + '</div>';
    return h + '<p id="say" class="say"' + (sayText ? "" : " hidden") + '>' + esc(sayText) + '</p></div>';
  }
  function lines() {
    var m = mark(), out = [];
    if (A.away.trim()) out.push({ label: "What I am walking away from right now is", text: A.away.trim() });
    var f = (A.feelOwn || A.feel || "").trim(); if (f) out.push({ label: "The word for it is", text: f + (A.body ? ", and it sits in my " + A.body : "") });
    if (A.watch.trim()) out.push({ label: "When no one is watching, it is really", text: A.watch.trim() });
    if (A.story.trim()) out.push({ label: "The men who know my story are", text: A.story.trim() });
    if (m && A.standing.trim()) out.push({ label: "Where I am standing today is " + whereLine(m) + ", and the honest reason is", text: A.standing.trim() });
    if (m) out.push({ label: "I lean toward", text: A.lean || suggestedLean(m) });
    if (A.step1.trim()) out.push({ label: "If He is already on my road, then the one step is", text: A.step1.trim() });
    if (A.going.trim()) out.push({ label: "So this is where I am going:", text: A.going.trim() });
    return out;
  }
  function agency() { return "You put the X there. Nobody placed it for you. You named which way you lean. You chose the step."; }
  function finishedHTML() {
    var m = mark(), s = stopOf(m);
    return '<div class="sheet" id="finished"><div class="eyebrow">Your Story · Where Are You?</div><h1>Where Are You?</h1><p class="byline">' + esc(A.byline) + ' · ' + esc(A.when) + '</p>' +
      '<div class="map">' + mapSVG(m) + '</div>' + (s ? '<p class="quiet">A man who stood here: ' + esc(s.who) + '. ' + esc(s.line) + '</p>' : "") +
      lines().map(function (l) { return '<p class="line"><span class="his">' + esc(l.label) + '</span> ' + esc(l.text) + '</p>'; }).join("") +
      '<p class="fixed agency">' + esc(agency()) + '</p>' +
      '<p class="quiet">He asked where you are so that you would come out of the trees, and He was already walking toward you when He asked. That is the whole story, and the next name on it is yours.</p>' +
      '<div class="row bar"><button class="btn" data-do="download">Download</button><button class="btn" data-do="copy">Copy the words</button><button class="btn" data-do="change">Change the words</button></div>' +
      (C.storyPath ? '<p class="quiet">The road goes on from here. <a href="' + esc(C.storyPath) + '">Walk With Me</a> asks this question ten times over, and the X you placed today is where the road starts.</p>' : "") +
      '<p id="say" class="say"' + (sayText ? "" : " hidden") + '>' + esc(sayText) + '</p></div>';
  }
  function whole() {
    var m = mark(), t = "WHERE ARE YOU?\n\n" + A.byline + " · " + A.when + "\n\n" + (m ? "My X: " + whereLine(m) + ".\n\n" : "");
    lines().forEach(function (l) { t += l.label + " " + l.text + "\n\n"; });
    return t + agency() + "\n";
  }
  function render(keepScroll) {
    if (!app) return;
    var y = window.scrollY;
    app.innerHTML = screen === "finished" ? finishedHTML() : stepsHTML();
    if (keepScroll) window.scrollTo(0, y); else { var top = document.getElementById("ap-road"); if (top && top.getBoundingClientRect().top < 0) top.scrollIntoView(); }
    if (window.AP_ROAD_SITE) window.AP_ROAD_SITE.paint();
  }
  function say(t) { sayText = t || ""; var n = document.getElementById("say"); if (n) { n.textContent = sayText; n.hidden = !sayText; } }
  function keep() { if (window.AP_ROAD_SITE) window.AP_ROAD_SITE.dirty(); }

  /* ---------- the keepsake ---------- */
  function pdf() {
    var J = window.jspdf && window.jspdf.jsPDF; if (!J) { say("The download is not available on this device. Use Copy the words instead."); return; }
    var doc = new J({ unit: "pt", format: "letter" }), W = 612, H = 792, M = 72, y = M, NAVY = [31, 42, 68], BRONZE = [140, 106, 63], GOLD = [201, 162, 39], INK = [42, 39, 35], SOFT = [107, 99, 88];
    function para(t, o) { doc.setFont(o.font || "times", o.style || "normal"); doc.setFontSize(o.size); doc.setTextColor(o.color[0], o.color[1], o.color[2]); var ls = doc.splitTextToSize(t, o.width || (W - 2 * M)), lh = o.size * (o.lead || 1.4); if (y + ls.length * lh > H - 64) { doc.addPage(); y = M; } ls.forEach(function (ln) { doc.text(ln, o.center ? W / 2 : M, y + o.size * 0.82, o.center ? { align: "center" } : undefined); y += lh; }); y += (o.after || 0); }
    para("YOUR STORY · WHERE ARE YOU?", { font: "helvetica", style: "bold", size: 9, color: BRONZE, center: true, after: 6 });
    para("Where Are You?", { style: "bold", size: 28, color: NAVY, center: true, lead: 1.15, after: 2 });
    para(A.byline + " · " + A.when, { size: 11, color: SOFT, center: true, after: 8 });
    doc.setDrawColor(GOLD[0], GOLD[1], GOLD[2]); doc.setLineWidth(2); doc.line(W / 2 - 24, y, W / 2 + 24, y); y += 22;
    var m = mark(), k = 0.42, ox = (W - 600 * k) / 2, oy = y; function X(v) { return ox + v * k; } function Y(v) { return oy + v * k; }
    doc.setDrawColor(NAVY[0], NAVY[1], NAVY[2]); doc.setLineWidth(1); doc.line(X(70), Y(440), X(572), Y(440)); doc.line(X(70), Y(440), X(70), Y(44));
    doc.setFont("times", "italic"); doc.setFontSize(9); doc.setTextColor(BRONZE[0], BRONZE[1], BRONZE[2]);
    doc.text("Aging Fruit", X(88), Y(76)); doc.text("Limited Fruit", X(560), Y(424), { align: "right" }); doc.text("Mature Orchard", X(560), Y(62), { align: "right" });
    doc.setFont("helvetica", "bold"); doc.setFontSize(7); doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]);
    doc.text("DISCIPLESHIP", X(321), Y(472), { align: "center" }); doc.text("FORMATION", X(46), Y(242), { align: "center", angle: 90 });
    doc.setDrawColor(150, 150, 160); doc.setLineDashPattern([3, 3], 0);
    var prev = ROAD.roadPt(0); for (var i = 1; i <= 24; i++) { var p = ROAD.roadPt(i / 24); doc.line(X(prev[0]), Y(prev[1]), X(p[0]), Y(p[1])); prev = p; }
    doc.setLineDashPattern([], 0); doc.setFont("helvetica", "normal"); doc.setFontSize(7); doc.setTextColor(SOFT[0], SOFT[1], SOFT[2]);
    [0, 1 / 3, 2 / 3].forEach(function (t, i) { var p = ROAD.roadPt(t); doc.text(STOP[i].name.replace(/^the /, ""), X(p[0] + (i === 3 ? -10 : 10)), Y(p[1] + (i === 0 ? 24 : i === 3 ? 26 : -12)), i === 3 ? { align: "right" } : undefined); });
    if (m) { doc.setFillColor(GOLD[0], GOLD[1], GOLD[2]); doc.setDrawColor(NAVY[0], NAVY[1], NAVY[2]); doc.setLineWidth(1.2); doc.circle(X(m.x), Y(m.y), 4.5, "FD"); doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); doc.setTextColor(NAVY[0], NAVY[1], NAVY[2]); doc.text("today", X(m.x + 16), Y(m.y + 6)); }
    y = oy + 500 * k + 16;
    if (m) para("My X: " + whereLine(m) + ".", { style: "italic", size: 10.5, color: BRONZE, after: 10 });
    lines().forEach(function (l) { para(l.label, { font: "helvetica", size: 8, color: SOFT, after: 1 }); para(l.text, { size: 11.5, color: INK, after: 8 }); });
    para(agency(), { style: "italic", size: 10.5, color: NAVY, after: 10 });
    doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(SOFT[0], SOFT[1], SOFT[2]); doc.text("Where Are You? · Walk With Me · Ancient Path Biblical Coaching · ancientpathcoaching.com", W / 2, H - 40, { align: "center" });
    doc.save("Where-Are-You.pdf");
  }

  /* ---------- events ---------- */
  function on(e) {
    var t = e.target, b;
    if ((b = t.closest("[data-scale]"))) { A[b.getAttribute("data-scale")] = +b.getAttribute("data-n"); keep(); render(true); return; }
    if ((b = t.closest("[data-tap]"))) {
      var key = b.getAttribute("data-tap"), i = +b.getAttribute("data-i");
      if (key === "away") { A.awayPick = A.awayPick === i ? null : i; if (A.awayPick != null && !A.away.trim()) A.away = AWAY[i]; else if (A.awayPick != null && AWAY.indexOf(A.away.trim()) >= 0) A.away = AWAY[i]; }
      else if (key === "feel") { A.feel = A.feel === FEEL[i] ? "" : FEEL[i]; A.feelOwn = ""; }
      else if (key === "body") { A.body = A.body === BODY[i] ? "" : BODY[i]; }
      else if (key === "lean") { A.lean = LEANS[i]; }
      else if (key === "step") { A.stepPick = A.stepPick === i ? null : i; if (A.stepPick != null && (!A.step1.trim() || STEPS.indexOf(A.step1.trim()) >= 0)) A.step1 = STEPS[i]; }
      keep(); render(true); return;
    }
    if ((b = t.closest("[data-go]"))) {
      var to = +b.getAttribute("data-go");
      if (to > A.step) { for (var j = A.step; j < to; j++) { if (!gateOK(j)) { say(ORDER[j] === "map" ? "Mark both lines before you go on. The X is yours to place." : "Finish the line before you go on. A few words is enough."); return; } } }
      A.step = to; say(""); keep(); render(); return;
    }
    if ((b = t.closest("[data-finish]"))) {
      for (var g = 1; g < ORDER.length; g++) { if (!gateOK(g)) { say("One line is still empty: " + TITLES[ORDER[g]] + ". Use Back."); return; } }
      A.finished = true; screen = "finished"; say(""); keep(); render(); return;
    }
    if ((b = t.closest("[data-do]"))) {
      var act = b.getAttribute("data-do");
      if (act === "download") pdf();
      else if (act === "copy") { var txt = whole(); try { navigator.clipboard.writeText(txt).then(function () { say("Copied. Paste it anywhere you keep things."); }, function () { say("Your device would not copy it. Select the words and copy them yourself."); }); } catch (x) { say("Your device would not copy it. Select the words and copy them yourself."); } }
      else if (act === "change") { A.finished = false; screen = "steps"; A.step = 1; render(); }
    }
  }
  function onInput(e) { var t = e.target, k = t && t.getAttribute && t.getAttribute("data-w"); if (!k) return; A[k] = t.value; if (k === "feelOwn" && t.value.trim()) A.feel = ""; keep(); }

  /* ---------- what the site save needs: a snapshot, a restore, the readable whole, and the meta line ---------- */
  function snapshot() { return { v: 1, piece: "where", a: A }; }
  function restore(o) { if (!o || !o.a || o.piece !== "where") return; A = o.a; if (!A.when) A.when = blank().when; screen = A.finished ? "finished" : "steps"; render(true); }
  window.AP_ROAD_WHOLE = whole;
  window.AP_ROAD_META = function () { return { piece: "where", step: A.step, of: ORDER.length - 1, finished: !!A.finished, when: new Date().toISOString() }; };
  window.APP = { get D() { return { meCount: A.finished ? 1 : 0, chapters: [] }; }, get stage() { return "me"; }, esc: esc, say: say, render: render, keep: keep, snapshot: snapshot, restore: restore, openPart: function () {}, go: function () {} };
  app.addEventListener("click", on); app.addEventListener("input", onInput);
  render();
  if (window.AP_ROAD_SITE) window.AP_ROAD_SITE.load(restore);
  return { render: render, snapshot: snapshot, restore: restore, whole: whole, lines: lines, mark: mark, whereLine: whereLine, _A: function () { return A; } };
})();

window.AP_WHERE = WHERE;

/* ---- road_ui.js ---- */
/* AP-ROAD-WALKTHROUGH-v1 · page logic. State lives in memory only. */
(function () {
  if (window.AP_ROAD && window.AP_ROAD.piece) return; /* a piece page (Where Are You?) has its own module */
  var SAMPLE = JSON.parse(JSON.stringify(ROAD_DATA));
  SAMPLE.chapters.forEach(function (ch) { ch.lines.forEach(function (l) { l.first = l.text; }); ch.firstOut = ch.setOut; ch.firstCamp = ch.camped; });
  SAMPLE.bends.forEach(function (b) { b.first = b.text; });
  /* "Walk it yourself": the same ten parts, empty, and his to fill one section at a time */
  function emptyMan() {
    var m = JSON.parse(JSON.stringify(ROAD_DATA));
    m.byline = "Your name"; m.tail = ""; m.bends = []; m.trail = []; m.marks = []; m.meCount = 0; m.mine = true;
    m.when = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });
    m.chapters.forEach(function (ch) { ch.lines = []; ch.setOut = ""; ch.camped = ""; ch.nums = null; delete ch.recall; });
    return m;
  }
  var ME = emptyMan(), meT = null, D = SAMPLE, startOver = false;
  var SITE = window.AP_ROAD || null;
  var stage = "finished", screen = "page", delArmed = false, straight = false, app = document.getElementById("ap-road-app") || document.getElementById("app");
  if (SITE) { stage = "me"; D = ME; }

  /* A floor that works with no key: a short list of plain phrases. It shows help; it never blocks his writing. */
  var DANGER = /\b(kill(ing)? myself|end(ing)? my life|take my own life|suicid\w*|want to die|better off without me|pills counted|i am done tonight|tonight i am done|end it (all )?tonight|hurt (her|him|them|my (wife|son|daughter|kids|children)))\b/i;
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function chTitle(ch) { return ch.part + (ch.name ? " · " + ch.name : ""); }
  function say(t) { var n = document.getElementById("say"); if (n) { n.textContent = t; n.hidden = !t; } }

  function map() {
    var chs = ROAD.chapters(D, stage), pts = D.mine ? (D.marks || []).filter(function (m, i) { return m && i < chs.length; }) : D.trail.slice(0, chs.length), last, d;
    if (pts.length < 2) return '<p class="quiet center">Your trail appears on the map once two of your chapters have a mark. The map begins in Part Three.</p>';
    if (D.threeMark && pts.length > 2) pts[2] = D.threeMark;
    last = pts[pts.length - 1]; d = ROAD.pathD(pts);
    var F = 'font-family="Source Sans 3, Arial, sans-serif"', FS = 'font-family="Source Serif 4, Georgia, serif" font-size="19" font-style="italic" fill="#8C6A3F"';
    var marks = pts.slice(0, -1).map(function (p, i) {
      var bend = D.bends.some(function (b) { return b.at === i; });
      return bend ? '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="7" fill="#FFFFFF" stroke="#1F2A44" stroke-width="3"/>' +
        '<text x="' + p[0] + '" y="' + (p[1] + (p[1] > 270 ? 30 : -18)) + '" text-anchor="middle" ' + F + ' font-size="15.5" font-weight="700" fill="#1F2A44">' + esc(D.chapters[i].part) + '</text>'
        : '<circle cx="' + p[0] + '" cy="' + p[1] + '" r="5" fill="#1F2A44"/>';
    }).join("");
    return '<svg viewBox="0 0 600 500" role="img" aria-label="The map, with the trail he walked drawn over the road, one mark for each section.">' +
      '<rect width="600" height="500" fill="#FFFFFF"/><line x1="70" y1="440" x2="572" y2="440" stroke="#1F2A44" stroke-width="2"/><line x1="70" y1="440" x2="70" y2="44" stroke="#1F2A44" stroke-width="2"/>' +
      '<text x="321" y="478" text-anchor="middle" ' + F + ' font-size="17" font-weight="700" letter-spacing="2" fill="#1F2A44">DISCIPLESHIP</text>' +
      '<text transform="translate(40,242) rotate(-90)" text-anchor="middle" ' + F + ' font-size="17" font-weight="700" letter-spacing="2" fill="#1F2A44">FORMATION</text>' +
      '<text x="88" y="76" ' + FS + '>Aging Fruit</text><text x="560" y="424" text-anchor="end" ' + FS + '>Limited Fruit</text>' +
      '<text x="150" y="432" ' + FS + '>Tree Planted</text><text x="560" y="62" text-anchor="end" ' + FS + '>Mature Orchard</text>' +
      '<path d="M120,405 C250,400 370,140 525,95" fill="none" stroke="#1F2A44" stroke-opacity=".28" stroke-width="2" stroke-dasharray="6 7"/>' +
      '<path d="' + d + '" fill="none" stroke="#C9A227" stroke-opacity=".55" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"/>' +
      '<path d="' + d + '" fill="none" stroke="#1F2A44" stroke-width="2.5" stroke-linecap="round"/>' + marks +
      '<circle cx="' + last[0] + '" cy="' + last[1] + '" r="9" fill="#C9A227" stroke="#1F2A44" stroke-width="2.5"/>' +
      '<text x="' + (last[0] + 16) + '" y="' + (last[1] + 6) + '" ' + F + ' font-size="15.5" font-weight="700" fill="#1F2A44">today</text></svg>';
  }

  function pageScreen() {
    var chs = ROAD.chapters(D, stage), lastCh = chs[chs.length - 1], walking = !ROAD.finished(D, stage);
    if (stage === "me") return SITE && SITE.course ? coursePage(chs) : minePage(chs);
    return '<div class="sheet"><div class="eyebrow">Your page</div><h1>Welcome back, Daniel.</h1>' +
      '<p class="fixed">Everything you have written here. Read it, change it, or delete it — any of it, whenever you want.</p>' +
      '<div class="cards"><article class="card main"><div class="eyebrow">Walk With Me</div><h2>' + esc(D.title) + '</h2>' +
      (walking
        ? '<p class="state"><b>In progress</b> — Pick up where you left off</p><p class="quiet">Last written: ' + esc(chTitle(lastCh)) + '</p>' +
          '<div class="row"><button class="btn main" data-do="pickup">Pick up where you left off</button><button class="btn" data-do="readstory">Read</button></div>'
        : '<p class="state"><b>Finished</b></p><p class="quiet">Ten sections. Your words, your road.</p>' +
          '<div class="row"><button class="btn main" data-go="tell">Open it</button><button class="btn" data-do="download">Download</button></div>' +
          '<p class="links"><button class="link" data-go="evidence">Evidence</button><button class="link" data-do="offer">Offer it for publishing</button><button class="link" data-do="delete">' + (delArmed ? "Delete permanently — press again" : "Delete this story") + '</button></p>') +
      '</article>' +
      '<article class="card dim"><div class="eyebrow">Your Story</div><h2>Where I Am From</h2><p class="state"><b>Finished</b></p><p class="quiet">Shown for context. Not part of this walk-through.</p></article>' +
      '<article class="card dim"><div class="eyebrow">Your Story</div><h2>A Lament</h2><p class="state"><b>Finished</b></p><p class="quiet">Shown for context. Not part of this walk-through.</p></article>' +
      '</div><p id="say" class="say" hidden></p></div>';
  }

  /* An earlier line never comes back bare: where it came from, what was asked, his words in full, and why it is here. */
  function recallHTML(lead, quote, bridge) {
    return '<div class="recall"><span>' + esc(lead) + '</span><p>“' + esc(quote) + '”</p>' + (bridge ? '<span>' + esc(bridge) + '</span>' : "") + '</div>';
  }
  function mark(text, word) {
    return esc(text).replace(new RegExp("\\b(" + word + ")\\b", "gi"), "<b>$1</b>");
  }

  function storyScreen() {
    var chs = ROAD.chapters(D, stage), tn = ROAD.thenNow(D, stage), th = ROAD.thread(D, stage), walking = !ROAD.finished(D, stage);
    var h = '<div class="sheet' + (straight ? " straight" : "") + '" id="story"><div class="ch-head"><div class="eyebrow">Walk With Me' + (walking ? " · the road so far" : "") + '</div>' +
      '<div class="t">' + esc(D.title) + '</div><div class="by">' + esc(D.byline) + " · " + esc(D.when) + '</div><div class="rule"></div></div>' +
      '<p class="ours">' + esc(D.opens) + '</p>';
    if (tn) h += '<div class="then-now"><div><div class="when">Where I started · ' + esc(ROAD.fullPart(tn.first.ch)) + '</div><p>' + esc(tn.first.l.text) + '</p></div>' +
      '<div><div class="when">' + (walking ? "Where I am today" : "Where I am") + " · " + esc(ROAD.fullPart(tn.last.ch)) + '</div><p>' + esc(tn.last.l.text) + '</p></div></div>';
    h += '<div class="road">' + map() + '<p class="cap">' + (walking ? "This is the road you have walked so far." : "This is the road you walked.") +
      (D.bends.filter(function (b) { return b.at < chs.length; }).length ? " It bent. Most men’s do." : "") + '</p>' +
      '<p class="sub">The faint dashed line is the road on the map. The gold trail is yours, one mark for each section. It shows direction, never rank: from glory to glory.</p></div>' +
      '<p class="ours">“Moses wrote down their starting places, stage by stage, by command of the LORD.”<cite>Numbers 33:2</cite></p>';
    D.bends.forEach(function (b) {
      if (b.at < chs.length && b.text.trim()) h += '<p class="his"><span class="lead">' + esc(ROAD.bendLabel(D, b)) + '</span>' + (ROAD.bendGloss(D, b) ? '<span class="gloss">' + esc(ROAD.bendGloss(D, b)) + '</span>' : "") + esc(b.text) + '</p>';
    });
    if (th) h += '<div class="divide"></div><p class="thread">A word you keep using: <b>' + esc(th.word) + '</b>. Here is each place you wrote it.</p><ul class="where">' +
      th.where.map(function (w) { return '<li><span>' + esc(w.part) + '</span>' + mark(w.text, th.word) + '</li>'; }).join("") + '</ul>';
    h += '<div class="divide"></div>';
    var lastMv = 0;
    chs.forEach(function (ch) {
      var ls = ROAD.onLines(ch), st = ROAD.stageLine(ch), rc = ROAD.recallLine(D, ch);
      if (!ls.length && !st) return;
      if (ch.mv !== lastMv) { lastMv = ch.mv; h += '<div class="movement"><span>' + esc(D.movements[ch.mv]) + '</span></div>'; }
      h += '<section class="chap"><div class="part">' + esc(chTitle(ch)) + '</div>' + (ch.ours ? '<p class="ours left">' + esc(ch.ours) + '</p>' : "") +
        (rc ? recallHTML(rc.lead, rc.text, rc.bridge) : "") +
        ls.map(function (l) { return (l.ctx ? recallHTML(l.ctx.lead, l.ctx.quote, "") : "") + '<p class="his">' + esc(ROAD.shown(l)) + '</p>'; }).join("") + (st ? '<p class="stage">' + esc(st) + '</p>' : "") + '</section>';
    });
    var hd = ROAD.handed(D, stage);
    if (hd.length) h += '<div class="movement"><span>' + esc(ROAD.HANDED) + '</span></div><section class="chap">' + hd.map(function (l) { return '<div class="part">' + esc(l.part + " · " + l.label) + '</div><p class="his">' + esc(l.text) + '</p>'; }).join("") + '</section>';
    if (!walking) h += '<p class="ours closing">' + esc(D.closes) + '</p>';
    if (!walking && D.tail.trim()) h += '<p class="tail">Today I am camped at ' + esc(D.tail) + '</p>';
    h += '<div class="refs"><div class="eyebrow">Where these words come from</div><p>' + D.refs.map(esc).join(" · ") + '</p></div></div>' +
      '<div class="row bar"><button class="btn main" data-do="download">Download</button><button class="btn" data-do="print">Print</button>' +
      '<button class="btn" data-go="edit">Edit</button><button class="btn" data-go="tell">Story</button><button class="btn" data-go="page">Back</button></div><p id="say" class="say" hidden></p>' +
      '<textarea id="copybox" class="copybox" hidden readonly aria-label="The words of your story, to copy"></textarea>';
    return h;
  }

  function editScreen() {
    var chs = ROAD.chapters(D, stage);
    var h = '<div class="sheet"><div class="eyebrow">Edit</div><h1>Make it read clearly</h1>' +
      '<p class="fixed">Choose which lines carry your story. Fix a word or smooth a sentence so it reads the way you meant it. Each chapter stays the way you wrote it on the day.</p>' +
      '<div class="field"><label for="f-title">Title</label><input id="f-title" data-k="title" value="' + esc(D.title) + '"></div>' +
      '<div class="field"><label for="f-by">Your name, the way you want it shown</label><input id="f-by" data-k="byline" value="' + esc(D.byline) + '"></div>';
    chs.forEach(function (ch, c) {
      h += '<section class="edit-ch"><div class="part">' + esc(chTitle(ch)) + '</div>';
      ch.lines.forEach(function (l, i) {
        h += '<div class="edit-line' + (l.on ? "" : " off") + '"><div class="edit-top"><label for="ln-' + c + "-" + i + '">' + esc(l.label) + '</label>' +
          '<button class="toggle" data-tog="' + c + "-" + i + '" aria-pressed="' + l.on + '">' + (l.on ? "In the story" : "Left out") + '</button></div>' +
          '<textarea id="ln-' + c + "-" + i + '" data-ln="' + c + "-" + i + '" rows="2">' + esc(l.text) + '</textarea>' +
          '<p class="orig" data-orig="' + c + "-" + i + '"' + (l.text !== l.first ? "" : " hidden") + '>As you wrote it on the day: <i>' + esc(l.first) + '</i> <button class="link" data-back="' + c + "-" + i + '">Undo</button></p></div>';
      });
      h += '<div class="pair"><div class="field"><label for="so-' + c + '">I set out from…</label><input id="so-' + c + '" data-so="' + c + '" value="' + esc(ch.setOut) + '"></div>' +
        '<div class="field"><label for="ca-' + c + '">I camped at…</label><input id="ca-' + c + '" data-ca="' + c + '" value="' + esc(ch.camped) + '"></div></div></section>';
    });
    D.bends.forEach(function (b, i) {
      if (b.at < chs.length) h += '<div class="field"><label for="bd-' + i + '">' + esc(ROAD.bendLabel(D, b)) + '. ' + esc(ROAD.bendGloss(D, b)) + ' What was happening in your life here?</label><textarea id="bd-' + i + '" data-bd="' + i + '" rows="2">' + esc(b.text) + '</textarea></div>';
    });
    if (ROAD.finished(D, stage)) h += '<div class="field"><label for="f-tail">One closing line. Today I am camped at…</label><input id="f-tail" data-k="tail" value="' + esc(D.tail) + '"></div>';
    return h + '<div class="row bar"><button class="btn main" data-go="story">Done</button></div></div>';
  }

  /* The Enemy brings his case day and night. This is the man's own file: what he has done and what he has come through, in his words.
     Open to him any day from his page. Nothing counted, nothing praised, nothing of ours but the section's own line. */
  function evidenceScreen() {
    var e = ROAD.evidence(D, stage, null), h = '<div class="sheet"><div class="eyebrow">Walk With Me</div><h1>Your evidence</h1>' +
      '<p class="fixed">The Enemy brings his case against you day and night. This is what you have done and what you have come through, in your own words. You have done hard things. You are ready for the next one.</p>' +
      '<p class="ours left">And they overcame him by the blood of the Lamb, and by the word of their testimony. <span class="ref">Revelation 12:11</span></p>';
    if (!e.seen.length) h += '<p class="quiet">Nothing gathered yet. This fills as you write your chapters: what you did each week, and what you have come through.</p>';
    e.seen.forEach(function (x) {
      h += '<div class="recall"><span>' + esc(x.said ? (x.saidPart || x.part) : x.part) + (x.said ? ' · You had said: “' + esc(x.said) + '”' : ' · ' + esc(x.label)) + '</span><p>“' + esc(x.text) + '”</p></div>';
    });
    return h + '</div><div class="row bar"><button class="btn main" data-go="page">Back</button></div>';
  }

  /* Inside a course section: one card for this section's chapter. He never leaves the course. His story is written in order,
     so the button always opens his next unwritten chapter, and the card says so when that is not this section. */
  function coursePage(chs) {
    var n = chs.length, all = D.chapters.length, here = Math.max(0, Math.min(all - 1, (SITE.course.part || 1) - 1)), me = ROAD_PARTS[here], next = ROAD_PARTS[n];
    var under = n < all && WRITER.begun && WRITER.begun(n);
    var storyLink = '<a class="btn" href="' + esc(SITE.course.storyPath || "/the-road-i-walked") + '" target="_blank" rel="noopener">Open my story</a>';
    var h = '<div class="sheet coursecard"><div class="eyebrow">Your story · The Road I Walked</div><h1>Five minutes: write this part of your story</h1>';
    if (n > here) {
      h += '<p class="state"><b>Written</b></p><p class="fixed">You have written your chapter for ' + esc(me.part + " · " + me.name) + '. It is in your story.</p>' +
        '<div class="row"><button class="btn main" data-do="readstory">Read my story so far</button>' + storyLink + '</div>' +
        '<p class="quiet">To change or delete anything you wrote, open your story.' + (n < all ? ' When you are ready, go on to the next section with "next" at the top of this page.' : '') + '</p>';
    } else {
      h += '<p class="fixed">Before you go on, take five minutes. Answer five statements honestly and write a few sentences. <b>When you press Save, this chapter is saved to your page — yours to read, change or delete. Ancient Path reads only what you choose to publish.</b></p>';
      if (n < here) h += '<p class="say">Your story is written in order, and your next chapter is ' + esc(next.part + " · " + next.name) + '. Write that one first. Then come back here for ' + esc(me.part) + '.</p>';
      h += (under ? '<p class="state"><b>In progress</b> — Pick up where you left off</p>' : "") +
        '<div class="row"><button class="btn main" data-do="pickup">' + (under ? "Pick up where you left off" : "Write " + esc(next.part) + " of my story") + '</button>' + (n ? '<button class="btn" data-do="readstory">Read my story so far</button>' : "") + '</div>' + ROAD.paperLine();
    }
    return h + '<p id="say" class="say" hidden></p></div>';
  }

  function minePage(chs) {
    var n = chs.length, all = D.chapters.length, next = ROAD_PARTS[n], h = '<div class="sheet"><div class="eyebrow">' + (SITE ? "Your Story" : "Your page") + '</div><h1>Welcome' + (n ? " back" : "") + '.</h1>' +
      '<p class="fixed">This one is yours. Write a chapter after each section of the course, and watch your story grow. ' + (SITE ? '<b>When you press Save, this chapter is saved to your page — yours to read, change or delete. Ancient Path reads only what you choose to publish. You’ll be asked to sign in the first time.</b>' : 'What you write here is kept with your Claude account, private to you.') + '</p>' +
      '<div class="cards"><article class="card main"><div class="eyebrow">Walk With Me</div><h2>' + esc(D.title) + '</h2>';
    var under = SITE && n < all && WRITER.begun && WRITER.begun(n);
    if (!n && under) h += '<p class="state"><b>In progress</b> — Pick up where you left off</p><p class="quiet">' + esc(next.part + " · " + next.name) + ' is under way.</p><div class="row"><button class="btn main" data-do="pickup">Pick up where you left off</button></div>';
    else if (!n) h += '<p class="state"><b>Not started</b></p><p class="quiet">Ten sections. Five to ten minutes after each one.</p><div class="row"><button class="btn main" data-do="pickup">Begin</button></div>' + (SITE ? ROAD.paperLine() : "");
    else if (n < all) h += '<p class="state"><b>In progress</b> — Pick up where you left off</p><p class="quiet">' + n + ' of ' + all + ' sections written. Next: ' + esc(next.part + " · " + next.name) + '</p>' +
      '<div class="row"><button class="btn main" data-do="pickup">Pick up where you left off</button><button class="btn" data-do="readstory">Read</button></div>';
    else h += '<p class="state"><b>Finished</b></p><p class="quiet">Ten sections. Your words, your road.</p><div class="row"><button class="btn main" data-go="tell">Open it</button><button class="btn" data-do="download">Download</button></div>';
    if (n) h += '<p class="links"><button class="link" data-go="evidence">Evidence</button><button class="link" data-do="startover">' + (SITE ? (startOver ? "Delete permanently — press again" : "Delete this story") : (startOver ? "Erase everything you wrote here — press again" : "Start over")) + '</button></p>';
    return h + '</article></div><p id="say" class="say" hidden>' + '</p><p class="quiet" id="keepnote">' + esc(keepNote) + '</p></div>';
  }

  /* ---------- keeping his words: his own private space with his Claude account, or this browser when that is not there ---------- */
  var keepNote = "", keepTimer = null, store = null, storeReady = false;
  function snapshot() { if (stage === "me") meT = TELL.dump(); return { v: 1, me: ME, w: WRITER.dump(), t: meT }; }
  function restore(o) { if (!o || !o.me) return; ME = o.me; ME.mine = true; WRITER.load(o.w); meT = o.t || null; if (stage === "me") { D = ME; TELL.load(meT); render(true); } }
  function openStore() {
    var c = window.claude && window.claude.use ? window.claude : null;
    if (!c) return Promise.resolve(null);
    return Promise.all([c.use("db"), c.use("user")]).then(function (r) {
      var db = r[0], user = r[1]; if (!db || !user) return null;
      return user.id().then(function (id) { return id ? db.doc("data/users/" + id + "/walk") : null; });
    }).catch(function () { return null; });
  }
  function loadKept() {
    if (SITE) { if (window.AP_ROAD_SITE) window.AP_ROAD_SITE.load(restore); return; }
    openStore().then(function (doc) {
      store = doc; storeReady = true;
      if (doc) return doc.get().then(function (snap) { if (snap.exists) restore(JSON.parse(snap.data().json || "null")); keepNote = "Kept with your Claude account, private to you."; });
      try { var raw = window.localStorage.getItem("ap-walk"); if (raw) restore(JSON.parse(raw)); keepNote = "Kept in this browser only."; } catch (e) { keepNote = "This view cannot keep your words after you close it. Copy anything you want to keep."; }
    }).catch(function () { keepNote = "Your words could not be loaded just now."; }).then(function () { var k = document.getElementById("keepnote"); if (k) k.textContent = keepNote; });
  }
  function keepNow() {
    if (stage !== "me" || !storeReady) return;
    var json = JSON.stringify(snapshot());
    if (store) store.set({ json: json, at: Date.now() }).catch(function () { say("Your last change could not be kept just now. It is still on this screen."); });
    else try { window.localStorage.setItem("ap-walk", json); } catch (e) {}
  }
  function keep() { if (SITE) { if (window.AP_ROAD_SITE) window.AP_ROAD_SITE.dirty(); return; } if (stage !== "me") return; clearTimeout(keepTimer); keepTimer = setTimeout(keepNow, 1500); }

  function render(keep) {
    var y = window.scrollY;
    app.innerHTML = screen === "page" ? pageScreen() : screen === "story" ? storyScreen() : screen === "write" ? WRITER.html() : screen === "tell" ? TELL.html(D, stage) : screen === "evidence" ? evidenceScreen() : editScreen();
    document.querySelectorAll("[data-stage]").forEach(function (b) { b.setAttribute("aria-pressed", b.getAttribute("data-stage") === stage); });
    if (SITE) { if (!keep && app.scrollIntoView && app.getBoundingClientRect().top < 0) app.scrollIntoView(); if (window.AP_ROAD_SITE) window.AP_ROAD_SITE.paint(); }
    else if (keep) window.scrollTo(0, y); else window.scrollTo(0, 0);
  }

  function saveFile(blob, name) { var u = URL.createObjectURL(blob), a = document.createElement("a"); a.href = u; a.download = name; document.body.appendChild(a); a.click(); setTimeout(function () { a.remove(); URL.revokeObjectURL(u); }, 2000); }
  function download() {
    say("Preparing your PDF…");
    if (SITE) { if (!window.jspdf) { say("The PDF could not be made just now. Print still works."); return; } saveFile(ROAD.pdf(window.jspdf.jsPDF, D, stage).output("blob"), "the-road-i-walked.pdf"); say("Downloaded."); return; }
    var use = window.claude && window.claude.use ? window.claude.use("downloads") : Promise.resolve(null);
    Promise.resolve(use).then(function (dl) {
      if (!dl || !window.jspdf) { say("Download is not available in this view. The same PDF is attached in our chat."); return; }
      var blob = ROAD.pdf(window.jspdf.jsPDF, D, stage).output("blob");
      return dl.save({ filename: "the-road-i-walked.pdf", data: blob }).then(function () { say("Downloaded."); });
    }).catch(function (e) { say(e && e.code === "declined" ? "" : "The download did not work here. The same PDF is attached in our chat."); });
  }

  function copy() {
    var t = ROAD.text(D, stage), box = document.getElementById("copybox");
    function fallback() { box.hidden = false; box.value = t; box.focus(); box.select(); say("Your words are selected below. Copy them from there."); }
    try { navigator.clipboard.writeText(t).then(function () { say("Copied."); }, fallback); } catch (e) { fallback(); }
  }

  document.addEventListener("click", function (e) {
    if (SITE && !(e.target.closest && e.target.closest("#ap-road"))) return;
    var b = e.target.closest("button"); if (!b) return;
    if (screen === "tell" && TELL.click(b)) { keep(); return; }
    var st = b.getAttribute("data-stage"), go = b.getAttribute("data-go"), act = b.getAttribute("data-do"), tog = b.getAttribute("data-tog"), back = b.getAttribute("data-back");
    if (st) { if (stage === "me") meT = TELL.dump(); stage = st; D = st === "me" ? ME : SAMPLE; screen = "page"; delArmed = false; startOver = false; TELL.forget(); if (st === "me") TELL.load(meT); render(); }
    else if (go) { screen = go; delArmed = false; render(); }
    else if (tog) { var p = tog.split("-"), l = D.chapters[p[0]].lines[p[1]]; l.on = !l.on; render(true); }
    else if (back) { var q = back.split("-"), m = D.chapters[q[0]].lines[q[1]]; m.text = m.first; render(true); }
    else if (act === "download") download();
    else if (act === "copy") copy();
    else if (act === "print") window.print();
    else if (act === "straight") { straight = !straight; render(); }
    else if (act === "readstory") { TELL.show(D, stage, "read"); screen = "tell"; render(); }
    else if (act === "startover") { if (startOver) { startOver = false; ME = emptyMan(); D = ME; meT = null; WRITER.clear(); TELL.forget(); render(); keepNow(); if (SITE && window.AP_ROAD_SITE) window.AP_ROAD_SITE.erased(); } else { startOver = true; render(true); } }
    else if (act === "pickup") { if (stage === "me") { WRITER.open(Math.min(D.meCount || 0, ROAD_PARTS.length - 1)); screen = "write"; render(); } else if (stage === "three" && !D.threeDone) { WRITER.open(2); screen = "write"; render(); } else say("On the course page this opens his next chapter. In this walk-through the chapter writer is built for Part Three only: use the third button at the top."); }
    else if (act === "offer") say("On the real page this opens the offer step you already have: he chooses the lines, other men’s names come out, and a person reads it before anything is published.");
    else if (act === "delete") { if (delArmed) { delArmed = false; render(true); say("In this walk-through nothing is deleted. On his page the second press removes the story for good."); } else { delArmed = true; render(true); } }
  });

  document.addEventListener("input", function (e) {
    if (SITE && !(e.target.closest && e.target.closest("#ap-road"))) return;
    var t = e.target, v = t.value;
    if (DANGER.test(v || "")) { var cb = document.getElementById("ap-road-care") || document.getElementById("carebox"); if (cb) cb.hidden = false; }
    keep();
    if (screen === "tell" && TELL.input(t)) return;
    if (t.hasAttribute("data-k")) D[t.getAttribute("data-k")] = v;
    else if (t.hasAttribute("data-ln")) { var p = t.getAttribute("data-ln").split("-"), ln = D.chapters[p[0]].lines[p[1]]; ln.text = v;
      var bk = document.querySelector('[data-orig="' + t.getAttribute("data-ln") + '"]'); if (bk) bk.hidden = v === ln.first; }
    else if (t.hasAttribute("data-so")) D.chapters[t.getAttribute("data-so")].setOut = v;
    else if (t.hasAttribute("data-ca")) D.chapters[t.getAttribute("data-ca")].camped = v;
    else if (t.hasAttribute("data-bd")) D.bends[t.getAttribute("data-bd")].text = v;
  });

  window.__road = { get data() { return D; }, get stage() { return stage; } };
  window.APP = { get D() { return D; }, get stage() { return stage; }, esc: esc, say: say, render: render, keep: keep, saveFile: saveFile, snapshot: snapshot, openPart: function (i) { WRITER.open(Math.max(0, Math.min(ROAD_PARTS.length - 1, i))); screen = "write"; render(); }, go: function (sc) { screen = sc; render(); } };
  render(); loadKept();
})();

})();