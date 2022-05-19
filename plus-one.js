// Increment the large integer by one and return the resulting 
// array of digits.

const plusOne = (digits) => {
    if (digits.length === 1) digits.unshift(0);
    for(let i = digits.length -1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0;
            continue;
        }
        digits[i]+=1;
        break;
    }
    return digits;
}

const digits1 = [1,2,9];
const digits2 = [9]
console.log(plusOne(digits1)) // Output: [1,2,4]
console.log(plusOne(digits2)) // Output: [1,0]