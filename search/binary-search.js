const binarySearch = (sortedArr, val) => {
  let left = 0;
  let right = sortedArr.length - 1;
  let middle = Math.floor(right / 2);


  while (left < right) {
    if (val === sortedArr[middle]) {
      return middle;
    } else if (val > sortedArr[middle]) {
      left = middle + 1;
      middle = Math.floor((right + left) / 2);
    } else {
      right = middle -1;
      middle = Math.floor((right + left) / 2);
    }
  }
  return -1;
};

console.log(binarySearch([1,2,3,4,5,6], 6))