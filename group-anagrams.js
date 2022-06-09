const groupAnagrams = (strs) => {
    const sortedStrArr = []
    strs.forEach(str => {
        sortedStrArr.push(str.split("").sort().join(""))
    })
    return sortedStrArr;
    
}
const strs = ["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs)) // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]