function isDivideBy(number, a, b) {
  return !Boolean(Math.abs((number % a) + (number % b)));
}
