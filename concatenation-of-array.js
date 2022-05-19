// Given an integer array of nums of length n, you want to
// create an array ans of length 2n where ans[i] == nums[i]
// and ans[i + n] == nums[i] for 0 <= i < n

const getConcatenation = (nums) => {
  return [...nums, ...nums];
};

const nums = [1, 2, 1];
console.log(getConcatenation(nums)); // Output: [1,2,1,1,2,1]
