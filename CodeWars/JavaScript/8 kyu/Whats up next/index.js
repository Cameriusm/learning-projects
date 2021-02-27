const nextItem = (xs, item) => {
  let found = false;
  for (const i of xs) {
    if (found) {
      return i;
    }
    if (i === item) found = true;
  }
};
