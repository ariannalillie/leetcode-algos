const maximumProduct = (nums) => {
  nums.sort((a, b) => a - b);
  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3]
  );
};

const nums = [-100, -98, -1, 2, 3, 4];
console.log(maximumProduct(nums)); // Output 39200
