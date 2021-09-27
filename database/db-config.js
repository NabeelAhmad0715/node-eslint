const { Pool } = require('pg');

const postgres = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'api',
  password: 'password',
  port: 5432,
});
postgres.connect();

module.exports = postgres;
