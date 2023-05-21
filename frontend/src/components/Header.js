import React from 'react';
import './Header.css';
import { Container, Navbar, Nav, NavDropdown, } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();
   
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
              <NavDropdown.Item>
                <Link to='/loginpage' style={{ textDecoration: "none", color: "black"}} onClick={() => {
                  localStorage.removeItem("userInfo");
                  navigate('/loginpage');
                }}>Log Out</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;