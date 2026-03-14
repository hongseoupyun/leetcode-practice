# 525. Contiguous Array
# Given a binary array, find the maximum length of a contiguous subarray with an equal number
# of 0 and 1.
# Brute force
# => Loop through all possible subarrays and count the number of 0s and 1s in each subarray. O(n^2) time complexity.
# Used pattern: prefix sum
# => We can use prefux sum, If you treat 1 as +1 and 0 as -1, then prefix sum of a balanced subarray will be the same at the start and end of that subarray.
# => and we can use hashmap to store the prefix sum and the index where it first appeared.
# => if we encounter the same prefix sum again, it means the subarray between that previous index and the current index has equal number of 0s(because the prefix sum did not change).
# => and we can calculate the length of that subarray and that will be a candidate for the maximum length of a contiguous subarray with an equal number of 0 and 1.  
# => Do this for whole array and return the maximum length found.  
# 
# Peusdo code:
# 1. Use a hashmap to store the prefix sum (count) and the index where it first appeared.
# Hasmap: {prefix sum: index where it first appeared}.
# 2. Make a hashmap with initial value {0: -1} to handle the case when a balanced subarray starts from index 0.
# 3. Loop through the array and calculate the prefix sum by treating 1 as +1 and 0 as -1.
# 4. If the current prefix sum is already in the hashmap, it means we have found a balanced subarray. Calculate its length and that will be the candidate maximum length if necessary.
# 5. If the current prefix sum is not in the hashmap, add it with the current index to the hashmap. 
# 6. Return the maximum length found after processing the entire array.   
# Time complexity for this approach is O(n) because we are traversing the array once and hashmap operations are O(1) on average. 
# Space complexity is also O(n) as we may store all prefix sums possible in the hashmap in the worst case. 

from typing import List

class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        # 1. Use a hashmap to store the prefix sum (count) and the index where it first appeared.
        # Format: { prefix_sum : first_seen_index }
        # Initialize with {0: -1} to correctly calculate the length when a balanced subarray starts from index 0.
        hashmap = {0: -1}
        max_len = 0
        current_prefix_sum = 0
        
        for i, num in enumerate(nums):
            # 2. Treat 1 as +1 and 0 as -1 to calculate the balance.
            if num == 1:
                current_prefix_sum += 1
            else:
                current_prefix_sum -= 1
            
            # 3. If the exact same prefix sum is already in the hashmap:
            # It means the subarray between that previous index and the current index has a sum of 0 (equal number of 0s and 1s).
            if current_prefix_sum in hashmap:
                # current index - previous index = length of the balanced subarray
                candidate_length = i - hashmap[current_prefix_sum]
                max_length = max(max_length,candidate_length)
            else:
                # If it's a new sum, record its current index. 
                # (We only store the FIRST occurrence to ensure we get the MAXIMUM length later)
                hashmap[current_prefix_sum] = i
                
        return max_len
