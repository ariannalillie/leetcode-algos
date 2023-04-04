const partitionString = (s) => {
    let string = '';
    let uniqueSet = new Set()
    let uniqueStrings = [];

    for (let i = 0; i < s.length; i++) {
        if (uniqueSet.has(s[i])) {
            uniqueSet.clear();
            uniqueStrings.push(string);
            uniqueSet.add(s[i])
            string = s[i]
        } else {
            string = string + s[i]
            uniqueSet.add(s[i])
        }
      }

      return uniqueStrings
};

const s = "abacaba"
console.log(partitionString(s)) // Output: 4
// Explanation:
// Two possible partitions are ("a","ba","cab","a") and ("ab","a","ca","ba").
// It can be shown that 4 is the minimum number of substrings needed.