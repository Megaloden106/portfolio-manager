import React from 'react';
import { connect } from 'react-redux';
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

export default connect(
  mapStateToProps,
)(Page);
