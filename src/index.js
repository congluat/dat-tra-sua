/**
 * Created by congl on 7/23/2017.
 */

import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router,Route,Switch } from 'react-router-dom';
import {ConnectedRouter, syncHistoryWithStore } from 'react-router-redux'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';

import App from './components/Layout';

// ==============================Account Components====================
import Login from './components/account/Login';

// ==============================Order Components====================
import Home from './components/order/Home';
import History from './components/order/History';

const store = configureStore();
const browserHistory = createBrowserHistory();

render(
    <Provider store={store}>
        <Router history={browserHistory}>
          <Routes/>
        </Router>
    </Provider>,
    document.querySelector('#root')
);
