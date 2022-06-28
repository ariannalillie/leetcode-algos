// A phrase is a palindrome if, after converting all uppercase
// letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters
// and numbers.

const isPlaindrome = (s) => {
  // string to lowercase;
  const lowercaseString = s.toLowerCase();
  // use regex to remove all non alpha chars
  let noSpecialChars = lowercaseString.replaceAll(/\W+/g, "");
  noSpecialChars = noSpecialChars.replaceAll(/_/g, "");
  // convert into array and reverse
  const reverseString = noSpecialChars.split("").reverse().join("");
  // see if reverse string is the same
  // if so return true
  return reverseString == noSpecialChars;
};

const s = "A man, a plan, a canal: Panama";
console.log(isPlaindrome(s)); // Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
