const removePalindromeSub = (s) => {
   return s == '' ? 0 : s == [...s].reverse().join('') ? 1 : 2;
}

const s = "ababa"
console.log(removePalindromeSub(s)) // Output: 1
// Explanation: s is already a palindrome, so its entirety can be 
// removed in a single step.