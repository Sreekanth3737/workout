function isSubSequence1(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    } else if (i === str1.length) {
      return true;
    } else {
      j++;
    }
  }
  return false;
}

console.log(isSubSequence1("abc", "aghbrhc"));

// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}
console.log(isSubsequence("abc", "aghbrhc"));

function printSqure(num) {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num; j++) {
      row += "*";
    }
    console.log(row);
  }
}
console.log(printSqure(5));

function printTriangle(num) {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
console.log(printTriangle(5));

function printPyramidTriangle(num) {
  for (let i = 0; i < num; i++) {
    let row = "";
    for (let j = 0; j < num - i - 1; j++) {
      row += " ";
    }
    for (let k = 0; k < 2 * i + 1; k++) {
      row += "*";
    }
    console.log(row);
  }
}

console.log(printPyramidTriangle(5));
