const arr = [0, 1, 2, 0, 1, 2];
const sort = (arr) => {
  let c1 = 0;
  let c2 = 0;
  let c3 = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === 0) {
      c1++;
    }
    if (arr[i] === 1) {
      c2++;
    }
    if (arr[i] === 2) {
      c3++;
    }
  }
  let idx = 0;
  // Place all the 0s
  for (let i = 0; i < c1; i++) {
    arr[idx++] = 0;
  }

  // Place all the 1s
  for (let i = 0; i < c1; i++) {
    arr[idx++] = 1;
  }

  // Place all the 2s
  for (let i = 0; i < c2; i++) {
    arr[idx++] = 2;
  }
  return arr;
};
console.log(sort(arr));
