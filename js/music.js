function playMusic(track){
  const old = document.getElementById("bgm");
  if(old) old.remove();

  const audio = document.createElement("audio");
  audio.id = "bgm";
  audio.src = "assets/" + track;
  audio.autoplay = true;
  audio.loop = true;
  document.body.appendChild(audio);
}
