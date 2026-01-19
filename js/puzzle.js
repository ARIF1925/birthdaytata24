const question = "Apa nama panggilan kamu dari aku?";
const correct = "ayang";

document.getElementById("question").innerText = question;

function check() {
  const a = document.getElementById("answer").value.toLowerCase();
  if (a === correct) {
    document.body.classList.add("success");
    setTimeout(() => location.href = "gallery.html", 1200);
  } else {
    document.body.classList.add("shake");
    setTimeout(() => document.body.classList.remove("shake"), 500);
  }
}
