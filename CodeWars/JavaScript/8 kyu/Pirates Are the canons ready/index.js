const cannonsReady = (gunners) => {
  for (key in gunners) {
    if (gunners[key] === 'nay') return 'Shiver me timbers!';
  }
  return 'Fire!';
};
