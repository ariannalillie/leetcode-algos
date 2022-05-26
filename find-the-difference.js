const findTheDifference = (s, t) => {
  let differentChar;
  const tAsArr = t.split("");
  const sAsArr = s.split("");
  tAsArr.forEach((char, idx) => {
    if (!sAsArr.includes(char)) {
      differentChar = char;
    } else {
        sAsArr.splice(idx, 1)
    }
  });
  return differentChar;
};

const s = "a";
const t = "aa";
console.log(findTheDifference(s, t)); // Output: "e"
// Explanation: 'e' is the letter that was added.
