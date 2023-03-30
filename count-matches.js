const countMatches = () => {

}

const items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]]
const ruleKey = "type"
const ruleValue = "phone"
console.log(countMatches(items, ruleKey, ruleValue)) // Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] 
// and ["phone","gold","iphone"]. Note that the item ["computer","silver","phone"] does not match.