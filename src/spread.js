const fruits = ['apple', 'banana', 'kiwi'];
const newFruits = [...fruits];
newFruits.push('mango');
module.exports = `After Adding Mango \n\nNew Fruits \n${newFruits} \n\nOld Fruits \n${fruits}`;
