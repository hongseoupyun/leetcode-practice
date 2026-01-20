//make one empty array for result, and loop through the given array.
//If the element in the array is existing in the result array skip, otherwise, push that element in result array.

function removeDuplicate(array) {
  let result = [];

  for (i = 0; i < array.length; i++) {
    if (result.indexOf(array[i]) === -1) {
      result.push(array[i]);
    }
  }
  return result;
}

function removeDuplicate2(array) {
  return [...new Set(array)];
}

function removeDuplicate3(array) {
  const map = {};

  for (const char of array) {
    if (map[char]) {
      map[char]++;
    } else {
      map[char] = 1;
    }
  }

  return Object.keys(map);
}

function removeDuplicate4(array) {
  return array.filter((item, index) => array.indexOf(item) === index);
}
console.log(removeDuplicate([1, 1, 2, 2, 3, 4, 5, 6]));
console.log(
  removeDuplicate2(["gmc","jeep","gmc","honda","honda","jeep","gmc","honda"])
);
console.log(
  removeDuplicate3([1, 2, 2, 2, 2, 2, 4, 5, 6, 6, 6, 6, 1, 6, 1, 25])
);
