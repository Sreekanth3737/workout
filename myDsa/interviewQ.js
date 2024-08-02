const nonRepatedString = (string) => {
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    const character = string[i];
    obj[character] ? (obj[character] += 1) : (obj[character] = 1);
  }
  console.log(obj);
  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
};

// console.log(nonRepatedString("ssreekanth"));

function openCloseBrackets(string) {
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    obj[char] ? (obj[char] += 1) : (obj[char] = 1);
  }
  console.log(obj);
  for (let key in obj) {
    if (key === "(") {
      if (obj[key] !== obj[")"]) {
        return false;
      }
    }
    if (key === "[") {
      if (obj[key] !== obj["]"]) {
        return false;
      }
    }
    if (key === "{") {
      if (obj[key] !== obj["}"]) {
        return false;
      }
    }
  }
  return true;
}

// console.log(openCloseBrackets("()]["));

function openCloseBrackets(string) {
  const counts = {
    "(": 0,
    "[": 0,
    "{": 0,
    ")": 0,
    "]": 0,
    "}": 0,
  };

  for (let char of string) {
    if (char in counts) {
      counts[char]++;
    }
  }

  for (let opener in counts) {
    const closer = getMatchingBracket(opener);
    if (counts[opener] !== counts[closer]) {
      return false;
    }
  }

  return true;
}

function getMatchingBracket(bracket) {
  switch (bracket) {
    case "(":
      return ")";
    case "[":
      return "]";
    case "{":
      return "}";
    case ")":
      return "(";
    case "]":
      return "[";
    case "}":
      return "{";
    default:
      return null;
  }
}

// Example usage:
// console.log(openCloseBrackets("()[]{}")); // Output: true
// console.log(openCloseBrackets("([)])")); // Output: false

//best way for bracket
var isValid = function (s) {
  const stack = [];
  const pairs = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
console.log(isValid("([])"), "output_____");

let word = "hello";
let rev = "";
for (let i = 0; i < word.length; i++) {
  console.log(rev);
  rev = word[i] + rev;
}
console.log(rev);
