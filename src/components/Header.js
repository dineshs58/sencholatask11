import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar, Nav, Container} from 'react-bootstrap'
import img from './logo.png'
const Header = () => {
  return (
      <>
          <Navbar expand="lg" className=" bg-warning" >
              <Container>
                  <Navbar.Brand href="#">
                      <img
                          alt=""
                          src={img}
                          width="110"
                          height="30"
                          className="d-inline-block align-top"
                      />{' '}</Navbar.Brand>

                  <Navbar.Toggle className='toggle' aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className=''>
                      <Nav className="ms-auto ">
                          <Nav.Link as={Link} to='/' className='me-4'>Home</Nav.Link>
                          <Nav.Link as={Link} to='/create' className='me-4'>Create</Nav.Link>
                          <Nav.Link as={Link} to='/read' className='me-4'>Viewdetails</Nav.Link>
                          <Nav.Link as={Link} to='/update' className='me-4'>Modify</Nav.Link>

                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
      </>
  )
}

export default Header