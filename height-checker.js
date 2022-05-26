const heightChecker = (heights) => {
    let heightsCopy = [...heights]
    let count = 0
    heights.sort((a,b) => a-b);
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== heightsCopy[i]) {
            count++;
        }
    }
    return count;
}

const heights = [1,1,4,2,1,3]
console.log(heightChecker(heights)) // Output: 3
// Explanation: 
// heights:  [1,1,4,2,1,3]
// expected: [1,1,1,2,3,4]
// Indices 2, 4, and 5 do not match.