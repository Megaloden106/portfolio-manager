import { changeCurrentPortfolio, changeAddCard } from './actionCreators';
import { handleSessionCheck } from './auth';
import { getPortfolioData, registerPortfolio } from '../service/portfolio';

export const updatePortfolioData = (id, history) => dispatch => getPortfolioData(id)
  .then(({ data }) => dispatch(changeCurrentPortfolio(data)))
  .catch(({ response }) => {
    if (response.data.message.includes('Unauthorized')) {
      history.push('/portfolio/unauthorized');
    }
  });

export const registerNewPortfolio = (data, history) => (dispatch) => {
  dispatch(changeAddCard(false));
  registerPortfolio(data)
    .then(() => dispatch(handleSessionCheck(history)))
    .catch(error => console.error(error));
};
