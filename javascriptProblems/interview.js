// 1. Program to find longest word in a given sentence ?
// Input: "This is a demo String find the largest word from it"
// Output: "largest"

const demoStr = "This is a demo String find the largest sreekanth word from it";
const findLargestWordFromStr = (str) => {
  const strArr = str.split(" ");
  let longest = 0;
  let longestWord = null;
  strArr.forEach((useItem) => {
    if (longest < useItem.length) {
      longest = useItem.length;
      longestWord = useItem;
    }
  });
  return longestWord;
};
console.log(findLargestWordFromStr(demoStr));

//  2. How to check whether a string is palindrome or not ?

const isPalindrome = (str) => {
  let j = str.length - 1;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[j]) {
      return false;
    }
    j--;
  }
  return true;
};

console.log(isPalindrome("abcddcba"));

//  3. Write a program to remove duplicates from an array ?

let arr = ["apple", "mango", "apple", "orange", "mango", "mango"];
const removeDuplicates = (duplicatesArr) => {
  // return [... new Set(duplcatesArr)]
  const obj = {};
  const newArr = [];
  for (let useItem of duplicatesArr) {
    if (!obj[useItem]) {
      obj[useItem] = true;
      newArr.push(useItem);
    }
  }
  return newArr;
};
console.log(removeDuplicates(arr));

//  4. Program to find Reverse of a string without using built-in method ?
const str1 = "nanobot";
// Output : str = "skeeGrofskeeG"
const reverseString = (revStr) => {
  let newStr = "";
  for (let char of revStr) {
    newStr = char + newStr;
  }
  return newStr;
};
console.log(reverseString(str1));

//  5. Find the max count of consecutive 1’s in an array ?
// Input: arr[] = {1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1}
// Output: 4
const consicutiveOnesArr = [1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1];

const findMaxCountOfConsicutiveOnes = (consicutiveArr) => {
  let count = 0;
  let result = 0;
  for (let useItem of consicutiveArr) {
    if (useItem === 0) {
      count = 0;
    } else {
      count++;
      result = Math.max(result, count);
    }
  }
  return result;
};

console.log(findMaxCountOfConsicutiveOnes(consicutiveOnesArr));

//  6. Find the factorial of given number ?
const factNum = 4;
const findTheFactorialOfNumber = (num) => {
  let result = 1;
  for (let n = 1; n <= num; n++) {
    result = result * n;
  }
  return result;
};
console.log(findTheFactorialOfNumber(factNum));

//  7. Given 2 arrays that are sorted [0,3,4,31] and [4,6,30]. Merge them and sort [0,3,4,4,6,30,31] ?
const firstArr = [0, 3, 4, 31, 47];
const secondArr = [4, 6, 30, 50, 57];
const mergeSortArr = (firstArr, secondArr) => {
  // return [...firstArr, ...secondArr].sort((a, b) => a - b);
  const mergedArray = [];
  let i = 0;
  let j = 0;
  while (i < firstArr.length && j < secondArr.length) {
    if (firstArr[i] < secondArr[j]) {
      mergedArray.push(firstArr[i]);
      i++;
    } else {
      mergedArray.push(secondArr[j]);
      j++;
    }
  }
  return mergedArray.concat(firstArr.slice(i).concat(secondArr.slice(j)));
};
console.log(mergeSortArr(firstArr, secondArr));

//  8. Create a function which will accepts two arrays arr1 and arr2. The function should return true if every value in arr1 has its corresponding value squared in array2. The frequency of values must be same.
// Inputs and outputs:
// =============
// [1,2,3],[4,1,9] ==> true
// [1,2,3],[1,9] ====> false
// [1,2,1],[4,4,1] ===> false (must be same frequency)

const isFrequencySame = (arr1, arr2) => {
  const freqArr1 = {};
  const freqArr2 = {};

  for (let item of arr1) {
    freqArr1[item] = (freqArr1[item] || 0) + 1;
  }

  for (let item of arr2) {
    freqArr2[item] = (freqArr2[item] || 0) + 1;
  }

  for (let key in freqArr1) {
    if (!(key * key in freqArr2)) return false;
    if (freqArr2[key * key] !== freqArr1[key]) return false;
  }

  return true;
};

console.log(isFrequencySame([1, 2, 3], [4, 1, 9])); // true
console.log(isFrequencySame([1, 2, 3], [1, 9])); // false
console.log(isFrequencySame([1, 2, 1], [4, 4, 1])); // false

//238. Product of Array Except Self
// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
var productExceptSelf = function (nums) {
  const result = Array(nums.length).fill(1);
  let left = 1;
  let right = 1;
  for (let i = 0; i < nums.length; i++) {
    result[i] *= left;
    left *= nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }
  return result;
};
console.log(productExceptSelf([1, 2, 3, 4]));

// ** implement this code  const result =calc.add(10).multipy(3).subtract(5) => result.total

const calc = {
  total: 0,
  add(n) {
    this.total += n;
    return this;
  },
  multiply(n) {
    this.total *= n;
    return this;
  },
  subtract(n) {
    this.total -= n;
    return this;
  },
};

const result = calc.add(100).multiply(3).subtract(100);
console.log(result.total);

//  9. Given two strings. Find if one string can be formed by rearranging the letters of other string.
//  10. Write logic to get unique objects from below array ?
//  I/P: [{name: "sai"},{name:"Nang"},{name: "sai"},{name:"Nang"},{name: "111111"}];
//  O/P: [{name: "sai"},{name:"Nang"}{name: "111111"}
//  11. Write a JavaScript program to find the maximum number in an array.
//  12. Write a JavaScript function that takes an array of numbers and returns a new array with only the even numbers.
//  13. Write a JavaScript function to check if a given number is prime.
//  14. Write a JavaScript program to find the largest element in a nested array.
//  [[3, 4, 58], [709, 8, 9, [10, 11]], [111, 2]]
//  15. Write a JavaScript function that returns the Fibonacci sequence up to a given number of terms.
//  16. Given a string, write a javascript function to count the occurrences of each character in the string.
//  17. Write a javascript function that sorts an array of numbers in ascending order.
//  18. Write a javascript function that sorts an array of numbers in descending order.
//  19. Write a javascript function that reverses the order of words in a sentence without using the built-in reverse() method.
//  20. Implement a javascript function that flattens a nested array into a single-dimensional array.
