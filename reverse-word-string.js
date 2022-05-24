const reverseWords = (s) => {
  const newArr = [];
  const wordsArr = s.split(" ");
  wordsArr.forEach((word) => {
    newArr.push([...word].reverse().join(""));
  });
  return newArr.join(" ");
};

const s = "Let's take LeetCode contest";
console.log(reverseWords(s)); // Output: "s'teL ekat edoCteeL tsetnoc"
