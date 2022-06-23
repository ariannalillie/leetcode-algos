const findContentChildren = (g, s) => {
  
};

const g = [1,2,3]
const s = [1,1]
console.log(findContentChildren(g,s)) // Output: 1
// Explanation: You have 3 children and 2 cookies. 
// The greed factors of 3 children are 1, 2, 3. 
// And even though you have 2 cookies, since their size is both 1, 
// you could only make the child whose greed factor is 1 content.
// You need to output 1.