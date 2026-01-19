function start() {
  const name = document.getElementById("nameInput").value;
  if (!name) return alert("Nama jangan kosong 😝");

  localStorage.setItem("name", name);

  document.getElementById("music").play();

  setTimeout(() => {
    location.href = "puzzle.html";
  }, 800);
}
