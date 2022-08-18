export class Calculator {
    constructor() {}
    public calculate(firstNumber: number, secondNumber: number, operation: '+' | '-' | '/' | '*') {
        switch (operation) {
            case '+':
                return firstNumber + secondNumber;
                break;
            case '-': 
                return firstNumber - secondNumber;
                break; 
            case '/':
                return firstNumber / secondNumber;
                break;
            case '*':
                return firstNumber * secondNumber;
                break;

    }
}
}