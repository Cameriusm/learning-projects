function sumOfDifferences(arr) {
  const sum = arr
    .sort((a, b) => b - a)
    .reduce(
      (acc, value, index, array) =>
        index + 1 < array.length ? acc + value - array[index + 1] : acc,
      0
    );

  return sum;
}
