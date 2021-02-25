var cubeChecker = function (volume, side) {
  return volume > 0 ? volume === side ** 3 : false;
};
