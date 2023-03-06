const areOccurancesEqual = (s) => {
  const numCount = {};

  const lettersArr = s.split("");
  lettersArr.forEach((letter) => {
    if (numCount[letter]) {
      numCount[letter] += 1;
    } else {
      numCount[letter] = 1;
    }
  });
  const valuesArr = Object.values(numCount);
  const firstValue = valuesArr[0];
  return valuesArr.every((value) => value === firstValue);
};

const s = "abacbc";
console.log(areOccurancesEqual(s)); // Output: true
// Explanation: The characters that appear in s are 'a', 'b', and 'c'. All characters occur 2 times in s.
