/* Calculator App file */

// Import the default function from the calculator module
import logger from './calculator';

// Import specific methods from the modules
import { add, substract, addAll, multiplyAll } from './calculator';

// Importing the default and the specific modules together
import logOut, { multiply, divide } from './calculator';


// Log numbers to console
logger(30, 80);                     //First number: 30, Second number: 80

// Add integers
console.log(`30 + 50 = ${add(30, 50)}`);                        //80

// Substract Integeres
console.log(`80 - 50 = ${substract(80, 30)}`);                  //50

// Multiply Two numbers
console.log(`5 X 2 = ${multiply(5, 2)}`);                     //10

// Log out to console
logOut(divide(4, 2), add(5, 5));    //First number: 2, Second number: 10

// Array of two numbers
let myXandY = [1, 2];

// use the add method with spread operator
console.log(`30 + 50 = ${add(...myXandY)}`); 

// creating an array of numbers
// inserting myXandY array as initial values with spread operator
let numbers = [...myXandY, 3, 4, 5, 6, 7, 8, 9, 10];

// addAll the numbers
console.log(`Adding the numbers from 1 to 10 =  ${addAll(...numbers)}`);