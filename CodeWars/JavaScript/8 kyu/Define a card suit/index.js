function defineSuit(card) {
  switch (card.slice(-1)) {
    case '♣':
      return 'clubs';
    case '♠':
      return 'spades';
    case '♦':
      return 'diamonds';
    case '♥':
      return 'hearts';
  }
}
