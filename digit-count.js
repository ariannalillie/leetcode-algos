const digitCount = (num) => {
  numsCount = {};
  numsArr = num.split("");
  numsArr.forEach((n) => {
    if (numsCount[n]) {
      numsCount[n] += 1;
    } else {
      numsCount[n] = 1;
    }
  });

  numsArr.forEach((n, idx) => {
    if (!(numsCount[idx] == n)) {
      console.log("true");
    } else if (!numsCount[idx]) {
      if (0 == n) {
        console.log("true but doesnt exist");
      }
    }
  });
};

const num = "1210";
console.log(digitCount(num)); //Output: true
// Explanation:
// num[0] = '1'. The digit 0 occurs once in num.
// num[1] = '2'. The digit 1 occurs twice in num.
// num[2] = '1'. The digit 2 occurs once in num.
// num[3] = '0'. The digit 3 occurs zero times in num.
// The condition holds true for every index in "1210", so return true.
