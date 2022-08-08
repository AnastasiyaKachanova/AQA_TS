import {
  calculatorPlus,
  calculatorMinus,
  calculatorDivision,
  calculatorMultiplication,
} from "./calculator";



export function customChecker(
  firstNumber: number,
  secondNumber: number,
  result: number,
  sign: '+' | '-' | '/' | '*' )
{
  let res = new calculatorMultiplication(firstNumber, secondNumber);
  if (
    (sign === "+" && calculatorPlus(firstNumber, secondNumber) === result) ||
    (sign === "-" && calculatorMinus(firstNumber, secondNumber) === result) ||
    (sign === "/" && calculatorDivision(firstNumber, secondNumber) === result) ||
    (sign === "*" && res.multiplication() === result)) {
    console.log("Test passed!");
  } else {
    console.log("Test failed!");
  }
}