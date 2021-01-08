function warnTheSheep(queue) {
  for (let i = 0; i < queue.length - 1; i++) {
    if (queue[i] == 'wolf') {
      return `Oi! Sheep number ${
        queue.length - 1 - i
      }! You are about to be eaten by a wolf!`;
    }
  }
  return 'Pls go away and stop eating my sheep';
}
