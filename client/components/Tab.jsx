import React from 'react';
import styles from '../styles/Tab.css';

const colorScheme = {
  Summary: styles.summary,
  Vanguard: styles.vanguard,
  '+': styles.addData,
};

const Tab = ({
  portfolio, currentPortfolio, handleTabClick, idx,
}) => {
  const classes = [styles.tab];
  if (currentPortfolio === portfolio.portfolioId) {
    classes.push(styles.currentTab);
  } else {
    classes.push(styles.otherTab);
  }
  classes.push(colorScheme[portfolio.exchange]);
  return (
    <div
      className={classes.join(' ')}
      id={idx === 0 ? styles.summaryPage : null}
      onClick={() => handleTabClick(portfolio.exchange, portfolio.portfolioId)}
    >
      <p>{portfolio.exchange}</p>
    </div>
  );
};

export default Tab;
