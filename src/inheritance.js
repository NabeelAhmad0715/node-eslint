class Father {
  getName() {
    return this.name;
  }

  getChildName() {
    return this.childName;
  }

  toString() {
    return `${this.getChildName()} - ${this.getName()}`;
  }
}
class Child extends Father {
  constructor(...args) {
    super(...args);
    const [childName, fatherName] = args;
    this.childName = childName;
    this.name = fatherName;
  }
}
const child = new Child('Nabeel', 'Amjad');
module.exports = child.toString();
