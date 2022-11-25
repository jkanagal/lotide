const assertEqual = function(actual,expected) {
  const check = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  return (actual === expected) ? console.log(`Assertion Pass: ${check}${actual === expected} `) : console.log(`Assertion failed: ${wrong}${actual} !== ${expected}`);
};


const head = function(arr) {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Bootcamp", "Bootcamp");