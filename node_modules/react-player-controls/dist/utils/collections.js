"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Returns an array containing the values of an object literal
 */
var values = exports.values = function values(obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};