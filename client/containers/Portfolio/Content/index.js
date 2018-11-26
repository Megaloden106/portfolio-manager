import { connect } from 'react-redux';
import { updatePortfolioData } from '../../../actions/portfolio';
import Content from '../../../components/Portfolio/Content';

const mapStateToProps = state => ({
  currentPortfolio: state.currentPortfolio,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handlePageLoad: id => dispatch(updatePortfolioData(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
