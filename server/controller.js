const model = require('./model');
const { genRandomString, sha512 } = require('./hash');
const passport = require('./passport');

const controller = {
  user: {
    // get: (req, res) => model.user.get(req.params.user)
    //   .then(data => res.json(data))
    //   .catch((error) => {
    //     console.error(error.message);
    //     res.status(500).send(error);
    //   }),
    login: (req, res, next) => {
      passport.authenticate('local', (err1, user, info) => {
        if (err1) { return next(err1); }
        if (!user) { return res.status(401).json({ err: info }); }
        return req.logIn(user, (err2) => {
          if (err2) {
            return res.status(500).json({
              err: 'Invalid password',
            });
          }
          return model.portfolios.get(user.id)
            .then(portfolios => res.json(Object.assign(user, { portfolios })))
            .catch((error) => {
              console.error(error.message);
              res.status(500).send(error);
            });
        });
      })(req, res, next);
    },
    register: (req, res) => {
      req.body.salt = genRandomString(25);
      req.body.password = sha512(req.body.password, req.body.salt);
      return model.user.register(req.body)
        .then(() => res.send('SUCCESS'))
        .catch((error) => {
          console.error(error.message);
          res.status(500).send(error);
        });
    },
  },
  portfolio: {
    get: (req, res) => model.portfolio.get(req.params.portfolio)
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
    put: (req, res) => model.portfolio.put(req.params.portfolio, req.body)
      .then(() => res.send('SUCCESS'))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
    delete: (req, res) => model.portfolio.put(req.params.portfolio)
      .then(() => res.send('SUCCESS'))
      .catch((error) => {
        console.error(error.message);
        res.status(500).send(error);
      }),
  },
};

module.exports = controller;
