function findMultiples(integer, limit) {
  let arr = [integer];
  for (let i = 0; arr[arr.length - 1] <= limit - integer; i++) {
    arr.push(arr[i] + integer);
  }
  return arr;
}
