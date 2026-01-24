const input = document.getElementById("nameInput");
const btn = document.getElementById("startBtn");
const typing = document.getElementById("typing");
const bgm = document.getElementById("bgm");

const text = "Hai kamu yang paling spesial 💖";
let i = 0;

function typeIntro() {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeIntro, 50);
  }
}

typeIntro();

btn.addEventListener("click", () => {
  const name = input.value.trim();

  if (!name) {
    alert("Isi nama dulu dong 💕");
    return;
  }

  localStorage.setItem("username", name);

  // Musik mulai setelah interaksi user (biar gak diblok browser)
  bgm.volume = 0.7;
  bgm.play().catch(() => {});

  // Efek fade sebelum pindah halaman
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = "memory.html";
  }, 800);
});
