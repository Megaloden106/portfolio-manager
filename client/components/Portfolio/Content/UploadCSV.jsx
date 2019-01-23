import React from 'react';
import styles from '../../../styles/Portfolio/Content/UploadCSV';

const UploadCSV = () => (
  <div className={styles.csvContainer}>
    <input
      className={styles.csvLoader}
      type="file"
      id="csv"
      accept=".csv"
    />
  </div>
);

export default UploadCSV;
