const minDelete = (s) => {
    let sortedString = s.split('').sort();
    console.log(sortedString)
};

const s = "ceabaacb"
console.log(minDelete(s)) // Output: 2
// Explanation: You can delete two 'b's r
// esulting in the good string "aaabcc".
// Another way it to delete one 'b' and one 'c' 
// resulting in the good string "aaabbc".