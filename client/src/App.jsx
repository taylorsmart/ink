import React, {useState, useEffect} from 'react';
import { HashRouter, Switch, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Navbar, Nav, Form, FormControl,  Container, Row, Col, Grid, Modal, Button,
} from 'react-bootstrap';
import Home from "./components/home.jsx"
import UploadForm from "./components/uploadForm.jsx"


const App = () => {
  return (
    <HashRouter>
      <Switch>
        <div id="home">
          <Row>
            <Col xs={12} md={12}>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#browse">The Tattory</Navbar.Brand>
                <Nav className="ml-auto">
                  <Nav.Link href="#browse">Explore</Nav.Link>
                  <Nav.Link href="#upload">Add Tattoo</Nav.Link>
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
            <Route path="/" component={Home} exact/>
            <Route path="/browse" component={Home} exact/>
            <Route path="/upload" component={UploadForm} exact/>
          </Row>
        </div>
      </Switch>
    </HashRouter>
  )
}

export default App;
