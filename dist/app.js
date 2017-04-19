'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } /* Calculator App file */

// Import the default function from the calculator module


// Import specific methods from the modules


// Importing the default and the specific modules together


// Log numbers to console
(0, _calculator2.default)(30, 80); //First number: 30, Second number: 80

// Add integers
console.log('30 + 50 = ' + (0, _calculator.add)(30, 50)); //80

// Substract Integeres
console.log('80 - 50 = ' + (0, _calculator.substract)(80, 30)); //50

// Multiply Two numbers
console.log('5 X 2 = ' + (0, _calculator.multiply)(5, 2)); //10

// Log out to console
(0, _calculator2.default)((0, _calculator.divide)(4, 2), (0, _calculator.add)(5, 5)); //First number: 2, Second number: 10

// Array of two numbers
var myXandY = [1, 2];

// use the add method with spread operator
console.log('30 + 50 = ' + _calculator.add.apply(undefined, myXandY));

// creating an array of numbers
// inserting myXandY array as initial values with spread operator
var numbers = [].concat(myXandY, [3, 4, 5, 6, 7, 8, 9, 10]);

// addAll the numbers
console.log('Adding the numbers from 1 to 10 =  ' + _calculator.addAll.apply(undefined, _toConsumableArray(numbers)));