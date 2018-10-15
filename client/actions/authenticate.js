import autheticateUser from '../lib/authenticateUser';
import changePortfolioSummary from './summary';
import changePortfolios from './portfolios';
import changeUser from './user';

const handleAuthentication = username => (dispatch) => {
  autheticateUser(username)
    .then(({ data }) => {
      const portfolios = data[0].portfolio_exchanges
        .map((exchange, idx) => ({
          exchange,
          portfolio_ids: data[0].portfolio_ids[idx],
        }));
      const portfolioSummary = data
        .map(({
          date, balance, deposit, withdrawal,
        }) => ({
          date, balance, deposit, withdrawal,
        }));
      dispatch(changePortfolioSummary(portfolioSummary));
      dispatch(changePortfolios(portfolios));
      dispatch(changeUser(data[0].username));
    });
};

export default handleAuthentication;
