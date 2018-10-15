import React from 'react';
import Portfolio from './Portfolio';
import AddData from './AddData';
import SignIn from './SignIn';
import styles from '../styles/Page.css';

const colorScheme = {
  Summary: styles.summary,
  Vanguard: styles.vanguard,
};

const Page = ({ page, user }) => {
  const classes = [styles.container];
  classes.push(colorScheme[page]);
  return (
    <div className={classes.join(' ')}>
      {!user && <SignIn />}
      {!page && <AddData />}
      {page !== '+' && user && <Portfolio />}
    </div>
  );
};

export default Page;
