// AP-REVIEW 4 machine checks on the public door and the hub card: sideways scroll, tap size, contrast, banned words, controls that do something, jobs.
const { chromium } = require("playwright"); const fs = require("fs");
const story = fs.readFileSync(__dirname + "/story.js", "utf8"), stone = fs.readFileSync(__dirname + "/stone.js", "utf8");
const BANNED = /\b(brother|facilitator|chip|pill|badge|token|container|wrapper|viewport|breakpoint|stranger|covenant|PaRDeS|Breaking Free|Week \d+|twelve weeks)\b/i;
function lum(c){const a=c.map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*a[0]+.7152*a[1]+.0722*a[2];}
(async()=>{
  const b=await chromium.launch({executablePath:"/opt/pw-browsers/chromium-1243/chrome-linux64/chrome"}); const res=[]; let pass=0,total=0;
  const chk=(n,c,d)=>{total++; if(c)pass++; res.push((c?"ok   ":"FAIL ")+n+(d?" — "+d:""));};
  for(const [name,w,h] of [["phone",390,800],["desk",1440,900]]){
    const ctx=await b.newContext({viewport:{width:w,height:h},hasTouch:name==="phone",isMobile:name==="phone"}); const p=await ctx.newPage();
    const errs=[]; p.on("pageerror",e=>errs.push(e.message));
    await p.route("**/*",r=>{const u=r.request().url();
      if(/story\.js/.test(u)) return r.fulfill({contentType:"application/javascript",body:story,headers:{"access-control-allow-origin":"*"}});
      if(/stone\.js/.test(u)) return r.fulfill({contentType:"application/javascript",body:stone,headers:{"access-control-allow-origin":"*"}});
      if(/ancientpathcoaching\.com\/ending-well$/.test(u)) return r.fulfill({contentType:"text/html; charset=utf-8",body:"<!doctype html><html><head><meta charset=utf-8></head><body style='background:#fff'>"+fs.readFileSync(__dirname+"/ending-well-v5-public.html","utf8")+"</body></html>"});
      if(/api|assessment|submission|user_stats/.test(u)) return r.fulfill({contentType:"application/json",body:JSON.stringify({success:true,me:{first_name:"Test",last_name:"Learner"}})});
      return r.fulfill({status:204,body:""});});
    await p.goto("https://www.ancientpathcoaching.com/ending-well"); await p.waitForTimeout(1500);
    for(const step of ["first","part4"]){
      if(step==="part4"){await p.evaluate(()=>window.ewShow(3,true));await p.waitForTimeout(300);}
      const r=await p.evaluate(()=>{
        window.__engineOwned=e=>/^(Read it to me|report a bug)$/i.test(e.textContent.trim())||(e.closest&&!!e.closest(".aps-tap,.aps-words,.aps-chips,[class*=\"tap\"],[class*=\"chip\"]"));
        const vis=e=>e.offsetParent!==null&&getComputedStyle(e).visibility!=="hidden";
        const ctrls=[...document.querySelectorAll(".ew-root button,.ew-root a,.ew-root textarea,.ew-root input")].filter(vis);
        const small=ctrls.filter(e=>{const r=e.getBoundingClientRect();return r.height<44&&!e.classList.contains("aps-handoff-link")&&!/ew-tap|aps-mic/.test(e.className)&&e.tagName!=="TEXTAREA"&&e.tagName!=="INPUT"&&!window.__engineOwned(e);}).map(e=>(e.id||e.textContent.trim().slice(0,20))+":"+Math.round(e.getBoundingClientRect().height));
        const txt=[...document.querySelectorAll(".ew-root p,.ew-root label,.ew-root button,.ew-root h1,.ew-root span")].filter(vis).filter(e=>e.children.length===0&&e.textContent.trim());
        const lows=[];
        for(const e of txt){const cs=getComputedStyle(e);const f=cs.color.match(/\d+(\.\d+)?/g).map(Number);let bg=null,n=e;while(n&&!bg){const c=getComputedStyle(n).backgroundColor.match(/\d+(\.\d+)?/g).map(Number);if(c.length<4||c[3]>0.9)bg=c;n=n.parentElement;}bg=bg||[255,255,255];
          const L=c=>{const a=c.slice(0,3).map(v=>{v/=255;return v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4)});return .2126*a[0]+.7152*a[1]+.0722*a[2];};
          const l1=L(f),l2=L(bg),cr=(Math.max(l1,l2)+.05)/(Math.min(l1,l2)+.05);const big=parseFloat(cs.fontSize)>=24;if(cr<(big?3:4.5))lows.push(e.textContent.trim().slice(0,24)+" "+cr.toFixed(2));}
        return {scrollX:document.documentElement.scrollWidth-document.documentElement.clientWidth,small,lows:lows.slice(0,6),text:document.querySelector(".ew-root").innerText};}) ;
      chk(name+"/"+step+": no sideways scroll",r.scrollX<=0);
      chk(name+"/"+step+": every control 44px or more",r.small.length===0,r.small.join(", "));
      chk(name+"/"+step+": text contrast 4.5:1 (3:1 large)",r.lows.length===0,r.lows.join("; "));
      chk(name+"/"+step+": no banned or course words",!BANNED.test(r.text),(r.text.match(BANNED)||[""])[0]);
    }
    chk(name+": no script errors",errs.length===0,errs.join("|").slice(0,120));
    // jobs: write one line and finish needs presses; job 1 "say where it began" from the first screen: count presses to reach the Where I started box
    await p.evaluate(()=>window.ewShow(0,true)); 
    const presses=await p.evaluate(async()=>{let n=0;const fill=()=>{document.querySelectorAll(".ew-part:not([style*='none']) textarea").forEach(t=>{if(!t.value){t.value="a few words";t.dispatchEvent(new Event("input",{bubbles:true}));}});};
      for(let i=0;i<4;i++){fill();const nx=document.getElementById("ewNext");if(!nx||nx.disabled)break;if(document.querySelector("#ew_started")&&document.querySelector("#ew_started").offsetParent!==null)break;nx.click();n++;await new Promise(r=>setTimeout(r,200));}
      return n;});
    chk(name+": job 1, reach Where I started, within 3 presses",presses<=3,presses+" presses");
    await ctx.close();
  }
  // hub card
  const hub=fs.readFileSync(__dirname+"/pages/your-story-v16.html","utf8");
  for(const [name,w] of [["phone",390],["desk",1440]]){
    const ctx=await b.newContext({viewport:{width:w,height:900}}); const p=await ctx.newPage();
    await p.clock.setFixedTime(new Date("2026-12-25T12:00:00Z"));
    await p.setContent("<body>"+hub+"</body>"); await p.waitForTimeout(300);
    const r=await p.evaluate(()=>{const c=document.getElementById("aphEndingWell");const g=c.getBoundingClientRect();const sib=document.querySelector('a.aph-card[href="/set-a-stone"]').getBoundingClientRect();return {shown:c.offsetParent!==null,h:Math.round(g.height),sameH:Math.abs(g.height-sib.height)<2||g.top!==sib.top,scrollX:document.documentElement.scrollWidth-document.documentElement.clientWidth,kind:getComputedStyle(c.querySelector(".aph-card-k")).fontFamily===getComputedStyle(document.querySelector('a.aph-card[href="/set-a-stone"] .aph-card-k')).fontFamily};});
    chk("hub/"+name+": card shows on Dec 25, no sideways scroll, same card look",r.shown&&r.scrollX<=0&&r.kind,JSON.stringify(r));
    await ctx.close();
  }
  await b.close(); console.log(res.join("\n")); console.log("\ncounted: "+pass+" of "+total+" ("+Math.round(100*pass/total)+"%)");
})().catch(e=>{console.error(e);process.exit(1)});
