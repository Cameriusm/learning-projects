function positiveSum(arr) {
  return arr.reduce((acc, elem) => (elem > 0 ? acc + elem : acc), 0);
}
