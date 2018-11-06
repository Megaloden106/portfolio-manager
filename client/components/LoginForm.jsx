import React from 'react';
import styles from '../styles/LoginForm';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'username') {
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      username: '',
      password: '',
    });
  }

  render() {
    const { username, password } = this.state;
    return (
      <form
        className={styles.container}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="loginInfo">
          <input
            type="text"
            value={username}
            id="username"
            className={styles.text}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <input
            type="text"
            value={password}
            id="password"
            className={styles.text}
            onChange={this.handleChange}
            placeholder="••••••••"
          />
        </label>
        <input
          type="submit"
          value="Log in"
          className={styles.submit}
        />
      </form>
    );
  }
}

export default LoginForm;
