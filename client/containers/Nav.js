import { connect } from 'react-redux';
import Nav from '../components/Nav';
import updateModalDisplay from '../actions/modal';

const mapStateToProps = state => ({
  portfolioList: state.portfolioList,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handleLoginClick: () => dispatch(updateModalDisplay('', 'Login')),
  handleSingupClick: () => dispatch(updateModalDisplay('', 'Signup')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
