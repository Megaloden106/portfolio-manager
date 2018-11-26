import { connect } from 'react-redux';
import { changeCurrentPortfolio } from '../../../actions/portfolio';
import Content from '../../../components/Portfolio/Content';
import { getPortfolioData } from '../../../lib/portfolio';

const mapStateToProps = state => ({
  currentPortfolio: state.currentPortfolio,
});

const mapDispatchToProps = dispatch => ({
  updatePortfolioData: id => getPortfolioData(id)
    .then(({ data }) => dispatch(changeCurrentPortfolio(data)))
    .catch(error => console.error(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
