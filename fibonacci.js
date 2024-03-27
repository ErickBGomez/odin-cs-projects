function fibs(n) {
  if (n <= 1) return n;

  let total = 0;
  const previous = [1, 0];

  for (let i = 0; i < n - 1; i++) {
    total = previous[0] + previous[1];
    previous[1] = previous[0];
    previous[0] = total;
  }

  return total;
}

function fibsRec(n) {
  if (n <= 1) return n;

  return fibsRec(n - 1) + fibsRec(n - 2);
}

const position = 40;

console.log(`Calculating fibonacci sequence of ${position}:`);
console.log(
  ` - Iterative: ${fibs(position)}\n - Recursive: ${fibsRec(position)}`
);
