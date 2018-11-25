import React from 'react';
import PropTypes from 'prop-types';
import Form from './Form';
import styles from '../../../styles/Portfolio/Card/Add';

const AddCard = ({ handleAddClick, handleCancelClick }) => (
  <div className={styles.addContainer}>
    <h2 className={styles.header}>Add Portfolio</h2>
    <Form
      type="add"
      handleAddClick={handleAddClick}
      handleCancelClick={handleCancelClick}
    />
  </div>
);

export default AddCard;

AddCard.propTypes = {
  handleAddClick: PropTypes.func.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
};
