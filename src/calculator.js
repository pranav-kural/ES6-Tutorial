/* Calculator Functions */

// Print numbers to console
const log = (x, y) => console.log("First number: " + x + ", Second number: " + y);

// Add two numbers
const add = (x, y) => validate(x) + validate(y);

// Substract two numbers
const substract = (x, y) => validate(x) - validate(y);

// Multiply two numbers
const multiply = (x, y) =>  validate(x) * validate(y);

// Divide two numbers
const divide = (x, y) =>  validate(x) / validate(y);

// Function to add all the numbers received
const addAll = (...numbers) => numbers.reduce((x, y) => x+y);

// Function to multiply all the numbers received
const multiplyAll = (...numbers) => numbers.reduce((x, y) => x*y);

const validate = (z) => {
z = Math.trunc(z);
if(Number.isFinite(z)
{
  continue;
}
else{
console.log("Please enter a valid set of Number");
break;
}

return z;}


// Export the calculator module functions
export { add, substract, multiply, divide, addAll, multiplyAll };

// Export the default function
export default log;
