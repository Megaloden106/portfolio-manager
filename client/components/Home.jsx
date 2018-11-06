import React from 'react';
import Login from './Login';

const Home = ({ user }) => (
  <div>
    {!user && <Login />}
  </div>
);

export default Home;
