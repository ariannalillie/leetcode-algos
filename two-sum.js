const twoSum = (numbers, target) => {
  let indexArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers.includes(target - numbers[i])) {
      indexArr.push(i + 1);
    }
  }
  return indexArr;
};

const numbers = [2,3,4];
const target = 6;
console.log(twoSum(numbers, target)); // Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore,
// index1 = 1, index2 = 2. We return [1, 2].
