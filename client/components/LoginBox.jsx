import React from 'react';
import { connect } from 'react-redux';
import { handleAuthentication } from '../actions/account';
import styles from '../styles/LoginBox';

class LoginBox extends React.Component {
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
    if (event.target.id === 'usr') {
      this.setState({ username: event.target.value });
    } else {
      this.setState({ password: event.target.value });
    }
  }

  handleSubmit(event) {
    const { handleLoginClick } = this.props;
    event.preventDefault();
    handleLoginClick(this.state);
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
            id="usr"
            className={styles.text}
            onChange={this.handleChange}
            placeholder="Username"
          />
          <br />
          <input
            type="password"
            value={password}
            id="pwd"
            className={styles.text}
            onChange={this.handleChange}
            placeholder="••••••••"
          />
          <br />
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

const mapDispatchToProps = dispatch => ({
  handleLoginClick: creds => dispatch(handleAuthentication(creds)),
});

export default connect(
  null,
  mapDispatchToProps,
)(LoginBox);
