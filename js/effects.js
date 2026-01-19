// ================= CONFETTI =================
function confettiBoom() {
  for (let i = 0; i < 40; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = 2 + Math.random() * 3 + "s";
    document.body.appendChild(c);

    setTimeout(() => c.remove(), 5000);
  }
}

// ================= HATI TERBANG =================
function heartFloat() {
  const heart = document.createElement("div");
  heart.innerHTML = "💖";
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
}

// ================= SPARKLE =================
function sparkle(x, y) {
  const s = document.createElement("div");
  s.className = "sparkle";
  s.style.left = x + "px";
  s.style.top = y + "px";
  document.body.appendChild(s);

  setTimeout(() => s.remove(), 1000);
}

// ================= CLICK EFFECT =================
document.addEventListener("click", (e) => {
  sparkle(e.clientX, e.clientY);
});
