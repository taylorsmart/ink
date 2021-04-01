import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Navbar, Nav, Form, FormControl,  Container, Row, Col, Grid, Modal, Button,
} from 'react-bootstrap';
import TattooContainer from "./components/tattooContainer.jsx"


const App = () => {



  return (
    <div>
      <Row>
        <Col xs={12} md={12}>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">The Tattory</Navbar.Brand>
            <Nav className="ml-auto">
              <Nav.Link href="#browse">Explore</Nav.Link>
              <Nav.Link href="#sign-in">Sign In</Nav.Link>
            </Nav>
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form> */}
          </Navbar>        
        </Col>
      </Row>
      <Row>
        <Col xs={1} md={1}>
        </Col>
        <Col xs={10} md={10}>
            <div className="bg-light fullheightcol">
              <hr />
              <div className="tattoo-primary">
              <TattooContainer className="Container" />
              </div>
            </div> 
        </Col>
        <Col xs={1} md={1}>
        </Col>
    </Row>
    </div>
  )
}

export default App;
