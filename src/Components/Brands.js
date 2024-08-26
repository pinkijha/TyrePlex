import React from 'react';
import Container from 'react-bootstrap/Container';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import PopularTyreBrands from './PopularTyreBrands';

const Brands = () => {
    const brandStyle = {
        borderRadius: '10px',
        marginTop: '10px',
    }
  return (
        <Container className='shadow-lg' style={brandStyle}>
            <h3 className='m-4'>Popular Tyre Brands</h3>
            <Tabs defaultActiveKey="Car Tyres" id="justify-tab-example"
             className="mb-4 justify-content-center" justify>
        <Tab eventKey="Popular Car Tyre Brands" title="Car Tyres">
        </Tab>
        <Tab eventKey="Popular Bike Tyre Brands" title="Bike Tyres">
        </Tab>        
        <Tab eventKey="Popular Truck Tyre Brands" title="Bike Tyres">
        </Tab>
      </Tabs>
        <PopularTyreBrands/>
        </Container>
      
 
  )
}

export default Brands