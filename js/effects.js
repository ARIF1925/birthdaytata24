const text = `
Terima kasih sudah ada.
Terima kasih sudah bertahan.
Terima kasih sudah memilih aku.

Semoga kita terus bareng,
pelan-pelan,
sampai nanti. 💖
`;

let i = 0;
const el = document.getElementById("letterText");

function type() {
  if (i < text.length) {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(type,45);
  }
}
type();

// floating hearts
setInterval(()=>{
  const h=document.createElement("div");
  h.innerText="💖";
  h.style.position="fixed";
  h.style.left=Math.random()*100+"vw";
  h.style.bottom="0";
  h.style.fontSize="20px";
  h.style.animation="floatUp 4s linear";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),4000);
},700);

function confettiBoom() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.background = ["#ff4d6d","#ffd93d","#6bcfff","#a66cff"][Math.floor(Math.random()*4)];
    c.style.animationDuration = (Math.random()*2+1)+"s";
    document.body.appendChild(c);

    setTimeout(()=>c.remove(),3000);
  }
}
