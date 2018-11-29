import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleLogin, handleRegister } from '../actions/auth';
import Input from './Input';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.default = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      username: '',
    };
    this.state = this.default;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let target = event.target.id[0].toLowerCase();
    target += event.target.id.slice(1);
    this.setState({ [target.replace(' ', '')]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      formType,
      handleLoginClick,
      handleRegisterClick,
      history,
    } = this.props;
    if (formType === 'Login') {
      handleLoginClick(this.state, history);
    } else {
      handleRegisterClick(this.state, history);
    }
    this.setState(this.default);
  }

  render() {
    const { formType, styles } = this.props;
    const {
      username,
      password,
      firstName,
      lastName,
      email,
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
        className={styles.formContainer}
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
          value={formType === 'Login' ? 'Log in' : 'Join Now'}
          className={styles.submit}
        />
      </form>
    );
  }
}

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
  handleLoginClick: PropTypes.func.isRequired,
  handleRegisterClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  handleLoginClick: (creds, history) => dispatch(handleLogin(creds, history)),
  handleRegisterClick: (creds, history) => dispatch(handleRegister(creds, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(UserForm));
