import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleSessionCheck } from '../actions/account';
import Home from './Home';
import Nav from './Nav';

class Page extends React.Component {
  componentDidMount() {
    const { checkSession } = this.props;
    checkSession();
  }

  render() {
    const { page } = this.props;
    return (
      <div>
        <Nav />
        {page === 'Home' && <Home />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  page: state.page,
});

const mapDispatchToProps = dispatch => ({
  checkSession: () => dispatch(handleSessionCheck()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);

Page.propTypes = {
  page: PropTypes.string.isRequired,
  checkSession: PropTypes.func.isRequired,
};
