
const tail = function(arr) {
  const arr1 = [];
  for (let i = 1; i < arr.length; i++) {
    arr1.push(arr[i]);
  }
  return arr1;
};



module.exports = tail;