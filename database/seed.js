const moment = require('moment');
const q = require('./index');

const deposit1 = 200;
const deposit2 = 458.33;
let balance1 = deposit1;
let balance2 = deposit2;
let returns1 = 0;
let returns2 = 0;
let creturns1 = 0;
let creturns2 = 0;

// q.insertNewUser('eddielo');
// q.appendIdsToUser(1, 0, 'eddielo');
// q.appendIdsToUser(2, 1, 'eddielo');
// q.appendIdsToUser(3, 1, 'eddielo');

// q.insertNewPortfolio({ name: 'Summary', userId: 1, exchangeId: null });
// q.insertNewPortfolio({ name: 'Vanguard (4-Fund)', userId: 1, exchangeId: 1 });
// q.insertNewPortfolio({ name: 'Vanguard (Retirement)', userId: 1, exchangeId: 1 });

const past = moment().subtract(1, 'years');
const daysTilNow = moment().diff(past, 'days');

for (let i = 0; i < daysTilNow; i += 1) {
  const data1 = {
    date: past.format('YYYY-MM-DD'),
    balance: balance1,
    deposit: deposit1,
    withdrawal: 0,
    returns: returns1,
    cumulativeReturns: creturns1,
  };
  const data2 = {
    date: past.format('YYYY-MM-DD'),
    balance: balance2,
    deposit: deposit2,
    withdrawal: 0,
    returns: returns2,
    cumulativeReturns: creturns2,
  };
  const sumdata = {
    date: past.format('YYYY-MM-DD'),
    balance: balance1 + balance2,
    deposit: deposit1 + deposit2,
    withdrawal: 0,
    returns: returns1 + returns2,
    cumulativeReturns: creturns1 + creturns2,
  };
  q.insertPortfolioData(sumdata, 1);
  q.insertPortfolioData(data1, 2);
  q.insertPortfolioData(data2, 3);
  past.add(1, 'days');
  let tempBalance = balance1;
  balance1 *= 1 + (Math.random() - 0.5) / 10;
  balance1 += deposit1;
  returns1 = balance1 - deposit1 - tempBalance;
  creturns1 += returns1;
  tempBalance = balance2;
  balance2 *= 1 + (Math.random() - 0.5) / 10;
  balance2 += deposit2;
  returns2 = balance2 - deposit2 - tempBalance;
  creturns2 += returns2;
}
