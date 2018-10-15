import React from 'react';

import LoginContainer from '../containers/LoginContainer';
import NavContainer from '../containers/NavContainer';
import Portfolio from './Portfolio';
// import store from '../store';

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <LoginContainer />
        <NavContainer />
        <Portfolio />
      </div>
    );
  }
}

export default Home;
