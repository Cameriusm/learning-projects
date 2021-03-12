function sc(floor) {
  if (floor <= 1) return '';
  let arr = new Array(floor - 1).fill('Aa~').join(' ');
  return floor > 6 ? arr + ' Pa!' : arr + ' Pa! Aa!';
}
