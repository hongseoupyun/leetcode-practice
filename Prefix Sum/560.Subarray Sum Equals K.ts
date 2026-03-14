// # Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
// # A subarray is a contiguous non-empty sequence of elements within an array.

// # Example 1:

// # Input: nums = [1,1,1], k = 2
// # Output: 2
// # Example 2:

// # Input: nums = [1,2,3], k = 3
// # Output: 2

// #Brute force
// # => Loop through all possible subarrays and calculate their sums. If the sum equals k, increment the count. O(n^2) time complexity.

// # Used pattern: prefix sum
// # => Bascially, the total number of subarrays whose sum equals to k will be the same as the total number of cases where current sum - past sum = k.
// # => Hence, past sum = current sum - k, which means we can use a hashmap to store the prefix sum(past sum) and the count of how many that prefix(past) sum appeared.
// # => Loop through the array and calculate the prefix sum, and sotre it in the hashmap in this format { prefix_sum : count_of_how_many_times_it_appeared }.
// # => Set the initial hash map to {0:1} as there is one way to have a sum of 0 (by taking no elements).
// # => If the current sum - k is in the hashmap, it means we have found a subarray that sums to k, and we can increment the counter.
// # => otherwise, we just add the current sum to the hashmap with count 1 if it's not already there, or increment the count if it is already there.
// # => Return the counter after processing the entire array.
// # Time complexity for this approach is O(n) because we are traversing the array once and hashmap operations are O(1) on average. 
// # Space complexity is also O(n) as we may store all prefix sums possible in the hashmap in the worst case.


function subarraySum(nums: number[], k: number): number {
    const hashMap = new Map<number, number>();
    hashMap.set(0, 1);
    let counter = 0;
    let currentSum = 0;

    for (let i = 0; i < nums.length; i++) {
        currentSum += nums[i]

        const target = currentSum - k
        if (hashMap.has(target)) {
            counter += hashMap.get(target)!;
        }
        const currentSumCount = hashMap.get(currentSum) || 0;
        hashMap.set(currentSum, currentSumCount + 1);
    }
    return counter;
};