const assertEqual = function(actual,expected) {
  return (actual === expected) ? console.log(`Assertion Pass: ${actual === expected} `) : console.log(`Assertion failed: ${actual} !== ${expected}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);
assertEqual("Bootcamp", "Bootcamp");