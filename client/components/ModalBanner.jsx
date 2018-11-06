import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/ModalBanner';

const ModalBanner = ({ modalType }) => (
  <div className={styles.bannerContainer}>
    {modalType === 'Login' ? 'Login' : 'Signup'}
  </div>
);

const mapStateToProps = state => ({
  modalType: state.modalType,
});

export default connect(
  mapStateToProps,
)(ModalBanner);
