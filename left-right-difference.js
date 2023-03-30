const leftRightDifference = (nums) => {
  let leftSum = [];
  let rightSum = [];
  let difference = [];

  // populate left sum array
  nums.forEach((_, index) => {
    const numsToAdd = nums.slice(0, index);
    let numToAdd = 0;
    numsToAdd.forEach((n) => {
      numToAdd += n;
    });
    leftSum.push(numToAdd);
  });

  // populate right sum array
  nums.forEach((_, index) => {
    const numsToAdd = nums.slice(index + 1);
    let numToAdd = 0;
    numsToAdd.forEach((n) => {
      numToAdd += n;
    });
    rightSum.push(numToAdd);
  });

  for (let i = 0; i < nums.length; i++) {
    difference.push(Math.abs(leftSum[i] - rightSum[i]));
  }

  return difference;
};

const nums = [10, 4, 8, 3];
console.log(leftRightDifference(nums)); // Output: [15,1,11,22]
// Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].
