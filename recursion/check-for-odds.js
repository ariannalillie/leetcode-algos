const checkForOdds = (nums) => {
    if (!nums.length) return false;

    if (nums[0] % 2 === 1) {
        return true;
    } else {
        console.log('i am here')
        nums.shift();
        console.log(nums)
        checkForOdds(nums)
    }
}

const nums = [2,4,6]
console.log(checkForOdds(nums))