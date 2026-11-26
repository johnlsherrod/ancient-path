const {JSDOM}=require("jsdom");const fs=require("fs");
const html=fs.readFileSync("pages/your-story-v17.html","utf8");
function run(iso){
  const d=new JSDOM("<body>"+html+"</body>",{runScripts:"outside-only"});
  const w=d.window;
  const RealDate=w.Date;
  w.Date=class extends RealDate{constructor(...a){ if(a.length) super(...a); else super(iso);} static now(){return new RealDate(iso).getTime();}};
  // run only the v16 script
  const m=html.match(/<script>\s*\/\* AP-YS-v17[\s\S]*?<\/script>/)[0].replace(/^<script>|<\/script>$/g,"");
  w.eval(m);
  const c=w.document.getElementById("aphEndingWell");
  return {display:c.style.display, href:c.getAttribute("href")};
}
let ok=true;
function t(n,c){console.log((c?"ok   ":"FAIL ")+n); if(!c) ok=false;}
for(const [iso,show] of [["2026-11-17T20:00:00Z",false],["2026-12-24T05:30:00Z",false],["2026-12-24T06:30:00Z",true],["2027-01-05T12:00:00Z",true]]){
  const r=run(iso); t(iso+" -> "+(show?"shown":"hidden"), (r.display==="")===show);
}
t("card links /ending-well", run("2026-12-25T12:00:00Z").href==="/ending-well");
const d=new JSDOM(html);
const cards=[...d.window.document.querySelectorAll(".aph-card")].map(a=>a.getAttribute("href"));
t("card sits after Set a Stone", cards.indexOf("/ending-well")===cards.indexOf("/set-a-stone")+1);
t("one Google tag? none in hub body", (html.match(/G-VKPN74MHRZ/g)||[]).length===0);
// every script parses
let sc=[...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(x=>x[1]);
sc.forEach((s,i)=>{try{new Function(s);}catch(e){t("script "+i+" parses",false);}});
t("all scripts parse",true);
console.log(ok?"\nall passed":"\nFAILED"); process.exit(ok?0:1);
