const sortEvenOdd = (nums) => {
  nums.forEach((num1) => {
    if (num1 % 2 !== 0) {
      nums.forEach(num2 => {
        if (num1 < num2 && num2 % 2 !== 0) {
            swap(num1, num2)
        }
      })
    }
  });
};

const swap = (num1, num2) => {
//   const temp = num1;
//   num1 = num2;
//   num2 = temp;
//   return num1, num2;
console.log('I am swapping', num1, 'and', num2)
};

const nums = [4, 1, 2, 3, 7];
console.log(sortEvenOdd(nums));
