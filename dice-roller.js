
const args = process.argv[2];

const rollDice = function(num) {
  const max = 6;
  const min = 1;
  let list = [];
  for (let i = 0; i < num; i++) {
    list.push(Math.floor(Math.random() * (max - min) + 1) + min);
  }
  list.join();
  console.log(`Rolled ${num} dice : ${list}`);
};

rollDice(args);