import React from 'react';
import Portfolio from './Portfolio';
import AddPortfolio from './AddPortfolio';
import SignIn from './SignIn';
import styles from '../styles/Page.css';

const Page = ({ page, user }) => (
  <div className={styles.container}>
    {!user && <SignIn />}
    {!page && <AddPortfolio />}
    {page && user && <Portfolio />}
  </div>
);

export default Page;
