const findFrequency = (name) => {
  const obj = {};

  for (let i = 0; i < name.length; i++) {
    const item = name[i];
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  }

  console.log(obj);
};

findFrequency("sreekanth");

// frequency of an array
const frequencyOfAnArr = (arr) => {
  const obj = {};
  for (let element of arr) {
    // obj[element] = obj[element] ? ++obj[element] : 1;
    obj[element] = (obj[element] || 0) + 1;
  }
  return obj;
};
console.log(frequencyOfAnArr([1, 2, 3, 4, 5, 6, 7, 1, 3, 4, 5, 7]));
