// Import the default function from the calc module
import logger from './calc';

// Import specific methods from the modules
import { add, substract } from './calc';


// Log numbers to console
logger(30, 80);             //First number: 30, Second number: 80

// Add integers
add(30, 50);                //80

// Substract Integeres
substract(80, 30);          //50