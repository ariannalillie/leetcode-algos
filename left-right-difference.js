const leftRightDifference = (nums) => {
  let leftSum = [];

  nums.forEach((_, index) => {
    const numsToAdd = nums.slice(0, index);
    let numToAdd = 0;
    numsToAdd.forEach((n) => {
      numToAdd += n;
    });
    leftSum.push(numToAdd);
  });

  return leftSum;
};

const nums = [10, 4, 8, 3];
console.log(leftRightDifference(nums)); // Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
