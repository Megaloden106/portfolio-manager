import { connect } from 'react-redux';
import Home from '../components/Home';
import { handleLogout } from '../actions/account';

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handleLogoutClick: () => dispatch(handleLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
