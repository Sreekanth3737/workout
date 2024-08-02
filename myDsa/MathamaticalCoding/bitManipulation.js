const decimalToBinary = (num) => {
  let binary = "";
  while (num >= 1) {
    let x = num % 2;
    num = Math.floor(num / 2);
    binary = x + binary;
  }
  return binary;
};
console.log(decimalToBinary(45));

const binaryToDecimal = (binaryStr) => {
  let result = 0;
  let powerOf2 = 1;
  for (let i = binaryStr.length - 1; i >= 0; i--) {
    if (binaryStr[i] === "1") {
      result = result + powerOf2;
    }
    powerOf2 = powerOf2 * 2;
  }
  return result;
};
console.log(binaryToDecimal("101101"));
