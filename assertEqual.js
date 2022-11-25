const assertEqual = function(actual,expected) {
  const check = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  return (actual === expected) ? console.log(`Assertion Pass: ${check}${actual === expected} `) : console.log(`Assertion failed: ${wrong}${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Bootcamp", "Bootcamp");