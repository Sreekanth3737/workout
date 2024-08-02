function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    console.log(num, "number", avg, "avg");
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
function averagePairOfArray(arr, num) {
  // Sort the input array in ascending order
  arr.sort((a, b) => a - b);
  console.log(arr);

  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    console.log(avg);

    if (avg === num) {
      return true;
    } else if (avg < num) {
      start++;
    } else {
      end--;
    }
  }

  // If the loop completes without finding a pair, return false
  return false;
}

let array = [28, 3, 4, 12, 6, 7, 55, 9, 10];
let num = 15;
console.log(averagePair(array, num));

// console.log(averagePairOfArray(array, num));
