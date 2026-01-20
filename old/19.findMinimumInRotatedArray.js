//You must write an algorithm that runs in O(log n) time.
//binary search
// //Input: nums = [3,4,5,1,2]
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times.

//1.set boundary by declaring left and right
//2.loop while (left<right)
//3.set mid point for binary search
//4.midPoint = Math.floor((left+right)/2)
//5.if(nums[midpoint] > nums[right]), minimum will be nums[midpoint+1] eg)[3,4,5,1,2] 5>2
//6.otherwise, readjust the boundary by setting right = midpoint

// [5,1,2,3,4]
// [4,5,1,2,3]
// [3,4,5,1,2]
function findMin(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let midPoint = Math.floor((left + right) / 2);
    if (nums[midPoint] > nums[right]) {
      left = midPoint + 1;
    } else {
      right = midPoint;
    }
  }
  return nums[left];
}

//O(n)example

function findMin3(nums) {
  return Math.min(...nums);
}

console.log(findMin([5, 1, 2, 3, 4]));
