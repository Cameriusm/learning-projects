function animals(heads, legs) {
  const cows = legs / 2 - heads;
  const chickens = heads - cows;
  return chickens >= 0 &&
    Number.isInteger(chickens) &&
    cows >= 0 &&
    Number.isInteger(cows)
    ? [chickens, cows]
    : 'No solutions';
}
