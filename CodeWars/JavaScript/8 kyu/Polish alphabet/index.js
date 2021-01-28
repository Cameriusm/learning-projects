function correctPolishLetters(string) {
  const polish = {
    ą: 'a',
    ć: 'c',
    ę: 'e',
    ł: 'l',
    ń: 'n',
    ó: 'o',
    ś: 's',
    ź: 'z',
    ż: 'z',
  };
  return string.replace(/[ąćęłńóśźż]/gi, (char) => polish[char]);
}
