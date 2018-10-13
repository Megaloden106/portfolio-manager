import React from 'react';

import Login from '../containers/LoginContainer';
import Nav from './Nav';
import Page from './Page';

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Login />
        <Nav />
        <Page />
      </div>
    );
  }
}

export default Home;
