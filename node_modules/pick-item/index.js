'use strict';

var isArrayLike = require('is-array-like');
var randomIndex = require('random-index');

module.exports = function (arr) {

  if (!arr || !isArrayLike(arr)) {
    return arr;
  }

  var length = arr.length;
  if (!length) {
    return undefined;
  }

  return arr[randomIndex({ max: length - 1 })];
};
