// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example 1:

// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]


//tree structure using depth-first search
//1.there is 2 pointer i and j
//2.set i = j.
//3.when i = 0, j increases using for loop and swap the array[i] and array[j] ,then dfs(i+1,nums)
//4.repeat this untill the i === nums.length
//5.initiate by calling dfs(0,nums) and return result

//recursive
function permuteArray(nums) {
  //global result
  const result = [];

  //depth for search recursive helper function

  const dfs = (i, nums) => {
    //base case
    //if i === nums.length when we are at leaf level of the tree, push the copy of nums to result
    if (i === nums.length) {
      result.push(nums.slice());
      return;
    }

    //dfs recursive case
    //swap it to get one permutation and reswap to go up back
    for (let j = i; j < nums.length; j++) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      dfs(i + 1, nums);
      // unswap the positions as we go back up the tree
      nums[j] = nums[i];
      nums[i] = temp;
    }
  };
  dfs(0, nums);
  return result;
}

console.log(permuteArray([1, 2, 3]));

//iterative
// function permute2(){

// }
