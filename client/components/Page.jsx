import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Route, Switch, withRouter } from 'react-router-dom';
import { handleSessionCheck } from '../actions/account';
import BlurLayer from './BlurLayer';
import Home from './Home';
import Modal from './Modal';
import Nav from './Nav';
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
          <Route path="/portfolio" component={Portfolio} />
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

const mapStateToProps = state => ({
  modalType: state.modalType,
});

const mapDispatchToProps = dispatch => ({
  checkSession: () => dispatch(handleSessionCheck()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));

Page.propTypes = {
  modalType: PropTypes.string.isRequired,
  checkSession: PropTypes.func.isRequired,
};
