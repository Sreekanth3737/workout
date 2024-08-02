const ROMAN_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const romanToInteger = (romanString) => {
  let res = 0;

  for (let i = 0; i < romanString.length; i++) {
    let s1 = ROMAN_VALUES[romanString.charAt(i)];

    if (i + 1 < romanString.length) {
      let s2 = ROMAN_VALUES[romanString.charAt(i + 1)];

      if (s1 >= s2) {
        res = res + s1;
      } else {
        res = res + s2 - s1;
        i++;
      }
    } else {
      res = res + s1;
    }
  }
  return res;
};
console.log(romanToInteger("MII"));
