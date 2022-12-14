const assertEqual = function (actual, expected) {
  const check = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  return (actual === expected) ? console.log(`Assertion Pass: ${check}${actual === expected} `) : console.log(`Assertion failed: ${wrong}${actual} !== ${expected}`);
};

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

const letterPositions = function (sentence) {
  let newSentence = sentence.replace(/ /g, '');
  const results = {};
  for (let i = 0; i < newSentence.length; i++) {
    if (!results[newSentence[i]]) {
      results[newSentence[i]] = [i];
    } else {
      results[newSentence[i]].push(i);
    }
  }
  return results;
};



//console.log(letterPositions("lighthouse in the house"));
console.log(assertArraysEqual(letterPositions("hello").e, [1]));
