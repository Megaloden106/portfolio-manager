import { connect } from 'react-redux';
import authenticateUser from '../lib/authenticateUser';
import Login from '../components/Login';
import changeUser from '../actions/user';

const mapDispatchToProps = dispatch => ({
  handleAuthSubmit: (username) => {
    authenticateUser(username);
    dispatch(changeUser(username));
  },
});

export default connect(null, mapDispatchToProps)(Login);
