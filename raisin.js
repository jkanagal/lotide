
//is there a raisin or not
//loop through the array
//if
//option 1-theres no raisin
//print all good!
//else
// options 2- there is a raison
//pring raisin alert!


const raisinAlarm = function (cookie) {
  let alert = 'All good';
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] === "🍇") {
      alert = "Raisin alert!";
    }
  }
  return alert;
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));