function findDifference(a, b) {
  return Math.abs(
    a.reduce((acc, num) => acc * num) - b.reduce((acc, num) => acc * num)
  );
}
