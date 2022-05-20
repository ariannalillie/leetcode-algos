// Given an integer array nums, move all 0's to the end of it while 
// maintaining the relative order of the non-zero elements.
// DO THIS IN PLACE

const moveZeros = (nums) => {
    return nums.sort((a, b) => {
        if(b === 0) return -1
    })
}

const nums = [0,1,0,3,12]
console.log(moveZeros(nums)) // Output: [1,3,12,0,0]