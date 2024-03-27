function fibs(n) {
  if (n <= 1) return n;

  sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }

  return sequence;
}

function fibsRec(n) {
  if (n <= 1) return n;

  return fibsRec(n - 1) + fibsRec(n - 2);
}

const position = 8;

console.log(`Calculating fibonacci sequence of ${position}:`);
console.log(
  ` - Iterative: [${fibs(position)}]\n - Recursive: ${fibsRec(position)}`
);
