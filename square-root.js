const mySqrt = (x) => {
  // start odd at 1
  let oddNum = 1;
  // count for iterations to get to 0
  let count = 0;

  // while x > 0;
  while (x >= oddNum) {
    x -= oddNum;
    oddNum += 2;
    count++;
  }
  return count;
};

const x = 16;
console.log(mySqrt(x));
// Output: 2
// Explanation: The square root of 8 is 2.82842...,
// and since the decimal part is truncated, 2 is returned.
