const divide = (dividend, divisor) => {
  let dividendCopy = Math.abs(dividend);
  let divisorCopy = Math.abs(divisor);
  let count = 0;

  while (dividendCopy > divisorCopy) {
    dividendCopy -= divisorCopy;
    count++;
  }

  if (
    ((dividend < 0 || divisor < 0) && !(dividend < 0 && divisor < 0)) 
  ) {
    return -(count);
  }

  return count;
};

const dividend = 1;
const divisor = 1;
console.log(divide(dividend, divisor)); // Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.
