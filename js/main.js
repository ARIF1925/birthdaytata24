function start(){
  const name = document.getElementById("nameInput").value.trim();
  if(!name) return alert("Nama jangan kosong 😝");

  localStorage.setItem("username", name);
  document.getElementById("music").play();

  setTimeout(()=>location.href="puzzle.html",700);
}
