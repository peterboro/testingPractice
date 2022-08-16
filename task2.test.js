const reverseString = require('./task2');

test('It takes a string as an argument and reverses it', () => {
  // Arrange
  const string = 'peter';

  // Act
  let pass = reverseString(string);

  // Assert
  expect(pass).toBe('retep');
})