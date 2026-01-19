document.getElementById("startBtn").addEventListener("click", () => {
  const name = document.getElementById("nameInput").value.trim();

  if (name === "") {
    alert("Nama dulu dong 😆");
    return;
  }

  localStorage.setItem("nama", name);
  window.location.href = "puzzle1.html";
});
