const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter(e) {
  e.target.classList.add('trigger-enter');
  setTimeout(() => {
    if (e.target.classList.contains('trigger-enter')) {
      e.target.classList.add('trigger-enter-active');
    }
  }, 150);

  background.classList.add('open');

  const dropdown = e.target.querySelector('.dropdown');
  const dropdownCords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropdownCords.width,
    height: dropdownCords.height,
    top: dropdownCords.top - navCoords.top,
    left: dropdownCords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave(e) {
  e.target.classList.remove('trigger-enter', 'trigger-enter-active');

  background.classList.remove('open');
}

triggers.forEach(trigger =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener('mouseleave', handleLeave)
);
