import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as auth from '../actions/auth';

const UserForm = ({
  formType,
  handleLogin,
  handleRegister,
  history,
  styles,
}) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      firstName,
      lastName,
      password,
      username,
    };

    if (formType === 'Login') {
      handleLogin(data, history);
    } else {
      handleRegister(data, history);
      setEmail('');
      setFirstName('');
      setLastName('');
    }
    setPassword('');
    setUsername('');
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        value={username}
        className={styles.text}
        onChange={e => setUsername(e.target.value)}
        placeholder="Username"
        minLength="5"
        required
      />
      <input
        type="password"
        value={password}
        className={styles.text}
        onChange={e => setPassword(e.target.value)}
        placeholder="Password"
        minLength="5"
        maxLength="25"
        required
      />
      {formType === 'Signup' && (
        <React.Fragment>
          <input
            type="text"
            value={firstName}
            className={styles.name}
            onChange={e => setFirstName(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lastName}
            className={styles.name}
            onChange={e => setLastName(e.target.value)}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            value={email}
            className={styles.text}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </React.Fragment>
      )}
      <input
        type="submit"
        value={formType === 'Login' ? 'Log in' : 'Join Now'}
        className={styles.submit}
      />
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  handleLogin: (creds, history) => dispatch(auth.handleLogin(creds, history)),
  handleRegister: (creds, history) => dispatch(auth.handleRegister(creds, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(UserForm));

UserForm.propTypes = {
  formType: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    block: PropTypes.func.isRequired,
    createHref: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    listen: PropTypes.func.isRequired,
    location: PropTypes.shape({
      hash: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }),
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
  handleLogin: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};
