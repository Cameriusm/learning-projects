function stringy(size) {
  let str = '';
  let num = true;
  for (let i = 0; i < size; i++) {
    str += num ? '1' : '0';
    num = !num;
  }
  return str;
}
