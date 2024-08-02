// ** Reverse an array

// Time Complexity: O(n)
// Copying elements to a new array is a linear operation.
// Auxiliary Space Complexity: O(n)
// Additional space is used to store the new array.

const arr = [1, 2, 3, 4, 5];
const reverseAnArray1 = () => {
  if (arr.length === 1) {
    return arr;
  }
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[arr.length - i - 1]);
    // res[i] = arr[arr.length - i - 1];
    res.push(arr[arr.length - i - 1]);
  }
  return res;
};
console.log(reverseAnArray1(arr));

// Time Complexity: O(n)
// The loop runs through half of the array, so it’s linear with respect to the array size.
// Auxiliary Space Complexity: O(1)
// In-place reversal, meaning it doesn’t use additional space.

const reverseAnArray2 = (arr, start, end) => {
  if (arr.length === 1) {
    return arr;
  }
  while (start < end) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
};

const array = [1, 2, 3, 4, 5, 6];
let start = 0;
let end = array.length - 1;
console.log(reverseAnArray2(array, start, end));

// rotate array
let d = 2;
function rotate(arr, d) {
  const res = [];
  for (let i = 0; i < d; i++) {
    res.push(arr[arr.length - i - 1]);
  }

  return [...res, ...arr.slice(0, -d)];
}
const inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(rotate(inputArr, 4));

// rotate array right to left
let d1 = 2;
function rotateRight(arr, d1) {
  const res = [];
  const len = arr.length;
  for (let i = 0; i < d1; i++) {
    res.push(arr[len - d1 + i]);
  }

  return [...res, ...arr.slice(0, len - d)];
}

const inputArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(rotateRight(inputArr1, 4)); // Output: [6, 7, 8, 9, 1, 2, 3, 4, 5]

// ###############################################################################################################
// ###############################################################################################################
// ######## FIND A PEAK ELEMENT WHICH IS NOT SMALLER THAN IT'S NEIGHBOURS #########################################
// ###############################################################################################################
// ###############################################################################################################

// 1.normal way
// 2.recursive binary search
// 3. iterative  binary search
