function well(x) {
  let amount = x.filter((elem) => elem == 'good').length;
  return amount > 2 ? 'I smell a series!' : amount < 1 ? 'Fail!' : 'Publish!';
}
