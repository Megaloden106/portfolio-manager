const queries = require('../database');

const cachedExchanges = [];

queries.getAllExchanges()
  .then(data => data.forEach(({ company }) => cachedExchanges.push(company)))
  .catch(error => console.error(error));

const model = {
  user: {
    get: (usernameOrUserId) => {
      const getUser = Number.isNaN(Number(usernameOrUserId))
        ? 'getUserByUsername'
        : 'getUserById';
      return queries[getUser](usernameOrUserId)
        .then((response) => {
          const data = response.slice();
          data[0].portfolio_exchanges = data[0]
            .portfolio_exchange_ids.map(id => cachedExchanges[id - 1]);
          return data;
        });
    },
    post: (data) => {},
    put: (usernameOrUserId, data) => {},
    delete: (usernameOrUserId) => {},
  },
  portfolio: {
    get: (portfolioId) => {},
    post: (data) => {},
    put: (portfolioId, data) => {},
    delete: (portfolioId) => {},
  },
};

module.exports = model;
