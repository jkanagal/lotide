
const eqArrays = function (arr1, arr2) {
  let ans = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      ans = false;
    }
  } return ans;
};

const assertArraysEqual = function(array1,array2) {
  const check = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  return (eqArrays(array1,array2)) ? `Assertion Pass: ${check} ` : `Assertion failed: ${wrong}`;
};

const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "totm"];

const results1 = map(words, word => word[0]);
//console.log(assertArraysEqual([words],[results1]));
console.log(results1);