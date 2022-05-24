const lengthOfLongestSubstring = (s) => {
  if (s === "") return 0;
  if (s === " ") return 1;
  let count = 0;
  // array to keep track of different counts
  let countsArray = [];
  // set to keep track of duplicates
  let duplicates = new Set();
  // iterate through string
  for (let i = 0; i < s.length; i++) {
    // check to see if set has char and if so
    if (duplicates.has(s[i])) {
      // add number to counts array
      countsArray.push(count);
      // reset count
      count = 0;
      // empty set
      duplicates.clear();
    }
    // otherwise, increment count
    count++;
    // add to duplicates set
    duplicates.add(s[i]);
  }
  // math.max counts array
  return countsArray
};

const s = "c";
console.log(lengthOfLongestSubstring(s)); // Output: 3
// Explanation: The answer is "abc", with the length of 3.
