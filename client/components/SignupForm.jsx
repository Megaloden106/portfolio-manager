import React from 'react';
import styles from '../styles/SignupForm';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'username') {
      this.setState({ username: event.target.value });
    } else if (event.target.id === 'password') {
      this.setState({ password: event.target.value });
    } else if (event.target.id === 'firstName') {
      this.setState({ firstName: event.target.value });
    } else if (event.target.id === 'lastName') {
      this.setState({ lastName: event.target.value });
    } else {
      this.setState({ email: event.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
    });
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      username,
      password,
    } = this.state;
    return (
      <form
        className={styles.container}
        onSubmit={this.handleSubmit}
      >
        <label htmlFor="SignupInfo">
          <input
            type="text"
            value={firstName}
            id="firstName"
            className={styles.name}
            onChange={this.handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lastName}
            id="lastName"
            className={styles.name}
            onChange={this.handleChange}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            value={email}
            id="email"
            className={styles.text}
            onChange={this.handleChange}
            placeholder="Email"
            required
          />
          <input
            type="text"
            value={username}
            id="username"
            className={styles.text}
            onChange={this.handleChange}
            placeholder="Username"
            required
          />
          <input
            type="text"
            value={password}
            id="password"
            className={styles.text}
            onChange={this.handleChange}
            placeholder="Password"
            required
          />
        </label>
        <input
          type="submit"
          value="Sign up"
          className={styles.submit}
        />
      </form>
    );
  }
}

export default SignupForm;
