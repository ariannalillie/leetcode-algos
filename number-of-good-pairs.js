// Given an array of integers nums, return the number of good pairs.
// A pair (i, j) is called good if nums[i] == nums[j]

const numIdenticalPairs = (nums) => {
  const pairs = [];
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (num1 === num2) {
        pairs.push([i, j]);
      }
    }
  }
  return pairs.length;
};

const nums = [1,2,3,1,1,3]
console.log(numIdenticalPairs(nums)) // Output: 4
// Explanation: There are 4 good pairs 
// (0,3), (0,4), (3,4), (2,5) 0-indexed.