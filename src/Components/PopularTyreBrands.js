import React from 'react';
import { APOLLO, AUDI, CEAT, GOODYEAR, KENDA, MICHELON } from '../../utils/Constant';

const PopularTyreBrands = () => {
  const imageStyle = {
    width: '230px', // Ensure the image takes up the full width of the column
    height: '230px', // Keep the aspect ratio
    borderRadius: '10px',
  };

  return (
    <div className="container py-4">
      <div className="row d-flex justify-content-center">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={CEAT} style={imageStyle} alt="CEAT" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={KENDA} style={imageStyle} alt="KENDA" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={APOLLO} style={imageStyle} alt="APOLLO" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={GOODYEAR} style={imageStyle} alt="GOODYEAR" />
        </div>
        {/* <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={MICHELON} style={imageStyle} alt="MICHELON" />
        </div> */}
      </div>
    </div>
  );
}

export default PopularTyreBrands;
