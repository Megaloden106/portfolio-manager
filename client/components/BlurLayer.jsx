import React from 'react';
import { connect } from 'react-redux';
import changeModalError from '../actions/error';
import toggleModal from '../actions/modal';
import styles from '../styles/BlurLayer';

const BlurLayer = ({ modalType, handleBlurLayerClick }) => (
  <div
    className={styles.blurContainer}
    id="blur"
    onClick={modalType !== 'Loading' ? handleBlurLayerClick : null}
  />
);

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleBlurLayerClick: () => {
    dispatch(toggleModal(null));
    dispatch(changeModalError(null));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlurLayer);
