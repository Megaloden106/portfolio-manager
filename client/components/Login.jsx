import React from 'react';
import styles from '../styles/Login';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.target.id === 'username'
      ? this.setState({ username: event.target.value })
      : this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    const { username, password } = this.state;
    return (
      <form
        className={styles.container}
        onSubmit={this.handleSubmit}
      >
        <label>
          username:<br />
          <input
            type="text"
            value={username}
            id="username"
            onChange={this.handleChange}
          /><br />
          password:<br />
          <input
            type="text"
            value={password}
            id="password"
            onChange={this.handleChange}
          /><br />
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

export default Login;