const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// -------- Array.prototype.some() --------
// 1. Is at least one person 19 or older in the people array?
console.log('Exercise 01');

const isAdult = people.some(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
console.log({ isAdult });

// -------- Array.prototype.every() --------
// 2. Is everyone 19 or older?
console.log('Exercise 02');

const allAdults = people.every(person => {
  const currentYear = new Date().getFullYear();
  return currentYear - person.year >= 19;
});
console.log({ allAdults });

// -------- Array.prototype.find() --------
// Find is like filter, but instead returns just the one you are looking for
// 3. Find the comment with the ID of 823423
console.log('Exercise 03');
function findByID(id) {
  return function(comment) {
    return comment.id === id;
  };
}
const findId = comments.find(findByID(823423));
console.log({ findId });

// or
const findId2 = comments.find(comment => comment.id === 823423);
console.log({ findId2 });

// -------- Array.prototype.findIndex() --------
// 4. Find the index of the comment with ID of 823423
console.log('Exercise 04');
const index = comments.findIndex(comment => comment.id === 823423);
console.log({ index });

// 5. Delete the comment with the ID of 823423
console.log('Exercise 05');
const newComments = [...comments.slice(0, index), ...comments.slice(index + 1)];
console.log({ newComments });
