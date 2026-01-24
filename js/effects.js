function typeWriter(id,text,speed=50){
  const el=document.getElementById(id);
  if(!el) return;
  let i=0;
  (function t(){
    if(i<text.length){ el.innerHTML+=text[i++]; setTimeout(t,speed); }
  })();
}

function confettiBoom(){
  for(let i=0;i<80;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=`hsl(${Math.random()*360},100%,50%)`;
    c.style.animationDuration=(Math.random()*3+2)+"s";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),5000);
  }
}
