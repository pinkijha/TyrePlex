import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Form,  Button}  from 'react-bootstrap';
import { BANNER1, BANNER2, BANNER3 } from '../../utils/Constant';
import BannerForm from './BannerForm';

const HomeTopBanner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

  return (
    
    <Carousel className='container ' activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src={BANNER1}></img>
        <BannerForm/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={BANNER2}></img>
        <BannerForm/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={BANNER3}></img>
        <BannerForm/>
      </Carousel.Item>
    </Carousel>
    
  )
}

export default HomeTopBanner
