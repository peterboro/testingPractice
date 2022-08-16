const capitalize = require('./task4');

test('Capitalize the first character', () => {
  //Arrange
  const capital = 'peter';

  // Act
  let pass = capitalize(capital);

  // Assert
  expect(pass).toBe('Peter');
})