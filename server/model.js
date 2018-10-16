const queries = require('../database');

const cachedExchanges = [];

queries.getAllExchanges()
  .then(data => data.forEach(({ company }) => cachedExchanges.push(company)))
  .catch(error => console.error(error));

const model = {
  user: {
    get: (usernameOrUserId) => {
      const getSummary = Number.isNaN(Number(usernameOrUserId))
        ? 'getSummaryByUsername'
        : 'getSummaryById';
      return queries[getSummary](usernameOrUserId)
        .then((response) => {
          const result = {};
          const data = response.slice();
          return queries.getPortfoliosByUserId(data[0].user_id)
            .then((res) => {
              result.username = data[0].username;
              result.portfolios = data[0].exchange_ids
                .map((id, idx) => ({
                  name: res[idx].name,
                  exchange: cachedExchanges[id - 1],
                  portfolioId: data[0].portfolio_ids[idx],
                }));
              result.portfolioData = data.map(entry => ({
                date: entry.date,
                balance: entry.balance,
                deposit: entry.deposit,
                withdrawal: entry.withdrawal,
                returns: entry.returns,
                cumulativeReturns: entry.cumulative_returns,
              }));
              return result;
            });
        });
    },
    post: body => queries.insertNewUser(body.username),
    put: (usernameOrUserId, body) => {},
    delete: (usernameOrUserId) => {},
  },
  portfolio: {
    get: portfolioId => queries.getPortfolioById(portfolioId)
      .then(data => data.map(entry => ({
        date: entry.date,
        balance: entry.balance,
        deposit: entry.deposit,
        withdrawal: entry.withdrawal,
        returns: entry.returns,
        cumulativeReturns: entry.cumulative_returns,
      }))),
    post: body => queries.getPortfoliosByUsername(body.username)
      .then(({ data }) => {
        console.log(data);
      }),
    put: (portfolioId, body) => {},
    delete: (portfolioId) => {},
  },
};

module.exports = model;
