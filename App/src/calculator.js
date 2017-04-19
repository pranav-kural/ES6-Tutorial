/* Calculator Functions */

// Print numbers to console
const log = (x, y) => console.log("First number: " + x + ", Second number: " + y);

// Add two numbers
const add = (x, y) => x + y;

// Substract two numbers
const substract = (x, y) => x - y;

// Multiply two numbers
const multiply = (x, y) => x * y;

// Divide two numbers
const divide = (x, y) => x / y;

// Function to add all the numbers received
const addAll = (...numbers) => numbers.reduce((x, y) => x+y);

// Function to multiply all the numbers received
const multiplyAll = (...numbers) => numbers.reduce((x, y) => x*y);

// Export the calculator module functions
export { add, substract, multiply, divide, addAll, multiplyAll };

// Export the default function
export default log;