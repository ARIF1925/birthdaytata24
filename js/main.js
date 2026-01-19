function start(){
  const name = document.getElementById("nameInput").value.trim();
  if(!name) return alert("Nama jangan kosong 😝");

  localStorage.setItem("username", name);

  const music = document.getElementById("music");
  music.play().then(() => {
    setTimeout(() => {
      location.href = "puzzle.html";
    }, 700);
  }).catch(err => {
    console.log("Autoplay blocked:", err);
    location.href = "puzzle.html";
  });
}
