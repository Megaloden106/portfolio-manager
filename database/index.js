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
  getUserByUsername: username => db.any(`
    SELECT * FROM users
    INNER JOIN portfolios ON portfolios.id = users.portfolio_summary_id
    INNER JOIN portfolio_data ON portfolios.id = portfolio_data.portfolio_id
    AND users.username = '${username}';
  `),
  getUserById: id => db.any(`
    SELECT * FROM users
    INNER JOIN portfolios ON portfolios.id = users.portfolio_summary_id
    INNER JOIN portfolio_data ON portfolios.id = portfolio_data.portfolio_id
    AND users.id = ${id}
  `),
  getAllExchanges: () => db.any('SELECT * FROM exchanges'),
};

module.exports = queries;
