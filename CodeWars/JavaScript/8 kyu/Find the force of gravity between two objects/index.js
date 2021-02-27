solution = (arr_val, arr_unit) => {
  const G = 6.67e-11;
  let convert = conversion(arr_unit);
  let result =
    (G * arr_val[0] * convert[0] * arr_val[1] * convert[1]) /
    (arr_val[2] * convert[2]) ** 2;
  return result;
};

function conversion(arr_unit) {
  for (let unit = 0; unit < arr_unit.length; unit++) {
    if (arr_unit[unit] === 'kg') {
      arr_unit[unit] = 1;
    } else if (arr_unit[unit] === 'g') {
      arr_unit[unit] = 1e-3;
    } else if (arr_unit[unit] === 'mg') {
      arr_unit[unit] = 1e-6;
    } else if (arr_unit[unit] === 'μg') {
      arr_unit[unit] = 1e-9;
    } else if (arr_unit[unit] === 'lb') {
      arr_unit[unit] = 0.453592;
    } else if (arr_unit[unit] === 'm') {
      arr_unit[unit] = 1;
    } else if (arr_unit[unit] === 'cm') {
      arr_unit[unit] = 1e-2;
    } else if (arr_unit[unit] === 'mm') {
      arr_unit[unit] = 1e-3;
    } else if (arr_unit[unit] === 'μm') {
      arr_unit[unit] = 1e-6;
    } else if (arr_unit[unit] === 'ft') {
      arr_unit[unit] = 0.3048;
    }
  }
  return arr_unit;
}
