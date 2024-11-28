function twoSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        flag = 1;
        return [i, j];
      }
    }
    if (flag) {
      break;
    }
  }
}
console.log(twoSum([2, 3, 4, 6, 7, 10], 8));

var twoSums = function (nums, target) {
  const numsWithIndex = nums.map((num, index) => ({ num, index }));
  numsWithIndex.sort((a, b) => a.num - b.num);
  let left = 0;
  let right = numsWithIndex.length - 1;
  while (left < right) {
    const sum = numsWithIndex[left].num + numsWithIndex[right].num;
    if (sum === target) {
      return [numsWithIndex[left].index, numsWithIndex[right].index];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

const twoSumOfArr = (nums, target) => {
  const obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in obj) {
      return [i, obj[target - nums[i]]];
    } else {
      obj[nums[i]] = i;
    }
  }
};
console.log(twoSumOfArr([2, 3, 4, 6, 7, 10], 8));

const findTwoSum = (arr, target) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const compliment = target - arr[i];
    if (map.hasOwnProperty(compliment)) {
      return [map[compliment], i];
    }
    map[arr[i]] = i;
  }
};
console.log(findTwoSum([2, 3, 11, 15, 7], 9));
