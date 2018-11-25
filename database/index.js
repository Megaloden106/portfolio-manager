const Promise = require('bluebird');

const initOptions = {
  promiseLib: Promise,
  query(event) {
    console.error('QUERY:', event.query);
  },
  error(error, event) {
    if (event.cn) {
      console.error('CN:', event.cn);
      console.error('EVENT:', error.message || error);
    }
  },
};
const pgp = require('pg-promise')(initOptions);

const cn = {
  host: process.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'portfolio_manager',
};
const db = pgp(cn);

const queries = {
  getAllExchanges: () => db.any('SELECT * FROM exchanges;'),
  getUserByUsername: username => db.any(`
    SELECT * FROM users
    WHERE username = '${username}'
    LIMIT 1;
  `).then(res => res[0]),
  getUserById: id => db.any(`
    SELECT * FROM users
    WHERE id = ${id}
    LIMIT 1;
  `).then(res => res[0]),
  getPortfoliosByUserId: userId => db.any(`
    SELECT * FROM portfolios
    WHERE user_id = ${userId};
  `),
  insertNewUser: ({
    name,
    email,
    username,
    password,
    salt,
  }) => db.any(`
    INSERT INTO users (name, username, email, verified, password, salt)
    VALUES ('${name}', '${username}', '${email}', ${false}, '${password}', '${salt}')
    RETURNING id;
  `).then(res => res[0]),
  insertNewPortfolio: (
    name,
    userId,
    balance = 0,
    type = null,
    category = null,
    exchangeId = null,
  ) => db.any(`
    INSERT INTO portfolios (name, user_id, balance, type, category, exchange_id)
    VALUES ('${name}', ${userId}, ${balance}, '${type}', '${category}', ${exchangeId + 1});
  `),
  updatePortfolio: (
    portfolioId,
    name,
    userId,
    balance = 0,
    type = null,
    category = null,
    exchangeId = null,
  ) => db.any(`
    UPDATE portfolios SET (name, user_id, balance, type, category, exchange_id)
    = ('${name}', ${userId}, ${balance}, '${type}', '${category}', ${exchangeId + 1})
    WHERE id=${portfolioId};
  `),
};

module.exports = queries;
