const queries = require('../database');

let cachedExchanges = [];

const cacheExchanges = () => queries.getAllExchanges()
  .catch(error => console.error(error))
  .then(data => data.map(({ company }) => company))
  .then((data) => { cachedExchanges = data; });

cacheExchanges();

const regExp = /;|'|--|\/\*|\*\/|xp_/g;

const model = {
  exchanges: {
    get: () => cachedExchanges,
  },
  portfolios: {
    get: userId => queries.getPortfoliosByUserId(userId)
      .then(portfolios => portfolios.map(elem => Object.assign(
        elem,
        { exchange: cachedExchanges[elem.exchange_id - 1] || null },
      ))),
  },
  portfolio: {
    get: portfolioId => queries.getPortfolioDataById(portfolioId.replace(regExp, ''))
      .then(data => data.map(entry => ({
        date: entry.date,
        balance: entry.balance,
        deposit: entry.deposit,
        withdrawal: entry.withdrawal,
        returns: entry.returns,
        cumulativeReturns: entry.cumulative_returns,
      }))),
    post: ({ body, user }) => queries.insertNewPortfolio(
      body.name,
      user.id,
      0,
      body.type,
      body.category,
      cachedExchanges.indexOf(body.exchange),
    ),
    put: (portfolioId, { body, user }) => queries.updatePortfolio(
      portfolioId.replace(regExp, ''),
      body.name,
      user.id,
      0,
      body.type,
      body.category,
      cachedExchanges.indexOf(body.exchange),
    ),
    // delete: (portfolioId) => {},
  },
  user: {
    register: creds => queries.insertNewUser(creds)
      .then(({ id }) => queries.insertNewPortfolio('Summary', id)
        .then(() => queries.insertNewPortfolio('Personal', id))
        .then(() => queries.insertNewPortfolio('Retirement', id))),
    get: param => (Number.isNaN(Number(param))
      ? queries.getUserByUsername(param)
      : queries.getUserById(param)
    ),
  },
};

module.exports = model;
