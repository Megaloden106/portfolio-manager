import React from 'react';
import { connect } from 'react-redux';
import toggleModal from '../actions/modal';
import changeModalError from '../actions/error';
import styles from '../styles/ModalBlurLayer';

const ModalBlurLayer = ({ handleBlurLayerClick }) => (
  <div
    className={styles.blurContainer}
    id="blur"
    onClick={handleBlurLayerClick}
  />
);

const mapDispatchToProps = dispatch => ({
  handleBlurLayerClick: () => {
    dispatch(toggleModal(null));
    dispatch(changeModalError(null));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ModalBlurLayer);
