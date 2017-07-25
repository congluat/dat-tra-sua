/**
 * Created by congl on 7/23/2017.
 */
import React,{Component} from 'react';
import {Grid, Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Paybook extends Component{

    constructor(props){
        super(props);
        //document.title = this.props.title;
        document.title = "Trang chủ";
    };
    render(){
        return (
            <div>
                <h1>Paybook Page</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam architecto at exercitationem ipsa iste molestiae nobis odit! Error quo reprehenderit velit! Aperiam eius non odio optio, perspiciatis suscipit vel?</p>
            </div>
        );
    };

};

export {Paybook};
