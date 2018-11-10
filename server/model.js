const queries = require('../database');

const cachedExchanges = [];

queries.getAllExchanges()
  .then(data => data.forEach(({ company }) => cachedExchanges.push(company)))
  .catch(error => console.error(error));

const regExp = /;|'|--|\/\*|\*\/|xp_/g;

const model = {
  user: {
    get: username => queries.getUserByUsername(username.replace(regExp, ''))
      .then(creds => queries.getPortfolios(creds.id)
        .then(portfolios => Object.assign(
          creds,
          {
            portfolios: portfolios.map(elem => Object.assign(
              elem,
              { exchange: cachedExchanges[elem.exchange_id - 1] || null },
            )),
          },
        ))),
    post: creds => queries.insertNewUser(creds)
      .then(({ id }) => queries.insertNewPortfolio('Summary', id, null)),
    // put: (usernameOrUserId, body) => {},
    // delete: (usernameOrUserId) => {},
  },
  portfolio: {
    // get: portfolioId => queries.getPortfolioById(portfolioId)
    //   .then(data => data.map(entry => ({
    //     date: entry.date,
    //     balance: entry.balance,
    //     deposit: entry.deposit,
    //     withdrawal: entry.withdrawal,
    //     returns: entry.returns,
    //     cumulativeReturns: entry.cumulative_returns,
    //   }))),
    // post: body => queries.getPortfoliosByUsername(body.username),
    //   .then(({ data }) => { console.log(data); }),
    // put: (portfolioId, body) => {},
    // delete: (portfolioId) => {},
  },
};

module.exports = model;
