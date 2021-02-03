function guessBlue(blueStart, redStart, bluePulled, redPulled) {
  let blueLeft = blueStart - bluePulled;
  let redLeft = redStart - redPulled;
  return blueLeft / (blueLeft + redLeft);
}
