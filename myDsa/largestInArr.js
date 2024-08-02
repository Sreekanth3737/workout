const arr = [1, 7, 5, 4, 3, 2];

const findLargestInArray = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};
console.log(findLargestInArray(arr));
