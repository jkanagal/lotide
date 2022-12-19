
const assert = require('chai').assert;
const middle = require('../middle');
//const assertArraysEqual = require('../assertArraysEqual');
//const eqArrays = require('../eqArrays');

describe("#middle", () => {

  it("return [2]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("return [3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it("return [2,3]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2,3]);
  });

  it("return [3,4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });

  it("return empty array when 2 items", () => {
    assert.deepEqual(middle([1, 2]), []);
  });

  it("return empty array for 1 item array", () => {
    assert.deepEqual(middle([1]), []);
  });

});