// ----- Regular console.log() -----
console.log('%cconsole.log()', 'font-weight:bold; font-size:15px;');

console.log('Hello');

console.log('');

// ----- Interpolated -----
console.log(
  '%cUsing string substitutions',
  'font-weight:bold; font-size:15px;'
);

console.log('Hello I am a %s string', '💩');
const pizza = '🍕';
console.log(`Hello I am a ${pizza} string`);

console.log('');

// ----- Styled -----
console.log('%cStyling console output', 'font-weight:bold; font-size:15px;');

console.log('%c I am some great text', 'font-size:20px; background:red');

console.log('');

// ----- Warning! -----
console.log('%cconsole.warn()', 'font-weight:bold; font-size:15px;');

console.warn('Oh Noooo');

console.log('');

// ----- Error -----
console.log('%cconsole.error()', 'font-weight:bold; font-size:15px;');

console.error('Crap!!');

console.log('');

// ----- Info -----
console.log('%cconsole.info()', 'font-weight:bold; font-size:15px;');

console.info('Cocodiles eat 3-4 people per year');

console.log('');

// ----- Testing -----
console.log('%cconsole.assert()', 'font-weight:bold; font-size:15px;');

const h1 = document.querySelector('h1');
console.assert(h1.classList.contains('ouch'), 'That is wrong!');

console.log('');

// ----- Viewing DOM Elements -----
console.log('%cconsole.dir()', 'font-weight:bold; font-size:15px;');

const p = document.querySelector('p');
console.dir(p);

console.log('');

// ----- Grouping together -----
console.log('%cconsole.groupCollapsed()', 'font-weight:bold; font-size:15px;');

const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'hugo', age: 8 },
];

dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

console.log('');

// ----- counting -----
console.log('%cconsole.count()', 'font-weight:bold; font-size:15px;');

console.count('Nick');
console.count('Nick');
console.count('Nick');
console.count('Stello');
console.count('Nick');
console.count('Nick');
console.count('Stello');

console.log('');

//  ----- table -----
console.log('%cconsole.table()', 'font-weight:bold; font-size:15px;');

console.table(dogs);

console.log('');

// ----- timing -----
console.log('%cconsole.time()', 'font-weight:bold; font-size:15px;');

console.time('fetching Data');
async function fetchData() {
  const data = await fetch('https://api.github.com/users/wesbos');
  const response = await data.json();
  console.timeEnd('fetching Data');
  console.log(response);
}
fetchData();

console.log('');

// ----- clearing -----
// console.clear();
