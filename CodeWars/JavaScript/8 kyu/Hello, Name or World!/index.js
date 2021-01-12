function hello(name) {
  return name
    ? `Hello, ${
        name.toLowerCase().charAt(0).toUpperCase() + name.toLowerCase().slice(1)
      }!`
    : 'Hello, World!';
}
