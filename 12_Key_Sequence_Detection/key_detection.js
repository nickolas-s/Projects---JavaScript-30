const pressed = [];
const secretCode = 'secret';

const konami = [];
const secretCode2 = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a',
];

window.addEventListener('keyup', e => {
  // Regular Secret Code
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes('sharks')) {
    sharkify_add();
  }

  if (pressed.join('').includes('unicor')) {
    cornify_add();
  }

  // Konami Secret Code
  konami.push(e.key);
  konami.splice(-secretCode2.length - 1, konami.length - secretCode2.length);

  if (JSON.stringify(konami) === JSON.stringify(secretCode2)) {
    setInterval(() => {
      nipple_add();
    }, 100);
  }
});
