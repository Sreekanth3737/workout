//sameFrequency Solution//
function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) {
    return false;
  }
  let countNum1 = {};
  let countNum2 = {};

  for (let n1 in strNum1) {
    countNum1[strNum1[n1]] = (countNum1[strNum1[n1]] || 0) + 1;
  }
  for (let n2 in strNum2) {
    countNum2[strNum2[n2]] = (countNum2[strNum2[n2]] || 0) + 1;
  }
  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) {
      return false;
    }
  }
  return true;
}

// console.log(sameFrequency(7237, 7732));

//areThereDuplicates Solution (Frequency Counter)
function areThereDuplicates(num) {
  let strNum = num.toString();
  let collection = {};
  for (let i in strNum) {
    let digit = strNum[i];
    collection[digit] = (collection[digit] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) {
      return true;
    }
  }
  return false;
}

// console.log(areThereDuplicates(34312));

//areThereDuplicates Solution (Multiple Pointers)
function areThereDuplicatesWithMultiplePointers(...args) {
  console.log(args);
//   args.sort((a, b) => {
//     if (a < b) return -1;
//     if (a > b) return 1;
//     return 0;
//   });
    args.sort((a, b) => {
      return a - b;
    });
  console.log(args);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
console.log(areThereDuplicatesWithMultiplePointers(1, 2, 4, 3, 4, 2, 2));
