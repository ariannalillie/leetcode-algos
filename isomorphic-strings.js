const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;

  let sMap = {};
  let tMap = {};

  for (let i = 0; i < s.length; i++) {
    let sChar = s[i];
    let tChar = t[i];

    if (sMap[sChar] == undefined) {
      sMap[sChar] = tChar;
    }

    if (tMap[tChar] == undefined) {
      tMap[tChar] = sChar;
    }

    if (sMap[sChar] != tChar || tMap[tChar] != sChar) {
      return false;
    }
  }
  return true;
};

const s = "egg";
const t = "add";
console.log(isIsomorphic(s, t)); //Output: true
const s2 = "foo";
const t2 = "bar";
console.log(isIsomorphic(s2, t2)); // Output: false
