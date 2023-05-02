// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  let voices = [];
  const voiceSelect = document.getElementById("voice-select");
  synth.addEventListener("voiceschanged", (event) => {
    voices = window.speechSynthesis.getVoices();
    console.log(voices);
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.add(option);
    }
  });

  const talk = document.querySelector("button");
  talk.addEventListener("click", (event) => {
    document.querySelector("img").src = "./assets/images/smiling-open.png";
    const text = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
    const selected = voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selected) {
        text.voice = voices[i];
      }
    }
    synth.speak(text);
    text.addEventListener("end", (event) => {document.querySelector("img").src = "./assets/images/smiling.png";});
  })
}
