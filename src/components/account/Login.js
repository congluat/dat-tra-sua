/**
 * Created by congl on 7/23/2017.
 */
import React,{Component} from 'react';
import {Grid, Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap';
import AccountCss from './Account.css';
import { LinkContainer } from 'react-router-bootstrap';

class Login extends Component{
    constructor(props){
        super(props);
        //document.title = this.props.title;
        document.title = "Đăng nhập";
    };
    render(){
        return(
        <Grid>
            <Row>
                <h1 className="title">Đăng nhập</h1>
            </Row>
            <Row>
            <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                    <Col componentClass={ControlLabel} sm={2}>
                        Email
                    </Col>
                    <Col sm={10}>
                        <FormControl type="email" placeholder="Email" />
                    </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                    <Col componentClass={ControlLabel} sm={2}>
                        Password
                    </Col>
                    <Col sm={10}>
                        <FormControl type="password" placeholder="Password" />
                    </Col>
                </FormGroup>

                <FormGroup>
                    <Col smOffset={2} sm={2}>
                        <Button>
                            Quên mật khẩu
                        </Button>
                    </Col>
                    <Col sm={6}>
                        <Button bsStyle="primary login-button" type="submit">
                            Đăng nhập
                        </Button>
                    </Col>
                </FormGroup>
            </Form>
            </Row>
        </Grid>
        );
    };
};

export {Login};