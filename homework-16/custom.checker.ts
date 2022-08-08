import {
  calculatorPlus,
  calculatorMinus,
  calculatorDivision,
  calculatorMultication,
} from "./calculator";

export function customChecker(
  firstNumber: number,
  secondNumber: number,
  result: number,
  sign: string
) {
  if (
    (sign === "+" && calculatorPlus(firstNumber, secondNumber) === result) ||
    (sign === "-" && calculatorMinus(firstNumber, secondNumber) === result) ||
    (sign === "/" && calculatorDivision(firstNumber, secondNumber) === result) ||
    (sign === "*" && calculatorMultication(firstNumber, secondNumber) === result)) {
    console.log("Test passed!");
    } else {
    console.log("Test failed!");
    }
}
