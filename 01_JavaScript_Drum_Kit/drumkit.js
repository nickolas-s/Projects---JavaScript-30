const keys = document.querySelectorAll('.key');

function playsound(code) {
  const audio = document.querySelector(`audio[data-key=${code}]`);
  const key = document.querySelector(`.key[data-key=${code}]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  key.classList.add('playing');

  key.ontransitionend = () => {
    key.classList.remove('playing');
  };
}

window.addEventListener('keydown', e => {
  const keyCode = e.code;
  playsound(keyCode);
});

keys.forEach(key =>
  key.addEventListener('click', function(e) {
    const keyCode = e.currentTarget.dataset.key;
    playsound(keyCode);
  })
);
