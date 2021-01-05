const reverseSeq = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = n - i;
  }
  return arr;
};
