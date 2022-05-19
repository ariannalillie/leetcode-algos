// Given an integer array nums and an integer val, remove all
// occurrences of val in nums in-place. The relative order of 
// the elements may be changed.

const removeElement = (nums, val) => {
  let count = 0;

  nums.forEach((num, i) => {
    if (num === val) {
      nums.unshift(...nums.splice(i, 1));
      count++;
    }
  });
  nums.splice(0, count);
  return nums.length;
};

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
console.log(removeElement(nums, val)); // Output: 5, nums = [0,1,4,0,3,_,_,_]
