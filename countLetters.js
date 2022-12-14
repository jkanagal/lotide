const assertEqual = function (actual, expected) {
  const check = String.fromCodePoint(0x2705);
  const wrong = String.fromCodePoint(0x274C);
  return (actual === expected) ? console.log(`Assertion Pass: ${check}${actual === expected} `) : console.log(`Assertion failed: ${wrong}${actual} !== ${expected}`);
};


const countLetters = function(stringCount) {
  let results = {};
  for (const item of stringCount) {
    if (item !== ' ') {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  } return results;
};

const results1 = countLetters("lighthouse in the house");
assertEqual(results1["l"],1);