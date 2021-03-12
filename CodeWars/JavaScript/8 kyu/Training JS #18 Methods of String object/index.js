function splitAndMerge(string, separator) {
  return string
    .split(' ')
    .map((w) => w.split('').join(separator))
    .join(' ');
}
