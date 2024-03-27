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
  let leftPosition = 0;
  let rightPosition = 0;

  while (leftPosition < leftArray.length && rightPosition < rightArray.length) {
    if (leftArray[leftPosition] < rightArray[rightPosition]) {
      result.push(leftArray[leftPosition]);
      leftPosition++;
    } else {
      result.push(rightArray[rightPosition]);
      rightPosition++;
    }
  }

  // Remaning elements
  result.push(...leftArray.slice(leftPosition));
  result.push(...rightArray.slice(rightPosition));

  return result;
}

const result = mergeSort([105, 79, 100, 110]);
console.log(result);

// const array = [1, 2, 3];

// console.log(array.splice(0, 1));
// console.log(array);
