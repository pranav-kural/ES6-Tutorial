"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* Calculator Functions */

// Print numbers to console
var log = function log(x, y) {
  return console.log("First number: " + x + ", Second number: " + y);
};

// Add two numbers
var add = function add(x, y) {
  return x + y;
};

// Substract two numbers
var substract = function substract(x, y) {
  return x - y;
};

// Multiply two numbers
var multiply = function multiply(x, y) {
  return x * y;
};

// Divide two numbers
var divide = function divide(x, y) {
  return x / y;
};

// Function to add all the numbers received
var addAll = function addAll() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (x, y) {
    return x + y;
  });
};

// Function to multiply all the numbers received
var multiplyAll = function multiplyAll() {
  for (var _len2 = arguments.length, numbers = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    numbers[_key2] = arguments[_key2];
  }

  return numbers.reduce(function (x, y) {
    return x * y;
  });
};

// Export the calculator module functions
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;
exports.addAll = addAll;
exports.multiplyAll = multiplyAll;

// Export the default function

exports.default = log;