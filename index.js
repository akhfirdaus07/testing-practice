function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  const splitString = str.split("");
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join("");
  return joinArray;
}

const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  },
  multiply(a, b) {
    return a * b;
  },
};

function caesarCipher(str, key) {
  const alphabetLower = "abcdefghijklmnopqrstuvwxyz".split("");
  const alphabetUpper = alphabetLower.map((x) => x.toUpperCase());
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase() && str[i] !== " ") {
      let index = alphabetUpper.indexOf(str[i]);
      result += alphabetUpper[(index + key) % 26];
    } else if (str[i] !== " ") {
      let index = alphabetLower.indexOf(str[i]);
      result += alphabetLower[(index + key) % 26];
    } else {
      result += " ";
    }
  }

  return result;
}

function analyzeArray(array) {
  const length = array.length;
  const average =
    array.reduce((current, previous) => current + previous, 0) / length;
  const min = array.reduce((current, previous) => Math.min(current, previous));
  const max = array.reduce((current, previous) => Math.max(current, previous));

  return {
    average,
    min,
    max,
    length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
