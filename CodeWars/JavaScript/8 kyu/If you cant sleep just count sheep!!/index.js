var countSheep = function (num) {
  let str = '';
  let i = 1;
  while (i <= num) {
    str += `${i} sheep...`;
    i++;
  }
  return str;
};
