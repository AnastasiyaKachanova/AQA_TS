import {calculator} from "./calculator";


export function customChecker(
  firstNumber: number,
  secondNumber: number,
  result: number,
  operation: '+' | '-' | '/' | '*' )
{
 
  if (calculator(firstNumber, secondNumber, operation) === result) {
    console.log("Test passed!");
  } else {
    console.log("Test failed!");
  }
}