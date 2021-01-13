function nextId(ids) {
  let arr = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!arr.has(i)) {
      return i;
    }
  }
}
