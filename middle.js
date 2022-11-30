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

const middle = function (arr1) {
  let newArr = [];
  let newArr1;
  let mid;
  if (arr1.length === 1 || arr1.length === 2) {
    return newArr;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.length % 2 === 1) {
        mid = [arr1[Math.floor((arr1.length / 2))]];
      } else {
        newArr = [arr1[(arr1.length / 2) - 1]];
        newArr1 = [arr1[(arr1.length / 2)]];
        mid = newArr.concat(newArr1);
      }
      return mid;
    }
  }
};


console.log(middle([1])); // => []
console.log(middle([1, 2]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]