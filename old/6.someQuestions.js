// easy
// Write a function longestWord(sentence) that takes the sentence parameter and returns the longest word in the sentence.
// If there are two or more words that are the same length, return the last word from the string with that length.

// medium
// Implement a function that takes an array of zeros and ones and should return true if there is exactly one continuous set of zeros.
// For example [0,0,1,1] should return true, [1,0,0,0,0,1,0] should return false.

// hard
/*
Write a function that returns minimum total cost of adding all array items with the following conditions:

1. You can only add two array items at once
2. Cost of adding two array items is equal to the sum of the two items
3. After adding two items the result becomes a new item that needs to be added

For example, given the array [ 1, 2, 3, 4 ]

- 1st iteration: Add 1 and 2, which costs 3 and yields [ 3, 3, 4 ]. Total cost is 3
- 2nd iteration: Add 3 and 3, which costs 6 and yields [ 6, 4 ]. Total cost is 3 + 6 = 9
- 3rd iteration: Add 6 and 4, which costs 10 and yields [ 10 ]. Total cost is 9 + 10 = 19
- Total cost is 19

Note that this is just an example of how you could approach the solution.
You are allowed to add the numbers in the array in any order that you like so that you can get the minimum total cost.

*/

const array = [1, 2, 3, 4];

function sortArrayDesc(array) {
  let result = [];
  for (i = 0; (i = array.length); i++) {
    let firtValue = array[0];
    if (array[i] < firtValue) {
      result.push(array[i]);
    } else {
      result.push(ar);
    }

    return biggestValue, result;
  }
}
