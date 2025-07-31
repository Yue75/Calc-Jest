import Calculator from "./calculator.js";

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("should add two numbers correctly", () => {
    expect(calculator.add(2, 3)).toBe(5);
  });

  test("should subtract two numbers correctly", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
  });

  test("should multiply two numbers correctly", () => {
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.multiply(-2, 5)).toBe(-10);
    expect(calculator.multiply(0, 100)).toBe(0);
  });

    test("should divide two numbers correctly", () => {
    expect(calculator.divide(10, 2)).toBe(5);
    expect(calculator.divide(9, -3)).toBe(-3);
  });

  test("should throw an error when dividing by zero", () => {
    expect(() => calculator.divide(5, 0)).toThrow("Division by zero");
  });
});
