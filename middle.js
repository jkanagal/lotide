//const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');


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


module.exports = middle;