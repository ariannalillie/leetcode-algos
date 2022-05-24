const twoSum = (numbers, target) => {
  const idxArr = [];

  for (let i = 0; i < numbers.length - 1; i++) {
      console.log(numbers[i], numbers[i + 1])
  }

  return idxArr;
};

const numbers = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(numbers, target)); // Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2.
// We return [1, 2].
