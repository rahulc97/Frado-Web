import React from 'react';
import './styles.scss';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/fradoLogo.jpg';

const NavigationBar = (props) => {
  return (
    // <div className='nav'>
    <Navbar style={{width:'100%'}} bg="dark" variant="dark">
      <Navbar.Brand href="/">
        <div style={{display:'flex' , alignItems:'center'}}>
        <img
          alt="img"
          src={logo}
          width="70"
          height="50"
          className="d-inline-block align-top"
        />
       <div style={{marginLeft:'10px'}} > Frado Academy</div>
       </div>
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/about">About Us</Nav.Link>
        <Nav.Link href="/contact">Contact Us</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="/register">Register Now</Nav.Link>
      </Nav>
    </Navbar>
    // </div>
  );
};

export default NavigationBar;
