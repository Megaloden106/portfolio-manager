import React from 'react';
import { connect } from 'react-redux';
import styles from '../styles/ModalBlurLayer';
import handleBlurLayer from '../actions/blur';

const ModalBlurLayer = ({ handleBlurLayerClick }) => (
  <div
    className={styles.blurContainer}
    id="blur"
    onClick={handleBlurLayerClick}
  />
);

const mapDispatchToProps = dispatch => ({
  handleBlurLayerClick: boolean => dispatch(handleBlurLayer(boolean)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ModalBlurLayer);
