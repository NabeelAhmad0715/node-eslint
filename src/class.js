class Fruits {
  constructor(fruit) {
    this.name = fruit || 'no name';
  }

  getFruitName() {
    return this.toString();
  }

  toString() {
    return `Fruit - ${this.name}`;
  }
}

const fruits = new Fruits('Apple');
console.log(fruits.toString());

class Rectangle {
  constructor(height, width) {
    this.name = 'Rectangle';
    this.height = height;
    this.width = width;
  }

  getName() {
    console.log(`Hi, I am a ${this.name}. and my Area is ${this.getArea()}`);
  }

  getArea() {
    return this.width * this.height;
  }
}
const rectangle = new Rectangle(30, 45);
const records = rectangle.getName();
console.log(`The width of this rectangle is ${rectangle.width}`);
module.exports = records;
