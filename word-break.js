const wordBreak = (s, wordDict) => {
  const newDict = {};

  wordDict.forEach((word) => {
    newDict[word] = word;
  });

  let word = "";
  let matchingWords = 0;
  for (let i = 0; i < s.length + 1; i++) {
    if (newDict[word]) {
      word = s[i];
      matchingWords++;
    } else {
      word += s[i];
    }
  }
  return matchingWords === wordDict.length;
};

// const newDict = {}
// const stringArr = s.split('')
// wordDict.forEach((word) => {
// newDict[word] = word
// })
// let currentString = ''
// while(stringArr.length) {

// currentString += stringArr.shift()
// if (newDict[currentString]) {
// currentString = ''
// }

const s = "leetcode";
const wordDict = ["leet", "code"];
console.log(wordBreak(s, wordDict)); // Output: true
// Explanation: Return true because "leetcode"
// can be segmented as "leet code".
