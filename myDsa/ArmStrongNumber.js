function armStrongNumber(number) {
  let original = number;
  let armstrong = 0;
  while (number > 0) {
    let modulus = number % 10;
    armstrong = armstrong + modulus ** 3;
    number = Math.floor(number / 10);
  }
  console.log(armstrong);
  if (original == armstrong) {
    return true;
  }
  return false;
}
console.log(armStrongNumber(153));
