import { changeCurrentPortfolio } from './actionCreators';
import { handleSessionCheck } from './auth';
import { getPortfolioData, registerPortfolio, updatePortfolio } from '../service/portfolio';

export const updatePortfolioData = (id, history) => dispatch => getPortfolioData(id)
  .then(({ data }) => dispatch(changeCurrentPortfolio(data)))
  .catch(({ response }) => {
    if (response.data.message.includes('Unauthorized')) {
      history.push('/portfolio/unauthorized');
    }
  });

export const registerNewPortfolio = (data, history) => dispatch => registerPortfolio(data)
  .then(() => dispatch(handleSessionCheck(history)))
  .catch(error => console.error(error));

export const editPortfolio = (data, id, history) => dispatch => updatePortfolio(data, id)
  .then(() => dispatch(handleSessionCheck(history)))
  .catch(error => console.error(error));
