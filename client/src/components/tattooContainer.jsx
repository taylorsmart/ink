import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Navbar, Container, Row, Col, Grid, Modal, Button,
} from 'react-bootstrap';
import TattooCard from './tattooCard.jsx'


const TattooContainer = () => {



  return (
    <div>
      <TattooCard />
    </div>
  )
}

export default TattooContainer;
