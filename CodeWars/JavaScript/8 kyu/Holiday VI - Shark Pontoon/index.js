function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
  if (dolphin) {
    sharkSpeed = sharkSpeed / 2;
  }
  if (pontoonDistance / youSpeed < sharkDistance / sharkSpeed) {
    return 'Alive!';
  } else {
    return 'Shark Bait!';
  }
}
