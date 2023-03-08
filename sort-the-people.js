const sortPeople = (names, heights) => {
  let peopleArr = [];
  for (let i = 0; i < names.length; i++) {
    peopleArr.push({
      name: names[i],
      height: heights[i],
    });
  }

  const sortedArr = peopleArr.sort((a, b) => b.height - a.height);

  const sorted = [];
  sortedArr.forEach((item) => {
    sorted.push(item.name);
  });

  return sorted;
};

const names = ["Mary","John","Emma"]
const heights = [180,165,170]
console.log(sortPeople(names, heights)); // Output: ["Mary","Emma","John"]
// Explanation: Mary is the tallest, followed by Emma and John.
