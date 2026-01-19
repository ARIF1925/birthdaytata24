const screens = document.querySelectorAll('.screen');
const music = document.getElementById('music');

function nextScreen(n) {
  screens.forEach(s => s.classList.remove('active'));
  document.getElementById(`screen${n}`).classList.add('active');
}

function cekPuzzle1() {
  if (jawab1.value.toLowerCase() === "mall") {
    nextScreen(3);
  } else {
    err1.innerText = "Coba inget lagi 😉";
  }
}

function cekPuzzle2() {
  if (jawab2.value === "1203") {
    nextScreen(4);
    startCountdown();
  } else {
    err2.innerText = "Salah 😆";
  }
}

function startCountdown() {
  let c = 3;
  const cd = document.getElementById('countdown');
  const timer = setInterval(() => {
    cd.innerText = c;
    c--;
    if (c < 0) {
      clearInterval(timer);
      nextScreen(5);
      music.play();
      startTyping();
    }
  }, 1000);
}

function startTyping() {
  const text = "Semoga hari ini penuh senyum, tawa, dan rasa dicintai 🤍";
  let i = 0;
  const el = document.getElementById('typing');
  const t = setInterval(() => {
    el.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(t);
  }, 60);
}

function showFinal() {
  nextScreen(6);
}
