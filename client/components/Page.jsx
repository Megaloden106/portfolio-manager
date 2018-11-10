import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Login from './Login';
import Nav from './Nav';

const Page = ({ user }) => (
  <div>
    <Nav />
    {!user && <Login />}
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Page);

Page.propTypes = {
  user: PropTypes.string.isRequired,
};
