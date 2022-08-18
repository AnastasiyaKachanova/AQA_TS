import assert from "assert";
import { expect } from "chai";
import { Calculator } from "../src/calculator";

let calculator: any;

const VALIDATION_ERROR = "The result is not as expected!";

describe("Tests for plus operations", () => {
  before("Initialize class instance", () => {
    calculator = new Calculator();
  });
  it("Should plus two positive numbers correctly", () => {
    assert.deepEqual(calculator.calculate(2, 2, "+"), 4, VALIDATION_ERROR);
  });

  it("Should plus positive number and zero correctly", () => {
    assert.deepEqual(calculator.calculate(0, 2, "+"), 2, VALIDATION_ERROR);
  });

  it("Should plus positive and negative numbers correctly", () => {
    assert.deepEqual(calculator.calculate(1, -2, "+"), -1, VALIDATION_ERROR);
  });
  after("Delete class instance", () => {
    calculator = null;
  });
});
describe("Tests for minus operations", () => {
  before(() => {
    calculator = new Calculator();
  });
  it("Should minus two positive numbers correctly", () => {
    expect(calculator.calculate(2, 2, "-")).to.be.deep.equal(0,VALIDATION_ERROR);
  });
  it("Should minus two negative numbers correctly", () => {
    expect(calculator.calculate(-9, -7, "-")).to.be.deep.equal(-2,VALIDATION_ERROR);
  });
  it("Should minus zero and negative numbers correctly", () => {
    expect(calculator.calculate(0, -2, "-")).to.be.deep.equal(2,VALIDATION_ERROR);
  });
  after(() => {
    calculator = null;
  });
});

