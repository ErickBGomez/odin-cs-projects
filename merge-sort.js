function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // Split array and sort left hand and then right hand
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Merge sorted arrays
  return merge(mergeSort(left), mergeSort(right));
}

function merge(leftArray, rightArray) {
  const result = [];

  return result;
}

console.log([] < [6]);
