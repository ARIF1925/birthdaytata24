document.addEventListener("DOMContentLoaded", function () {

  const chat = document.getElementById("chat");
  const input = document.getElementById("msg");
  const bgm = document.getElementById("bgm");
  const ringtone = document.getElementById("ringtone");
  const status = document.getElementById("status");

  let step = 0;
  let musicStarted = false;

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
    chat.scrollTop = chat.scrollHeight;
  }

  function typing(on = true) {
    if (status) status.innerText = on ? "mengetik..." : "online";
  }

  function voiceNoteFake() {
    const d = document.createElement("div");
    d.className = "bubble bot";
    d.innerHTML = "🎤 Voice note (0:08)";
    chat.appendChild(d);
  }

  function startMusic() {
    if (!musicStarted && bgm) {
      bgm.play();
      musicStarted = true;
    }
  }

  bot("Hai ayang 💛");
  bot("Aku ada sesuatu buat kamu...");

  window.send = function () {
    const v = input.value.toLowerCase().trim();
    if (!v) return;

    startMusic();
    user(input.value);
    input.value = "";

    if (step === 0) {
      typing(true);
      setTimeout(() => {
        typing(false);
        bot("Nama panggilan kamu dari aku?");
        step++;
      }, 1000);
      return;
    }

    if (step === 1 && v === "ayang") {
      if (ringtone) ringtone.play();
      bot("Hehehe bener 😆");
      voiceNoteFake();
      bot("Tanggal jadian kita?");
      step++;
      return;
    }

    if (step === 2 && v === "0506") {
      bot("Aku bahagia banget kamu inget 😭");
      bot("Warna favorit kamu?");
      step++;
      return;
    }

    if (step === 3 && ["kuning", "biru", "merah"].includes(v)) {
      window.location.href = "final.html";
      return;
    }

    bot("Hehe salah 😝");
  };

});
