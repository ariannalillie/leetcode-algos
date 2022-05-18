// Given an array of integers nums which is sorted in
//  ascending order, and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.

const search = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

const nums = [-1, 0, 3, 5, 9, 12]; // expect 4
const target = 9;
console.log(search(nums, target));
// Output: 4
