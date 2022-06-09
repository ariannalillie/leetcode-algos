const mergeSortedArray = (nums1, m, nums2, n) => {
//   const slicedArr1 = nums1.slice(0, m);
//   const slicedArr2 = nums2.slice(0, n);
//   return [...slicedArr1, ...slicedArr2].sort()

nums1.splice(m, m+n,...nums2);
return nums1.sort((a,b) => a-b);
};

const nums1 = [1,2,3,0,0,0];
const m = 3;
const nums2 = [2,5,6];
const n = 3;

console.log(mergeSortedArray(nums1, m, nums2, n));
// Explanation: The arrays we are merging are
// [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6]
// with the underlined elements coming from nums1.
