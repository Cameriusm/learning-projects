function pipeFix(numbers) {
  let arr = [];
  let k = 0;
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr[k] = i;
    k++;
  }
  return arr;
}
