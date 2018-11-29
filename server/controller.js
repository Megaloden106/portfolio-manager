const model = require('./model');
const { genRandomString, sha512 } = require('./hash');
const passport = require('./passport');

const sendError = (res, error) => {
  console.error(error.message);
  res.status(401).send(error);
};

const controller = {
  exchanges: {
    get: (req, res) => res.json(model.exchanges.get()),
  },
  portfolio: {
    data: {
      get: (req, res) => {
        let isValidId = false;
        if (!req.user) {
          return sendError(res, { message: 'Invalid User' });
        }
        const { portfolios } = req.user;
        for (let i = 0; i < portfolios.length; i += 1) {
          if (portfolios[i].id === Number(req.params.id)) {
            isValidId = true;
            break;
          }
        }
        if (isValidId) {
          return model.portfolio.data.get(req.params.id)
            .then(data => res.json(data))
            .catch(error => sendError(res, error));
        }
        return sendError(res, { message: 'Unauthorized Access To Portfolio' });
      },
    },
    post: (req, res) => model.portfolio.post(req)
      .then(() => res.send('SUCCESS'))
      .catch(error => sendError(res, error)),
    put: (req, res) => model.portfolio.put(req.params.id, req)
      .then(() => res.send('SUCCESS'))
      .catch(error => sendError(res, error)),
    delete: (req, res) => model.portfolio.put(req.params.id)
      .then(() => res.send('SUCCESS'))
      .catch(error => sendError(res, error)),
  },
  user: {
    login: (req, res, next) => {
      passport.authenticate('local', (err, user, info) => {
        if (err) { return next(err); }
        if (!user) { return res.status(401).json({ err: info }); }
        return req.login(user, (err2) => {
          if (err2) {
            return res.status(401).json({ err: 'Invalid password' });
          }
          return model.portfolio.get(user.id)
            .then((portfolios) => {
              res.json(Object.assign(user, { portfolios }));
            }).catch(error => sendError(res, error));
        });
      })(req, res, next);
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
      res.json(req.user);
    },
  },
};

module.exports = controller;
