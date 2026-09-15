const path = require('path');

const sqlite = {
  dialect: 'sqlite',
  storage: process.env.SQLITE_PATH || path.join(__dirname, '..', 'rendiya.sqlite'),
  logging: false
};

const mysql = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '',
  database: process.env.DB_NAME || 'rendiya',
  host: process.env.DB_HOST || '127.0.0.1',
  dialect: 'mysql',
  logging: false
};

module.exports = {
  development: sqlite,
  test: {
    dialect: 'sqlite',
    storage: ':memory:',
    logging: false
  },
  production: process.env.DB_HOST ? mysql : sqlite
};
