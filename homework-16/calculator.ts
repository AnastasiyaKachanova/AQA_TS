export function calculatorPlus(firstNumber: number, secondNumber: number) {
    return firstNumber + secondNumber;
}

export function calculatorMinus(firstNumber: number, secondNumber: number) {
    return firstNumber - secondNumber;
}

export function calculatorDivision(firstNumber: number, secondNumber: number) {
    return firstNumber / secondNumber;
}

export class calculatorMultiplication{
    firstNumber;
    secondNumber;

    constructor(firstNumber: number, secondNumber: number) {
        this.firstNumber =  firstNumber;
        this.secondNumber = secondNumber;
    }

    multiplication() {
        return this.firstNumber * this.secondNumber;
    }
}