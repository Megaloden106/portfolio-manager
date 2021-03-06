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
  portfolio: {
    data: {
      get: portfolioId => queries.getPortfolioDataById(portfolioId.replace(regExp, ''))
        .then(data => data.map(entry => ({
          date: entry.date,
          balance: entry.balance,
          deposit: entry.deposit,
          withdrawal: entry.withdrawal,
          returns: entry.returns,
          cumulativeReturns: entry.cumulative_returns,
        }))),
    },
    get: userId => queries.getPortfoliosByUserId(userId)
      .then(portfolios => portfolios.map(elem => Object.assign(
        elem,
        { exchange: cachedExchanges[elem.exchange_id - 1] || null },
      )))
      .then(portfolios => portfolios.map(entry => ({
        balance: entry.balance,
        category: entry.category,
        dateCreated: entry.date_created,
        exchange: cachedExchanges[entry.exchange_id - 1] || null,
        id: entry.id,
        lastUpdated: entry.last_updated,
        name: entry.name,
        type: entry.type,
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
