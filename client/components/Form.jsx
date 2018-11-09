import React from 'react';
import { connect } from 'react-redux';
import { handleAuthentication, handleRegister } from '../actions/account';

class Form extends React.Component {
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
    if (formType === 'login') {
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
    let forms = ['Username', 'Password'];
    if (formType === 'signup') { forms = forms.concat(['First Name', 'Last Name', 'Email']); }
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
            className={form.includes('Name') ? styles.name : styles.text}
            onChange={this.handleChange}
            placeholder={form}
            minLength={
              (form === 'Password' || form === 'Username') && formType === 'signup'
                ? '5'
                : null
            }
            maxLength={
              (form === 'Password' || form === 'Username') && formType === 'signup'
                ? '25'
                : null
            }
            require={(formType === 'signup').toString()}
          />
        ))}
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
  handleRegisterClick: creds => dispatch(handleRegister(creds)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Form);
