const express = require('express');

const morgan = require('morgan');
const parser = require('body-parser');
const compression = require('compression');


const app = express();
const router = require('./routes.js');

app.use(compression());
app.use(morgan('dev'));
app.use(parser.json());

app.use('/', express.static('public'));

app.set('port', process.env.PORT || 8888);

app.listen(app.get('port'), () => {
  console.warn(`app is listening to port ${app.get('port')}`);
});
