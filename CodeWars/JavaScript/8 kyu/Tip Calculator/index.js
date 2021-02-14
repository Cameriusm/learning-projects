function calculateTip(amount, rating) {
  switch (rating.toUpperCase()) {
    case 'TERRIBLE':
      return 0;
    case 'POOR':
      return Math.ceil((amount / 100) * 5);
    case 'GOOD':
      return Math.ceil((amount / 100) * 10);
    case 'GREAT':
      return Math.ceil((amount / 100) * 15);
    case 'EXCELLENT':
      return Math.ceil((amount / 100) * 20);
    default:
      return 'Rating not recognised';
  }
}
