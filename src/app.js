/* Calculator App file */

// Import the default function from the calculator module
import logger from './calculator';

// Import specific methods from the modules
import { add, substract } from './calculator';

// Importing the default and the specific modules together
import logOut, { multiply, divide } from './calculator';


// Log numbers to console
logger(30, 80);                     //First number: 30, Second number: 80

// Add integers
add(30, 50);                        //80

// Substract Integeres
substract(80, 30);                  //50

// Multiply Two numbers
multiply(5, 2);                     //10

// Log out to console
logOut(divide(4, 2), add(5, 5));    //First number: 2, Second number: 10
