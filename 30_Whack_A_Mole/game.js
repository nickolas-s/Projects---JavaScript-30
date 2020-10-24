const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const startBtn = document.querySelector('.start-btn');
const bangSound = document.querySelector('.bang-sound');
const moleSound = document.querySelector('.mole-sound');
const startSound = document.querySelector('.start-sound');
const endSound = document.querySelector('.end-sound');
const highestScore = document.querySelector('.highest');
const highestText = document.querySelector('.highest-text');
const timer = document.querySelector('.timer');
const timerText = document.querySelector('.timer-text');

let lastHole;
let lastMole;
let timeUp = false;
let score = 0;
let highest = 0;
let countdown;

// Local storage
function mirrorToLocalStorage() {
  localStorage.setItem('score', JSON.stringify(highest));
}

function restoreFromLocalStorage() {
  const localStorageScore = JSON.parse(localStorage.getItem('score'));
  if (localStorageScore) {
    highestScore.textContent = `${
      localStorageScore < 10 ? '0' : ''
    }${localStorageScore}`;
    highest = localStorageScore;
  }
}

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  // to avoid repeated holes
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function displayTimeLeft(seconds) {
  const display = `0:${seconds < 10 ? '0' : ''}${seconds}`;
  timer.textContent = display;
}

function runTimer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function peep() {
  const time = randomTime(500, 1000);
  const hole = randomHole(holes);
  hole.firstElementChild.classList.remove('bang');
  hole.classList.add('up');

  moleSound.currentTime = 0;
  moleSound.play();

  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) {
      peep();
    }
  }, time);
}

function startGame() {
  startSound.currentTime = 0;
  startSound.play();
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  startBtn.disabled = true;
  timer.style.color = 'black';
  peep();
  runTimer(10);

  setTimeout(() => {
    timeUp = true;
    // clearInterval(countdown);
    timer.style.color = 'red';

    endSound.currentTime = 0;
    endSound.play();
    startBtn.disabled = false;

    // animation
    timerText.classList.add('shake');
    timerText.addEventListener(
      'animationend',
      () => {
        timerText.classList.remove('shake');
      },
      { once: true }
    );

    if (score > highest) {
      highest = score;
      highestScore.textContent = `${highest < 10 ? '0' : ''}${highest}`;
      mirrorToLocalStorage();
      // animation
      highestText.classList.add('up');
      highestText.addEventListener('animationend', () => {
        highestText.classList.remove('up');
      });
    }
  }, 10000);
}

function bonk(e) {
  if (!e.isTrusted) return; // cheater!!
  if (e.currentTarget === lastMole) return;

  lastMole = e.currentTarget;
  bangSound.currentTime = 0;
  bangSound.play();
  e.currentTarget.classList.add('bang');

  if (timeUp) return;
  score += 1;
  scoreBoard.textContent = score;
  // animation
  scoreBoard.classList.add('up');
  scoreBoard.addEventListener('animationend', () => {
    scoreBoard.classList.remove('up');
  });
}

startBtn.addEventListener('click', startGame);
moles.forEach(mole => mole.addEventListener('click', bonk));
window.addEventListener('load', restoreFromLocalStorage);
