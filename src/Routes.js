/**
 * Created by congl on 7/23/2017.
 */
import React from 'react';
import {Route, Switch}  from 'react-router-dom';
import Layout from './components/Layout';

// ==============================Account Components====================
import Login from './components/account/Login';

// ==============================Order Components====================
import Home from './components/order/Home';
import History from './components/order/History';

const Routes = () =>{
    return (
        <Switch>
            <Layout path="/" component={Home}></Layout>
            <Layout path="/login" component={Login}></Layout>
            <Layout path="/history" component={History}></Layout>
        </Switch>
    )
}

export default Routes;
