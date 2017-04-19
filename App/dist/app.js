'use strict';

var _calculator = require('./calculator');

var calc = _interopRequireWildcard(_calculator);

var _myCalculator = require('./myCalculator');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// Create an object of the type MyCalculator
/* Calculator App file */

// Import all the functions from the calculator module
var CalcOne = new _myCalculator.MyCalculator(1, 2, 3, 4, 5);

// Use the sum function of the MyCalculator class to find the sum of all numbers


// Import the MyCalculator class
console.log(CalcOne.sum);