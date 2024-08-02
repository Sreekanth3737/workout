function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1;
    obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}
console.log(isAnagram("nagarzm", "anagram"));

function isAnagramWithFunction(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return str1.split("").sort().join(" ") === str2.split("").sort().join(" ");
}
console.log(isAnagramWithFunction("nagaram", "anagram"));

var isAnagram2 = function (s, t) {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  if (s.length !== t.length) return false;

  for (let val of s) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of t) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  for (let key in frequencyCounter1) {
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
};
