const chat = document.getElementById("chat");
let step = 0;

function add(text, type="bot") {
  const d = document.createElement("div");
  d.className = "msg " + type;
  d.innerText = text;
  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
}

add("Hai ayang 💛");
add("Tanggal jadian kita?");

function send() {
  const v = msg.value.toLowerCase();
  add(msg.value,"user");
  msg.value="";

  if (step===0 && v==="0506") {
    step++;
    add("Inget dong 😭");
    add("Warna favorit kamu?");
    return;
  }

  if (step===1 && ["kuning","biru","merah"].includes(v)) {
    window.location.href="final.html";
    return;
  }

  add("Hmm salah 😆");
}
