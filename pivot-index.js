const pivotIndex = (nums) => {
  let leftSum = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    leftSum += nums[i];
    let rightSum = 0;
    for (let j = i; j < nums.length; j++) {
      rightSum += nums[j];
    }
    if (leftSum === rightSum) return i;
  }
  return -1;
};

const nums = [1, 7, 3, 6, 5, 6];
console.log(pivotIndex(nums)); // Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11
