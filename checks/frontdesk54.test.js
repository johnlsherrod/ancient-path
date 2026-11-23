// checks/frontdesk54.test.js — Front Desk 54 (health-6 H6.1). Run: node checks/frontdesk54.test.js scripts/FrontDesk.gs
// Loads FrontDesk.gs top level in a stand-in Apps Script world and exercises deskFeedPush_ and whoPlatform_.
const fs=require('fs'); const src=fs.readFileSync(process.argv[2],'utf8');
let fetches=[], alerts=[], cache={}, props={'tri:secret':'S3CRET','tri:school':'ancient-path'};
let authAnswer={code:200, body:{email:'John@AncientPathCoaching.com'}};
const g={
  UrlFetchApp:{fetch:(u,o)=>{fetches.push({u,o}); if(/auth\/v1\/user/.test(u)) return {getResponseCode:()=>authAnswer.code,getContentText:()=>JSON.stringify(authAnswer.body)}; return {getResponseCode:()=>200,getContentText:()=>JSON.stringify({ok:true,cards:2})};}},
  PropertiesService:{getScriptProperties:()=>({getProperty:k=>props[k]||null,getProperties:()=>props,setProperty:(k,v)=>{props[k]=v},getKeys:()=>Object.keys(props)})},
  CacheService:{getScriptCache:()=>({get:k=>cache[k]||null,put:(k,v)=>{cache[k]=v}})},
  Utilities:{computeDigest:(a,s)=>Array.from(require('crypto').createHash('sha256').update(s).digest()).map(b=>b>127?b-256:b),DigestAlgorithm:{SHA_256:1},Charset:{UTF_8:1},getUuid:()=>'uuid'},
  SpreadsheetApp:{}, LockService:{}, ContentService:{}, HtmlService:{}, Session:{}, MailApp:{}, GmailApp:{}, DriveApp:{}, CalendarApp:{}, ScriptApp:{}, Logger:{log(){}}, console
};
const fn=new Function(...Object.keys(g), src+`
;alert_=function(t){__alerts.push(t)};
people_=function(){return [{email:'john@ancientpathcoaching.com',name:'John Sherrod',role:'admin',room:''},{email:'lead@example.com',name:'Lead',role:'facilitator',room:'R'}]};
return {deskFeedPush_, whoPlatform_, FD, pressKeep_: typeof pressKeep_==='function'?pressKeep_:null, setAlerts:a=>{__alerts=a}};`.replace('__alerts.push','globalThis.__alerts.push'));
globalThis.__alerts=alerts;
const X=fn(...Object.values(g));
let pass=0,fail=0; const ok=(c,n)=>{if(c)pass++;else{fail++;console.log('FAIL: '+n)}};
ok(X.FD.BUILD==='54','the build is 54');
const feed={generated:'2026-11-23T12:00:00Z',build:'54',roster:[{name:'x',phone:'1'}],inbound:{recent:[{summary:'his words'}]},actions:[{key:'note:a',title:'A'}],carrying:[{key:'plan:b',title:'B',note:'n'}],doneThisWeek:3};
X.deskFeedPush_(JSON.stringify(feed));
const push=fetches.find(f=>/desk_feed_push/.test(f.u)); const body=push&&JSON.parse(push.o.payload);
ok(push && push.o.headers.apikey && body.p_secret==='S3CRET' && body.p_school==='ancient-path','the push carries the secret and the school');
ok(body && Object.keys(body.p_feed).sort().join()===['actions','build','carrying','doneThisWeek','generated'].join() ,'the push sends only the cards list and three counts '+(body&&Object.keys(body.p_feed)));
ok(body && !/his words|phone/.test(JSON.stringify(body)) && JSON.stringify(body.p_feed.carrying)==='[{"key":"plan:b"}]','no roster, no what came in, the carried cards by key only');
X.deskFeedPush_('not json'); ok(alerts.length===1 && /could not reach the platform/.test(alerts[0]),'a feed that will not parse is sorted by triage, never thrown');
props={}; fetches=[]; X.deskFeedPush_(JSON.stringify(feed)); ok(fetches.length===0,'no secret set: nothing is sent');
props={'tri:secret':'S3CRET','tri:school':'ancient-path'};
const tok='t'.repeat(40);
let who=X.whoPlatform_(tok,'card_act'); ok(who && who.email==='john@ancientpathcoaching.com','a platform sign-in for an admin on the People tab presses as that person');
fetches=[]; X.whoPlatform_(tok,'undo'); ok(fetches.length===0,'the answer is kept five minutes, under the sign-in\'s hash');
ok(Object.keys(cache).every(k=>k.indexOf(tok)<0) && Object.values(cache).every(v=>v.indexOf(tok)<0),'the sign-in itself is never kept');
const thr=(f)=>{try{f();return null}catch(e){return e&&e.code}};
ok(thr(()=>X.whoPlatform_(tok,'desk'))==='bad_action','the platform sign-in opens only a press, never the whole desk');
ok(thr(()=>X.whoPlatform_('short','card_act'))==='no_key','a short sign-in is refused');
authAnswer={code:401,body:{}}; ok(thr(()=>X.whoPlatform_('u'.repeat(40),'card_act'))==='bad_key','a sign-in the platform does not know is refused');
authAnswer={code:200,body:{email:'stranger@example.com'}}; ok(thr(()=>X.whoPlatform_('v'.repeat(40),'card_act'))==='not_on_list','an email off the People tab is refused');
authAnswer={code:200,body:{email:'lead@example.com'}}; ok(thr(()=>X.whoPlatform_('w'.repeat(40),'card_act'))==='not_yours','a leader on the People tab cannot press our team\'s cards from the platform');
console.log(pass+' passed, '+fail+' failed'); process.exit(fail?1:0);
