function fruits(a, ...z) {
  console.log('fruits', z);
}
module.exports = fruits('apple', 'banana', 'kiwi', 'orange', 'mango');
