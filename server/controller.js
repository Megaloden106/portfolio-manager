const model = require('./model');
const { genRandomString, sha512 } = require('./hash');
const passport = require('./passport');

const sendError = (res, error) => {
  console.error(error.message);
  res.status(500).send(error);
};

const controller = {
  user: {
    login: (req, res, done) => {
      passport.authenticate('local', (err1, user, info) => {
        if (err1) { return done(err1); }
        if (!user) { return res.status(401).json({ err: info }); }
        return req.login(user, (err2) => {
          if (err2) {
            return res.status(500).json({
              err: 'Invalid password',
            });
          }
          return model.portfolios.get(user.id)
            .then(portfolios => res.json(Object.assign(user, { portfolios })))
            .catch(error => sendError(res, error));
        });
      })(req, res, done);
    },
    logout: (req, res) => {
      req.logout();
      res.redirect('/');
    },
    register: (req, res) => {
      req.body.salt = genRandomString(25);
      req.body.password = sha512(req.body.password, req.body.salt);
      return model.user.register(req.body)
        .then(() => res.send('SUCCESS'))
        .catch(error => sendError(res, error));
    },
    session: (req, res) => {
      if (!req.user) { res.json({}); }
      res.json(req.user);
    },
  },
  portfolio: {
    get: (req, res) => model.portfolio.get(req.params.portfolio)
      .then(data => res.json(data))
      .catch(error => sendError(res, error)),
    post: (req, res) => model.portfolio.post(req.body)
      .then(() => res.send('SUCCESS'))
      .catch(error => sendError(res, error)),
    put: (req, res) => model.portfolio.put(req.params.portfolio, req.body)
      .then(() => res.send('SUCCESS'))
      .catch(error => sendError(res, error)),
    delete: (req, res) => model.portfolio.put(req.params.portfolio)
      .then(() => res.send('SUCCESS'))
      .catch(error => sendError(res, error)),
  },
};

module.exports = controller;
