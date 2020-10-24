const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map(node => node.dataset.time)
  .map(timeCode => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;

const hours = Math.floor(secondsLeft / 3600);
secondsLeft %= 3600;

const min = Math.floor(secondsLeft / 60);
secondsLeft %= 60;

console.log(`${hours}h, ${min}min, ${secondsLeft}sec`);

// To Display Time
const timeDisplay = document.querySelectorAll('.time');
const times = timeNodes.map(node => node.dataset.time);

timeDisplay.forEach((display, index) => {
  display.textContent = times[index];
});
