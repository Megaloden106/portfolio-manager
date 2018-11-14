import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Nav from '../components/Nav';
import updateModalDisplay from '../actions/modal';

const mapStateToProps = state => ({
  modalType: state.modalType,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  handleLoginClick: () => dispatch(updateModalDisplay('', 'Login')),
  handleSingupClick: () => dispatch(updateModalDisplay('', 'Signup')),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
