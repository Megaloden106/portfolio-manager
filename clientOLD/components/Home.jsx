import React from 'react';

import LoginContainer from '../containers/LoginContainer';
import NavContainer from '../containers/NavContainer';
import PageContainer from '../containers/PageContainer';
// import store from '../store';

class Home extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <LoginContainer />
        <NavContainer />
        <PageContainer />
      </div>
    );
  }
}

export default Home;
