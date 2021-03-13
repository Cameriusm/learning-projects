function sumMul(n, m) {
  if (n >= m) return 'INVALID';
  let res = 0;
  for (let i = n; i < m; i += n) {
    res += i;
  }
  return res;
}
