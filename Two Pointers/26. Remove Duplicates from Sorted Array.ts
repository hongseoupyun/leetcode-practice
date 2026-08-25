/*
Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignored.

Custom Judge:

The judge will test your solution with the following code:

int[] nums = [...]; // Input array
int[] expectedNums = [...]; // The expected answer with correct length

int k = removeDuplicates(nums); // Calls your implementation

assert k == expectedNums.length;
for (int i = 0; i < k; i++) {
    assert nums[i] == expectedNums[i];
}
If all assertions pass, then your solution will be accepted.

 

Example 1:

Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
/*
Brute Force Approach:
1. Create a new array to store the unique elements.
2. Loop through the given array and check if the current element is already present in the new array.
3. If it is not present, add it to the new array.
4. Finally, return the length of the new array.

Time Complexity: O(n^2) - As we are using indexOf method which takes O(n) time for each element in the array.
Space Complexity: O(n) - As we are using a new array to store the unique elements.

Optimal Approach:
1. Use two pointers, one for iterating through the array and another for keeping track of the position of unique elements.
2. Start with index 1, index 0 will be the smallest number as the given an integer array nums sorted in non-decreasing order.
3. Loop through the array starting from index 1 as we are comparing the current number with the previous number to check for duplicates.
4. If the current number is not equal to the previous number, it means it is a unique number and we can add it to the array at index left.
5. Finally, return left which will be the length of the unique elements in the array.

Time Complexity: O(n) - As we are iterating through the array once.
Space Complexity: O(1) - As we are not using any extra space.
*/



function removeDuplicates(nums: number[]): number {

    if (nums.length === 0) return 0;
    // Start with index 1, index 0 will be the smallest number as the given an integer array nums sorted in non-decreasing order
    let leftPointer = 1
    // Loop through the array starting from index 1 as we are comparing the current number with the previous number to check for duplicates
    for (let r = 1; r < nums.length; r++) {
        // If the current number is not equal to the previous number, it means it is a unique number and we can add it to the array at index left
        if (nums[r] !== nums[r - 1]) {
            nums[leftPointer] = nums[r]
            leftPointer++
        }
    }
    return leftPointer


};