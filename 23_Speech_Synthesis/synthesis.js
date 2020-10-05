const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
let voices = [];

msg.text = document.querySelector('[name="text"]').value;

function populateVoices(e) {
  voices = e.target.getVoices();
  const voiceOption = voices
    .map(
      voice =>
        `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`
    )
    .join('');

  voicesDropdown.innerHTML = voiceOption;
}

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

function setVoice(e) {
  msg.voice = voices.find(voice => voice.name === e.target.value);
  toggle();
}

function setOption(e) {
  msg[e.target.name] = e.target.value;
  toggle();
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
options.forEach(option => option.addEventListener('change', setOption));
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));
