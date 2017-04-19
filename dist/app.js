'use strict';

var _calculator = require('./calculator');

var _calculator2 = _interopRequireDefault(_calculator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Log numbers to console


// Import specific methods from the modules
(0, _calculator2.default)(30, 80); //First number: 30, Second number: 80

// Add integers


// Importing the default and the specific modules together
/* Calculator App file */

// Import the default function from the calculator module
(0, _calculator.add)(30, 50); //80

// Substract Integeres
(0, _calculator.substract)(80, 30); //50

// Multiply Two numbers
(0, _calculator.multiply)(5, 2); //10

// Log out to console
(0, _calculator2.default)((0, _calculator.divide)(4, 2), (0, _calculator.add)(5, 5)); //First number: 2, Second number: 10