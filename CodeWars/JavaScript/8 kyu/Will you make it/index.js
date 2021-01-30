const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return distanceToPump <= fuelLeft * mpg;
};
