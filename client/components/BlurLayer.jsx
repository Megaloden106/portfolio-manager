import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/BlurLayer';

const BlurLayer = ({ modalType, handleBlurLayerClick }) => (
  <input
    type="button"
    className={styles.blurContainer}
    id="blur"
    onClick={modalType !== 'Loading' ? handleBlurLayerClick : null}
  />
);

export default BlurLayer;

BlurLayer.propTypes = {
  modalType: PropTypes.string.isRequired,
  handleBlurLayerClick: PropTypes.func.isRequired,
};
