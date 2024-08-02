let N = 36; // Example value for N
console.log(`Divisors of ${N} are:`);
for (let i = 1; i <= Math.sqrt(N); i++) {
  if (N % i === 0) {
    console.log(i, "first");
    if (i !== N / i) {
      console.log(N / i, "second");
    }
  }
}
console.log(2 != 36 % 2);
console.log(36 / 2);
