function fibs(n) {
  const sequence = [0, 1];

  if (n < 0) return "Invalid position";
  if (n === 0) return [];
  else if (n === 1) return [sequence[0]];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

function fibsRec(n, sequence = [0, 1]) {
  if (n < 0) return "Invalid position";
  if (n === 0) return [];
  if (n === 1) return [sequence[0]];
  if (sequence.length >= n) return sequence;

  return fibsRec(n, [
    ...sequence, // Use spread operator to deconstruct sequence array and add new elements
    sequence[sequence.length - 1] + sequence[sequence.length - 2],
  ]);
}

console.log(" - Iterative: ");
console.log(fibs(-1));
console.log(fibs(0));
console.log(fibs(1));
console.log(fibs(8));

console.log("\n - Recursive: ");
console.log(fibsRec(-1));
console.log(fibsRec(0));
console.log(fibsRec(1));
console.log(fibsRec(8));
