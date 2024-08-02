//** move zeroes to end of an array */

const moveZeroesToEndOfAnArr = (arr) => {
  let left = 0;
  for (let right = 0; right < arr.length; right++) {
    if (arr[right] !== 0) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left++;
    }
  }
  return arr;
};
// console.log(moveZeroesToEndOfAnArr([1, 0, 0, 3, 7, 0]));

const moveZeroes = (nums) => {
  if (nums.length === 0 || nums.length === 1) {
    return;
  }
  let z = 0;
  let nz = 0;
  while (nz !== nums.length) {
    if (nums[nz] !== 0) {
      let temp = nums[nz];
      nums[nz] = nums[z];
      nums[z] = temp;
      nz++;
      z++;
    } else {
      nz++;
    }
  }
  return nums;
};
// console.log(moveZeroes([1, 0, 0, 3, 7, 0]));

const removeElements = (nums, val) => {
  const result = [];
  for (let num of nums) {
    if (num !== val) {
      result.push(num);
    }
  }
  return result;
};
// console.log(removeElements([2, 3, 4, 5, 2], 2));

// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.
var removeElement = function (nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
// console.log(removeElement([2, 3, 4, 5, 2], 4));

const trailingZeroes = function (n) {
  let res = 0;
  while (n > 0) {
    n = Math.floor(n / 5);

    res += n;
    console.log(n, "->", res, "res__");
  }

  return res;
};
// console.log(trailingZeroes(5));

const findTargetElementWasRepeat = (num, target) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  const str = num.toString();
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    console.log(str[i], "iii");
    if (str[i] == target) {
      count++;
    }
  }
  return count;
};
function findTargetElement(number, target) {
  let count = 0;
  while (number > 0) {
    let modlus = number % 10;
    if (modlus === target) {
      count = count + 1;
    }
    number = Math.floor(number / 10);
  }
  return count;
}
// console.log(findTargetElementWasRepeat(123223, 2), "count");

const reverseNumber = (number) => {
  let rev = 0;
  // return parseInt(number.toString().split("").reverse().join(""));
  while (number > 0) {
    let modulus = number % 10;
    rev = rev * 10 + modulus;
    number = Math.floor(number / 10);
  }
  return rev;
};

const findPower = (x, n) => {
  return x ** n;
};
// console.log(findPower(2, 3));

var isValid = function (word) {
  const config = {
    vowels: ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  };
  for (let i of word) {
    if (
      !config.vowels.includes(i.toUpperCase() || i.toLowerCase()) &&
      !config.numbers.includes(i)
    ) {
      return false;
    }
  }
  return true;
};
// console.log(isValid("234Adas"));

/* Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
*/

function longestCommonPrefix(arr) {
  if (arr.length === 0) return "";

  let prefix = arr[0];

  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
}

const Input = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(Input));
