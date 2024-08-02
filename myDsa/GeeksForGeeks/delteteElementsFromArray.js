function deleteElementsFromArrayByIndex(arr, index) {
  if (index < 0 || index > arr.length) {
    return arr;
  }

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

function findIndex(arr, el) {
  if (el === arr[0]) {
    return 0;
  }
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === el) {
      return i;
    }
  }
  return -1;
}
function deleteElementsFromArray(arr, ele) {
  const index = findIndex(arr, ele);

  for (let i = index; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length = arr.length - 1;
  return arr;
}

const deleteArrrayElementsWithMethodsByIndex = (arr, index) => {
  arr.splice(index, 1);
  return arr;
};

const deleteArrayElementsWithMethods = (arr, ele) => {
  //   let index = arr.indexOf(ele);
  //   if (index != -1) {
  //     arr.splice(index, 1);
  //   }
  //   return arr;
  const index = arr.indexOf(ele);
  if (index === -1) {
    return [...arr];
  }
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

const arr = [1, 2, 3, 4, 5, 6, 7, 6];
// console.log(deleteElementsFromArrayByIndex(arr, 3));
// console.log(deleteElementsFromArray(arr, 1));
// console.log(deleteArrrayElementsWithMethodsByIndex(arr, 5));
console.log(deleteArrayElementsWithMethods(arr, 6));
