const assert = require('chai').assert;
const tail = require('../tail');
//const assertEqual = require('../assertEqual');



describe("#tail", () => {
  it("tail to remove 'hello'", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });

  it("tail to remove 'yo yo'", () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]),["Lighthouse", "Labs"]);
  });

});
