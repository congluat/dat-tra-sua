/**
 * Created by congl on 7/23/2017.
 */
/**
 * Created by congl on 7/23/2017.
 */
import React,{Component} from 'react';
import {Grid, Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Order extends Component{

    constructor(props){
        super(props);
        //document.title = this.props.title;
        document.title = "Order";
    };

    render(){
        return(
            <Grid>
                <h1>Order Page</h1>
            </Grid>
        );
    };
};

export {Order};
