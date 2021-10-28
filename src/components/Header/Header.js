import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="fs-3">Volunteer-network</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto fs-4">
                            <Nav.Link><NavLink to="/home">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/events">Events</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/admin">Admin</NavLink></Nav.Link>
                            {/* <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link> */}
                            <Nav.Link><NavLink to="/register">Register</NavLink></Nav.Link>
                            <small className="p-2">{user?.displayName}</small>
                            {
                                user.email ?
                                    <button className="btn btn-warning p-2" onClick={logOut}>Sign Out</button>
                                    :
                                    <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;