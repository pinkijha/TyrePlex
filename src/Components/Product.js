import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap';
import { AUDI, BALENO, MARUTI, THAR, TIAGO } from '../../utils/Constant';

const Product = () => {

  const brandStyle = {
    borderRadius: '10px',
    marginTop: '10px',
  };

  return (
    <div style={brandStyle} className='container shadow-lg'>
      <h2 className='mb-4'>Tyres For Popular Models</h2>
      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
            <Card className='h-100'>
              <Card.Img variant="top" src={THAR} />
              <Card.Body>
                <Card.Title>Mahindra Thar</Card.Title>
                <Card.Text>
                  Mahindra Thar Roxx Launched In India, Gets Rugged MRF Wanderer A/T Tyres
                </Card.Text>
                <Button variant="danger" className='w-100'>Know More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
            <Card className='h-100'>
              <Card.Img variant="top" src={BALENO} />
              <Card.Body>
                <Card.Title>Maruti Baleno</Card.Title>
                <Card.Text>
                  Maruti Baleno wears tyres of 195/55 R16 87V size
                </Card.Text>
                <Button variant="danger" className='w-100'>Know More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
            <Card className='h-100'>
              <Card.Img variant="top" src={TIAGO} />
              <Card.Body>
                <Card.Title>Tata Tiago</Card.Title>
                <Card.Text>
                  Tata Tiago wears tyres of 175/60 R15 81H size. 
                </Card.Text>
                <Button variant="danger" className='w-100'>Know More</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3} className='mb-4'>
            <Card className='h-100'>
              <Card.Img variant="top" src={MARUTI} />
              <Card.Body>
                <Card.Title>Maruti Wagon R</Card.Title>
                <Card.Text>
                  Maruti Wagon R wears tyres of 155/80 R13 size. 
                </Card.Text>
                <Button variant="danger" className='w-100'>Know More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Product;
