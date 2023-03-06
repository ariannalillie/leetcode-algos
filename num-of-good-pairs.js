const numberOfGoodPairs = (nums) => {
  let count = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    const num1 = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      const num2 = nums[j];
      if (num1 === num2) count++;
    }
  }
  return count;
};

const nums = [1, 2, 3, 1, 1, 3];
console.log(numberOfGoodPairs(nums)); // Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
