const chat = document.getElementById("chat");
let step = 0;

function bot(text) {
  const d = document.createElement("div");
  d.className = "msg bot fade";
  d.innerText = text;
  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
}

function user(text) {
  const d = document.createElement("div");
  d.className = "msg user fade";
  d.innerText = text;
  chat.appendChild(d);
}

bot("Hai ayang 💛");
bot("Tanggal jadian kita?");

function send() {
  const v = msg.value.toLowerCase();
  user(msg.value);
  msg.value="";

  if (step===0 && v==="0506") {
    step++;
    setTimeout(()=>bot("Aku seneng kamu inget 🥺"),500);
    setTimeout(()=>bot("Warna favorit kamu?"),1200);
    return;
  }

  if (step===1 && ["kuning","biru","merah"].includes(v)) {
    location.href="final.html";
    return;
  }

  bot("Hehe salah 😆");
}
