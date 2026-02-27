# 303. Range Sum Query - Immutable
# Given integer array
# [2, 0, 4, 5, 3, 1]

# Brute force 
# => Loop through the range and sum up the values each time. O(n) for each query.

# Used pattern: prefix sum
# => Precompute the prefix sum array where prefix[i] is the sum of the first ith elements of the given array.
# => To get the sum of the range from left to right, we can use the formula: 
# => prefix[right] - prefix[left - 1] (if left > 0) or prefix[right] (if left == 0).
# => eg) For the array              [2, 0, 4, 5, 3, 1]
# => the prefix sum array would be: [2, 2, 6, 11, 14, 15]   
# => The sum of the range from index 1 to 3 would be 
# => prefix[3] - prefix[0] = 11 - 2 = 9.
# => The sum of the range from index 0 to 2 would be 
# => prefix[2] = 6.
# => Time complexity for prefix sum pattern is O(n) for preprocessing(to get prefix sum array) and O(1) for each query to get the sum of a range.

# Peusdo code:
# 1. Precompute the prefix sum array in the constructor using a loop.
# 2. In sumRange method, return the range sum using prefix[right] - prefix[left - 1] if left > 0 else return prefix[right].


from typing import List

class NumArray:

    def __init__(self, nums: List[int]):
        self.prefixArr = []
        current_sum = 0
        for num in nums:
            current_sum += num
            self.prefixArr.append(current_sum)

    def sumRange(self, left: int, right: int) -> int:
        if left == 0:
            return self.prefixArr[right]
        else: 
            return self.prefixArr[right] - self.prefixArr[left-1]
        
        
obj = NumArray([2,0,4,5,3,1])
print(obj.sumRange(1,3))
print(obj.sumRange(0,2))