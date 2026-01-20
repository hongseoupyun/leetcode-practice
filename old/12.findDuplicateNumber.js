//make a copy of array using slice() and sort()
//make an empty array to store duplicated numbers
//loop through the array and find the duplicated by comparing array[i] and array[i+1]

function findDuplicate(array) {
  let sortedArray = array.slice().sort();
  let results = [];

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i] === sortedArray[i + 1]) {
      results.push(sortedArray[i]);
    }
  }
  return results;
}

console.log(findDuplicate([1, 2, 3, 4, 5, 5, 6, 7, 7, 8]));
