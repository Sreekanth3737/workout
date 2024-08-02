const findNthLargestElement = (arr, element) => {
  arr.sort((a, b) => b - a);
  if (element > 0 && element <= arr.length) {
    return arr[element - 1];
  } else {
    return null;
  }
};

console.log(findNthLargestElement([1, 2, 3, 4, 5, 6], 4));
