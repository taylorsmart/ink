import React, {useState, useEffect} from 'react';
import { HashRouter, Switch, Route, useParams, useHistory, Redirect } from 'react-router-dom';
import axios from 'axios';
import {
  Navbar, Container, Row, Col, Grid, Modal, Button, Form, InputGroup
} from 'react-bootstrap';
import TattooCard from './tattooCard.jsx'


const UploadForm = () => {
  const { id } = useParams();
  const [validated, setValidated] = useState(false);
  const history = useHistory();

  const formValues = Object.freeze({
    first_name: '',
    last_name: '',
    instagram: '',
    location: '',
    shop_name: '',
    story: '',
    hours: 1,
    image: '',
  });
  const [formData, setFormData] = useState(formValues);

  const handleChange = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    // event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    console.log('event.target.value')
    console.log(formData)
    alert('Successfully added Image')
    // return <Redirect to="/browse" />
  };

  return (
    <div className="w-100 ">
      <Row>
      <Col xs={2} md={2} lg={2} xl={2}  className="hover-click border-right">
        <div className="hover-click" ></div>
      </Col>
      <Col xs={8} md={8}  lg={8} xl={8} >
        <Form className="form" noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Artist First Name</Form.Label>
              <Form.Control
                required
                name="first_name"
                onChange={handleChange} 
                type="text"
                placeholder="First Name"
              />
              <Form.Control.Feedback>Muy Bien!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Artist Last name</Form.Label>
              <Form.Control
                required
                name="last_name"
                onChange={handleChange} 
                type="text"
                placeholder="Last Name"
              />
              <Form.Control.Feedback>Bueno!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustomUsername">
              <Form.Label>Instagram Handle</Form.Label>
              <InputGroup hasValidation>
                <InputGroup.Prepend>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control
                  type="text"
                  name="username"
                  onChange={handleChange} 
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please choose a username.
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Location</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="City" 
                name="location"
                onChange={handleChange} 
                required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label>Shop Name</Form.Label>
              <Form.Control 
                type="text"
                name="shop_name"
                onChange={handleChange}  
                placeholder="Shop Name" 
                required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid Shop Name.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} sm="3" md="3" lg="3" xl="3" controlId="validationCustom05">
              <Form.Label>Hours</Form.Label>
              <Form.Control 
                type="number" 
                name="shop_name"
                onChange={handleChange}  
                placeholder="Hours to Complete" 
                required />
              <Form.Control.Feedback type="invalid">
                Please provide an estimate on how long it took.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} sm="12" md="12" lg="12" xl="12" controlId="validationCustom06">
              <Form.Label>Tell your story</Form.Label>
              <Form.Control 
                type="textarea" 
                name="story"
                onChange={handleChange}  
                placeholder="This tattoo represents..." 
                required />
              <Form.Control.Feedback type="invalid">
                Please let us know your story.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
          <Form.Group as={Col} md="6" >
            <Form.Label>Upload Image</Form.Label>
            <input 
              name="file" 
              type="file"
              name="image"
              onChange={handleChange}  
              className="file-upload" data-cloudinary-field="image_id"
              data-form-data="{ 'transformation': {'crop':'limit','tags':'samples','width':3000,'height':2000}}"/>
          </Form.Group>  
          <Form.Group as={Col} md="6" >
            <Button type="submit">Submit form</Button>
          </Form.Group>
          </Form.Row>
        </Form>
      </Col>
      <Col xs={2} md={2}  lg={2} xl={2} className="hover-click border-right">
        <div className="hover-click" ></div>
      </Col>
      </Row>
    </div>
  );
}

export default UploadForm;
