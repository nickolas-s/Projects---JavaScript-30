const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];
// -------- Array.prototype.filter() --------
// 1. Filter the list of inventors for those who were born in the 1500's
console.log('Exercise 01');
const fifteen = inventors.filter(
  inventor => inventor.year >= 1500 && inventor.year <= 1599
);
console.log({ fifteen });

// -------- Array.prototype.map() --------
// 2. Give us an array of the inventors first and last names
console.log('Exercise 02');
const fullNames = inventors.map(
  inventor => `${inventor.first} ${inventor.last}`
);
console.log({ fullNames });

// -------- Array.prototype.sort() --------
// 3. Sort the inventors by birthdate, oldest to youngest
console.log('Exercise 03');
const sortByBirthdate = inventors.sort((a, b) => a.year - b.year);
console.log({ sortByBirthdate });

// -------- Array.prototype.reduce() --------
// 4. How many years did all the inventors live all together?
console.log('Exercise 04');
const totalYears = inventors.reduce(
  (acc, currentInventor) =>
    acc + (currentInventor.passed - currentInventor.year),
  0
);
console.log({ totalYears });

// -------- 5. Sort the inventors by years lived --------
console.log('Exercise 05');
const sortByYearsLived = inventors.sort((a, b) => {
  const inventor1 = a.passed - a.year;
  const inventor2 = b.passed - b.year;
  return inventor2 - inventor1;
});
console.log({ sortByYearsLived });

//  -------- 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name  --------
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevards = Array.from(document.querySelectorAll('.mw-category a'));
const de = boulevards
  .map(boulevard => boulevard.textContent)
  .filter(streetName => streetName.includes('de'));

// -------- 7. sort Exercise  --------
// Sort the people alphabetically by last name
console.log('Exercise 07');
// eslint-disable-next-line prettier/prettier
const people = ['Xavier, Charles', 'Scott, Summers', 'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra','Bethea, Erin', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Blake, William', 'Allen, Woody'];

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log({ alpha });

// -------- 8. Reduce Exercise --------
// Sum up the instances of each of these
console.log('Exercise 08');
// eslint-disable-next-line prettier/prettier
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce((obj, vehicle) => {
  if (!obj[vehicle]) {
    obj[vehicle] = 0;
  }
  obj[vehicle] += 1;
  return obj;
}, {});
console.log({ transportation });
