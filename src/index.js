/**
 * Created by congl on 7/23/2017.
 */

import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Routes from './Routes';
import configureStore from './store/configureStore';
import { createBrowserHistory } from 'history';

const store = configureStore();
const browserHistory = createBrowserHistory();

render(
    <Provider store={store}>
        <BrowserRouter history={browserHistory}>
          <Routes/>
        </BrowserRouter>
    </Provider>,
    document.querySelector('#root')
);
