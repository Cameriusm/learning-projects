function getSize(width, height, depth) {
  return [
    (depth * width + depth * height + width * height) * 2,
    width * height * depth,
  ];
}
