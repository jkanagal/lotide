
const eqArrays = function (arr1, arr2) {
  let ans;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      ans = true;
    } else {
      ans = false;
    }
  } return ans;
};

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

//why does having console.log in the return give us undefined?
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
console.log(assertArraysEqual([1, 2, 3], [1, 3, 3]));