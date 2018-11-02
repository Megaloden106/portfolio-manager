import React from 'react';
import Signin from './Signin';

const Home = ({ user }) => (
  <div>
    {!user && <Signin />}
  </div>
);

export default Home;
