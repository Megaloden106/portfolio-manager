import { connect } from 'react-redux';
import Nav from '../components/Nav';
import changePage from '../actions/page';
import changeCurrentPortfolio from '../actions/currentPortfolio';

const mapStateToProps = state => ({
  portfolios: state.portfolios,
  currentPortfolio: state.currentPortfolio,
});

const mapDispatchToProps = dispatch => ({
  handleTabClick: (page, portfolio) => {
    dispatch(changePage(page));
    dispatch(changeCurrentPortfolio(portfolio));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
