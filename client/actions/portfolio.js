import { changeCurrentPortfolio, changeAddCard } from './actionCreators';
import { handleSessionCheck } from './auth';
import { getPortfolioData, registerPortfolio } from '../lib/portfolio';
import history from '../lib/history';

export const updatePortfolioData = id => dispatch => getPortfolioData(id)
  .then(({ data }) => dispatch(changeCurrentPortfolio(data)))
  .catch(({ response }) => {
    if (response.data.message.includes('Unauthorized')) {
      history.push('/portfolio/unauthorized');
    }
  });

export const registerNewPortfolio = data => (dispatch) => {
  dispatch(changeAddCard(false));
  registerPortfolio(data)
    .then(() => dispatch(handleSessionCheck()))
    .catch(error => console.error(error));
};
