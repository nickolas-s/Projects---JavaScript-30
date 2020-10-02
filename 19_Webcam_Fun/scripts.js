const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const photoBtn = document.querySelector('button');
const filtersInput = document.querySelector('.filters');
let filterInterval;

async function getVideo() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
  });
  video.srcObject = stream;

  await video.play();
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // Red
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // Green
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] + 100; // Red
    pixels.data[i + 500] = pixels.data[i + 1] - 50; // Green
    pixels.data[i - 550] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

// function greenScreen(pixels) {
//   const levels = {};

//   document.querySelectorAll('.rgb input').forEach(input => {
//     levels[input.name] = input.value;
//   });

//   for (let i = 0; i < pixels.data.length; i += 4) {
//     const red = pixels.data[i + 0];
//     const green = pixels.data[i + 1];
//     const blue = pixels.data[i + 2];
//     const alpha = pixels.data[i + 3];

//     if (
//       red >= levels.rmin &&
//       green >= levels.gmin &&
//       blue >= levels.bmin &&
//       red <= levels.rmax &&
//       green <= levels.gmax &&
//       blue <= levels.bmax
//     ) {
//       // take it out!
//       pixels.data[i + 3] = 0;
//     }
//   }

//   return pixels;
// }

function paintToCanvas(filter = 'normal') {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  clearInterval(filterInterval);

  return (filterInterval = setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);

    // // mess with them
    if (filter === 'red') {
      pixels = redEffect(pixels);
    }
    if (filter === 'split') {
      pixels = rgbSplit(pixels);
      ctx.globalAlpha = 0.8;
    }
    // if (filter === 'green') {
    //   pixels = greenScreen(pixels);
    // }

    ctx.putImageData(pixels, 0, 0);
  }, 16));
}

function takePhoto() {
  snap.currentTime = 0;
  snap.play();

  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'screenshot');
  link.innerHTML = `<img src="${data}" alt="Screenshot" />`;
  strip.insertBefore(link, strip.firstChild);
}

video.addEventListener('canplay', paintToCanvas);
photoBtn.addEventListener('click', takePhoto);
filtersInput.addEventListener('change', e => {
  const filterOption = e.target.value;
  paintToCanvas(filterOption);
});

getVideo();
