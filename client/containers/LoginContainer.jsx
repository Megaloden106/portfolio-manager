import { connect } from 'react-redux';
import Login from '../components/Login';
import authenticate from '../actions/authenticate';

const mapDispatchToProps = dispatch => ({
  handleAuthSubmit: (username) => {
    dispatch(authenticate(username));
  },
});

export default connect(null, mapDispatchToProps)(Login);
