const distributeCandies = (candyType) => {
  const totalCandies = candyType.length / 2;
  const differentCandies = new Set(candyType);
  return Math.min(differentCandies.size, totalCandies);
};

const candyType = [1, 1, 2, 2, 3, 3];
console.log(distributeCandies(candyType)); // Output: 3
// Explanation: Alice can only eat 6 / 2 = 3 candies.
// Since there are only 3 types, she can eat one of each type.
