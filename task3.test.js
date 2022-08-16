const Calculator = require('./task3');

describe('Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.', () => {
  // Arrange
  let calcs = new Calculator();
  test('The addition total is', () => {
    // Assert
    expect(calcs.add(2, 2)).toBe(4);
    expect(calcs.add(4, 4)).toBe(8);
    expect(calcs.add(8, 8)).toBe(16);
  });

  test('The subtraction total is', () => {
    // Assert
    expect(calcs.subtract(4, 2)).toBe(2);
    expect(calcs.subtract(8, 4)).toBe(4);
    expect(calcs.subtract(16, 8)).toBe(8);
  });

  test('The multiplication total is', () => {
    // Assert
    expect(calcs.multiply(2, 2)).toBe(4);
    expect(calcs.multiply(4, 4)).toBe(16);
    expect(calcs.multiply(8, 8)).toBe(64);
  });

  test('The division total is', () => {
    // Assert
    expect(calcs.divide(4, 2)).toBe(2);
    expect(calcs.divide(8, 4)).toBe(2);
    expect(calcs.divide(16, 8)).toBe(2);
  });
})