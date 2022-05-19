// Return a boolean array result of length n, where result[i] is true if,
// after giving the ith kid all the extraCandies, they will have the greatest
// number of candies among all the kids, or false otherwise.

const kidsWithCandies = (candies, extraCandies) => {
  let booleanArr = [];
  const kidWithMostCandies = Math.max(...candies);
  candies.ForEach((kid) => {
    kid + extraCandies >= kidWithMostCandies
      ? booleanArr.push(true)
      : booleanArr.push(false);
  });
  return booleanArr;
};

const candies = [2, 3, 5, 1, 3];
const extraCandies = 3;
console.log(kidsWithCandies(candies, extraCandies)); // Output: [true,true,true,false,true]
// Explanation: If you give all extraCandies to:
// - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.
// - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
// - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.
// - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.
// - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.
