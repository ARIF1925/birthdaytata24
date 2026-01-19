function confettiBoom(){
  for(let i=0;i<40;i++){
    const c=document.createElement("div");
    c.style.position="fixed";
    c.style.top="-10px";
    c.style.left=Math.random()*100+"vw";
    c.style.width="10px";
    c.style.height="10px";
    c.style.background=`hsl(${Math.random()*360},80%,60%)`;
    c.style.animation="fall 3s linear";
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),3000);
  }
}

function heartFloat(){
  const h=document.createElement("div");
  h.innerHTML="💖";
  h.style.position="fixed";
  h.style.bottom="0";
  h.style.left=Math.random()*100+"vw";
  h.style.fontSize="24px";
  h.style.animation="float 4s forwards";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),4000);
}
@keyframes fall{
  to{transform:translateY(110vh) rotate(360deg)}
}
@keyframes float{
  to{transform:translateY(-110vh);opacity:0}
}
