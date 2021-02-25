function isVow(a) {
  return a.map((char) =>
    /[aeiou]/.test(String.fromCharCode(char)) ? String.fromCharCode(char) : char
  );
}
