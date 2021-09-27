function* generator(a, b) {
  console.log(`A value is ${a}`, `B value is ${b}\n`);
  yield `step 1 completed Addition ${a + b}`;
  yield `step 2 completed Minus ${a - b}`;
  yield `step 3 completed Multiplication ${a * b}`;
  return 'all steps done';
}
const steps = generator(10, 20);
function getSteps() {
  console.log(steps.next().value);
}
console.log('\nSteps\n'); // 0
getSteps();
getSteps();
getSteps();

function* fibonacci() {
  let current = 0;
  let next = 1;
  while (true) {
    const reset = yield current;
    [current, next] = [next, next + current];
    if (reset) {
      current = 0;
      next = 1;
    }
  }
}

function SIGN_UP(params) {
  
}

const sequence = fibonacci();
console.log('\nFibonacci Series'); // 0
console.log(sequence.next().value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2
console.log(sequence.next().value); // 3
console.log(sequence.next().value); // 5
console.log(sequence.next().value); // 8
console.log(sequence.next(true).value); // 0
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 1
console.log(sequence.next().value); // 2

module.exports = generator;
