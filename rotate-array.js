// Given an array rotate the array to the right by K steps,
// where K is non-negative.
// SORT IN PLACE

const rotate = (nums, k) => {
  let i = 0;
  while (i < k) {
    i++;
    nums.unshift(nums.pop());
  }
  return nums;
};

const nums = [-1, -100, 3, 99];
const k = 2;
console.log(rotate(nums, k)); // Output: [99,-1,-100,3]
