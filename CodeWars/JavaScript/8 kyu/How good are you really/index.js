function betterThanAverage(classPoints, yourPoints) {
  return (
    classPoints.reduce((acc, num) => acc + num, 0) / classPoints.length <=
    yourPoints
  );
}
