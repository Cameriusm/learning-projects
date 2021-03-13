var humanYearsCatYearsDogYears = function (humanYears) {
  if (humanYears === 1) return [1, 15, 15];
  return [
    humanYears,
    humanYears == 2 ? 15 + 9 : 15 + 9 + (humanYears - 2) * 4,
    humanYears == 2 ? 15 + 9 : 15 + 9 + (humanYears - 2) * 5,
  ];
};
