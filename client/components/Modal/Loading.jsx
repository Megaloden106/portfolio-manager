import React from 'react';
import ReactLoading from 'react-loading';
import styles from '../../styles/Modal/Loading';

const Loading = () => (
  <div className={styles.container}>
    <ReactLoading
      type="spokes"
      color="black"
      height="10%"
      width="10%"
      className={styles.spoke}
    />
  </div>
);

export default Loading;
