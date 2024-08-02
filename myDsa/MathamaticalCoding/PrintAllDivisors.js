// ** brute force approach
const printDivisors = (num) => {
  for (let i = 0; i <= num; i++) {
    if (num % i === 0) {
      console.log(i);
      if (num / i != i) {
        console.log(num / i);
      }
    }
  }
};
console.log(printDivisors(20));

// ** efficient way with root
const printDivisorsWithRoot = (num) => {
  const arr = [];
  let sum = 0;
  for (let i = 0; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      arr.push(i);
      sum = sum + i;
      if (num / i != i) {
        arr.push(num / i);
        sum = sum + num / i;
      }
    }
  }
  arr.sort((a, b) => a - b);
  console.log(arr, "arr__");
  return sum;
};
console.log(printDivisorsWithRoot(36), "2nd");
