const queries = require('../database');

const model = {
  user: {
    get: (usernameOrUserId) => {
      const getUser = Number.isNaN(Number(usernameOrUserId))
        ? 'getUserByUsername'
        : 'getUserbyId';
      return queries[getUser](usernameOrUserId);
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
