/**
 * Created by congl on 7/23/2017.
 */
import React from 'react';
import {Grid} from 'react-bootstrap';
import NavBar from './common/NavBar';
import {Route}  from 'react-router-dom';

const Layout = ({component: Component, ...rest}) =>{

    return (
        <Route {...rest} render={matchProps => (
            <Grid bsClass="container">
                <NavBar/>
                {/* Each smaller components */}
                <Component {...matchProps} />
            </Grid>
        )} />
    );
};

export default Layout;

