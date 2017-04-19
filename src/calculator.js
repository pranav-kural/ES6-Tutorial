/* Calculator Functions */

// Add two numbers
export const add = (x, y) => x + y;

// Substract two numbers
export const substract = (x, y) => x - y;

// Multiply two numbers
export const multiply = (x, y) => x * y;

// Divide two numbers
const divide = (x, y) => x / y;

// Exporting a function excplicitly
export { divide };

// Print numbers to console
const log = (x, y) => console.log("First number: " + x + ", Second number: " + y);

// Export the default function
export default log;