const assertEqual = function(actual,expected) {
  const check = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  return (actual === expected) ? console.log(`Assertion Pass: ${check}${actual === expected} `) : console.log(`Assertion failed: ${wrong}${actual} !== ${expected}`);
};


const tail = function(arr) {
  const arr1 = [];
  for (let i = 1; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  return arr1;
};


const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!