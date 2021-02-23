function correct(string) {
  return string
    .split('')
    .map((char) => {
      if (char === '5') return 'S';
      if (char === '0') return 'O';
      if (char === '1') return 'I';
      return char;
    })
    .join('');
}
