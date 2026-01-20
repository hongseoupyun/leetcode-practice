//reculsively split the input array in half until a sub-array with one element is produced
//merge the sorted sub-array together to produce the final result array

function merge(leftArr, rightArr) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    const leftElement = leftArr[leftIndex];
    const rightElement = rightArr[rightIndex];
  
    if (leftElement < rightElement) {
      result.push(leftElement)
      leftIndex++
    } else {
      result.push(rightElement)
      rightIndex++
    }
  }
  // console.log(result)
  return [...result, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)]
}
// console.log(merge([1, 3],[2, 6]))

//reculsive function
function mergeSort(array) {
  //edgecase
  if (array.length <= 1) {
    return array;
  }
  //otherwise,split array into two
  const middleIndex = Math.floor(array.length / 2);
  const leftArr = array.slice(0, middleIndex);
  const rightArr = array.slice(middleIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

console.log(mergeSort([1, 4, 2, 8, 345, 123, 43, 43, 555, 63, 123, 3, 55, 1, 2, 92]));

//[1,4,2,8,345]

//[1,4,2] [8,345]

//[1,4] [2] [8] [345]

//[1] [4] [2] [8] [345]

//[1,4] [2,8] [345]

//[1,2,4,8] [345]

//[1,2,4,8,345]
