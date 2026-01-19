let step = 0;

const puzzles = [
  {
    q:"Pilih tanggal penting kita 💕",
    options:["0101","0506","1208"],
    correct:"0506"
  },
  {
    q:"Pilih warna kesukaan kamu 🎨",
    options:["kuning","hijau","biru","merah"],
    correct:["kuning","biru","merah"]
  }
];

const qEl = document.getElementById("question");
const cEl = document.getElementById("choices");

function render(){
  qEl.innerText = puzzles[step].q;
  cEl.innerHTML = "";
  puzzles[step].options.forEach(o=>{
    const btn = document.createElement("button");
    btn.innerText = o;
    btn.onclick = ()=>check(o);
    cEl.appendChild(btn);
  });
}
render();

function check(val){
  const p = puzzles[step];
  if(
    Array.isArray(p.correct)
      ? p.correct.includes(val)
      : p.correct === val
  ){
    confettiBoom();
    step++;
    if(step < puzzles.length){
      setTimeout(render,700);
    }else{
      setTimeout(()=>location.href="map.html",1000);
    }
  }else{
    document.body.classList.add("shake");
    setTimeout(()=>document.body.classList.remove("shake"),400);
  }
}
