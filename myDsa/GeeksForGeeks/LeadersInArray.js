const findLeadersInArray = (arr) => {
  let result = [];
  let leader = arr[arr.length - 1];
  result.push(leader);
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] >= leader) {
      leader = arr[i];
      result.push(arr[i]);
    }
  }
  return result.reverse();
};
const arr = [16, 17, 4, 5, 2];
console.log(findLeadersInArray(arr));
