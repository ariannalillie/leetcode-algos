const checkIfPangram = (sentence) => {
  const nonDuplicates = new Set(sentence);

  return nonDuplicates.size === 26;
};

const sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence)); // Output: true
// Explanation: sentence contains at least one of every
// letter of the English alphabet.
