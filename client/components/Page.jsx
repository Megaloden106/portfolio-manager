import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import BlurLayer from '../containers/BlurLayer';
import Home from '../containers/Home';
import Modal from '../containers/Modal';
import Nav from '../containers/Nav';
import Portfolio from './Portfolio';

class Page extends React.Component {
  componentDidMount() {
    const { checkSession } = this.props;
    checkSession();
  }

  render() {
    const { modalType } = this.props;
    return (
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
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
