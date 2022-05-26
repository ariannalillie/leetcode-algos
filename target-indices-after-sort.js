const targetIndices = (nums, target) => {
  let indicesArr = [];
  const sorted = nums.sort((a, b) => a - b);
  sorted.forEach((num, idx) => {
    if (num === target) {
      indicesArr.push(idx);
    }
  });
  return indicesArr;
};

const nums = [1, 2, 5, 2, 3];
const target = 2;
console.log(targetIndices(nums, target)); // Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
