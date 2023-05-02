// explore.js



window.addEventListener('DOMContentLoaded', init);


function init() {
  const synth = window.speechSynthesis;
  let voices = [];
  const voiceSelect = document.getElementById("voice-select")
  voices = synth.getVoices();
  console.log(speechSynthesis.getVoices());
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += " — DEFAULT";
    }

    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSelect.add(option);
  }
  console.log(voices);
}
