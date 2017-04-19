// Import the addAll function from the calculator module
import { addAll } from './calculator';

// MyCalculator Personalised class
export class MyCalculator {

    // Class constructor
    constructor(...numbers) {
        this.numbers = numbers;
    }

    // Add a new number
    addNum(...numbers) {
        this.numbers.push(...numbers);
    }

    get sum() {
        return this.sumOfAllNums();
    }

    // get sum of all numbers passed in to constructor
    sumOfAllNums() {
        return addAll(...this.numbers);
    }

}