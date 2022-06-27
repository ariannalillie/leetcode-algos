// You have a set of integers s, which originally contains all
// the numbers from 1 to n. Unfortunately, due to some error,
// one of the numbers in s got duplicated to another number in the set,
// which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of
// this set after the error.

// Find the number that occurs twice and the number that is missing and
// return them in the form of an array.

const findErrorNums = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (Math.abs(nums[i] - nums[i + 1]) !== 1) {
        if (nums[i] < nums[i - 1]) {
            return [nums[i], nums[i] - 1] 
        }
      return [nums[i], nums[i]+ 1];
    }
  }
};

const nums = [1,2,2,4];
console.log(findErrorNums(nums)); // Output: [2,3]

const findErrorNums1 = (nums) => {
  let count = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== count) {
      return [nums[i], count];
    }
    count++;
  }
};
