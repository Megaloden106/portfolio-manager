import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { handleSessionCheck } from '../actions/auth';
import BlurLayer from './BlurLayer';
import Home from './Home';
import Modal from './Modal';
import Nav from './Nav';
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

const mapStateToProps = state => ({
  modalType: state.modalType,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  checkSession: history => dispatch(handleSessionCheck(history)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));

Page.propTypes = {
  modalType: PropTypes.string,
  checkSession: PropTypes.func.isRequired,
  history: PropTypes.shape({
    action: PropTypes.string.isRequired,
    block: PropTypes.func.isRequired,
    createHref: PropTypes.func.isRequired,
    go: PropTypes.func.isRequired,
    goBack: PropTypes.func.isRequired,
    goForward: PropTypes.func.isRequired,
    length: PropTypes.number.isRequired,
    listen: PropTypes.func.isRequired,
    location: PropTypes.shape({
      hash: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }),
    push: PropTypes.func.isRequired,
    replace: PropTypes.func.isRequired,
  }).isRequired,
};

Page.defaultProps = {
  modalType: null,
};
