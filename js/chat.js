const chat = document.getElementById("chat");
const status = document.getElementById("status");
const bgm = document.getElementById("bgm");
let step=0, musicStarted=false;

function bot(t){ chat.innerHTML+=`<div class="bubble bot">${t}</div>`; chat.scrollTop=chat.scrollHeight; }
function user(t){ chat.innerHTML+=`<div class="bubble user">${t}</div>`; }
function typing(on=true){ status.innerText=on?"mengetik...":"online"; }

function startMusic(){ if(!musicStarted){ bgm.play(); musicStarted=true; } }

bot("Hai ayang 💛");
bot("Masih inget warna favorit kamu?");

function send(){
  const input=document.getElementById("msg");
  const v=input.value.toLowerCase();
  if(!v) return;
  startMusic();
  user(input.value);
  input.value="";

  if(["kuning","biru","merah"].includes(v)){
    location.href="message.html";
  } else bot("Hehe salah 😝");
}
