import React, { useState } from 'react';
import moment from 'moment';
import Calendar from './Calendar';
import styles from '../../../styles/Portfolio/Content/BalanceForm';

const BalanceForm = () => {
  const [date, setDate] = useState(new Date());
  const [balance, setBalance] = useState('');
  const [deposit, setDeposit] = useState('');
  const [withdrawal, setWithdrawal] = useState('');
  const [calendar, setCalendar] = useState(false);

  const formatCurrency = (event, prev) => {
    const val = event.target.value;
    if (val.length > 20) return prev;
    if (+val === 0) return '';
    const result = (+val.replace(/[^0-9]/g, '') / 100)
      .toLocaleString('en-US', { style: 'currency', currency: 'USD' })
      .slice(1);
    let caret = event.target.selectionStart;
    const element = event.target;
    if (caret !== val.length) {
      if (val[1] === ',' && val.length < prev.length) caret -= 1;
      if (result[1] === ',' && val.length > prev.length) caret += 1;
      if (val.length < 4 && +val.replace(/[^0-9]/g, '') < +prev.replace(/[^0-9]/g, '')) caret += 1;
      window.requestAnimationFrame(() => {
        element.selectionStart = caret;
        element.selectionEnd = caret;
      });
    }
    return result;
  };

  const toggleCalendar = () => {
    setCalendar(true);
    document.addEventListener('click', function close(event) {
      if (!document.getElementById('calendar') || !event.target.className.match('react-calendar')) {
        document.removeEventListener('click', close);
        setCalendar(false);
      }
    });
  };

  return (
    <form
      className={styles.form}
      onSubmit={() => {}}
    >
      <label htmlFor="balanceForm">
        Date:
        <input
          type="text"
          className={styles.date}
          value={moment(date).format('dddd, MMMM D, YYYY')}
          onClick={!calendar && toggleCalendar}
          readOnly
        />
        {calendar && <Calendar date={date} setDate={setDate} />}
      </label>
      <label htmlFor="balanceForm" className={styles.label}>
        Balance:
        <span className={styles.dollar}>$</span>
        <input
          type="text"
          className={styles.money}
          value={balance}
          onChange={e => setBalance(formatCurrency(e, balance))}
          placeholder="0.00"
        />
      </label>
      <label htmlFor="balanceForm" className={styles.label}>
        Deposit:
        <span className={styles.dollar}>$</span>
        <input
          type="text"
          className={styles.money}
          value={deposit}
          onChange={e => setDeposit(formatCurrency(e, deposit))}
          placeholder="0.00"
        />
      </label>
      <label htmlFor="balanceForm" className={styles.label}>
        Withdrawal:
        <span className={styles.dollar}>$</span>
        <input
          type="text"
          className={styles.money}
          value={withdrawal}
          onChange={e => setWithdrawal(formatCurrency(e, withdrawal))}
          placeholder="0.00"
        />
      </label>
      <div className="TODO">
        <input
          type="button"
          value="Cancel"
          className={styles.cancelButton}
          onClick={() => {}}
        />
        <input
          type="submit"
          value="Add"
          className={styles.addButton}
          onClick={() => {}}
          disabled={!balance || !deposit || !withdrawal}
        />
      </div>
    </form>
  );
};

export default BalanceForm;
