import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Navbar, Nav, Form, FormControl,  Container, Row, Col, Grid, Modal, Button,
} from 'react-bootstrap';
import TattooContainer from "./components/tattooContainer.jsx"


const App = () => {
  const [tattooId, setTattooId] = useState(1)

  const handleLeft = () => {
    console.log('clicked')
    let tempVal = tattooId;
    if(tattooId > 0) { //this will be the dynamic number - right now hardcoded with dummy data
      tempVal--
      setTattooId(tempVal)
    }
    console.log(tattooId);
  }

  const handleRight = () => {
    console.log('clicked')
    let tempVal = tattooId;
    if(tattooId < 15) { //this will be the dynamic number - right now hardcoded with dummy data
      tempVal++
      setTattooId(tempVal)
    }
    console.log(tattooId);
  }

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
        <Col xs={1} md={1} className="hover-click border-right" onClick={handleLeft} >
          <div className="hover-click" ></div>
        </Col>
        <vr/>
        <Col xs={10} md={10}>
            <div className="bg-light fullheightcol">
              <hr />
              <div className="tattoo-primary">
              <TattooContainer tattooId={tattooId} className="Container" />
              </div>
            </div> 
        </Col>
        <Col xs={1} md={1} className="hover-click  border-left" onClick={handleRight}>
          <div className="hover-click"></div>
        </Col>
    </Row>
    </div>
  )
}

export default App;
