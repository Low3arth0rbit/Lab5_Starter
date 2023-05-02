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
  const slider = document.getElementById("volume");
  const volIcon = document.getElementById("volume-controls").querySelector("img");
  console.log(volIcon);
  slider.addEventListener("input", (event) => {
    if(slider.value == 0)
      volIcon.src = "./assets/icons/volume-level-0.svg";
    else if(slider.value < 33)
      volIcon.src = "./assets/icons/volume-level-1.svg";
    else if(slider.value < 67)
      volIcon.src = "./assets/icons/volume-level-2.svg";
    else
      volIcon.src = "./assets/icons/volume-level-3.svg";
    aud.volume = slider.value/100;
  });

  //play horn audio
  const playBtn = document.querySelector("button");
  playBtn.addEventListener("click", (event) => {aud.play();});
}