const typing = document.getElementById("typing");
const btn = document.getElementById("startBtn");
const input = document.getElementById("nameInput");
const bgm = document.getElementById("bgm");

const text = "Hai kamu yang paling spesial 💖";
let i=0;
(function type(){
  if(i<text.length){ typing.innerHTML+=text[i++]; setTimeout(type,70); }
})();

btn.onclick = () => {
  if(!input.value) return alert("Isi nama dulu ya");
  localStorage.setItem("username", input.value);
  bgm.play();
  location.href="memory.html";
};
