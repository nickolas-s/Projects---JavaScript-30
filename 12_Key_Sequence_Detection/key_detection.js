const pressed = [];
const secretCode = 'secret';

window.addEventListener('keyup', e => {
  // Regular Secret Code
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('').includes('sharks')) {
    console.log('🦈🦈🦈🦈');
    sharkify_add();
  } else if (pressed.join('').includes('unicor')) {
    console.log('🦄🦄🦄🦄');
    cornify_add();
  }
});
