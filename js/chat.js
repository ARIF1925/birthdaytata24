const chat = document.getElementById("chat");
const status = document.getElementById("status");
const bgm = document.getElementById("bgm");
const ringtone = document.getElementById("ringtone");
const msg = document.getElementById("msg");


let step = 0;
let musicStarted = false;
<audio id="bgm" src="assets/music.mp3" loop></audio>
<audio id="ringtone" src="assets/ringtone.mp3"></audio>


function bot(text) {
  const d = document.createElement("div");
  d.className = "bubble bot";
  d.innerText = text;
  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
}

function user(text) {
  const d = document.createElement("div");
  d.className = "bubble user";
  d.innerText = text;
  chat.appendChild(d);
}

function typing(on=true) {
  status.innerText = on ? "mengetik..." : "online";
}

function voiceNoteFake() {
  const d = document.createElement("div");
  d.className = "bubble bot";
  d.innerHTML = "🎤 Voice note (0:08)";
  chat.appendChild(d);
}

function startMusic() {
  if (!musicStarted) {
    bgm.play();
    musicStarted = true;
  }
}

bot("Hai ayang 💛");
bot("Aku ada sesuatu buat kamu...");

function send() {
  const v = msg.value.toLowerCase();
  if (!v) return;

  startMusic(); // 🔥 FIX AUTOPLAY
  user(msg.value);
  msg.value="";

  if (step===0) {
    typing(true);
    setTimeout(()=>{
      typing(false);
      bot("Nama panggilan kamu dari aku?");
      step++;
    },1200);
    return;
  }

  if (step===1 && v==="ayang") {
    ringtone.play();
    bot("Hehehe bener 😆");
    voiceNoteFake();
    bot("Tanggal jadian kita?");
    step++;
    return;
  }

  if (step===2 && v==="0506") {
    bot("Aku bahagia banget kamu inget 😭");
    bot("Warna favorit kamu?");
    step++;
    return;
  }

  if (step===3 && ["kuning","biru","merah"].includes(v)) {
    location.href="final.html";
    return;
  }

  bot("Hehe salah 😝");
}
