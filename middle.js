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

const middle = function(arr1){

};


middle([1]); // => []
middle([1, 2]);
middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]