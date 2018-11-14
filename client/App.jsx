import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import history from './lib/history';
import store from './store';
import Page from './containers/PageContainer';
import './App.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Page />
    </Router>
  </Provider>,
  document.getElementById('app'),
);
