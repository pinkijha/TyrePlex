import React from 'react'
import { AUDI, HONDA, MERCEDESE, SUZUKI, TATA } from '../../utils/Constant'

const PopularVehicleBrands = () => {
    const imageStyle = {
        width: '230px', // Ensure the image takes up the full width of the column
        height: '230px', // Keep the aspect ratio
        borderRadius: '10px',
      };
      const brandStyle = {
        borderRadius: '10px',
        marginTop: '10px',
    }
  return (
    <div className="container py-4 shadow-lg" style={brandStyle}>
      <h2 className=" mb-4">Popular Vehicle Brands</h2>
      <div className="row d-flex justify-content-center">
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={AUDI} style={imageStyle} alt="AUDI" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={HONDA} style={imageStyle} alt="HONDA" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={SUZUKI} style={imageStyle} alt="APOLLO" />
        </div>
        <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={MERCEDESE} style={imageStyle} alt="GOODYEAR" />
        </div>
        {/* <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-4 m-4">
          <img src={MICHELON} style={imageStyle} alt="MICHELON" />
        </div> */}
      </div>
    </div>

  )
}

export default PopularVehicleBrands
