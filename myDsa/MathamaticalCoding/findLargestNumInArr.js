function max(input) {
  if (toString.call(input) !== "[object Array]") return false;
  return Math.max.apply(null, input);
}

console.log(max([12, 34, 56, 1]));
console.log(max([-12, -34, 0, -56, -1]));

function maxNum(input) {
  if (!Array.isArray(input) || input.length === 0) return false;
  return input.reduce(
    (max, current) => (current > max ? current : max),
    input[0]
  );
}

console.log(maxNum([12, 34, 56, 1]));
console.log(maxNum([-12, -34, 0, -56, -1]));

function minNum(input) {
  if (!Array.isArray(input) || input.length === 0) return false;
  return input.reduce(
    (max, current) => (current < max ? current : max),
    input[0]
  );
}

console.log(minNum([12, 34, 56, 1]));
console.log(minNum([-12, -34, 0, -56, -1]));
