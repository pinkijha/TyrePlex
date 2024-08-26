import React from 'react';
import { FcLike } from "react-icons/fc";
import { FaCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <div
      className="footer-container d-flex shadow-lg p-3  justify-content-center flex-wrap"
      style={{ marginBottom: '20px' }} // Adjust this value as needed
    >
      <p className='px-1 m-0'>Created By</p>
      <span className='pl-1'><FcLike /></span>
      <a className='text-dark text-decoration-none px-1 m-0' href='https://www.linkedin.com/in/pinkijha/' target='_blank' rel="noreferrer">
        Pinki Jha
      </a>
      <span className="px-1"><FaCopyright /></span>
      <p className='px-1 m-0'>2024</p>
      <p className='px-1 m-0'>TyrePlex</p>
    </div>
  );
}

export default Footer;
