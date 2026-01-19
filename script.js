const text = "Terima kasih sudah jadi bagian terindah dalam hidupku 💖";
let index = 0;
const messageEl = document.getElementById("message");

function typeWriter() {
  if (index < text.length) {
    messageEl.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 80);
  }
}

typeWriter();

// Music play (wajib klik karena aturan browser)
const btn = document.getElementById("playBtn");
const music = document.getElementById("bgMusic");

btn.addEventListener("click", () => {
  music.play();
  btn.style.display = "none";
});
