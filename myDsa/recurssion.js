function countDown(num) {
  if (num <= 0) {
    return;
  }
  console.log(num, "countdown");
  num--;
  countDown(num);
}
countDown(5);
//sum range
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}
console.log(sumRange(3), "sum in range");

//collect odd values with helper function
function collectOddValues(inputArr) {
  const result = [];

  function helperFunction(arr) {
    if (arr.length <= 0) {
      return;
    }
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    helperFunction(arr.slice(1));
  }
  helperFunction(inputArr);
  return result;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7]), "collect odd values");

//collect odd numbers with pure recursion

function collectOddNumbersWithPureRecursion(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddNumbersWithPureRecursion(arr.slice(1)));
  return newArr;
}
console.log(collectOddNumbersWithPureRecursion([1, 2, 3, 4, 5, 6, 7]));
const originalArray = [1, 2, [3, 4]];
const deepCopy = JSON.parse(JSON.stringify(originalArray));
console.log(deepCopy);

//find the power
function findPower(base, exponent) {
  if (exponent === 0) return 1;
  return base * findPower(base, exponent - 1);
}
console.log(findPower(2, 3), "find power");

//factorial
function factorial(x) {
  if (x < 0) return 0;
  if (x <= 1) return 1;
  return x * factorial(x - 1);
}
console.log(factorial(5), "factorial");
//product of Array
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}
const newArr = [1, 3, 5, 7];
console.log(productOfArray(newArr));

//range in recursively
function recursiveRange(x) {
  if (x === 0) {
    return 0;
  }
  return x + recursiveRange(x - 1);
}
console.log(recursiveRange(2), "range");

function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6), "fibonacci");

function reverse(str) {
  if (str.length <= 1) return str;
  return reverse(str.slice(1)) + str[0];
}

console.log(reverse("hello"), "reverse");
