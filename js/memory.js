function check() {
  const val = document.getElementById("answer").value.toLowerCase().trim();

  if (val === "ayang") {
    confettiBoom();
    setTimeout(() => {
      window.location.href = "map.html";
    }, 800);
  } else {
    alert("Hehe salah, coba lagi 😝");
  }
}
