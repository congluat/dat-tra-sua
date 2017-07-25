/**
 * Created by congl on 7/23/2017.
 */
import React from 'react';
import {Navbar, Nav, MenuItem, NavDropdown, NavItem} from 'react-bootstrap'
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
const NavBar = () =>{
    return (
        <Navbar collapseOnSelect fluid>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to="/">Đặt trà sữa</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <LinkContainer to="/history">
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
                        <LinkContainer to="/account">
                            <MenuItem eventKey={4.1}>Tài khoản</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/register">
                            <MenuItem eventKey={4.1}>Đăng ký</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <MenuItem eventKey={4.2}>Đăng nhập</MenuItem>
                        </LinkContainer>
                        <LinkContainer to="/logout">
                            <MenuItem eventKey={4.2}>Đăng xuất</MenuItem>
                        </LinkContainer>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;