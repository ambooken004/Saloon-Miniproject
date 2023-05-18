import React from 'react';
import './Header.css';
import { Container, Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar className='navbar' expand="lg" variant='dark'>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src="https://t3.ftcdn.net/jpg/03/30/45/76/360_F_330457670_QdJI6oxOJLJ2WKtM1tFwBRFmqjs7UW2k.jpg" width="30" height="30" className="d-inline-block align-top" alt="logo" /> */}
          <Link to='/' style={{ textDecoration: "none", color: "whitesmoke"}}>Being Handsome</Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-sm-2">
            <Nav.Link>
              <Link to='/homepage' style={{ textDecoration: "none", color: "whitesmoke"}}>Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to='/appointmentspage' style={{ textDecoration: "none", color: "whitesmoke"}}>Appointments</Link>
            </Nav.Link>
            {/* <Nav.Link>
              <Link to='/reviewpage' style={{ textDecoration: "none", color: "whitesmoke"}}>Reviews</Link>
            </Nav.Link> */}
            <Nav.Link>
              <Link to='/timeslotpage' style={{ textDecoration: "none", color: "whitesmoke"}}>Time-Slots</Link>
            </Nav.Link>
            <NavDropdown title="Your Name" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Log Out</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;