import React from 'react';
import AddCSV from './AddCSV';
import AddIndividualData from './AddIndividualData';
import RequestFeatures from './RequestFeatures';
import Allocations from './Allocations';
import styles from '../styles/AddData.css';

const AddData = () => (
  <div className={styles.container}>
    <AddCSV />
    <AddIndividualData />
    <RequestFeatures />
    <Allocations />
  </div>
);

export default AddData;
