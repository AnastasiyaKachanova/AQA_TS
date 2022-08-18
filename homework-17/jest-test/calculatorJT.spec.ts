import { Calculator } from "../src/calculator";

let calculator: any;

const VALIDATION_ERROR = "The result is not as expected!";

describe("Tests for division operations", () => {
    beforeAll(() => {
      calculator = new Calculator();
    });
    test("Should division two numbers correctly", () => {
        expect(calculator.calculate(25, 5, '/')).toBe(5);
    });
    test("Should division of 0 by a number correctly", () => {
      expect(calculator.calculate(0, 26, '/')).toBe(0);
    });
    test("Should division two negative numbers correctly", () => {
      expect(calculator.calculate(-25, -5, '/')).toBe(5);
    });
    afterAll(() => {
      calculator = null;
    });
  });

  describe("Tests for multiplication operations", () => {
    beforeAll(() => {
      calculator = new Calculator();
    });
    test("Should multiplication two positive numbers correctly", () => {
        expect(calculator.calculate(2, 2, '*')).toBe(4);
    });
    test("Should multiplication of 0 by a number correctly", () => {
      expect(calculator.calculate(0, 13, '*')).toBe(0);
    });
    test("Should multiplication two negative numbers correctly", () => {
      expect(calculator.calculate(-3, -3, '*')).toBe(9);
    });
    afterAll(() => {
      calculator = null;
    });
  });