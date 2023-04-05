// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by deleting some
// (can be none) of the characters without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = (s, t) => {
  let indexOfString = 0;
  let count = 0;

  for (let i = 0; i < t.length; i++) {
    if (indexOfString <= s.length) {
      if (s[indexOfString] === t[i]) {
        indexOfString++;
        count++;
      }
    }
  }
  return count === s.length;
};

const s = "abc";
const t = "ahbgdc";

const s2 = "axc";
const t2 = "ahbgdc";
console.log(isSubsequence(s, t)); // Output: true;
console.log(isSubsequence(s2, t2)); // Output: false
