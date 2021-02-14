function between(a, b) {
  let arr = [];
  for (; a <= b; a++) {
    arr.push(a);
  }
  return arr;
}

function between(a, b) {
  for (var i = a, arr = []; i <= b; arr.push(i++));
  return arr;
}
