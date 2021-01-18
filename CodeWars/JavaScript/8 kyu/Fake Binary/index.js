// function fakeBin(x) {
//   let str = '';
//   for (let n of x) {
//     n >= 5 ? (str += '1') : (str += '0');
//   }
//   return str;
// }

function fakeBin(x) {
  return x
    .split('')
    .map((n) => (n < 5 ? 0 : 1))
    .join('');
}
