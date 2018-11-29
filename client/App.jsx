import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './store';
import Page from './containers/Page';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Page />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
