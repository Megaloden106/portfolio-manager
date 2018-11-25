import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import styles from '../../../styles/Portfolio/Card/Add';

const AddCard = ({ handleSubmit, handleCancel }) => (
  <div className={styles.addContainer}>
    <h2 className={styles.header}>Add Portfolio</h2>
    <Form
      form="add"
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
    />
  </div>
);

export default AddCard;

AddCard.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleCancel: PropTypes.func.isRequired,
};
