// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  //horn image & audio selector
  const horn = document.getElementById("horn-select");
  const img = document.querySelector("img");
  const aud = document.querySelector("audio");
  const volume = aud.volume;
  horn.addEventListener("change", (event) => {
    img.src = "./assets/images/" + horn.value + ".svg";
    aud.src = "./assets/audio/" + horn.value + ".mp3";
    console.log(img.src);
    console.log(aud.src);
    console.log(volume);
  });

  //volume slider

  //play horn audio
  const playBtn = document.querySelector("button");
  playBtn.addEventListener("click", (event) => {aud.play();});
}