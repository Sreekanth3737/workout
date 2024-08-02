const numberOfTrailingZerosInaFactorial = (num) => {
  if (num === 0) {
    return 0;
  }
  let res = 0;
  let powerOfFive = 5;

  while (num >= powerOfFive) {
    res = res + Math.floor(Math.abs(num) / powerOfFive);
    powerOfFive *= 5;
  }
  return res;
};
const num = 25;

console.log(numberOfTrailingZerosInaFactorial(num));
