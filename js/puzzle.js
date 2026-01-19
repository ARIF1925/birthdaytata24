let level = 0;

const puzzles = [
  {
    q: "Apa nama panggilan kamu dari aku?",
    a: ["ayang"]
  },
  {
    q: "Tanggal penting kita? (ddmm)",
    a: ["0506"]
  },
  {
    q: "Warna kesukaan kamu?",
    a: ["kuning","biru","merah"]
  }
];

const questionEl = document.getElementById("question");

function showQuestion(){
  questionEl.innerText = puzzles[level].q;
}
showQuestion();

function check(){
  const input = document.getElementById("answer");
  const val = input.value.toLowerCase().trim();

  if(puzzles[level].a.includes(val)){
    confettiBoom();
    level++;
    input.value = "";

    if(level < puzzles.length){
      setTimeout(showQuestion,800);
    } else {
      setTimeout(()=>location.href="gallery.html",1200);
    }
  } else {
    document.body.classList.add("shake");
    setTimeout(()=>document.body.classList.remove("shake"),400);
  }
}
