const subSequence = (index, arr, resultArr = []) => {
  if (index === arr.length) {
    console.log(resultArr);
    return;
  }
  resultArr.push(arr[index]);
  subSequence(index + 1, arr, resultArr);
  resultArr.pop();
  // not take,element is not added to subsequence
  subSequence(index + 1, arr, resultArr);
};

const arr = [3, 1, 2];
console.log(subSequence(0, arr));
