import { Calculator } from "../src/calculator";

let calculator: any;

const VALIDATION_ERROR = "The result is not as expected!";

describe("Tests for division operations", () => {
    beforeAll(() => {
      calculator = new Calculator();
    });
    test("Should division two numbers correctly", () => {
        expect(calculator.division(25, 5)).toBe(5);
    });
    test("Should division of 0 by a number correctly", () => {
      expect(calculator.division(0, 26)).toBe(0);
    });
    test("Should division two negative numbers correctly", () => {
      expect(calculator.division(-25, -5)).toBe(5);
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
        expect(calculator.multiplication(2, 2)).toBe(4);
    });
    test("Should multiplication of 0 by a number correctly", () => {
      expect(calculator.multiplication(0, 13)).toBe(0);
    });
    test("Should multiplication two negative numbers correctly", () => {
      expect(calculator.multiplication(-3, -3)).toBe(9);
    });
    afterAll(() => {
      calculator = null;
    });
  });

  describe("Tests for plus operations", () => {
    beforeAll(() => {
      calculator = new Calculator();
    });
    test("Should plus two positive numbers correctly", () => {
        expect(calculator.plus(2, 3)).toBe(5);
    });
    test("Should plus of 0 by a number correctly", () => {
      expect(calculator.plus(0, 13)).toBe(13);
    });
    test("Should plus two negative numbers correctly", () => {
      expect(calculator.plus(-3, -3)).toBe(-6);
    });
    afterAll(() => {
      calculator = null;
    });
  });

  describe("Tests for minus operations", () => {
    beforeAll(() => {
      calculator = new Calculator();
    });
    test("Should minus two positive numbers correctly", () => {
        expect(calculator.minus(100, 30)).toBe(70);
    });
    test("Should minus of 0 and number correctly", () => {
      expect(calculator.minus(0, 1)).toBe(-1);
    });
    test("Should minus two negative numbers correctly", () => {
      expect(calculator.minus(-3, -3)).toBe(0);
    });
    afterAll(() => {
      calculator = null;
    });
  });