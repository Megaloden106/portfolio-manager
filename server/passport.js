const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const model = require('./model');
const { sha512 } = require('./hash');

passport.use(new LocalStrategy((username, password, done) => model.user.get(username)
  .catch(err => done(err))
  .then((user) => {
    if (!user) {
      return done(null, false, { message: 'Incorrect username.' });
    }
    if (user.password !== sha512(password, user.salt)) {
      return done(null, false, { message: 'Incorrect password.' });
    }
    return done(null, user);
  })));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => model.user.get(id)
  .then(user => model.portfolios.get(user.id)
    .then(portfolios => done(null, Object.assign(user, { portfolios })))
    .catch(err => done(err))));

module.exports = passport;
