import { changeCurrentPortfolio } from './portfolio';
import getPortfolioData from '../lib/account';
import updateModalDisplay from './modal';

const handlePortfolioData = id => (dispatch) => {
  dispatch(updateModalDisplay('', 'Loading'));
  return getPortfolioData(id)
    .then(() => dispatch(updateModalDisplay('', '')));
};

export default handlePortfolioData;
