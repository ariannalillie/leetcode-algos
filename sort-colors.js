// Given an array nums with n objects colored red, white, or blue, 
// sort them in-place so that objects of the same color are adjacent, 
// with the colors in the order red, white, and blue.

// You must solve this problem without using the library's sort function.

const sortColors = (nums) => {
  return nums.sort((a, b) => a-b) 
};

const nums = [2,0,2,1,1,0]
console.log(sortColors(nums)) //Output: [0,0,1,1,2,2]