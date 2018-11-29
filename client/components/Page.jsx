import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import BlurLayer from '../containers/BlurLayer';
import Home from '../containers/Home';
import Modal from './Modal';
import Nav from '../containers/Nav';
import Portfolio from './Portfolio';
import styles from '../styles/Page';

class Page extends React.Component {
  componentDidMount() {
    const { checkSession, history } = this.props;
    checkSession(history);
  }

  render() {
    const { modalType } = this.props;
    return (
      <div className={styles.pageContainer}>
        <div className={modalType ? styles.blur : null}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/portfolio/" component={Portfolio} />
          </Switch>
        </div>
        {modalType && (
          <div>
            <BlurLayer />
            <Modal />
          </div>
        )}
      </div>
    );
  }
}

export default Page;

Page.propTypes = {
  modalType: PropTypes.string.isRequired,
  checkSession: PropTypes.func.isRequired,
};
