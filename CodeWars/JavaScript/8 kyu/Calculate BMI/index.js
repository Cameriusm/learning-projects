function bmi(weight, height) {
  const BMI = weight / Math.Pow(height, 2);
  return BMI > 30
    ? 'Obese'
    : BMI <= 18.5
    ? 'Underweight'
    : BMI <= 25
    ? 'Normal'
    : 'Overweight';
}
