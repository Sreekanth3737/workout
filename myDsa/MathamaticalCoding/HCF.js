// ** HCF OR euclidGCD
//Bruteforce aproch O(min(a,b))
const findHCFOfTwoNumbers = (num1, num2) => {
  let min = num1 < num2 ? num1 : num2;

  for (let i = min; i >= 1; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      return i;
    }
  }
  return;
};
console.log(findHCFOfTwoNumbers(25, 15));

// Efficient way by euclid's algorithm O(min(a,b))
const euclidHCF = (num1, num2) => {
  while (num1 != num2) {
    if (num1 > num2) {
      num1 = num1 - num2;
    } else {
      num2 = num2 - num1;
    }
    // num1 > num2 ? num1 -= num2 : num2 -= num1;
  }
  return num1;
};

console.log(euclidHCF(123, 133));

//more efficient way by Gabriel Lame's algorithm to find GCD/HCF O(log(min(a,b))
const gabrielLameHCF = (num1, num2) => {
  while (num1 != 0 && num2 != 0) {
    num1 > num2 ? (num1 %= num2) : (num2 %= num1);
  }
  return num1 !== 0 ? num1 : num2;
};
console.log(gabrielLameHCF(133, 371));

//**CHATGPT answer for euclid's algorithm */
function euclidGCD(a, b) {
  // Ensure the numbers are positive
  a = Math.abs(a);
  b = Math.abs(b);

  // Loop until b becomes zero
  while (b !== 0) {
    // Calculate the remainder of a divided by b
    const remainder = a % b;
    // Update a and b
    a = b;
    b = remainder;
  }

  // When b is zero, a is the euclidGCD
  return a;
}

// Example usage
const a = 48;
const b = 18;
const greatestCommonDivisor = euclidGCD(a, b);
console.log(`The euclidGCD of ${a} and ${b} is ${greatestCommonDivisor}`);
