

import React, {useState, useEffect} from 'react';
import { HashRouter, Switch, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Navbar, Nav, Form, FormControl,  Container, Row, Col, Grid, Modal, Button,
} from 'react-bootstrap';
import TattooContainer from "./tattooContainer.jsx"


const Home = () => {
  const [tattooId, setTattooId] = useState(1)
  const { id } = useParams();

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
    <div id="home">
      <Row>
        <Col xs={2} md={2} className="hover-click border-right" onClick={handleLeft} >
          <div className="hover-click" ></div>
        </Col>
        <Col xs={8} md={8}>
            <div className="bg-light fullheightcol">
              <hr />
              <div className="tattoo-primary">
              <TattooContainer tattooId={tattooId} className="Container" />
              </div>
            </div> 
        </Col>
        <Col xs={2} md={2} className="hover-click  border-left" onClick={handleRight}>
          <div className="hover-click"></div>
        </Col>
      </Row>
    </div>

  )
}

export default Home;
