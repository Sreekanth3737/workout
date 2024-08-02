function paliNumber(number) {
  let original = number;
  let rev = 0;
  while (number > 0) {
    let modulus = number % 10;
    rev = rev * 10 + modulus;
    number = Math.floor(number / 10);
  }
  return rev;
}

// console.log(paliNumber(123));
const NOTIFICATION_COLOR = {
  ALERT: { color: "light-danger" },
  FAILURE: { color: "danger" },
  SUCCESS: { color: "success" },
  INFO: { color: "light-info" },
  INTERNAL: { color: "info" },
  WARN: { color: "light-warning" },
};

const handleColor = (data) => {
  for (let key in NOTIFICATION_COLOR) {
    if (key === data) {
      return NOTIFICATION_COLOR[key].color;
    }
  }
  return "no color";
};

console.log(handleColor("SUCCESS"));
