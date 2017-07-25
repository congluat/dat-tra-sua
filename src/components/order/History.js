/**
 * Created by congl on 7/23/2017.
 */
import React,{Component} from 'react';
import {Grid, Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class History extends Component{

    constructor(props){
        super(props);
        //document.title = this.props.title;
        document.title = "Trang chủ";
    };

    render(){
        return (
            <h1>History</h1>
        );
    };

};

export {History};
