const lengthOfLastWord = (s) => {
    const wordsArr = s.trim().split(/\s+/);
    const lastWord = wordsArr[wordsArr.length -1]
    return lastWord.length;
};

const s = "Hello World"
// Input: s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s)) // Output: 5
// Explanation: The last word is "World" with length 5.