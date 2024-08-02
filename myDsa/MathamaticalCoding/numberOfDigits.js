const numberOfDigits = (num) => {
  if (typeof num !== "number" || isNaN(num) || !isFinite(num)) {
    throw new Error("input must be a finite number");
  }
  if (num === 0) {
    return 1;
  }

  let count = 0;
  let tempNum = Math.abs(num);

  while (tempNum > 0) {
    tempNum = Math.floor(tempNum / 10);
    count++;
  }
  return count;
};

const num = -12345;
console.log(numberOfDigits(num));
