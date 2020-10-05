const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);
let current;

function highlightLink(e) {
  if (e !== undefined) {
    current = e.currentTarget;
  }

  const linkCoords = current.getBoundingClientRect();

  const cords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };

  highlight.style.width = `${cords.width}px`;
  highlight.style.height = `${cords.height}px`;
  highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));

window.addEventListener('resize', () => {
  highlightLink();
});
