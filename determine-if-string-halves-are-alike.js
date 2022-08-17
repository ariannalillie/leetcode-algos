const halvesAreAlike = (string) => {
  const vowels = ["a", "e", "i", "o", "u"];
  let count1 = 0;
  let count2 = 0;

  let stringArr = string.split("");

  const half = Math.ceil(stringArr.length / 2);
  const firstHalf = stringArr.splice(0, half);
  const secondHalf = stringArr.splice(-half);

  firstHalf.forEach((letter) => {
    if (vowels.includes(letter.toLowerCase())) {
      count1++;
    }
  });

  secondHalf.forEach((letter) => {
    if (vowels.includes(letter.toLowerCase())) {
      count2++;
    }
  });

  return count1 === count2;
};

const s = "AbCdEfGh";
console.log(halvesAreAlike(s)); // Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel.
// Therefore, they are alike.
