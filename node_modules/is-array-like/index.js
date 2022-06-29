'use strict';

var isArray    = require('is-array');
var isWindow   = require('is-window');
var isFunction = require('is-function');


module.exports = function (obj) {

  if (!obj) {
    return false;
  }

  if (isArray(obj)) {
    return true;
  }

  if (isFunction(obj) || isWindow(obj)) {
    return false;
  }

  obj = Object(obj);

  var length = 'length' in obj && obj.length;

  if (obj.nodeType === 1 && length) {
    return true;
  }

  return length === 0 ||
    typeof length === 'number' && length > 0 && ( length - 1 ) in obj;
};
