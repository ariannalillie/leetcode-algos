const createTargetArray= (nums, index) => {

};

const nums = [0,1,2,3,4]
const index = [0,1,2,2,1]
console.log(createTargetArray(nums, index))
// Output: [0,4,1,3,2]
// Explanation:
// nums       index     target
// 0            0        [0]
// 1            1        [0,1]
// 2            2        [0,1,2]
// 3            2        [0,1,3,2]
// 4            1        [0,4,1,3,2]