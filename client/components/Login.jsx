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

  handleChange() {
    console.log(event.target);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target);
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
            onChange={this.handleChange}
          /><br />
          password:<br />
          <input
            type="text"
            value={password}
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