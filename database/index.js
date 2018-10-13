const Promise = require('bluebird');

const initOptions = {
  promiseLib: Promise,
  query(event) {
    console.warn('QUERY:', event.query);
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
  test: db.none(),
};

module.exports = queries;
