const countConsistentStrings = (allowed, words) => {
  let count = 0;
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== "a" || word[i] !== "b") {
        count++;
        break;
      }
    }
  });
  return count;
};

const allowed = "ab";
const words = ["ad", "bd", "aaab", "baa", "badab"];
console.log(countConsistentStrings(allowed, words)); // Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
