

const eqArrays = function (arr1, arr2) {
  let ans = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      ans = false;
    }
  } return ans;
};

const assertArraysEqual = function (array1, array2) {
  const check = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  return (eqArrays(array1, array2)) ? `Assertion Pass: ${check} ` : `Assertion failed: ${wrong}`;
};

const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      if (object1[key] === object2[key]) {
        return true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
};

const assertObjectsEqual = function (actual, expected) {
  // const inspect = require('util').inspect;
  const check = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  return (eqObjects(actual, expected)) ? `Assertion Pass: ${check} ` : `Assertion failed: ${wrong}`;
};

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };

console.log(assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
