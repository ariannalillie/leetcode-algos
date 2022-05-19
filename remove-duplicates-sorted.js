// Given an integer array nums sorted in non-decreasing order,
// remove the duplicates in-place such that each unique element
// appears only once. The relative order of the elements should
// be kept the same.

const removeDuplicates = (nums) => {
  const nonDuplicates = [...new Set(nums)];
  for (let i = 0; i < nonDuplicates.length; i++){
    nums[i] = nonDuplicates[i]
    }
  return nonDuplicates.length;
};

nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums)); // Output: 2, nums = [1,2,_]
