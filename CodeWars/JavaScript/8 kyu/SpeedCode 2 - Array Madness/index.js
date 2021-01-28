function arrayMadness(a, b) {
  return (
    a.reduce((acc, num) => acc + num ** 2, 0) >
    b.reduce((acc, num) => acc + num ** 3, 0)
  );
}
