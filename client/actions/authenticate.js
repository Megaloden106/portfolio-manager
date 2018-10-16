import autheticateUser from '../lib/authenticateUser';
import changePortfolioData from './portfolioData';
import changePortfolios from './portfolios';
import changeUser from './user';
import changePage from './page';
import changeCurrentPortfolio from './currentPortfolio';

const handleAuthentication = username => (dispatch) => {
  autheticateUser(username)
    .then(({ data }) => {
      const add = [{
        name: '+',
        portfolioId: null,
      }];
      dispatch(changePage('Summary'));
      dispatch(changeCurrentPortfolio(data.portfolios[0].portfolioId));
      dispatch(changePortfolioData(data.portfolioData));
      dispatch(changePortfolios(data.portfolios.concat(add)));
      dispatch(changeUser(data.username));
    })
    .catch(error => console.error(error));
};

export default handleAuthentication;
