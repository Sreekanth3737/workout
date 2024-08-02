// ** print names n times

const printNames = (i, num) => {
  if (i > num) {
    return;
  }
  console.log("sreekanth");
  i = i + 1;
  printNames(i, num);
};

printNames(1, 4);
// ** print 1 to n
const printNumbers = (i, num) => {
  if (i > num) {
    return;
  }
  console.log(i);
  printNumbers(i + 1, num);
};
printNumbers(1, 4);

// **print n to 1

const printNToOne = (i, num) => {
  if (i < 1) {
    return;
  }
  console.log(i);
  printNToOne(i - 1, num);
};
printNToOne(4, 4);

// backtracking 1 to n
const printOneToNByBacktracking = (i, num) => {
  if (i < 1) {
    return;
  }
  printOneToNByBacktracking(i - 1, num);
  console.log(i, "backtracking");
};
printOneToNByBacktracking(4, 4);

// backtracking n to 1
const printNToOneByBackTracking = (i, num) => {
  if (i > num) {
    return;
  }
  console.log("iiii");
  printNToOneByBackTracking(i + 1, num);
  console.log(i, "N TO 1");
};
printNToOneByBackTracking(1, 4);

// sum of n numbers
const sumOfN = (num) => {
  if (num == 0) {
    return 0;
  }
  return num + sumOfN(num - 1);
};

console.log(sumOfN(3), "sum of N");

// factorial of n
const factorialOfN = (num) => {
  if (num === 0) {
    return 1;
  }
  return num * factorialOfN(num - 1);
};

console.log(factorialOfN(4), "factorialof N");

// reverse an array by two pointers
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
const reverseArray = (arr, left, right) => {
  if (left >= right) {
    return arr;
  }
  swap(arr, left, right);
  return reverseArray(arr, left + 1, right - 1);
};

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reverseArray(array, 0, array.length - 1));

// ** reverse array by single pointer
const reverseArrayWithSinglePointer = (arr, i) => {
  if (i >= arr.length / 2) {
    console.log(arr, "arr___");
    return arr;
  }
  swap(arr[i], i, arr[arr.length - i - 1]);
  return reverseArrayWithSinglePointer(arr, i + 1);
};
console.log(reverseArrayWithSinglePointer(array, 0), "output");

// ** is valid palindrome
const isValidPalindrome = (str, i) => {
  if (i >= str.length / 2) {
    return true;
  }
  if (str[i] !== str[str.length - i - 1]) {
    return false;
  }

  return isValidPalindrome(str, i + 1);
};
console.log(isValidPalindrome("madam", 0));

// ** fibonacci with multiple recursion call
const fibonacciNumber = (num) => {
  if (num <= 1) return num;
  let last = fibonacciNumber(num - 1);
  let secondLast = fibonacciNumber(num - 2);
  return last + secondLast;
};

console.log(fibonacciNumber(7));
