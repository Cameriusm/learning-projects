function pointsPer48(ppg, mpg) {
  return ppg ? Number(((ppg * 48) / mpg).toFixed(1)) : 0;
}
