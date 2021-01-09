// function toCsvText(array) {
//   let scv = '';
//   for (let i = 0; i < array.length; i++) {
//     scv += array[i][0];
//     for (let k = 1; k < array[i].length; k++) {
//       scv += ',' + array[i][k];
//     }
//     if (i == array.length - 1) {
//       break;
//     } else {
//       scv += '\n';
//     }
//   }
//   return scv;
// }
function toCsvText(array) {
  return array.join('\n');
}
