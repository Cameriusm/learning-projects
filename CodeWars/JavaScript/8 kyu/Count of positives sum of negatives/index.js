function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];
  let pos = input.reduce((acc, elem) => (elem > 0 ? acc + 1 : acc), 0);
  let neg = input.reduce((acc, elem) => (elem < 0 ? acc + elem : acc), 0);
  return [pos, neg];
}
