import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import React, { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const BannerForm = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => setWindowWidth(window.innerWidth);
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    // Define responsive width based on window size
    const containerWidth = windowWidth >= 1200 ? '30%' :
                           windowWidth >= 992 ? '60%' :
                           windowWidth >= 768 ? '70%' :
                           windowWidth >= 576 ? '70%' : '80%';
  return (
    <Container className="position-absolute top-50 m-5 translate-middle-y p-4 bg-white text-dark rounded shadow-lg" style={{ maxWidth: '600px', width: containerWidth, position: 'relative' }}>
      <h1 className="text-center mb-4">Find the Best Tyres</h1>

      <Tabs defaultActiveKey="Car Tyres" id="justify-tab-example" className="mb-4 justify-content-center" justify>
        <Tab eventKey="Car Tyres" title="Car Tyres">
        </Tab>
        <Tab eventKey="Bike Tyres" title="Bike Tyres">
        </Tab>
      </Tabs>

      <Form.Group controlId="formInquiryType" className="d-flex justify-content-around mb-4">
        <Form.Check
          type="radio"
          label="By Vehicle"
          name="inquiryType"
          id="vehicle"
          className="mx-2"
        />
        <Form.Check
          type="radio"
          label="By Size"
          name="inquiryType"
          id="size"
          className="mx-2"
        />
        <Form.Check
          type="radio"
          label="By Brand"
          name="inquiryType"
          id="brand"
          className="mx-2"
        />
      </Form.Group>

      <Row className="mb-4">
        <Col xs={12} sm={6} className="mb-3 mb-sm-0">
          <Form.Control as="select" name="selectVehicle">
            <option>Select Vehicle</option>
            <option>Audi S6</option>
            <option>BMW 1 Series</option>
            <option>BMW 2 Series</option>
            <option>BMW 3 Series</option>
            <option>BMW 3 Series GT</option>
            <option>Honda Accord</option>
          </Form.Control>
        </Col>
        <Col xs={12} sm={6}>
          <Form.Control as="select" name="selectVariant">
            <option>Select Variant</option>
            <option>Audi S6 Variant 1</option>
            <option>BMW 1 Series Variant 1</option>
            <option>BMW 2 Series Variant 1</option>
            <option>BMW 3 Series Variant 1</option>
            <option>BMW 3 Series GT Variant 1</option>
            <option>Honda Accord Variant 1</option>
          </Form.Control>
        </Col>
      </Row>

      <Button variant="dark" type="submit" className="w-100">
        Search
      </Button>
    </Container>
  );
}

export default BannerForm;
