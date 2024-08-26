import React from 'react';
import ReactDOM from 'react-dom/client'
import Header from  './Components/Header'
import Footer from './Components/Footer';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import HomeTopBanner from './Components/HomeTopBanner';
import Brands from './Components/Brands';
import PopularVehicleBrands from './Components/PopularVehicleBrands';
import Product from './Components/Product';
import CustomerFeedback from './Components/CustomerFeedback';

const App = () => {
  return (
    <div>
      <Header/>
      <HomeTopBanner />
      <Brands/>
      <PopularVehicleBrands/>
      <Product/>
      <CustomerFeedback/>
      <Footer/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)

export default App
