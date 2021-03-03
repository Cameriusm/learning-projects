function countSheeps(arrayOfSheep) {
  return arrayOfSheep.reduce((acc, elem) => (elem ? acc + 1 : acc), 0);
}
