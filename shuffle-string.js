const shuffleString = (s, indices) => {
  const stringArray = s.split("");
  let orderedArray = [];

  for (let i = 0; i < indices.length; i++) {
    orderedArray[indices[i]] = stringArray[i];
  }
  return orderedArray.join('');
};

const s = "codeleet";
const indices = [4, 5, 6, 7, 0, 2, 1, 3];
console.log(shuffleString(s, indices)); // Output: "leetcode"
// Explanation:
// As shown, "codeleet" becomes "leetcode" after shuffling.
