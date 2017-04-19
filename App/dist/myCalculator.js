'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MyCalculator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // Import the addAll function from the calculator module


var _calculator = require('./calculator');

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// MyCalculator Personalised class
var MyCalculator = exports.MyCalculator = function () {

    // Class constructor
    function MyCalculator() {
        _classCallCheck(this, MyCalculator);

        for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
            numbers[_key] = arguments[_key];
        }

        this.numbers = numbers;
    }

    // Add a new number


    _createClass(MyCalculator, [{
        key: 'addNum',
        value: function addNum() {
            var _numbers;

            (_numbers = this.numbers).push.apply(_numbers, arguments);
        }
    }, {
        key: 'sumOfAllNums',


        // get sum of all numbers passed in to constructor
        value: function sumOfAllNums() {
            return _calculator.addAll.apply(undefined, _toConsumableArray(this.numbers));
        }
    }, {
        key: 'sum',
        get: function get() {
            return this.sumOfAllNums();
        }
    }]);

    return MyCalculator;
}();