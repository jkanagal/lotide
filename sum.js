const args = process.argv;

const addTwoNumbers = function(args) {
  let sum = Number(args[2]) + Number(args[3]);
  return sum;
};

console.log(addTwoNumbers(args));