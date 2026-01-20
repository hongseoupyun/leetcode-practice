
/*
  * Challenge 1:
  * Given an array of numbers, write a function that returns the index of the element where the value starts to increase
  * If the values continue to decrease then return -1
  * 
  * example 1:
  * [6, 3, 1, 4, 10, 11]
  * In this case, the function should return 3 as the index because the value increases from 1 to 4
  * 
  * example 2:
  * [-2, -9, -10, -14]
  * Function should return -1 in this case because values keep getting smaller
*/

/* Returns true if the array is descending to the elements (homogeneous). */
function isIncreasing(array) {
  for(let i = 0 ; i < array.length ; ++i)
    if(array[i] < array[i + 1])
      return false;
  return true;
}

/* Returns true if the array is incremental (homogeneous) to the elements. */
function isDecreasing(array) {
  for(let i = 0 ; i < array.length ; ++i)
    if(array[i] > array[i + 1])
      return false;
  return true;
}

/* Returns true if the array content is ever-increasing or ever-decreasing. */
function isHomogeneous(array) {
  return isIncreasing(array) || isDecreasing(array);
}

/* return the descending index in the array starting with increasing. */
function getAscendingIndex(array) {
  for(let i = 0 ; i < array.length ; ++i)
    if(array[i] > array[i + 1])
      return i;
  return -1;
}

/* return increasing index in array starting with decreasing. */
function getDescendingIndex(array) {
  for(let i = 0 ; i < array.length ; ++i)
    if(array[i] < array[i + 1])
      return i;
  return -1;
}

/* demo */
function application(array) {

 if(!isHomogeneous(array) && getAscendingIndex(array) != -1) {
    console.log(getDescendingIndex(array));
  }
  if(!isHomogeneous(array) && getDescendingIndex(array) != -1) {
    console.log(getDescendingIndex(array));
  }

}

application([1,2,3,4,3,2,1]);
/*
  * Challenge 2:
  * Given a 2D array, write a function that returns the number of contiguous 0's
  * The array will have the following shape and should be interpreted as:
  * ["1101", "1001", "1010", "1111"]
  * 
  * 1 1 0 1
  * 1 0 0 1
  * 1 0 1 0
  * 1 1 1 1
  * 
  * In this case, the function should return 3 
  * (the zeros aligned vertically on lines 22-23, horizontally on line 23, and again vertically on lines 23-24)
*/

function findContiguous(array) {

  let count = 0

  for (let i = 0; i < array.length; i++) {

    if (array[i][i] === "0" && array[i][i + 1] === "0") {
      count++
    }
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === "0" && array[i + 1][j] === "0") {
        count++
      }
    }
  }
  return console.log(count)

}


findContiguous(["1111", "1001", "1010", "1111"])