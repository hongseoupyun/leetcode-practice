# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
# Notice that the solution set must not contain duplicate triplets.
# Example 1:

# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]
# Explanation: 
# nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
# nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
# nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
# The distinct triplets are [-1,0,1] and [-1,-1,2].
# Notice that the order of the output and the order of the triplets does not matter.
# Example 2:

# Input: nums = [0,1,1]
# Output: []
# Explanation: The only possible triplet does not sum up to 0.
# Example 3:

# Input: nums = [0,0,0]
# Output: [[0,0,0]]
# Explanation: The only possible triplet sums up to 0.

#Brute force
# => Loop through all possible triplets and check if their sum equals 0. If it does, add the triplet to a set to avoid duplicates. O(n^3) time complexity
# Used pattern: two pointers
# =>To use two pointers pattern, sort the nums array in ascending order. Then, loop through the sorted array.
# => For each number, use two pointers to find pairs that sums up to -current number.
# => For eaxmple, There is 3 numbers a,b,c, then with having a as the current number, find paris of b and c that sumps up to -a using two pointers so that a + b + c = 0.
# => If the sum of the three numbers is 0, add the triplet to the result list. 
# => If the sum is less than 0, move the left pointer to the right to increase the sum. 
# => If the sum is greater than 0, move the right pointer to the left to decrease the sum.
# => To avoid duplicates, skip the same number for the current number and also skip the same number for the left and right pointers.
# => Time complexity is O(n^2) as we are looping twice through the array, once for the current number and once for the two pointers.
# => Space complexity is O(n) for the result list in the worst case

class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        result = []

        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i-1]:
                continue

            left_pointer = i + 1
            right_pointer = len(nums) - 1

            while left_pointer < right_pointer:
                current_sum = nums[i] + nums[left_pointer] + nums[right_pointer]

                if current_sum == 0:
                    result.append([nums[i], nums[left_pointer], nums[right_pointer]])

                    while left_pointer < right_pointer and nums[left_pointer] == nums[left_pointer + 1]:
                        left_pointer += 1
                    while left_pointer < right_pointer and nums[right_pointer] == nums[right_pointer - 1]:
                        right_pointer -= 1

                    left_pointer += 1
                    right_pointer -= 1
                elif current_sum < 0:
                    left_pointer += 1
                else:
                    right_pointer -= 1

        return result
        