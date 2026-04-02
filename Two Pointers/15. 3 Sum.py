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
# step 1:sorting the array
# => Sort the array in ascending order to use two pointers pattern and to easily skip duplicates.
# step 2: outer loop
# => Fix the first number and loop through the array.
# => Optimazation: Since the array is sorted, if the current number is greater than 0, break the loop as there wont be any triplet that sums up to 0.
# => Duplicate check: if the current number is the same as the previous number, skip it to avoid duplicates.
# step 3: two pointers; left and right
# => With current_sum = nums[i] + nums[left_pointer] + nums[right_pointer], push/append the triplet to the result if the current_sum is 0.
# => Duplicate check: if the next number is the same as the current number, skip it by adding or subtracting 1 to the left or right pointer to avoid duplicates.
# => Similar to 2 sum, do right-=1 if current_sum > 0 and left+=1 if current_sum < 0 to move the pointers towards each other.

# => Time complexity is O(n^2) as we are looping twice through the array, once for the current number and once for the two pointers.
# => Space complexity is O(n) as we are sorting the array once and storing the result in a list/array.

class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        nums.sort()
        result = []

        for i in range(len(nums)):

            # Since the array is sorted, if the current number is greater than 0, we can break the loop as there won't be any triplet that sums up to 0.
            if nums[i] > 0:
                break
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
        