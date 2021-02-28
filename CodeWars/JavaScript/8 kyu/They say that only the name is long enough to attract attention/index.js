function isOpposite(s1, s2) {
  if (!(s1 && s2)) return false;
  return (
    s1 ===
    s2
      .split('')
      .map((e) => (e == e.toLowerCase() ? e.toUpperCase() : e.toLowerCase()))
      .join('')
  );
}
