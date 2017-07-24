/**
 * Created by congl on 7/23/2017.
 */
import React from 'react';
import {Navbar, Nav, MenuItem, NavDropdown, NavItem, Grid} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap';
const NavBar = () =>{
    return (
        <Navbar collapseOnSelect fluid>
            <Navbar.Header>

                <Navbar.Brand>
                    <a href="/">  Đặt trà sữa</a>
                </Navbar.Brand>

            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
                <LinkContainer to="history">
                    <NavItem eventKey={1}>Lịch sử</NavItem>
                </LinkContainer>
                <LinkContainer to="/paybook">
                    <NavItem eventKey={2}>Sổ nợ</NavItem>
                </LinkContainer>
                <LinkContainer to="/statistics">
                    <NavItem eventKey={3}>Thống kê</NavItem>
                </LinkContainer>
            </Nav>
            <Nav pullRight>
                <NavDropdown eventKey={4} title="Tài khoản" id="basic-nav-dropdown">
                    <MenuItem eventKey={4.1}>Đăng ký</MenuItem>
                    <MenuItem eventKey={4.2}>Đăng nhập</MenuItem>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;