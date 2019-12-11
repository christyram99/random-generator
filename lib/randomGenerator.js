function getRandomNumberBetweenTwoNumbersWithPrecision(number1, number2, precision) {
  return Number((Math.random() * (number1 - number2) + number2).toFixed(precision))
}

function getRandomNumberInArrayLength(arrayLength) {
  return Math.floor(Math.random() * arrayLength)
}

function int(num1, num2) {
  return getRandomNumberBetweenTwoNumbersWithPrecision(num1, num2, 0)
}

function float(num1 = 1, num2 = 10000, precision = 1) {
  return getRandomNumberBetweenTwoNumbersWithPrecision(num1, num2, precision)
}

function boolean() {
  return getRandomNumberBetweenTwoNumbersWithPrecision(0, 1, 0) ? true: false
}

module.exports = {
  int,
  float,
  boolean,
}