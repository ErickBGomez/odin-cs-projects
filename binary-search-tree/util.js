const sortAndRemoveDuplicted = (array) => {
  return [...new Set(array)].sort((a, b) => a - b);
};

// Code from StackOverflow post:
// https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomArray = (length, min, max) => {
  const array = [];

  for (let i = 0; i < length; i++) {
    array.push(randomInt(min, max));
  }

  return array;
};

export { sortAndRemoveDuplicted, randomArray };
