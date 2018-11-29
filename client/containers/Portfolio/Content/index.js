import { connect } from 'react-redux';
import { updatePortfolioData } from '../../../actions/portfolio';
import Content from '../../../components/Portfolio/Content';

const mapStateToProps = state => ({
  currentPortfolio: state.currentPortfolio,
  portfolioList: state.portfolioList,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handlePageLoad: (id, history) => dispatch(updatePortfolioData(id, history)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
