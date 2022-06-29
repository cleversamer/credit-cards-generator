'use strict';

var randomNatural = require('random-natural');

module.exports = function (options) {

  var i = 5;

  var result = '';

  while (i--) {
    result += randomNatural({ min: 0, max: 9, inspected: true }).toString();
  }

  if (options && options.plusfour) {

    result += '-';

    i = 4;
    while (i--) {
      result += randomNatural({ min: 0, max: 9, inspected: true }).toString();
    }
  }

  return result;
};
