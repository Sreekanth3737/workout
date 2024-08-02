function removeStars(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "*") {
      stack.push(str[i]);
    } else if (stack.length > 0) {
      stack.pop();
    }
  }
  return stack.join("");
}

const inputString = "abcd**e*f";
const result = removeStars(inputString);
console.log(result);
const arr = ["0", "1", "*", "3", "4", "5", "6"];
const res = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] !== "*") {
    res.push(arr[i]);
  } else if (res.length > 0) {
    res.pop();
  }
}

console.log(res.join(""));
