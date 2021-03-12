class God {
  static create() {
    const adam = new Man();
    const eva = new Woman();
    return [adam, eva];
  }
}
class Human {}
class Man extends Human {}
class Woman extends Human {}
