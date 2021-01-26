function points(games) {
  return games.reduce(
    (acc, [x, n, y]) => (x > y ? acc + 3 : acc + +(x == y)),
    0
  );
}
