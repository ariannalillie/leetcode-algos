const smallerNumbersThanCurrent = (nums) => {
  let newArr = [];
  let totalSmallerNums = 0;
  let count = 0;
  while (count <= nums.length - 1) {
    let curr = nums[0];
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < curr) {
        totalSmallerNums++;
      }
    }
    newArr.push(totalSmallerNums);
    totalSmallerNums = 0;
    nums.push(curr);
    nums.shift();
    count++;
  }
  return newArr;
};

const nums = [8, 1, 2, 2, 3];
console.log(smallerNumbersThanCurrent(nums)); // Output: [4,0,1,1,3]
// Explanation:
// For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).
// For nums[1]=1 does not exist any smaller number than it.
// For nums[2]=2 there exist one smaller number than it (1).
// For nums[3]=2 there exist one smaller number than it (1).
// For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).
