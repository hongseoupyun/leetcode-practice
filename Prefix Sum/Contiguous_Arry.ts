// # 525. Contiguous Array
// # Given a binary array, find the maximum length of a contiguous subarray with an equal number
// # of 0 and 1.
// # Brute force
// # => Loop through all possible subarrays and count the number of 0s and 1s in each subarray. O(n^2) time complexity.
// # Used pattern: prefix sum
// # => We can use prefux sum, If you treat 1 as +1 and 0 as -1, then prefix sum of a balanced subarray will be 0.
// # => and we can use hashmap to store the prefix sum and the index where it first appeared.
// # => if we encounter the same prefix sum again, it means the subarray between that previous index and the current index has equal number of 0s.
// # => and we can calculate the length of that subarray and that will be an answer for the maximum length of a contiguous subarray with an equal number of 0 and 1.    
// # 
// # Peusdo code:
// # 1. Use a hashmap to store the prefix sum (count) and the index where it first appeared.
// # Hasmap: {prefix sum: index where it first appeared}.
// # 2. Make a hashmap with initial value {0: -1} to handle the case when a balanced subarray starts from index 0.
// # 3. Loop through the array and calculate the prefix sum by treating 1 as +1 and 0 as -1.
// # 4. If the current prefix sum is already in the hashmap, it means we have found a balanced subarray. Calculate its length and update the maximum length if necessary.
// # 5. If the current prefix sum is not in the hashmap, add it with the current index to the hashmap.    
// # Time complexity for this approach is O(n) because we are traversing the array once and hashmap operations are O(1) on average. 
// # Space complexity is also O(n) as we may store all prefix sums possible in the hashmap in the worst case. 
