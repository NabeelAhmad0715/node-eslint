const data = [
  { id: 10, name: 'a' },
  { id: 8, name: 'b' },
  { id: 50, name: 'c' },
  { id: 1, name: 'd' },
  { id: 100, name: 'e' },
];
module.exports = data.find((item) => item.id === 50);
