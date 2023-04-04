// Solution 1 (Brute force)
const runningSum = (nums) => {
  let total = 0;
  let sum = [];
  nums.forEach((num) => {
    total += num;
    sum.push(total);
  });
  return sum;
};

const nums = [1, 2, 3, 4];
console.log(runningSum(nums)); // Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


// Solution 2
const runningSum2 = (nums) => {
  let total = 0;

  return nums.map((num) => {
    return (total += num);
  });
};

const nums2 = [1, 2, 3, 4];
console.log(runningSum2(nums2)); // Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
