"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* Calculator Functions */

// Add two numbers
var add = exports.add = function add(x, y) {
  return x + y;
};

// Substract two numbers
var substract = exports.substract = function substract(x, y) {
  return x - y;
};

// Multiply two numbers
var multiply = exports.multiply = function multiply(x, y) {
  return x * y;
};

// Divide two numbers
var divide = function divide(x, y) {
  return x / y;
};

// Exporting a function excplicitly
exports.divide = divide;

// Print numbers to console

var log = function log(x, y) {
  return console.log("First number: " + x + ", Second number: " + y);
};

// Export the default function
exports.default = log;