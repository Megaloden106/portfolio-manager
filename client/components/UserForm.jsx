import React from 'react';
import { connect } from 'react-redux';
import { handleAuthentication, handleRegister } from '../actions/account';

class ModalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      username: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    if (event.target.id === 'Username') {
      this.setState({ username: event.target.value });
    } else if (event.target.id === 'Password') {
      this.setState({ password: event.target.value });
    } else if (event.target.id === 'First Name') {
      this.setState({ firstName: event.target.value });
    } else if (event.target.id === 'Last Name') {
      this.setState({ lastName: event.target.value });
    } else {
      this.setState({ email: event.target.value });
    }
  }

  handleSubmit(event) {
    const { formType, handleLoginClick, handleRegisterClick } = this.props;
    event.preventDefault();
    if (formType === 'Login') {
      handleLoginClick(this.state);
    } else {
      handleRegisterClick(this.state);
    }
    this.setState({
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      username: '',
    });
  }

  render() {
    const { formType, styles } = this.props;
    const {
      username, password, firstName, lastName, email,
    } = this.state;
    let forms = ['Username', 'Password'];
    if (formType === 'Signup') {
      forms = forms.concat(['First Name', 'Last Name', 'Email']);
    }
    const value = {
      Username: username,
      Password: password,
      'First Name': firstName,
      'Last Name': lastName,
      Email: email,
    };
    return (
      <form
        className={styles.container}
        onSubmit={this.handleSubmit}
      >
        {forms.map(form => (
          <input
            key={form}
            type={form === 'Password' || form === 'Email' ? form : 'text'}
            id={form}
            value={value[form]}
            className={form.includes('Name') ? styles.name : styles.text}
            onChange={this.handleChange}
            placeholder={form}
            minLength={
              form.match(/P|U/) && formType === 'Signup' ? '5' : null
            }
            maxLength={
              form.match(/U/) && formType === 'Signup' ? '25' : null
            }
            required
          />
        ))}
        <input
          type="submit"
          value={formType === 'Login' ? 'Log in' : 'Sign up'}
          className={styles.submit}
        />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleLoginClick: creds => dispatch(handleAuthentication(creds)),
  handleRegisterClick: creds => dispatch(handleRegister(creds)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ModalForm);
