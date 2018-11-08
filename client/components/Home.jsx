import React from 'react';
import { connect } from 'react-redux';
import Login from './Login';

const Home = ({ user }) => (
  <div>
    {!user && <Login />}
  </div>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
)(Home);
