function countUniqueValues(arr) {
  if (arr.length <= 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
console.log(countUniqueValues([1, 2, 3, 4, 5, 5, 5, 6, 6]));

function countUniqueValuesOptimized(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = "sreeant";
  }
  const result = Object.keys(obj);
  return result.length;
}
console.log(countUniqueValuesOptimized([1, 2, 3, 4, 5, 5, 5, 6, 7]));
