const fruits = ['apple', 'mango', 'kiwi', 'orange'];
const [fruit1, fruit2, ...restOperator] = fruits;
const records = (restOperator, fruit1, fruit2);

module.exports = records;
