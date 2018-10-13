import { connect } from 'react-redux';
import Login from '../components/Login';

const mapDispatchToProps = dispatch => ({
  handleAuthSubmit: (event, username) => {
    event.preventDefault();
  },
});

export default connect(null, mapDispatchToProps)(Login);
