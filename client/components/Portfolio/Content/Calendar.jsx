import React from 'react';
import PropTypes from 'prop-types';
import ReactCalendar from 'react-calendar';
import styles from '../../../styles/Portfolio/Content/Calendar';

const Calendar = ({ date, setDate }) => (
  <div id="calendar" className={styles.calendarContainer}>
    <ReactCalendar
      value={date}
      onChange={setDate}
    />
  </div>
);

export default Calendar;

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
};
