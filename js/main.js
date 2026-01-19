function startQuest(){
  const val = document.getElementById("nameInput").value.trim().toLowerCase();
  if(val !== "ayang"){
    alert("Hmm… kayaknya bukan itu 😝");
    return;
  }
  localStorage.setItem("nickname","Ayang");
  document.getElementById("music").play();
  setTimeout(()=>location.href="memory.html",700);
}
