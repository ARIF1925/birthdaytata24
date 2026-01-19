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
