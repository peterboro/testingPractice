function stringLength(string) {
  if(string.length < 1 || string.length > 10) {
    throw Error('Length is longer than 10');
  }
  return string.length;
}

module.exports = stringLength;