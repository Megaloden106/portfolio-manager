import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/ModalBlurLayer';
import { handleCloseModal } from '../actions/handleModal';

const ModalBlurLayer = ({ handleBlurLayerClick }) => (
  <div
    className={styles.blurContainer}
    id="blur"
    onClick={handleBlurLayerClick}
  />
);

const mapDispatchToProps = dispatch => ({
  handleBlurLayerClick: () => dispatch(handleCloseModal()),
});

export default connect(
  null,
  mapDispatchToProps,
)(ModalBlurLayer);
