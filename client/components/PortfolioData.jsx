import React from 'react';
import moment from 'moment';
import styles from '../styles/PortfolioData.css';

const PortfolioData = ({ data }) => (
  <div className={styles.container}>
    <table>
      <thead>
        <tr>
          <th colSpan="6">Balance and Returns</th>
        </tr>
        <tr className={styles.oddRow}>
          <td>Date</td>
          <td>Balance</td>
          <td>Deposit</td>
          <td>Withdrawal</td>
          <td>Returns</td>
          <td>Cumulative Returns</td>
        </tr>
      </thead>
      <tbody>
        {data.map((entry, idx) => (
          <tr
            key={entry.date}
            className={idx % 2 === 0 ? styles.evenRow : styles.oddRow}
          >
            <td>{moment(entry.date).format('MMM D, YYYY')}</td>
            <td>{entry.balance}</td>
            <td>{entry.deposit}</td>
            <td>{entry.withdrawal}</td>
            <td>{entry.returns}</td>
            <td>{entry.cumulativeReturns}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PortfolioData;
