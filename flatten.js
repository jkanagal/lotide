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

const flatten = function (array1) {
  let newArray = [];
  for (let i = 0; i < array1.length; i++) {
    if (Array.isArray(array1[i])) {
      newArray = newArray.concat(array1[[i]]);
    } else {
      newArray.push(array1[i]);
    }
  } return newArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6])