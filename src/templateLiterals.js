const quote = 'either you run the code or code runs you';
const by = 'Nabeel Amjad';
const user = 'peter';
const x = 10;
const y = 20;
function fullName() {
  return by;
}
module.exports = `${quote} by ${fullName()} Hello ${user} and X Y Value is ${
  x * y
}`;
