function find_average(array) {
  return array.reduce((acc, num) => acc + num, 0) / array.length;
}
