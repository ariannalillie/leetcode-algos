const numJewelsInStones = (jewels, stones) => {
    stonesArr = stones.split('')
    let count = 0
    stonesArr.forEach(stone => {
        if (jewels.includes(stone)) {
            count ++
        }
    })
    return count
};

const jewels = "aA"
const stones = "aAAbbbb"

console.log(numJewelsInStones(jewels, stones))