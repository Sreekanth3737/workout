// ** brute force approach

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

const findPrimeNumbers = (num) => {
  for (let i = 2; i <= num; i++) {
    if (checkPrimeNumber(i)) {
      console.log(i);
    }
  }
};

// console.log(findPrimeNumbers(10));

// ** Eratosthenes sieve method for finding prime numbers // O(root(n)log(log(n))
const findPrimeNumbersByEratosthenesSieve = (number) => {
  const prime = new Array(number + 1).fill(false);

  for (let i = 2; i * i <= number; i++) {
    // ** worst case  i<=number=> best case => i * i <= number
    if (prime[i] === false) {
      for (let j = i * i; j <= number; j += i) {
        prime[j] = true;
      }
    }
  }

  const primeNumbers = [];
  for (let i = 2; i <= number; i++) {
    if (prime[i] == false) {
      primeNumbers.push(i);
    }
  }
  return primeNumbers.join();
};
console.log(findPrimeNumbersByEratosthenesSieve(50));
