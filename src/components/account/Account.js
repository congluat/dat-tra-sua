/**
 * Created by congl on 7/23/2017.
 */
import React,{Component} from 'react';
import {Grid, Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap';
import AccountCss from './Account.css';
import { LinkContainer } from 'react-router-bootstrap';

class Account extends Component{
    constructor(props){
        super(props);
        //document.title = this.props.title;
        document.title = "Tài khoản";
    };

    render(){
        return(
            <Grid>
                <Row>
                    <h1 className="title">Hi Luat</h1>
                </Row>
                <Row>
                    <Form horizontal>

                        <FormGroup controlId="email">
                            <Col componentClass={ControlLabel} sm={2}>
                                Email
                            </Col>
                            <Col sm={10}>
                                <FormControl type="email" placeholder="Email" />
                            </Col>
                        </FormGroup>

                        <FormGroup controlId="passwordForm">
                            <Col componentClass={ControlLabel} sm={2}>
                                Password
                            </Col>
                            <Col sm={5}>
                                <FormControl id="password" type="password" placeholder="Password" />
                            </Col>
                            <Col sm={5}>
                                <FormControl id="password2" type="password" placeholder="Nhập lại password" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="name">
                            <Col componentClass={ControlLabel} sm={2}>
                                Tên hiển thị
                            </Col>
                            <Col sm={10}>
                                <FormControl type="text" placeholder="Tên hiển thị" />
                            </Col>
                        </FormGroup>
                        <FormGroup>

                            <Col smOffset={5} sm={6}>
                                <Button bsStyle="primary login-button" type="submit">
                                    Cập nhật
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
            </Grid>
        );
    };
};

export {Account};