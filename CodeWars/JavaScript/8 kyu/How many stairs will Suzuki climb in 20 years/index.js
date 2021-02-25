function stairsIn20(s) {
  return (
    s.reduce((arr, d) => arr.concat(...d), []).reduce((acc, e) => acc + e, 0) *
    20
  );
}

function stairsIn20(a) {
  return 20 * a.reduce((s, a) => s + a.reduce((s, n) => s + n, 0), 0);
}
