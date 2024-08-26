import React from 'react'
import {IMG_LOGO} from "../../utils/Constant";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

const Header = () => {
  return (  

      <Navbar expand="lg" className="bg-body-tertiary shadow-lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
      
        <Navbar.Collapse id="navbarScroll">
              
       <img className='px-4 me-auto' src={IMG_LOGO} ></img>
        
        <form className="d-flex me-auto my-xs-3 my-sm-3">
          <input className="form-control "
          style={{width:'420px'}} type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
          <Nav
            className="me-auto my-2  my-lg-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Car" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">MRF Tyres</NavDropdown.Item>
              <NavDropdown.Item href="#">CEAT Tyres</NavDropdown.Item>
              <NavDropdown.Item href="#">Goodyears Tyres</NavDropdown.Item>
              <NavDropdown.Item href="#">Apollo Tyres</NavDropdown.Item>
              <NavDropdown.Item href="#">All Car Tyres</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Bike" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">MRF Tyres</NavDropdown.Item>
              <NavDropdown.Item href="#">CEAT Tyres</NavDropdown.Item>
              <NavDropdown.Item href="#">Goodyears Tyres</NavDropdown.Item>
              <NavDropdown.Item href="#">Apollo Tyres</NavDropdown.Item>
              <NavDropdown.Item href="#">All Car Tyres</NavDropdown.Item>
            </NavDropdown>
            
             <Nav.Link href="/home">Tyres Pressure</Nav.Link>

            <NavDropdown title="Commercial Tyres" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">All Commercial Tyres</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Accessories " id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Accessories</NavDropdown.Item>
              <NavDropdown.Item href="#">Batteries</NavDropdown.Item>
              <NavDropdown.Item href="#">Alloy Wheels</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  )
}

export default Header
