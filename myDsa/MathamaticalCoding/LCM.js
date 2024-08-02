// LCM least common multiple
const findLCM = (num1, num2) => {
  let result = Math.max(num1, num2);
  while (true) {
    if (result % num1 === 0 && result % num2 === 0) {
      break;
    }
    result++;
  }
  return result;
};

console.log(findLCM(7, 3)); // ** O(a*b-max(a,b))

//more efficient way by Gabriel Lame's algorithm to find GCD/HCF O(log(min(a,b))
const gabrielLameHCF = (num1, num2) => {
  while (num1 != 0 && num2 != 0) {
    num1 > num2 ? (num1 %= num2) : (num2 %= num1);
  }
  return num1 !== 0 ? num1 : num2;
};
// ** Gabriel Lame's algorithm to find LCM (a*b)/gabriel(a,b)

const gabrielLameLCM = (num1, num2) => {
  return (num1 * num2) / gabrielLameHCF(num1, num2);
};
console.log(gabrielLameLCM(7, 3));
