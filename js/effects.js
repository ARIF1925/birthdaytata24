// floating hearts
setInterval(()=>{
  const h=document.createElement("div");
  h.innerText="💖";
  h.style.position="fixed";
  h.style.left=Math.random()*100+"vw";
  h.style.bottom="0";
  h.style.fontSize="24px";
  h.style.animation="float 4s linear";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),4000);
},800);

const style=document.createElement("style");
style.innerHTML=`
@keyframes float {
  to {transform:translateY(-100vh); opacity:0;}
}`;
document.head.appendChild(style);
