const bgm = document.getElementById("bgm");

if (localStorage.getItem("music") === "on") {
  bgm.currentTime = localStorage.getItem("time") || 0;
  bgm.play();
}

setInterval(() => {
  localStorage.setItem("time", bgm.currentTime);
}, 1000);

document.getElementById("startBtn").onclick = () => {
  const name = nameInput.value.trim();
  if (!name) return alert("Nama dulu dong 😆");

  localStorage.setItem("nama", name);
  localStorage.setItem("music", "on");

  bgm.play();
  location.href = "memory.html";
};
