function check() {
  const val = document.getElementById("answer").value.toLowerCase();
  if (val === "ayang") {
    window.location.href = "map.html";
  } else {
    alert("Salah 😝");
  }
}
