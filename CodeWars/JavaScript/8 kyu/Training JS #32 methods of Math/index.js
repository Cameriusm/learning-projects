function roundIt(n) {
  let num = String(n).split('.');
  if (num[1].length > num[0].length) return Math.ceil(n);
  if (num[1].length < num[0].length) return Math.floor(n);
  if (num[1].length === num[0].length) return Math.round(n);
}
