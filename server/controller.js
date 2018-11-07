const model = require('./model');

const controller = {
  user: {
    get: (req, res) => model.user.get(req.params.usernameOrUserId)
      .then(data => res.json(data))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
    post: (req, res) => model.user.post(req.body)
      .then(() => res.send('SUCCESS'))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
    put: (req, res) => model.user.put(req.params.usernameOrUserId, req.body)
      .then(() => res.send('SUCCESS'))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
    delete: (req, res) => model.user.put(req.params.usernameOrUserId)
      .then(() => res.send('SUCCESS'))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
  },
  portfolio: {
    get: (req, res) => model.portfolio.get(req.params.portfolioId)
      .then(data => res.json(data))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
    post: (req, res) => model.portfolio.post(req.body)
      .then(() => res.send('SUCCESS'))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
    put: (req, res) => model.portfolio.put(req.params.portfolioId, req.body)
      .then(() => res.send('SUCCESS'))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
    delete: (req, res) => model.portfolio.put(req.params.portfolioId)
      .then(() => res.send('SUCCESS'))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
  },
};

module.exports = controller;
