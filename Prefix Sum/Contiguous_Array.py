# 525. Contiguous Array
# Given a binary array, find the maximum length of a contiguous subarray with an equal number
# of 0 and 1.
# Brute force
# => Loop through all possible subarrays and count the number of 0s and 1s in each subarray. O(n^2) time complexity.
# Used pattern: prefix sum
# => We can use a prefix sum approach where we treat 0s as -1 and 1s as +1. This way, if we find the same prefix sum at two different
# indices, it means that the number of 0s and 1s between those indices is equal.
# => We can use a hash map to store the first occurrence of each prefix sum. When we encounter the same prefix sum again, we can calculate the length of the subarray between the first occurrence and the current index, and update the maximum length if necessary.
# => For example, for the array [0, 1, 0], we can convert it to [-1, 1, -1]. The prefix sums would be [-1, 0, -1].
# => The prefix sum 0 occurs at index 1, and the prefix sum -1 occurs at indices 0 and 2. The longest subarray with equal number of 0s and 1s is from index 0 to index 2, which has a length of 3.
# => Time complexity for this approach is O(n) for iterating through the array and O(n) for the hash map operations, resulting in O(n) overall.             

from typing import List

class Solution:
    def findMaxLength(self, nums: List[int]) -> int:
        # 1. Use a hashmap to store the prefix sum (count) and the index where it first appeared.
        # Format: { prefix_sum : first_seen_index }
        # Initialize with {0: -1} to correctly calculate the length when a balanced subarray starts from index 0.
        hashmap = {0: -1}
        max_len = 0
        current_count = 0
        
        for i, num in enumerate(nums):
            # 2. Treat 1 as +1 and 0 as -1 to calculate the balance.
            if num == 1:
                current_count += 1
            else:
                current_count -= 1
            
            # 3. If the exact same prefix sum is already in the hashmap:
            # It means the subarray between that previous index and the current index has a sum of 0 (equal number of 0s and 1s).
            if current_count in hashmap:
                # current index - previous index = length of the balanced subarray
                length = i - hashmap[current_count]
                max_len = max(max_len, length)
            else:
                # If it's a new sum, record its current index. 
                # (We only store the FIRST occurrence to ensure we get the MAXIMUM length later)
                hashmap[current_count] = i
                
        return max_len
