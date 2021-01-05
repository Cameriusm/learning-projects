function multiTable(number) {
  let string = '';
  for (let i = 1; i <= 10; i++) {
    if (i === 10) {
      string += `${i} * ${number} = ${i * number}`;
      break;
    }
    string += `${i} * ${number} = ${i * number}\n`;
  }
  return string;
}
