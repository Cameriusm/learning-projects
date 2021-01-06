function getAverage(marks) {
  const sum = marks.reduce((total, num) => total + num);
  return Math.floor(sum / marks.length);
}
