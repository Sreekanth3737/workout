/**
 * program to find all prime factors of a number
 */

const findAllPrimeFactors = (num) => {
  if (num < 2) return;
  let i = 2;
  const arr = [];
  while (i * i < num) {
    while (num % i === 0) {
      arr.push(i);
      num = num / i;
    }
    i++;
  }
  if (num > 1) {
    arr.push(num);
  }
  return arr.join(",");
};
console.log(findAllPrimeFactors(40));
