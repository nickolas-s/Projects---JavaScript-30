const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
  const y = e.pageY - e.target.offsetTop;
  const percent = y / e.currentTarget.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = `${Math.round(percent * 100)}%`;
  bar.style.height = height;

  const playbackRate = percent * (max - min) + min;
  bar.textContent = `${playbackRate.toFixed(2)}x`;
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
