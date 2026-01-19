const text = `
Aku nggak pernah nyangka,
ada seseorang yang bisa bikin aku setenang ini.

Terima kasih sudah bertahan,
sudah sabar,
dan sudah memilih aku.

Aku harap kita terus bareng,
pelan-pelan,
sampai nanti. 💖
`;

let i = 0;
const el = document.getElementById("text");

function type() {
  if (i < text.length) {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    setTimeout(type,40);
  }
}
type();
