// Given a non-empty array of integers nums,
// every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity
// and use only constant extra space.

const singleNumber = (nums) => {
  const sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length; i += 2) {
    if (nums[i] !== nums[i + 1]) {
      return nums[i];
    }
  }
};

const nums = [2, 2, 1];
console.log(singleNumber(nums)); // Output: 1
