const findFactorialOfNumber = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};
const num = 7;
console.log(findFactorialOfNumber(num));
