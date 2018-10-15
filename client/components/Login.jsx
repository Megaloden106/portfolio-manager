import React from 'react';
import styles from '../styles/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: '' };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { handleAuthSubmit } = this.props;
    const { username } = this.state;
    handleAuthSubmit(username);
    this.setState({ username: '' });
  }

  render() {
    const { username } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        className={styles.login}
      >
        <label htmlFor="auth">
          username:
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          />
        </label>
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
