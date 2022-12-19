const printItems = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      if(array.length ===1){
        console.log(item);
      }else{
        printItems(item);
      }
      // Print out all it's items individually
    } else {
      console.log(item);
    }
  }
}


const array = ["A", ["B", "C"], "D", "E"];
printItems(array);