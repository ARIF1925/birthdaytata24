const text = "Hai kamu yang aku sayang 💖";
let i = 0;
const typing = document.getElementById("typing");
const bgm = document.getElementById("bgm");

function type() {
  if (i < text.length) {
    typing.innerHTML += text[i];
    i++;
    setTimeout(type,70);
  }
}
type();

startBtn.onclick = () => {
  if (!nameInput.value) return alert("Nama dulu dong 😆");

  bgm.play(); // FIX autoplay
  localStorage.setItem("music","on");
  location.href="memory.html";
};
