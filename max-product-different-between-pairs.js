const maxProducrDifference = (nums) => {
    nums.sort((a,b) => a-b);
    return Math.abs((nums[0] * nums[1]) - (nums[nums.length-1] * nums[nums.length-2]))
};

const nums = [5,6,2,7,4]
console.log(maxProducrDifference(nums)) // Output: 34
// Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
// The product difference is (6 * 7) - (2 * 4) = 34.