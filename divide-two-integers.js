const divide = (dividend, divisor) => {
  if (Math.trunc(dividend / divisor) > 2147483647) return 2147483647; // Check if whole number is greater than the max. If so, return that minus 1.
  return Math.trunc(dividend / divisor);
};

const dividend = -2147483648;
const divisor = -1;
console.log(divide(dividend, divisor)); // Output: 3
// Explanation: 10/3 = 3.33333.. which is truncated to 3.
