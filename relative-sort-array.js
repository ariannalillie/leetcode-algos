const relativeSortArray = (arr1, arr2) => {
  let sortedArray = [];
  let extras = new Set(arr1);

  let idx = 0;

  while (idx < arr2.length) {
    let curr = arr2[idx];
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === curr) {
        sortedArray.push(arr1[i]);
        if (extras.has(arr1[i])) {
          extras.delete(arr1[i]);
        }
      }
    }
    idx = idx += 1;
  }

  const sortedExtras = Array.from(extras).sort((a, b) => a - b);
  return [...sortedArray, ...sortedExtras];
};

const arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19];
const arr2 = [2, 1, 4, 3, 9, 6];
console.log(relativeSortArray(arr1, arr2)); // Output: [2,2,2,1,4,3,3,9,6,7,19]
