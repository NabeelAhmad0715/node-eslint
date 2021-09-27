const express = require('express');

const app = express();

const port = 3000;

app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});

app.use('/', require('../routes/web'));
app.use('/users', require('../routes/web'));
app.use('/users/:id', require('../routes/web'));
app.use('/users', require('../routes/web'));
app.use('/users/:id', require('../routes/web'));
app.use('/users/:id', require('../routes/web'));

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

// const express = require('express');
// // const database = require('../database/db-config');
// const bodyParser = require('body-parser');

// const app = express();
// // const Sequelize = require('sequelize');
// app.use(bodyParser.json());
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   }),
// );

// app.use('/', require('../routes/web'));
// app.use('/users', require('../routes/web'));
// app.use('/users/:id', require('../routes/web'));
// app.use('/users', require('../routes/web'));
// app.use('/users/:id', require('../routes/web'));
// app.use('/users/:id', require('../routes/web'));

// // app.use('/async-await', require('../routes/web'));
// // app.use('/class-program', require('../routes/web'));
// // app.use('/destructuring', require('../routes/web'));
// // app.use('/destructuring-object', require('../routes/web'));
// // app.use('/find-index', require('../routes/web'));
// // app.use('/generators', require('../routes/web'));
// // app.use('/inheritance', require('../routes/web'));
// // app.use('/lexical', require('../routes/web'));
// // app.use('/promise', require('../routes/web'));
// // app.use('/rest', require('../routes/web'));
// // app.use('/spread', require('../routes/web'));
// // app.use('/templateLiterals', require('../routes/web'));

// // const sequelize = new Sequelize(
// //   'postgres://nabeel:nabeel69@example.com:5432/node',
// // );
// // sequelize
// //   .authenticate()
// //   .then(() => {
// //     console.log('Connection has been established successfully.');
// //   })
// //   .catch((err) => {
// //     console.error('Unable to connect to the database:', err);
// //   });

// app.listen(3000, () => {
//   console.log('Server is running on 3000');
// });
