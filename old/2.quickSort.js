//what is quicksort?
//It is divide and conquer sort

//pick pivot value, split array into two and put smaller number than the pivot into left array and put bigger number than the pivot into the right arary.
//Repeat the process all the array and put all sub-arrays together to get return.

function quicksort(array) {
  //edge case
  if (array.length === 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quicksort(leftArr), pivot, ...quicksort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quicksort(leftArr), pivot];
  } else {
    return [pivot, ...quicksort(rightArr)];
  }
}

const arr = [1, 4, 2, 8, 345, 13, 43, 34, 5643, 64, 123, 43, 2, 55, 1234, 92];

console.log(quicksort(arr));
