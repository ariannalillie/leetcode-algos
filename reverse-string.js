const reverseString = (s) => {
    for (let i = 0; i < Math.floor(s.length / 2); i++) {

        let temp = s[i];
        s[i] = s[s.length-1-i];
        s[s.length-1-i] = temp;

    }
    return s
}

const s = ["h","e","l","l","o"]
console.log(reverseString(s)) // Output: ["o","l","l","e","h"]