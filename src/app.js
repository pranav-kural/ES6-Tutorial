/* Calculator App file */

// Import all the functions from the calculator module
import * as calc from './calculator';

// Import the MyCalculator class
import { MyCalculator } from './myCalculator';

// Create an object of the type MyCalculator
let CalcOne = new MyCalculator(1,2,3,4,5);

// Use the sum function of the MyCalculator class to find the sum of all numbers
console.log(CalcOne.sum);