const findDifference = (nums1, nums2) => {
  let finalArr1 = new Set();
  let finalArr2 = new Set();

  nums1.forEach((num1) => {
    if (!nums2.includes(num1)) {
        finalArr1.add(num1);
    }
  });

  nums2.forEach((num2) => {
    if (!nums1.includes(num2)) {
        finalArr2.add(num2);
    }
  });
  return [Array.from(finalArr1), Array.from(finalArr2)];
};

const nums1 = [1, 2, 3];
const nums2 = [2, 4, 6];
console.log(findDifference(nums1, nums2)); // Output: [[1,3],[4,6]]
// Explanation:
// For nums1, nums1[1] = 2 is present at index 0 of nums2,
// whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2.
// Therefore, answer[0] = [1,3]. For nums2, nums2[0] = 2 is present at index 1 of nums1,
// whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore,
// answer[1] = [4,6].

// 1st Solution
const findDifference2 = (nums1, nums2) => {
    let finalArr1 = [];
    let finalArr2 = [];
  
    nums1.forEach((num1) => {
      if (!nums2.includes(num1)) {
          if(!(finalArr1.includes(num1))) finalArr1.push(num1);
      }
    });
  
    nums2.forEach((num2) => {
      if (!nums1.includes(num2)) {
          if(!(finalArr2.includes(num2))) finalArr2.push(num2);
      }
    });
    return [finalArr1, finalArr2];
  };