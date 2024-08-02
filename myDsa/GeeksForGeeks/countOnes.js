// Binary search Algorithm
function countOnes(arr) {
  let left = 0;
  let right = arr.length - 1;
  console.log(arr);

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] == 1) {
      if (mid == arr.length - 1 || arr[mid + 1] == 0) {
        return mid + 1; // We've found the last 1
      }
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return 0;
}

let arr = [1, 1, 1, 1, 0, 0];
console.log(countOnes(arr));
