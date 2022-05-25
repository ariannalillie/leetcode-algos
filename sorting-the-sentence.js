const sortSentence = (s) => {
  sentenceArr = s.split(" ");
  newArr = [];
  // remove last char from each word and put into a different array
  const sorted = sentenceArr.sort((a, b) => {
    if (a[a.length - 1] > b[b.length - 1]) return 1;
    else if (a[a.length - 1] < b[b.length - 1]) return -1;
    return 0;
  });
  sorted.forEach(word => {
    const cleanWord = word.replace(/\d+/, '')
    newArr.push(cleanWord)
})
return newArr.join(' ');
};

const s = "is2 sentence4 This1 a3";
console.log(sortSentence(s)); // Output: "This is a sentence"
// Explanation: Sort the words in s to their original positions "This1 is2 a3 sentence4",
// then remove the numbers.
