import React from 'react';
import PropTypes from 'prop-types';
import styles from './Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' }
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    })
  }

  render() {
    return (
      <form
        onSubmit={(event) => this.props.handleAuthSubmit(event, this.state.username)}
        className={styles.login}
      >
        <label>
          username:
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;

Login.propTypes = {
  username: PropTypes.string.isRequired,
  handleAuthSubmit: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
};
