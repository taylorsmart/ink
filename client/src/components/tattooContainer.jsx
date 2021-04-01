import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Navbar, Container, Row, Col, Grid, Modal, Button,
} from 'react-bootstrap';
import TattooCard from './tattooCard.jsx'


const TattooContainer = ({ tattooId }) => {



  return (
    <div className="justify-content-center p-5">
    <Col xs={12} md={12}>
      <TattooCard tattooId={tattooId} />
    </Col>
    </div>
  )
}

export default TattooContainer;
