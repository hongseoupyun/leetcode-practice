// # 303. Range Sum Query - Immutable
// # Given integer array
// # [2, 0, 4, 5, 3, 1]

// # Brute force 
// # => Loop through the range and sum up the values each time. O(n) for each query.

// # Used pattern: prefix sum
// # => Precompute the prefix sum array where prefix[i] is the sum of the first ith elements of the given array.
// # => To get the sum of the range from left to right, we can use the formula: 
// # => prefix[right] - prefix[left - 1] (if left > 0) or prefix[right] (if left == 0).
// # => eg) For the array              [2, 0, 4, 5, 3, 1]
// # => the prefix sum array would be: [2, 2, 6, 11, 14, 15]   
// # => The sum of the range from index 1 to 3 would be 
// # => prefix[3] - prefix[0] = 11 - 2 = 9.
// # => The sum of the range from index 0 to 2 would be 
// # => prefix[2] = 6.
// # => Time complexity for prefix sum pattern is O(n) for preprocessing(to get prefix sum array) and O(1) for each query to get the sum of a range.

// # Peusdo code:
// # 1. Precompute the prefix sum array in the constructor using a loop.
// # 2. In sumRange method, return the range sum using prefix[right] - prefix[left - 1] if left > 0 else return prefix[right].


class NumArray {
    private prefixArr: number[];

    constructor(nums: number[]) {
        this.prefixArr = [];
        let currentSum: number = 0;
        for (const num of nums) {
            currentSum += num;
            this.prefixArr.push(currentSum);
        }
    }

    sumRange(left: number, right: number): number {
        if (left === 0) {
            return this.prefixArr[right];
        } else {
            return this.prefixArr[right] - this.prefixArr[left - 1];
        }
    }
}



// # Your NumArray object will be instantiated and called as such:
// # obj = NumArray(nums)
// # param_1 = obj.sumRange(left,right)