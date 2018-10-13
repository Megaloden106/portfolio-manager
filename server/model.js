const queries = require('../database');

const model = {
  user: {
    get: usernameOrUserId => {},
    post: data => {},
    put: (usernameOrUserId, data) => {},
    delete: usernameOrUserId => {},
  },
  portfolio: {
    get: portfolioId => {},
    post: data => {},
    put: (portfolioId, data) => {},
    delete: portfolioId => {},
  },
};

module.exports = model;