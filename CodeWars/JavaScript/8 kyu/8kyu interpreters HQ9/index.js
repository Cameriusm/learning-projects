function HQ9(code) {
  if (code === 'H') return 'Hello World!';
  if (code === 'Q') return code;
  let res = '';
  if (code === '9') {
    for (let i = 99; i > 2; i--) {
      res += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${
        i - 1
      } bottles of beer on the wall.\n`;
    }
    res += `2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n`;
    res += `1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`;
    res += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`;
    return res;
  }
}
