/**
 * Created by congl on 7/23/2017.
 */
import React from 'react';
import { Switch}  from 'react-router-dom';
import Layout from './components/Layout';


import {Home, History, Statistics, Paybook} from './components/order'
import {Register, Account, Login} from './components/account';

const Routes = () =>{
    return (
        <Switch>
            <Layout exact path="/" component={Home}></Layout>
            <Layout path="/login" component={Login}></Layout>
            <Layout path="/history" component={History}></Layout>
            <Layout path="/paybook" component={Paybook}></Layout>
            <Layout path="/statistics" component={Statistics}></Layout>

            <Layout path="/register" component={Register}></Layout>
            <Layout path="/login" component={Login}></Layout>
            <Layout path="/account" component={Account}></Layout>
        </Switch>
    )
}

export default Routes;
