function cookie(x) {
  let str = 'Who ate the last cookie? It was ';
  switch (typeof x) {
    case 'string':
      return str + 'Zach!';
    case 'number':
      return str + 'Monica!';
    case 'boolean':
      return str + 'the dog!';
    default:
      return str + 'the dog!';
  }
}
