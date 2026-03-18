# Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
# Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array [index1, index2] of length 2.
# The tests are generated such that there is exactly one solution. You may not use the same element twice.
# Your solution must use only constant extra space.
# Example 1:

# Input: numbers = [2,7,11,15], target = 9
# Output: [1,2]
# Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
# Example 2:

# Input: numbers = [2,3,4], target = 6
# Output: [1,3]
# Explanation: The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].
# Example 3:

# Input: numbers = [-1,0], target = -1
# Output: [1,2]
# Explanation: The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].

#Brute force
# => Loop through all possible pairs of numbers and check if their sum equals the target. If it does, return their indices. O(n^2) time complexity.
# Used pattern: two pointers
# => Since the array is sorted, we can use two pointers to find the two numbers that add up to the target. We can initialize one pointer at the beginning of the array and another pointer
# => Starting at the end of the array, left pointer will start at index 0 and right pointer will start at last index.
# => If the sum of the numbers at each pointer equals the target, returh their indices + 1.
# => If the sum is greater than the target, right pointer will decrement as we need a smaller number to reach the target.
# => If the sum is less than the target, left pointer will increment as we need a larger number to reach the target.
# => Continue this process until the two pointers meet. O(n) time complexity.
# => Space complexity is O(1) as we are using only constant extra space.


from pyparsing import List


class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        left, right = 0, len(numbers) - 1

        while left < right:
            current_sum = numbers[left] + numbers[right]

            if current_sum == target:
                return [left + 1, right + 1]
            elif current_sum < target:
                left += 1
            else:
                right -= 1
        return []
    

        