const runningSum = (nums) => {
    let total = 0
    let sum = []
    nums.forEach(num => {
        total += num;
        sum.push(total)
    })
    return sum;
}

const nums = [1,2,3,4];
console.log(runningSum(nums)) // Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].