function sortPrimeNumber(arr) {
  let primeNumberArr = [];
  for (let i = 0; i < arr.length; i++) {
    let flag = 0;
    if (typeof arr[i] == "number") {
      for (let j = 2; j <= arr[i] / 2; j++) {
        if (arr[i] % j == 0) {
          flag = 1;
          break;
        }
      }
      if (flag == 0) {
        primeNumberArr.push(arr[i]);
      }
    }
  }
  return primeNumberArr.sort((a, b) => a - b);
}
console.log(sortPrimeNumber([11, "sreekanth", 2, 3, 4, 5, 6, 7, 11]));

function findAnagram(str1, str2) {
  if (str1?.length !== str2?.length) {
    return false;
  }

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = obj1[str1[i]] ? obj1[str1[i]] + 1 : 1;
    obj2[str2[i]] = obj2[str2[i]] ? obj2[str2[i]] + 1 : 1;
  }
  for (let key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
    return true;
  }
}

console.log(findAnagram("anagram", "nagaram"));

function findFrequency(name) {
  let obj = {};
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = obj[name[i]] ? obj[name[i]] + 1 : 1;
  }
  return obj;
}
console.log(findFrequency("sreekanth"));
let outputfor = ` SNTP Server IP:
SNTP Interval:              1800s
SNTP Time Zone:             GMT+8
SNTP Status:                Disabled
SNTP Last Update time:
System Date Time:           2020/10/03 12:06:49`;
class SHOWSNTP {
  parser(output) {
    let split_array = output.split("\n");

    let obj = {};
    for (let i = 0; i < split_array.length; i++) {
      let indexOfElement = split_array[i].indexOf(":");

      let slice_first_element = split_array[i].slice(0, indexOfElement);

      let slice_second_element = split_array[i]
        .slice(indexOfElement + 1)
        .trim();

      obj[slice_first_element] = slice_second_element;
    }
    return obj;
  }
}
let result = new SHOWSNTP();
let finalresult = result.parser(outputfor);
console.log(finalresult);

let output = `System Description : WP6012-8POE
System Object ID   : 1.3.6.1.4.1.41721.1341
System Up Time     : 0-Days 4-Hours 4-Minutes 43-Seconds
System Name        : Switch
System Location    : unknown
System Contact     : unknown
System services    : 3 (physical,datalink/subnetwork)`;
class SNMPSYSTEMINFORMATION {
  parser(output) {
    let split_array = output.split("\n");
    console.log(split_array, "splitAraay+++++");
    let obj = {};
    for (let i = 0; i < split_array.length; i++) {
      let split_array_inside = split_array[i].split(":");
      console.log(split_array_inside, "insode");
      obj[split_array_inside[0].trim()] = split_array_inside[1].trim();
    }
    return obj;
  }
}
const results = new SNMPSYSTEMINFORMATION();
const finre = results.parser(output);
console.log(finre);
