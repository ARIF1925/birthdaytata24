function confettiBoom(){
  for(let i=0;i<40;i++){
    const c=document.createElement("div");
    c.className="confetti";
    c.style.left=Math.random()*100+"vw";
    c.style.background=`hsl(${Math.random()*360},80%,60%)`;
    document.body.appendChild(c);
    setTimeout(()=>c.remove(),4000);
  }
}

function heartFloat(){
  const h=document.createElement("div");
  h.className="heart";
  h.innerHTML="💖";
  h.style.left=Math.random()*100+"vw";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),4000);
}
