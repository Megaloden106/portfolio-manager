import { getPortfolioData } from '../lib/portfolio';
import history from '../lib/history';

const changeCurrentPortfolio = data => ({
  type: 'CHANGE_CURRENT_PORTFOLIO',
  data,
});

const changePortfolioList = list => ({
  type: 'CHANGE_PORTFOLIO_LIST',
  list,
});

const updatePortfolioData = id => dispatch => getPortfolioData(id)
  .then(({ data }) => dispatch(changeCurrentPortfolio(data)))
  .catch(({ response }) => {
    if (response.data.message.includes('Unauthorized')) {
      history.push('/portfolio/unauthorized');
    }
  });

export { updatePortfolioData, changePortfolioList };
