function century(year) {
  return year % 100 === 0 ? parseInt(year / 100) : parseInt(year / 100) + 1;
}
