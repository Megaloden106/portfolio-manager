import autheticateUser from '../lib/authenticateUser';
import changePortfolioData from './portfolioData';
import changePortfolios from './portfolios';
import changeUser from './user';
import changePage from './page';

const handleAuthentication = username => (dispatch) => {
  autheticateUser(username)
    .then(({ data }) => {
      const portfolios = data[0].portfolio_exchanges
        .map((exchange, idx) => ({
          exchange,
          portfolio_ids: data[0].portfolio_ids[idx],
        }));
      const portfolioData = data
        .map(({
          date, balance, deposit, withdrawal,
        }) => ({
          date, balance, deposit, withdrawal,
        }));
      const summary = [{
        exchange: data[0].name,
        portfolio_ids: data[0].portfolio_summary_id,
      }];
      dispatch(changePage(data[0].portfolio_summary_id));
      dispatch(changePortfolioData(portfolioData));
      dispatch(changePortfolios(summary.concat(portfolios)));
      dispatch(changeUser(data[0].username));
    });
};

export default handleAuthentication;
