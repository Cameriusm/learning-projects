function checkExam(array1, array2) {
  let score = 0;
  for (let i = 0; i < array1.length; i++) {
    array1[i] == array2[i]
      ? (score += 4)
      : array2[i] != 0
      ? (score -= 1)
      : (score += 0);
  }
  return score > 0 ? score : 0;
}
