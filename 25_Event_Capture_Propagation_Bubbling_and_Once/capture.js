const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(e.currentTarget.classList.value);
  // e.stopPropagation();
  // console.log(this.classList.value);
}

divs.forEach(div =>
  div.addEventListener('click', logText, { capture: false, once: true })
);
