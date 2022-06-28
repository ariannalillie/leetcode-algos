const majorityElement = (nums) => {
  let numCountObj = {};

  nums.forEach((num) => {
    !numCountObj[num] ? (numCountObj[num] = 1) : (numCountObj[num] += 1);
  });

  for (let num in numCountObj) {
    if (numCountObj[num] > nums.length / 2) return num;
  }
};

const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums)); // Output: 2

// for (let i = 0; i < nums.length; i++) {
//     if (!map[nums[i]]) {
//         map[nums[i]] = 1;
//     } else if (map[nums[i]]) {
//         map[nums[i]] += 1;
//     }
// }
