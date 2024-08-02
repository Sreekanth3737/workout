// ** HELPER FUNCTIONS
const customSqrt = (num, tolerance = 0.00001) => {
  if (num < 0) {
    throw new Error("Cannot calculate the square root of a negative number");
  }

  // ** Initial estimate
  let estimate = num / 2;

  // ** Newton-Raphson method
  while (Math.abs(estimate * estimate - num) > tolerance) {
    estimate = (estimate + num / estimate) / 2;
  }

  return estimate;
};

// ** bruteforce  aproch
const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrime(7));

// ** calculate with root
const isPrimeWithSquareRoot = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
// console.log(isPrimeWithSquareRoot(7));
// console.log(customSqrt(4));

// ** efficient way to find prime or not O(squareRoot(n))

const checkPrimeNumber = (number) => {
  if (number == 1) {
    return false;
  }
  if (number == 2 || number == 3) {
    return true;
  }
  if (number % 2 == 0 || number % 3 == 0) {
    return false;
  }
  for (let i = 5; i * i <= number; i += 6) {
    // ** i * i <= number || Math.sqrt(number)
    if (number % i == 0 || number % (i + 2) == 0) {
      return false;
    }
  }
  return true;
};
console.log(checkPrimeNumber(7));

// ** take u forward way
const checkIsPrime = (num) => {
  if (num == 1) {
    return false;
  }
  if (num == 2 || num == 3) {
    return true;
  }
  if (num % 2 == 0 || num % 3 == 0) {
    return false;
  }
  let count = 0;
  for (let i = 0; i * i <= num; i++) {
    if (num % i === 0) {
      count++;
      if (num / i != i) {
        count++;
      }
    }
  }
  if (count === 2) {
    return "is prime";
  } else {
    return "is not prime";
  }
};
console.log(checkIsPrime(7));
