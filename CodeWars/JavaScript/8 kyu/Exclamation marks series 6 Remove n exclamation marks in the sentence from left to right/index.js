function remove(s, n) {
  let i = 0;
  while (i < n) {
    s = s.replace('!', '');
    i++;
  }
  return s;
}
