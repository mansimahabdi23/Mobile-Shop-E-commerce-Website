import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <div className='footer'>
        <h4 className='text-center'>
            All Right Reserved &copy; SaiMobiles
        </h4>
      <p className='text-center mt-3'>
        <Link to="/about">About</Link>
        |
        <Link to="/contact">Contact</Link>
        |
        <Link to="/policy">Privacy Policy</Link>
       <br></br>📞Phone: Sahil Gharat - +91 95279 06198
       <br></br> Instagram:<Link to="https://www.instagram.com/_saimobile_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">@_saimobile_</Link> 
      </p>

    </div>
  );
};

export default Footer