/* Calc Module containing calculation methods for the Calculator */

// Add two numbers
export function add(x, y) {
  return x + y;
}


// Substract two numbers
export const substract = function(x, y) {
	return x - y;
};


// Multiply two numbers
export let multiply = (x, y) => { 
  return x * y; 
};


// Divide two numbers
const divide = (x, y) => {
  return x / y;
};
// Exporting the function(s) explicitly
export { divide };

// Print numbers to console
export default log = (x, y) => console.log(`First number: ${x}, Second number: ${y}`);