function howMuchWater(water, load, clothes) {
  return clothes > 2 * load
    ? 'Too much clothes'
    : clothes < load
    ? 'Not enough clothes'
    : Number((water * 1.1 ** (clothes - load)).toFixed(2));
}
