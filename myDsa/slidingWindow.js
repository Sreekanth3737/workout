function slidingWindow(arr, val) {
  if (val > arr.length) {
    return false;
  }
  let max = -Infinity;
  for (let i = 0; i < arr.length - val + 1; i++) {
    let temp = 0;
    for (let j = 0; j < val; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
console.log(slidingWindow([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
// function maxSubarraySum(arr, num) {
//   if (num > arr.length) {
//     return null;
//   }
//   var max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));
function slidingWindowOptimize(arr, val) {
  if (val > arr.length) {
    return false;
  }
  let temp = 0;
  for (let i = 0; i < val; i++) {
    temp = temp + arr[i];
  }
  let max = temp;
  for (let i = val; i < arr.length; i++) {
    temp = temp - arr[i - val] + arr[i];
    max = Math.max(temp, max);
  }
  return max;
}
console.log(slidingWindowOptimize([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

// Javascript code for
// O(n) solution for finding
// maximum sum of a subarray
// of size k
function maxSum(arr, n, k) {
  let max = 0;
  let sum = 0;
  // find initial sum of first k elements
  for (let i = 0; i < k; i++) {
    sum += arr[i];
    max = sum;
  }
  // iterate the array once
  // and increment the right edge
  for (let i = k; i < n; i++) {
    sum += arr[i] - arr[i - k];

    // compare if sum is more than max,
    // if yes then replace
    // max with new sum value
    if (sum > max) {
      max = sum;
    }
  }
  return max;
}

// Driver code
let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let k = 4;
let n = arr.length;
console.log(maxSum(arr, n, k));
