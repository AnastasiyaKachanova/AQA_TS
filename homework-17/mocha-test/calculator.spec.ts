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
    assert.deepEqual(calculator.plus(2, 2), 4, VALIDATION_ERROR);
  });

  it("Should plus positive number and zero correctly", () => {
    assert.deepEqual(calculator.plus(0, 2), 2, VALIDATION_ERROR);
  });

  it("Should plus positive and negative numbers correctly", () => {
    assert.deepEqual(calculator.plus(1, -2), -1, VALIDATION_ERROR);
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
    expect(calculator.minus(2, 2)).to.be.deep.equal(0,VALIDATION_ERROR);
  });
  it("Should minus two negative numbers correctly", () => {
    expect(calculator.minus(-9, -7)).to.be.deep.equal(-2,VALIDATION_ERROR);
  });
  it("Should minus zero and negative numbers correctly", () => {
    expect(calculator.minus(0, -2)).to.be.deep.equal(2,VALIDATION_ERROR);
  });
  after(() => {
    calculator = null;
  });
});

describe("Tests for division operations", () => {
  before(() => {
    calculator = new Calculator();
  });
  it("Should division two positive numbers correctly", () => {
    expect(calculator.division(2, 2)).to.be.deep.equal(1,VALIDATION_ERROR);
  });
  it("Should division two negative numbers correctly", () => {
    expect(calculator.division(-9, -3)).to.be.deep.equal(3,VALIDATION_ERROR);
  });
  it("Should division zero and positive numbers correctly", () => {
    expect(calculator.division(0, 2)).to.be.deep.equal(0,VALIDATION_ERROR);
  });
  after(() => {
    calculator = null;
  });
});

describe("Tests for multiplication operations", () => {
  before(() => {
    calculator = new Calculator();
  });
  it("Should multiplication two positive numbers correctly", () => {
    expect(calculator.multiplication(2, 2)).to.be.deep.equal(4,VALIDATION_ERROR);
  });
  it("Should multiplication two negative numbers correctly", () => {
    expect(calculator.multiplication(-9, -7)).to.be.deep.equal(63,VALIDATION_ERROR);
  });
  it("Should multiplication zero and positive numbers correctly", () => {
    expect(calculator.multiplication(0, 2)).to.be.deep.equal(0,VALIDATION_ERROR);
  });
  after(() => {
    calculator = null;
  });
});

