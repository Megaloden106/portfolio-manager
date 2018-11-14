const express = require('express');
require('dotenv').config();
const logger = require('morgan');
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const path = require('path');

const app = express();
const router = require('./routes.js');
const passport = require('./passport');


const options = {
  secret: process.env.SECRET,
  resave: true,
  saveUninitialized: true,
};

app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());

app.use(cookieParser());
app.use(session(options));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', express.static('public'));

app.use('/api', router);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public', 'index.html'));
});

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.warn(`app is listening to port ${app.get('port')}`);
});
