const groupAnagrams = (strs) => {
  sortedStrings = strs.map((word) => word.split("").sort().join(""));
  let hash = {};
  for (let i in strs) {
    if (!hash[sortedStrings[i]]) hash[sortedStrings[i]] = [strs[i]];
    else hash[sortedStrings[i]].push(strs[i]);
  }
  return Object.values(hash);
};
const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
