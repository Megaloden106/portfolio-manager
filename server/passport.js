const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const queries = require('../database');

const regExp = /;|'|--|\/\*|\*\/|xp_/g;

passport.use(new LocalStrategy((username, password, done) => {
  queries.getUserByUsername(username.replace(regExp, ''))
    .catch(err => done(err))
    .then((user) => {
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  queries.getUserById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});

module.export = passport;
