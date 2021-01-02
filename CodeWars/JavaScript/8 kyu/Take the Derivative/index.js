function derive(coefficient, exponent) {
  return `${coefficient * exponent}x^${--exponent}`;
}
