const containsDuplicate = (nums) => {
    let nonDuplicates = new Set(nums)
    return nonDuplicates.size !== nums.length;
   
}

const nums = [1,2,3,1] // Output: true
console.log(containsDuplicate(nums))

// Solution 1
const containsDuplicate1 = (nums) => {
    let nonDuplicates = new Set()
    let returnBool = false;

    nums.forEach(num => {
        if (nonDuplicates.has(num)) {
            returnBool = true;
        }
        nonDuplicates.add(num)
    })
    return returnBool;
}
