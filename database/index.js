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
  database: 'portfolio_manager',
};
const db = pgp(cn);

const queries = {
  getAllExchanges: () => db.any('SELECT * FROM exchanges;'),
  getUserInfo: username => db.any(`
    SELECT * FROM users
    WHERE username = '${username}'
    LIMIT 1;
  `).then(res => res[0]),
  getPortfolios: id => db.any(`
    SELECT * FROM portfolios
    WHERE user_id = ${id};
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
  insertNewPortfolio: (name, userId, exchangeId) => db.any(`
    INSERT INTO portfolios (name, user_id, exchange_id)
    VALUES ('${name}', ${userId}, ${exchangeId});
  `),
  // getSummaryByUsername: username => db.any(`
  //   SELECT * FROM users
  //   INNER JOIN portfolios ON portfolios.id = users.portfolio_ids[1]
  //   INNER JOIN portfolio_data ON portfolios.id = portfolio_data.portfolio_id
  //   AND users.username = '${username}'
  //   ORDER BY portfolio_data.date DESC;
  // `),
  // getSummaryById: userId => db.any(`
  //   SELECT * FROM users
  //   INNER JOIN portfolios ON portfolios.id = users.portfolio_ids[1]
  //   INNER JOIN portfolio_data ON portfolios.id = portfolio_data.portfolio_id
  //   AND users.id = ${userId}
  //   ORDER BY portfolio_data.date DESC;
  // `),
  // getPortfoliosByUserId: userId => db.any(`
  //   SELECT name FROM portfolios
  //   WHERE user_id = ${userId}
  // `),
  // getPortfolioById: portfolioId => db.any(`
  //   SELECT * FROM portfolio_data
  //   WHERE portfolio_id = ${portfolioId}
  //   ORDER BY portfolio_data.date DESC;
  // `),
  // getPortfoliosByUsername: username => db.any(`
  //   SELECT portfolio_ids FROM users
  //   WHERE username = '${username}'
  //   LIMIT 1;
  // `).then(res => res[0]),
  // getLatestBalance: portfolioId => db.any(`
  //   SELECT * FROM portfolio_data
  //   WHERE portfolio_id = ${portfolioId}
  //   ORDER BY date DESC
  //   LIMIT 1;
  // `).then(res => res[0]),
  // insertNewUser: username => db.any(`
  //   INSERT INTO users (username)
  //   VALUES ('${username}')
  //   RETURNING id;
  // `).then(res => res[0].id),
  // insertNewPortfolio: data => db.any(`
  //   INSERT INTO portfolios (name, user_id, exchange_id)
  //   VALUES ('${data.name}', ${data.userId}, ${data.exchangeId})
  //   RETURNING id;
  // `).then(res => res[0].id),
  // insertPortfolioData: data => db.any(`
  //   INSERT INTO portfolio_data (date, portfolio_id, balance, deposit, withdrawal, returns, cumulative_returns)
  //   VALUES ('${data.date}', ${data.portfolioId}, ${data.balance}, ${data.deposit}, ${data.withdrawal}, ${data.returns}, ${data.cumulativeReturns});
  // `),
  // appendIdsToUser: (portfolioId, exchangeId, username) => db.any(`
  //   UPDATE users SET portfolio_ids = portfolio_ids || ${portfolioId} WHERE username = '${username}';
  //   UPDATE users SET exchange_ids = exchange_ids || ${exchangeId} WHERE username = '${username}';
  // `),
};

module.exports = queries;
