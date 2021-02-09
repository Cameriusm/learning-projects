function superSize(num) {
  return +num
    .toString()
    .split('')
    .sort((a, b) => b - a)
    .join('');
}
