const linearSearch = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch([1, 2, 3, 4, 5, 6], 4));
