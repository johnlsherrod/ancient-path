(function(){
  var m=document.getElementById('menu'),d=document.getElementById('drawer');
  if(m&&d){m.addEventListener('click',function(){var o=d.classList.toggle('open');m.setAttribute('aria-expanded',o?'true':'false');});}
  var b=document.getElementById('sharebtn'),s=document.getElementById('said');
  if(b&&s){b.addEventListener('click',function(){
    var u=location.href,t=b.getAttribute('data-title');
    if(navigator.share&&window.matchMedia&&matchMedia('(pointer:coarse)').matches){navigator.share({title:t,url:u}).catch(function(){});return;}
    var ok=function(){s.textContent=b.getAttribute('data-copied');};
    var no=function(){s.textContent=b.getAttribute('data-manual');};
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(u).then(ok,no);}else{no();}
  });}
})();
