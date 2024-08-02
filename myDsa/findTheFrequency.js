function charCount(str) {
  var obj = {};
  for (var char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && //numeric (0-9)
    !(code > 64 && code > 91) && //uper alpha(A-Z)
    !(code > 96 && code > 123)
  ) {
    return false;
  }
  return true;
}

const callCharCount = charCount("hello WORLD w !!");
// console.log(callCharCount);

//function to return true if the two arrays are same length  and the squareroot of the each items are available in second array
function sameArrayByLengthAndSquareRoot(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}
let arr1 = [1, 2, 3, 2];
let arr2 = [9, 1, 4, 4];
let getSameArray = spliceSquareArray(arr1, arr2);
console.log(getSameArray);
//niyaz method
function spliceSquareArray(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const obj1 = {};
  const obj2 = {};
  for (let element of arr1) {
    obj1[element] = obj1[element] ? obj1[element] + 1 : 1;
  }
  for (let element of arr2) {
    obj2[element] = obj2[element] ? obj2[element] + 1 : 1;
  }
  console.log(obj1);
  console.log(obj2);
  for (let key in obj1) {
    if (!obj2.hasOwnProperty(key ** 2)) {
      return false;
    }
    console.log(obj1[key], "====", obj2[key ** 2]);
    if (obj1[key] !== obj2[key ** 2]) {
      return false;
    }
  }
  return true;
}

//next method
