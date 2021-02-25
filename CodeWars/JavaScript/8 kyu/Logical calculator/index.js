function logicalCalc(array, op) {
  switch (op) {
    case 'AND':
      return array.reduce((acc, e) => acc && e);
    case 'OR':
      return array.reduce((acc, e) => acc || e);
    case 'XOR':
      return array.reduce((acc, e) => acc != e);
  }
}
