import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import updateModalDisplay from '../actions/modal';
import styles from '../styles/BlurLayer';

const BlurLayer = ({ modalType, handleBlurLayerClick }) => (
  <input
    type="button"
    className={styles.blurContainer}
    id="blur"
    onClick={modalType !== 'Loading' ? handleBlurLayerClick : null}
  />
);

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  handleBlurLayerClick: () => dispatch(updateModalDisplay('', '')),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlurLayer);

BlurLayer.propTypes = {
  modalType: PropTypes.string.isRequired,
  handleBlurLayerClick: PropTypes.func.isRequired,
};
