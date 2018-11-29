import { connect } from 'react-redux';
import { handleLogin, handleRegister } from '../actions/auth';
import UserForm from '../components/UserForm';

const mapDispatchToProps = dispatch => ({
  handleLoginClick: creds => dispatch(handleLogin(creds)),
  handleRegisterClick: creds => dispatch(handleRegister(creds)),
});

export default connect(null, mapDispatchToProps)(UserForm);
