const phrases = [
  'not at all',
  'I love you',
  'a little',
  'a lot',
  'passionately',
  'madly',
];

function howMuchILoveYou(nbPetals) {
  return phrases[nbPetals % 6];
}
