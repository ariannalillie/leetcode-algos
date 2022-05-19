const calPoints = (ops) => {
    const pointsArr = [];
    for (let i = 0; i < ops.length; i++) {
        if (typeof pointsArr[i] === 'number') {
            pointsArr.push(pointsArr[i])
        }
    }
return pointsArr;
}

const ops = ["5","2","C","D","+"]
console.log(calPoints(ops)) // Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.