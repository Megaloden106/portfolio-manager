const model = require('./model');

const controller = {
  user: {
    get: (req, res) => model.user.get(req.params.usernameOrUserId)
      .then(data => res.json(data))
      .catch(error => res.status(432).send(error)),
    post: (req, res) => model.user.post(req.body)
      .then(() => res.send('SUCCESS'))
      .catch(error => res.status(432).send(error)),
    put: (req, res) => model.user.put(req.params.usernameOrUserId, req.body)
      .then(() => res.send('SUCCESS'))
      .catch(error => res.status(432).send(error)),
    delete: (req, res) => model.user.put(req.params.usernameOrUserId)
      .then(() => res.send('SUCCESS'))
      .catch(error => res.status(432).send(error)),
  },
  portfolio: {
    get: (req, res) => model.user.get(req.params.portfolioId)
      .then(data => res.json(data))
      .catch(error => res.status(432).send(error)),
    post: (req, res) => model.user.post(req.body)
      .then(() => res.send('SUCCESS'))
      .catch(error => res.status(432).send(error)),
    put: (req, res) => model.user.put(req.params.portfolioId, req.body)
      .then(() => res.send('SUCCESS'))
      .catch(error => res.status(432).send(error)),
    delete: (req, res) => model.user.put(req.params.portfolioId)
      .then(() => res.send('SUCCESS'))
      .catch(error => res.status(432).send(error)),
  },
};

module.exports = controller;
