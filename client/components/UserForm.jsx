import React from 'react';
import PropTypes from 'prop-types';
import Input from './Input';

class UserForm extends React.Component {
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
    event.preventDefault();
    const { formType, handleLoginClick, handleRegisterClick } = this.props;

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
      forms = ['First Name', 'Last Name', 'Email'].concat(forms);
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
          <Input
            key={form}
            form={form}
            formType={formType}
            value={value}
            styles={styles}
            handleChange={this.handleChange}
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

export default UserForm;

UserForm.propTypes = {
  formType: PropTypes.string.isRequired,
  styles: PropTypes.objectOf(PropTypes.string).isRequired,
  handleLoginClick: PropTypes.func.isRequired,
  handleRegisterClick: PropTypes.func.isRequired,
};
