const stringLength = require('./task1');

test('Check the characters count', () => {
  // Arrange
  const string = 'Peter';

  // Act
  let length = stringLength(string);

  // Assert
  expect(length).toBe(5);
})

test('Throw errors if characters are longer than 10', () => {
  // Arrange
  const string = 'Peterborowed';

  // Assert
  expect(() =>stringLength(string).toThrow(Error))
})