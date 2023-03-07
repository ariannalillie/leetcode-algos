const shuffleArray = (nums, n) => {
  let shuffleArray = [];

  const firstHalf = nums.slice(0, n);
  const secondHalf = nums.slice(n);

  for (let i = 0; i < firstHalf.length; i++) {
    shuffleArray.push(firstHalf(i));
    shuffleArray.push(secondHalf(i));
  }
  return shuffleArray;
};

const nums = [2,5,1,3,4,7]
const n = 3
console.log(shuffleArray(nums, n)) // Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].
