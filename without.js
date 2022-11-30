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


const without = function (source, itemsToRemove) {
  let newArr = source;
  newArr = newArr.filter(x => itemsToRemove.indexOf(x) === -1);
  return newArr;
};



console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));
// console.log(assertArraysEqual([1, 2, 3], [1, 2, 3])); // => true
const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without functionconsole.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));
