// Given an integer array nums sorted in non-decreasing order
// return an array of the squares of each number
// sorted in non-decreasing order

const sortedSquares = (nums) => {
  const squared = nums.map((num) => {
    return num * num;
  });
  return squared.sort((a, b) => a - b);
};

const nums = [-7, -3, 2, 3, 11];
console.log(sortedSquares(nums)); // Output: [4,9,9,49,121]
