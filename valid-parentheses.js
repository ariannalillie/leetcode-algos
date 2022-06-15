const isValid = (s) => {
  sAsArr = s.split("");
  for (let i = 0; i < sAsArr.length; i += 2) {
    if (sAsArr[i] === "(" && !(sAsArr[i + 1] === ")")) return false;
    if (sAsArr[i] === "{" && !(sAsArr[i + 1] === "}")) return false;
    if (sAsArr[i] === "[" && !(sAsArr[i + 1] === "]")) return false;
  }
  return true;
};

const s = "(]"
console.log(isValid(s)); // Output: true
