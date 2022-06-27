const isAnagram = (s, t) => {
    return s.split('').sort().join('') === t.split('').sort().join('')
}

const s = "anagram"
const t = "nagaram"
console.log(isAnagram(s, t)) // Output: true

