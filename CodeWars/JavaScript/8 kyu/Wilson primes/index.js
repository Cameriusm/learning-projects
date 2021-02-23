const fact = (number) => {
  if (number === 0) return 1;
  return number * fact(number - 1);
};

function amIWilson(p) {
  return Number.isInteger((fact(p - 1) + 1) / (p * p));
}
