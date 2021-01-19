function dutyFree(normPrice, discount, hol) {
  return Math.trunc(hol / ((normPrice * discount) / 100));
}
