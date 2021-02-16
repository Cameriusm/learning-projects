// function rentalCarCost(d) {
//   return d >= 3 ? (d >= 7 ? d * 40 - 50 : d * 40 - 20) : d * 40;
// }

function rentalCarCost(d) {
  return 40 * d - (d > 6 ? 50 : d > 2 ? 20 : 0);
}
