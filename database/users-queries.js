const { sequelize, Model } = require('sequelize');
const User = require('../models/users');
// const db = {};

const getUsers = (request, response, next) => {
  // const users = User.User.findAll();
  // response.status(200).json(users);
  User.Products.findAll({
    include: [
      {
        model: User.Category,
      },
    ],
  }).then((product) => response.json(product));
  // const users = sequelize.User.findAll().then((data) => {
  //   response.status(200).json(data.get({ plain: true }));
  // });
  // module.exports = users;
  // sequelize.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
  //   if (error) {
  //     throw error;
  //   }
  //   response.status(200).json(results.rows);
  // });
};

const getUserById = (request, response) => {
  const id = parseInt(request.params.id);

  sequelize.query(
    'SELECT * FROM users WHERE id = $1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    },
  );
};

const createUser = (request, response) => {
  const { name, email } = request.body;

  sequelize.query(
    'INSERT INTO users (name, email) VALUES ($1, $2)',
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.insertId}`);
    },
  );
};

const updateUser = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  sequelize.query(
    'UPDATE users SET name = $1, email = $2 WHERE id = $3',
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${id}`);
    },
  );
};

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  sequelize.query('DELETE FROM users WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
