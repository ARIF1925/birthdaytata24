const btn = document.getElementById("startBtn");
const bgm = document.getElementById("bgm");

btn.onclick = () => {
  const name = document.getElementById("nameInput").value.trim();
  if (!name) return alert("Nama dulu dong 😆");

  localStorage.setItem("nama", name);
  bgm.play();
  window.location.href = "memory.html";
};
