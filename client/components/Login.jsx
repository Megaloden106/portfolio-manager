import React from 'react';
import { connect } from 'react-redux';
import About from './About';
import Modal from './Modal';
import ModalBlurLayer from './ModalBlurLayer';
import UserForm from './UserForm';
import styles from '../styles/Login';
import formStyles from '../styles/LoginFormPage';


const Login = ({ modalType }) => (
  <div>
    {modalType && (
      <div>
        <ModalBlurLayer />
        <Modal />
      </div>
    )}
    <div className={styles.imageContainer}>
      <img
        src="https://s3-us-west-1.amazonaws.com/portfolio-manager-project/login.jpg"
        alt=""
        className={styles.image}
      />
    </div>
    <div className={styles.loginContainer}>
      <UserForm
        styles={formStyles}
        formType="login"
      />
      <About />
    </div>
  </div>
);

const mapStateToProps = state => ({
  modalType: state.modalType,
});

export default connect(
  mapStateToProps,
)(Login);
