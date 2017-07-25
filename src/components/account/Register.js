/**
 * Created by congl on 7/24/2017.
 */
import React,{Component} from 'react';
import {Grid, Row, Form, FormGroup, Col, FormControl, Button, ControlLabel} from 'react-bootstrap';
import AccountCss from './Account.css';
import { LinkContainer } from 'react-router-bootstrap';

class Register extends Component{
    constructor(props){
        super(props);
        //document.title = this.props.title;
        document.title = "Đăng ký";
    };

    render(){
        return(
            <Grid>
                <Row>
                    <h1 className="title">Đăng ký</h1>
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
                            <Col smOffset={4} sm={2}>
                                <Button>
                                    Quên mật khẩu
                                </Button>
                            </Col>
                            <Col sm={6}>
                                <Button bsStyle="primary login-button" type="submit">
                                    Đăng ký
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </Row>
            </Grid>
        );
    };
};

export {Register};