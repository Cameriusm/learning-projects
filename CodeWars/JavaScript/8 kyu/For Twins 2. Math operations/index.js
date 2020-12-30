function iceBrickVolume(radius, bottleLength, rimLength) {
  const cubeHeight = bottleLength - rimLength;
  const volume = cubeHeight * radius * radius * 2;
  return volume;
}
