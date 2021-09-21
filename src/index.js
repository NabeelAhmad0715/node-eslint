const express = require('express');

const app = express();
// const arrow = require('./arrow');

// const router = express.Router();
app.use('/', require('../routes/web'));
app.use('/async-await', require('../routes/web'));
app.use('/class-program', require('../routes/web'));
app.use('/destructuring', require('../routes/web'));
app.use('/destructuring-object', require('../routes/web'));
app.use('/find-index', require('../routes/web'));
app.use('/generators', require('../routes/web'));
app.use('/inheritance', require('../routes/web'));
app.use('/lexical', require('../routes/web'));
app.use('/promise', require('../routes/web'));
app.use('/rest', require('../routes/web'));
app.use('/spread', require('../routes/web'));
app.use('/templateLiterals', require('../routes/web'));

app.listen(3000, () => {
  console.log('Server is running on 3000');
});
// console.log(arrow);
// console.log(asyncAwait);
// console.log(classProgram);
// console.log(destructuring);
// console.log(destructuringObject);
// console.log(findIndex);
// console.log(generators);
// console.log(inheritance);
// console.log(lexical);
// console.log(promise);
// console.log(rest);
// console.log(spread);
// console.log(templateLiterals);
