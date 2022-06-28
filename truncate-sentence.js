const truncateSentence = (s, k) => {
  let splitSentence = s.split(" ");
  const truncSentence = splitSentence.splice(0, k);
  return truncSentence.join(" ");
};

const s = "Hello how are you Contestant";
const k = 4;
console.log(truncateSentence(s, k)); // Output: "Hello how are you"
// Explanation:
// The words in s are ["Hello", "how" "are", "you", "Contestant"].
// The first 4 words are ["Hello", "how", "are", "you"].
// Hence, you should return "Hello how are you".
