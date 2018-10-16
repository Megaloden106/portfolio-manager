const axios = require('axios');
const moment = require('moment');
const q = require('./index');

const url = 'http://localhost:8888/api';

// axios.post(`${url}/user`, { username: 'eddielo' });

// q.getLatestBalance(1)
//   .then(data => console.log(data));

// q.getPortfoliosByUsername('eddielo')
//   .then(data => console.log(data))

const body = {
  user: 'eddielo',
  data: {
    portfolioId: 2,
    date: '2018-10-18',
    balance: 80000,
    deposit: 200,
    withdrawal: 0,
  },
};

const moneyToDecimal = str => Number(str.slice(1).replace(',', ''));

q.getLatestBalance(body.data.portfolioId)
  .then((res) => {
    const { data } = body;
    data.returns = body.data.balance - moneyToDecimal(res.balance);
    data.returns = Math.round(data.returns * 100) / 100;
    data.cumulativeReturns = data.returns + moneyToDecimal(res.cumulative_returns);
    return q.insertPortfolioData(data);
  });
